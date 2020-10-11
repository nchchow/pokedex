import React, { useState } from "react";
import Card from "./components/Card";
import Pokeball from "./components/Pokeball";
import { getPokemon } from "./api/pokeapi";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      window.history.back();
    } else {
      getPokemon(searchTerm)
        .then(setPokemon)
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="App">
      <Pokeball handleSubmit={handleSubmit} handleChange={handleChange} />

      {pokemon && <Card pokemon={pokemon} />}
    </div>
  );
};

export default App;
