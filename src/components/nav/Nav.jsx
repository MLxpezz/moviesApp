import styled from "styled-components";
import Categories from "./subcomponents/categories/Categories";
import { searchMovie } from "../../js/request";
import { useState, useContext } from "react";
import { contextData } from "../Context/Context";

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  margin-bottom: 30px;
  background-color: #253140;
`;

const CustomTextField = styled.input`
  background-color: rgba(31, 38, 46, 0.4);
`;

const Nav = () => {

    const [movie, setMovie] = useState('');
    const data = useContext(contextData);

  const handleSearch = (e) => {
    setMovie(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await searchMovie(movie);
        data.setListMovies(response.results);
        console.log(data.listMovies);
    } catch (error) {
        console.error('No se encontro la pelicula', error);
    }
  } 

  return (
    <StyledNav>
      <p>Logo</p>
      <form action="" onSubmit={
        (e) => {
            handleSubmit(e);
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
