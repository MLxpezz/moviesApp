import Nav from "./components/nav/Nav";
import MainMovies from "./components/mainMovies/MainMovies";
import Context from "./components/Context/Context";

function App() {
  return (
    <Context>
      <Nav></Nav>
      <MainMovies />
    </Context>
  )
}

export default App
