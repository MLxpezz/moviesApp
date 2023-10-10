import styled from "styled-components";
import Categories from "./subcomponents/categories/Categories";
import { searchMovie } from "../../js/request";
import { useState } from "react";

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
`;

const CustomTextField = styled.input`
  background-color: rgba(31, 38, 46, 0.4);
`;

const Nav = () => {

    const [movie, setMovie] = useState('');

  const handleSearch = (e) => {
    setMovie(e);
  };

  const handleSubmit = async (e, movieName) => {
    e.preventDefault();
    try {
        const response = await searchMovie(movieName);
        console.log(response.results);
    } catch (error) {
        console.error('No se encontro la pelicula', error);
    }
  } 

  return (
    <StyledNav>
      <p>Logo</p>
      <form action="" onSubmit={
        (e) => {
            handleSubmit(e, movie);
        }
      }>
      <CustomTextField type="text" placeholder="Buscar..." onChange={(e) => {handleSearch(e.target.value)}}
      value={movie}/>
      <button type="submit">Buscar</button>
      </form>
      <div>
        <Categories cat={"peliculas"} />
        <Categories cat={"series"} />
      </div>
    </StyledNav>
  );
};

export default Nav;
