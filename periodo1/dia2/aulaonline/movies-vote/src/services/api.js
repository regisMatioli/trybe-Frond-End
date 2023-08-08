const apiBase = 'https://fake-api-p03k.onrender.com';

export function getMovies() {
  const movies = fetch(`${apiBase}/movies`)
    .then((res) => res.json()).then((data) => data);

  return movies;
}

export function getVotes() {
  return fetch(`${apiBase}/votes`).then((res) => res.json()).then((data) => data);
}

export function getMoviesAndVotes() {
  return Promise.all([getMovies(), getVotes()]);
}
