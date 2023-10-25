import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    width: 155px;
    height: 290px;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    padding: 2px;
    gap: 5px;
    text-align: start;

    &:hover img {
      transform: scale(1.1);
      opacity: 0.5;
      cursor: pointer;
      transition: all 1s;
    }
`;

const MovieTitle = styled.h5`
  font-size: 15px;
  text-align: start;
  width: 100%;
  color: #0D7F8C;
`;

const Card = ({title, poster_path, styledClass }) => {
  let imageUrl = "https://image.tmdb.org/t/p/w150_and_h225_face/";

  return (
    <CardContainer className={styledClass}>
      <img src={`${imageUrl}${poster_path}`} alt={title} />
      <MovieTitle>{title}</MovieTitle>
    </CardContainer>
  );
};

export default Card;
