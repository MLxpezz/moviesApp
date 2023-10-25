import { useEffect, useState } from "react";
import Card from "../Card/Card";
import styled, {css} from "styled-components";

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px auto;
  gap: 40px;
  width: 100%;
  height: 500px;
  overflow: hidden;
  transition: all 1s;

  .slider-child {
    height: auto;
    background-color: #000;
    border: 4px solid blueviolet;
    padding: 5px;
    align-items: center;
  }

  .slider-child > h5 {
    display: none;
  }

  .slider-child:nth-child(10) {
    transform: scale(1.1);
    box-shadow: 1px 1px 8px 1px black;
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

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [copyList]);

  return (
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
  );
};

export default Slider;
