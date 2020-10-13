import React from "react";
import Stats from "./Stats";
import Types from "./Types";
import Abilities from "./Abilities";
import { toCapitalCase } from "../util/typography";
import { typeColors } from "../util/colors";

const Card = ({ pokemon }) => {
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
        <img
          className="card__artwork"
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
        <div className="card__info-wrapper">
          <h3>{toCapitalCase(pokemon.name)}</h3>
          <p>Height: {pokemon.height * 10} cm</p>
          <p>Weight: {pokemon.weight / 10} kg</p>
          <Types types={pokemon.types} />
          <Abilities abilities={pokemon.abilities} />
          <Stats stats={pokemon.stats} />
        </div>
        <div
          className="card__shadow card__shadow--bottom"
          style={{ boxShadow: `12px 12px 24px 6px ${typeColors[types[1]]}` }}
        ></div>
      </div>
    </div>
  );
};

export default Card;
