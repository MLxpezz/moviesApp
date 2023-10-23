import { useEffect, useState } from "react";
import Card from "../Card/Card";
import styled from "styled-components";

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px auto;
  gap: 40px;
  width: 100%;
  overflow: hidden;
  transition: all 1s;

  .slider-child:nth-child(10){
    transform: scale(1.1);
    box-shadow: 1px 1px 8px 1px black;
    z-index: 100;
    padding: 5px;
    transition: all 0.5s;
    position: absolute;
  }

  .slider-child:nth-child(9){
    margin-right: 110px;
  }

  .slider-child:nth-child(11){
    margin-left: 110px;
  }

  .slider-child:nth-child(20) {
    display: none;
  }
`;

const Slider = ({ listMovie }) => {
  const [copyList, setCopyList] = useState([]);

  useEffect(() => {
    if (listMovie && listMovie.length > 0) {
      const filteredList = listMovie.filter(movie => movie && movie.title);

      setCopyList([...filteredList]);
    }
  }, [listMovie]);

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
      {copyList && copyList
          .map((movie) => {
            return (
              <Card
              $tamanio='50px'
                styledClass = 'slider-child'
                key={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
              />
            );
          })}
    </SliderContainer>
  );
};

export default Slider;
