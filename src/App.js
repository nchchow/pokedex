import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Pokeball from "./components/Pokeball";
import { getPokemon, getAllPokemon } from "./api/pokeapi";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [allPokemon, setAllPokemon] = useState([]);
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

  useEffect(() => {
    getAllPokemon().then((all) =>
      setAllPokemon(
        all.map((pokemon) => {
          return {
            name: pokemon.name,
          };
        })
      )
    );
  }, []);

  return (
    <div className="App">
      <Pokeball
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        height={height}
        allPokemon={allPokemon}
      />
      {pokemon && <Card pokemon={pokemon} handleClose={handleClose} />}
    </div>
  );
};

export default App;
