import { useEffect, useState } from "react";
import Card from "../Card/Card";
import styled, { css } from "styled-components";
import IntroMovie from "../IntroMovie/IntroMovie";

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  height: 340px;
  overflow: hidden;
  transition: all 1s;
  background-color: black;

  & img {
    width: 120px;
  }

  .slider-child {
    height: auto;
    opacity: 0.3;
    background-color: transparent;
    border: none;
    padding: 5px;
    align-items: center;
  }

  .slider-child:hover {
    opacity: 1;
  }

  .slider-child > h5 {
    display: none;
  }

  .slider-child:nth-child(10) {
    transform: scale(1.4);
    opacity: 1;
    z-index: 100;
    padding: 5px;
    transition: all 0.5s;
  }

  .slider-child:nth-child(20) {
    display: none;
  }
`;

const Slider = ({ listMovie }) => {
  const [copyList, setCopyList] = useState([...listMovie]);
  const [movieSelected, setMovieSelected] = useState(copyList[9]);

  useEffect(() => {
    if (listMovie) {
      setCopyList([...listMovie]);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedMovies = [...copyList];
      const firstMovie = updatedMovies.shift();
      updatedMovies.push(firstMovie);
      setCopyList(updatedMovies);
    }, 6000);

    setMovieSelected(copyList[9]);
    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [copyList]);

  return (
    <>
      <IntroMovie info={movieSelected} />
      <SliderContainer>
        {copyList &&
          copyList.map((movie) => {
            return (
              <Card
                styledClass="slider-child"
                key={movie.id}
                poster_path={movie.poster_path}
              />
            );
          })}
      </SliderContainer>
    </>
  );
};

export default Slider;
