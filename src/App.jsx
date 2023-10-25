import Nav from "./components/nav/Nav";
import MainMovies from "./components/mainMovies/MainMovies";
import Context from "./components/Context/Context";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0E1826;
  }

`;

function App() {
  return (
    <Context>
      <GlobalStyle />
      <Nav></Nav>
      <MainMovies />
    </Context>
  );
}

export default App;
