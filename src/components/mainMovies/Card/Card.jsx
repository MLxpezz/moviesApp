import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;



const Card = ({ title, poster_path, categories }) => {
  let imageUrl = "https://image.tmdb.org/t/p/w220_and_h330_face/";

  return (
    <CardContainer>
      <h4>{title}</h4>
      <img src={`${imageUrl}${poster_path}`} alt={title} />
      <span>
        {categories.map(cat => {
            return <p key={cat.id}>{cat.name}</p>
        })}
      </span>
    </CardContainer>
  );
};

export default Card;
