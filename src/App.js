import React, { useState } from "react";
import Card from "./components/Card";
import Pokeball from "./components/Pokeball";
import { getPokemon } from "./api/pokeapi";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [height, setHeight] = useState(0);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    if (!searchTerm) {
      window.history.back();
    } else {
      getPokemon(searchTerm)
        .then((pokemon) => {
          setHeight(100);
          // delay one second for animation
          setTimeout(() => {
            setPokemon(pokemon);
          }, 1000);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleClose = (e) => {
    setHeight(0);
    setPokemon(null);
  };

  return (
    <div className="App">
      <Pokeball
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        height={height}
      />
      {pokemon && <Card pokemon={pokemon} handleClose={handleClose} />}
    </div>
  );
};

export default App;
