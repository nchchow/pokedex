import axios from "axios";

const endpoint = (pokemon) => `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

const getPokemon = (pokemon) =>
  axios.get(endpoint(pokemon)).then(({ data }) => data);

const getAllPokemon = () =>
  axios.get(endpoint(`?limit=1050`)).then(({ data }) => data.results);

export { getPokemon, getAllPokemon };
