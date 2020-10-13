import React from "react";
import Stats from "./Stats";
import Types from "./Types";
import Abilities from "./Abilities";
import { toCapitalCase } from "../util/typography";

const CardContent = ({ pokemon }) => {
  return (
    <>
      <img
        className="card__artwork"
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <div className="card__info-wrapper">
        <h3 className="card__name">{toCapitalCase(pokemon.name)}</h3>
        <p>
          <span className="card__label">Height: </span>
          {pokemon.height * 10} cm
        </p>
        <p>
          <span className="card__label">Weight:</span> {pokemon.weight / 10} kg
        </p>
        <Types types={pokemon.types} />
        <Abilities abilities={pokemon.abilities} />
        <Stats stats={pokemon.stats} />
      </div>
    </>
  );
};

export default CardContent;
