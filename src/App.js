import React, { useState } from "react";
import { getPokemon } from "./api/pokeapi";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon(searchTerm);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default App;
