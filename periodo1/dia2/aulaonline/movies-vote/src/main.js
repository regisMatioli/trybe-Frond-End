import { getMoviesAndVotes } from './services/api';

getMoviesAndVotes().then((dados) => console.log(dados));
