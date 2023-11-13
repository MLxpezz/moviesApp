const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDhkN2U2YmViMjQ0Y2U0YTkzN2U2MDk0ZTJlMTQ2NCIsInN1YiI6IjY1MWQ4NzllMDcyMTY2MDBjNTY4ZWU3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSnOu_LlN7omGfvHeYV17D7q53HpdgJx9DRPM7RHd_U",
  },
};

export const moviesList = async (page) => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=es-MX&page=${page}`,
      options
    );
    return data.json();
  } catch (error) {
    console.error("No se encontro la lista", error);
  }
};

export const moviesTopRated = async () => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=es-MX&page=1`,
      options
    );
    return data.json();
  } catch (error) {
    console.error("No se encontro la lista", error);
  }
};

export const moviesNowPlaying = async () => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=es-MX&page=1`,
      options
    );
    return data.json();
  } catch (error) {
    console.error("No se encontro la lista", error);
  }
};

export const moviesUpComing = async () => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=es-MX&page=1`,
      options
    );
    return data.json();
  } catch (error) {
    console.error("No se encontro la lista", error);
  }
};

export const seriesList = async () => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/popular?language=es-MX&page=1`,
      options
    );
    return data.json();
  } catch (error) {
    console.error("No se encontro la lista", error);
  }
};

export const moviesCategories = async () => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=es`,
      options
    );
    return data.json();
  } catch (error) {
    console.error("No se encontro la categoria", error);
  }
};

export const seriesCategories = async () => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/tv/list?language=es`,
      options
    );
    return data.json();
  } catch (error) {
    console.error("No se encontro la categoria de la serie", error);
  }
};

export const searchMovie = async (movieName) => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=es-MX&page=1`,
      options
    );
    return data.json();
  } catch (error) {
    console.error("No se encontro el titulo", error);
  }
};

export const videoMovie = async (id) => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=es-MX`,
      options
    );
    return data.json();
  } catch (error) {
    console.error("No se encontro el video.", error);
  }
};
