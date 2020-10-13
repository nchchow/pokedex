import React from "react";
import CardContent from "./CardContent";
import MiniPokeball from "./MiniPokeball";
import { typeColors } from "../util/colors";

const Card = ({ pokemon, handleClose }) => {
  // set types to determine box shadow colors
  const types = pokemon.types.map((type) => type.type.name);
  if (types.length === 1) types[1] = types[0];

  return (
    <div className="container--absolute">
      <div className="card">
        <div
          className="card__shadow card__shadow--top"
          style={{ boxShadow: `-12px -12px 24px 6px ${typeColors[types[0]]}` }}
        ></div>
        <CardContent pokemon={pokemon} />
        <MiniPokeball handleClose={handleClose} />
        <div
          className="card__shadow card__shadow--bottom"
          style={{ boxShadow: `12px 12px 24px 6px ${typeColors[types[1]]}` }}
        ></div>
      </div>
    </div>
  );
};

export default Card;
