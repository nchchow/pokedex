import axios from "axios";

const endpoint = (pokemon) => `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

const getPokemon = (pokemon) =>
  axios.get(endpoint(pokemon)).then(({ data }) => data);

export { getPokemon };
