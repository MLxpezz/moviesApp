import Card from "./subcomponents/Card/Card";
import { moviesUpComing, moviesNowPlaying, moviesCategories, moviesTopRated } from "../../js/request";
import { useState, useEffect, useContext } from "react";
import { contextData } from "../Context/Context";
import styled from "styled-components";

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

const TopRatedTitle = styled.h1`
  width: 100%;
  font-size: 30px;
  color: #0A5159;
  margin-top: 20px;
`

const MainMovies = () => {
  const [list, setList] = useState([]);
  const [listNowPlaying, setListNowPlaying] = useState([]);
  const [listUpComing, setListUpComing] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(6);
  const data = useContext(contextData);

  useEffect(() => {
    if (data.listMovies.length > 1) {
      setList(data.listMovies);
    } else {
      (async () => {
        try {
          const response = await moviesTopRated();
          const resNowPlaying = await moviesNowPlaying();
          const resUpComing = await moviesUpComing();

          setList(response.results);
          setListUpComing(resUpComing.results);
          setListNowPlaying(resNowPlaying.results);
        } catch (error) {
          console.error("No se cargo la lista de peliculas", error);
        }
      })();
    }
  }, [currentPage, data.listMovies]);

  return (
    <MainContainer>
      <MoviesContainer>
        <TopRatedTitle>Mejor valoradas</TopRatedTitle>
        {list
          .slice(0, limitPage)
          .map((movie) => {
            return (
              <Card
                key={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
              />
            );
          })}
          <TopRatedTitle>Viendo ahora</TopRatedTitle>
          {listNowPlaying.slice(0, limitPage).map((movie) => {
            return (
              <Card key={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    />
            );
          })}
          <TopRatedTitle>Proximamente</TopRatedTitle>
          {listUpComing.slice(0, limitPage).map((movie) => {
            return (
              <Card key={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    />
            );
          })}
      </MoviesContainer>
    </MainContainer>
  );
};

export default MainMovies;
