import { moviesCategories, seriesCategories } from "../../../../js/request";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledOption = styled.option`
    display: none;
`;

const Categories = ({cat}) => {
  const [category, setCategory] = useState([]);

  const categoryFunction = {
    'peliculas': moviesCategories,
    'series': seriesCategories,
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

  return (
    <select name={cat} id={cat}>
        <StyledOption value={cat}>{cat}</StyledOption>
      {category.map((categories) => {
        return (
          <option key={categories.id} value={categories.name}>
            {categories.name}
          </option>
        );
      })}
    </select>
  );
};

export default Categories;
