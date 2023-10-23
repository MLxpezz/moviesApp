import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    width: ${(props) => props.tamanio || '150px'};
    height: 350px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    border: 3px solid #000;
    padding: 2px;
    background-color: #ccc;
`;

const CategoriesContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  flex-wrap: wrap;
  width: 100%;
`;

const MovieTitle = styled.h5`
  font-size: 16px;
  margin: auto;
  padding: 5px;
  word-wrap: break-word;
`;

const Card = ({ title, poster_path, categories, styledClass }) => {
  let imageUrl = "https://image.tmdb.org/t/p/w150_and_h225_face/";

  return (
    <CardContainer className={styledClass}>
      <MovieTitle>{title}</MovieTitle>
      <img src={`${imageUrl}${poster_path}`} alt={title} />
      <CategoriesContainer>
        {categories && categories.map((cat, index) => {
            if(index < 2) {
              return <p key={cat.id}>{cat.name}</p>
            }
        })}
      </CategoriesContainer>
    </CardContainer>
  );
};

export default Card;
