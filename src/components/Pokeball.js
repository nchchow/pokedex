import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(4),
      width: "85px",
      fontSize: "12px",
      top: "5px",
    },
  },
}));

const Pokeball = ({ handleSubmit, handleChange }) => {
  const classes = useStyles();
  return (
    <div className="container">
      <div className="pokeball">
        <div className="pokeball__top">
          <div className="pokeball__button">
            {" "}
            <form className={classes.root} onSubmit={handleSubmit}>
              <TextField
                id="standard-basic"
                type="text"
                label="Pokemon"
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
        <div className="space"></div>
        <div className="pokeball__bottom"></div>
      </div>
    </div>
  );
};

export default Pokeball;
