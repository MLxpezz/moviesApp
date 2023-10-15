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
  const [list, setList] = useState({});
  const [categories, setCategories] = useState({});
  const data = useContext(contextData);

  useEffect(() => {
    (async () => {
      try {
        const response = await moviesList();
        const category = await moviesCategories();
        setList(response);
        setCategories(category);
        console.log(response, category, data.listMovies);
      } catch (error) {
        console.error("No se cargo la lista de peliculas", error);
      }
    })();
  }, []);

  if (data.listMovies.length) {
    return (
      <MoviesContainer>
        {data.listMovies.filter(posternulo => posternulo.poster_path !== null).map((movie) => {
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
    );
  } else {
    return (
      <MoviesContainer>
        {list.results &&
          list.results.map((movie) => {
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
    );
  }
};

export default MainMovies;
