import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../Card/Card";

const PostMovie = styled.div`
  width: 100%;
  height: 70vh;
  background-image: url(${(props) => props.$img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 75%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Fondo rojo con opacidad del 50% */
    z-index: 1;
  }
`;

const DetailMovie = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  justify-content: center;
  background: transparent;
  backdrop-filter: blur(5px);
  color: #fff;
  z-index: 200;
  position: relative;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 20px;
  width: 30%;
  height: 300px;
`;

const IntroMovie = ({ info }) => {
  let imageUrl = "https://image.tmdb.org/t/p/w1280_and_h720_face/";

  const [infoMovie, setInfoMovie] = useState({});

  useEffect(() => {
    if (info) {
      setInfoMovie(info);
      console.log(infoMovie);
    }
  }, [info]);

  return (
    <PostMovie $img={infoMovie ? `${imageUrl}${infoMovie.backdrop_path}` : ""}>
      <DetailMovie>
        <Card poster_path={infoMovie.poster_path} />
        {infoMovie.title && (
          <MovieInfo>
            <h1>{infoMovie.title}</h1>
            <p>{infoMovie.release_date.substring(0, 4)}</p>
            <p>{infoMovie.overview}</p>
          </MovieInfo>
        )}
        
      </DetailMovie>
    </PostMovie>
  );
};

export default IntroMovie;
