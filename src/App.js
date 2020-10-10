import React, { useState } from "react";
import Card from "./components/Card";
import { getPokemon } from "./api/pokeapi";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon(searchTerm)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" onChange={handleChange} />
        <button>Search</button>
      </form>
      {pokemon && <Card pokemon={pokemon} />}
    </div>
  );
};

export default App;
