import {
  moviesCategories,
  seriesCategories,
  moviesList,
  seriesList
} from "../../../../js/request";
import { useState, useEffect, useContext } from "react";
import { contextData } from "../../../Context/Context";
import styled from "styled-components";

const StyledOption = styled.option`
  display: none;
`;

const Categories = ({ cat }) => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const data = useContext(contextData);

  const categoryFunction = {
    peliculas: moviesCategories,
    series: seriesCategories,
  };

  const searchForCategory = {
    peliculas: moviesList,
    series: seriesList,
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await categoryFunction[cat]();
        setCategory(response.genres);
      } catch (error) {
        console.error("Las categorias no se cargaron", error);
      }
    })();
  }, []);

  useEffect((e) => {
    if (selectedCategory) {
      const handleCategory = async () => {
        try {
          const categories = await searchForCategory[cat]();
          const filterMovies = categories.results.filter(
            cat => cat.genre_ids.includes(selectedCategory)
          );
          data.setListMovies(filterMovies);
        } catch (error) {
          console.error("Error al filtrar películas", error);
        }
      };

      handleCategory();
    }
  }, [selectedCategory]);

  return (
    <select
      name={cat}
      id={cat}
      onChange={(e) => setSelectedCategory(parseInt(e.target.value))}
    >
      <StyledOption>{cat}</StyledOption>
      {category.map((categories) => (
          <option key={categories.id} value={categories.id}>
            {categories.name}
          </option>
      ))}
    </select>
  );
};

export default Categories;
