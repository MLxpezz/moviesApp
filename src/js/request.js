const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDhkN2U2YmViMjQ0Y2U0YTkzN2U2MDk0ZTJlMTQ2NCIsInN1YiI6IjY1MWQ4NzllMDcyMTY2MDBjNTY4ZWU3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSnOu_LlN7omGfvHeYV17D7q53HpdgJx9DRPM7RHd_U'
    }
  };

export const moviesList = async () => {
    return await fetch(`https://api.themoviedb.org/3/movie/157336?api_key=348d7e6beb244ce4a937e6094e2e1464&append_to_response=videos,images`)
    .then(response => response.json())
    .then(response => console.log(response))
}

export const moviesCategories = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=es`, options);
    return data.json();
}

export const seriesCategories = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/genre/tv/list?language=es`, options);
    return data.json();
}