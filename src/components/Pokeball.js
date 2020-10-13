import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * > *": {
      margin: theme.spacing(3),
      width: "115px",
      top: "20px",
    },
  },
}));

// pokeball inspired by https://codepen.io/marabesi/pen/ENxeGg
const Pokeball = ({
  handleSubmit,
  handleChange,
  height,
  allPokemon,
  pokemon,
}) => {
  const classes = useStyles();
  return (
    <div className="container">
      <div className="pokeball">
        <div className="pokeball__top">
          <div className="pokeball__button">
            {" "}
            <form className={classes.root} onSubmit={handleSubmit}>
              <Autocomplete
                options={allPokemon}
                freeSolo
                getOptionLabel={(option) => option.name || ""}
                disableClearable
                value={pokemon}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id="standard-basic"
                    type="text"
                    label="Pokemon"
                  />
                )}
              />
            </form>
          </div>
        </div>
        <div className="space" style={{ height: `${height}px` }}></div>
        <div className="pokeball__bottom"></div>
      </div>
    </div>
  );
};

export default Pokeball;
