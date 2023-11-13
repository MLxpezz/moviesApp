import styled from "styled-components";
import Categories from "./subcomponents/categories/Categories";
import { searchMovie } from "../../js/request";
import { useState, useContext } from "react";
import { contextData } from "../Context/Context";
import TextField from "@mui/material/TextField";
import { BsSearch } from "react-icons/bs";

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  height: auto;
  background-color: transparent;
  position: absolute;
  z-index: 2000;
  padding-top: 20px;
`;

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
    boxSizing: 'border-box',
    padding: '14px 10px',
    width: '250px',
    color: '#ccc',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
});

const SubmitButton = styled.button`
  position: absolute;
  right: 0;
  background-color: transparent;
  border: none;
  margin-right: 10px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;
`;

const Nav = () => {
  const [movie, setMovie] = useState("");
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
      console.error("No se encontro la pelicula", error);
    }
  };

  return (
    <StyledNav>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <CategoriesContainer>
          <CustomTextField
            type="text"
            placeholder="Buscar..."
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            value={movie}
          />
          <SubmitButton type="submit">
            <BsSearch style={{color:'#ccc'}}/>
          </SubmitButton>
        </CategoriesContainer>
      </form>
      <CategoriesContainer>
        <Categories cat={"peliculas"} />
        <Categories cat={"series"} />
      </CategoriesContainer>
    </StyledNav>
  );
};

export default Nav;
