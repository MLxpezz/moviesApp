import Card from "./Card/Card";
import { moviesList, moviesCategories } from "../../js/request";
import { useState, useEffect, useContext } from "react";
import { contextData } from "../Context/Context";
import styled from "styled-components";

const MoviesContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

const MainMovies = () => {
  const [list, setList] = useState([]);
  const [categories, setCategories] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(18);
  const data = useContext(contextData);

  useEffect(() => {
    if (data.listMovies.length > 1) {
      setList(data.listMovies);
    } else {
      (async () => {
        try {
          const response = await moviesList(currentPage);
          const category = await moviesCategories();

          const uniqueMovies = response.results.filter(
            (movie, index, self) =>
              index === self.findIndex((m) => m.id === movie.id)
          );

          setList(list.concat(uniqueMovies));
          setCategories(category);
          console.log(list);
        } catch (error) {
          console.error("No se cargo la lista de peliculas", error);
        }
      })();
    }
  }, [currentPage, data.listMovies]);

  const loadMovies = () => {
    setCurrentPage(currentPage + 1);
    setLimitPage(limitPage + 18);
  };

  return (
    <MoviesContainer>
      {list
        .filter(
          (movie, index, self) =>
            index === self.findIndex((m) => m.id === movie.id) && movie.poster_path !== null
        )
        .slice(0, limitPage) // Limita la cantidad de películas a mostrar según el estado limitPage
        .map((movie) => {
          const movieCategories = categories.genres.filter((cat) =>
            movie.genre_ids.some((id) => id === cat.id)
          );
          return (
            <Card
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              categories={movieCategories}
            />
          );
        })}
      {
        <button
          onClick={() => {
            loadMovies();
          }}
        >
          Cargar más películas
        </button>
      }
    </MoviesContainer>
  );
};

export default MainMovies;
