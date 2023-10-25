import Card from "./subcomponents/Card/Card";
import { moviesList, moviesCategories } from "../../js/request";
import { useState, useEffect, useContext } from "react";
import { contextData } from "../Context/Context";
import styled from "styled-components";
import Slider from "./subcomponents/Slider/Slider";

const MainContainer = styled.main`
  background-color: #061A26;
`

const MoviesContainer = styled.section`
  width: 60%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
  gap: 20px;
`;

const LoadButton = styled.button`
  display: flex;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 30px;

  padding: 9px;
  background-color: transparent;
  color: #41D9D9;
  font-weight: 700;
  border: 1px solid #41D9D9;
  border-radius: 5px;

  &:hover {
    background-color: #41D9D9;
    color: #0A5159;
    border: 2px solid #0A5159;
    cursor: pointer;
    transition: all 1s;
  }
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
    <MainContainer>
      {list.length > 0 && <Slider listMovie={list} />}
      <MoviesContainer>
        {list
          .filter(
            (movie, index, self) =>
              index === self.findIndex((m) => m.id === movie.id) &&
              movie.poster_path !== null
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
      </MoviesContainer>
      {
        <LoadButton
          onClick={() => {
            loadMovies();
          }}
        >
          Cargar más películas
        </LoadButton>
      }
    </MainContainer>
  );
};

export default MainMovies;
