import axios from "axios";

const endpoint = (pokemon) => `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

const getPokemon = async (pokemon) => {
  const { data } = await axios.get(endpoint(pokemon));
  console.log(data);
};

export { getPokemon };
