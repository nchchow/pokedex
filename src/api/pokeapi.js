import axios from "axios";

const endpoint = (pokemon) => `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

const getPokemon = (pokemon) => axios.get(endpoint(pokemon));

export { getPokemon };
