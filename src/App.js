import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "./components/Card";
import { getPokemon } from "./api/pokeapi";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "50vw",
    },
  },
}));

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const classes = useStyles();

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
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          type="text"
          label="Search Pokemon"
          onChange={handleChange}
        />
      </form>
      {pokemon && <Card pokemon={pokemon} />}
    </div>
  );
};

export default App;
