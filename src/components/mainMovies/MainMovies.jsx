import Card from "./Card/Card";
import { moviesList, moviesCategories } from "../../js/request";
import { useState, useEffect } from "react";

const MainMovies = () => {
  const [list, setList] = useState({});
  const [categories, setCategories] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await moviesList();
        const category = await moviesCategories();
        setList(response);
        setCategories(category);
        console.log(response, category);
      } catch (error) {
        console.error("No se cargo la lista de peliculas", error);
      }
    })();
  }, []);

  return (
    <>
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
    </>
  );
};

export default MainMovies;
