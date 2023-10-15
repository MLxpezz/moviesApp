import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    overflow-wrap: break-word;
    width: 220px;
    height: 450px;
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
  width: 80%;
`;

const MovieTitle = styled.h5`
  font-size: 16px;
  margin: auto;
  padding: 5px;
  word-wrap: break-word;
`;

const Card = ({ title, poster_path, categories }) => {
  let imageUrl = "https://image.tmdb.org/t/p/w220_and_h330_face/";

  return (
    <CardContainer>
      <MovieTitle>{title}</MovieTitle>
      <img src={`${imageUrl}${poster_path}`} alt={title} />
      <CategoriesContainer>
        {categories.map((cat, index) => {
            if(index < 2) {
              return <p key={cat.id}>{cat.name}</p>
            }
        })}
      </CategoriesContainer>
    </CardContainer>
  );
};

export default Card;
