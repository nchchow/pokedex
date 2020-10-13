import React from "react";
import Stats from "./Stats";
import { toCapitalCase } from "../util/typography";

const Card = ({ pokemon }) => {
  const Types = ({ types }) => {
    const type = types.map((type) => toCapitalCase(type.type.name)).join("/");
    return <p>Type: {type}</p>;
  };

  const Abilities = ({ abilities }) => (
    <>
      <p>Abilities:</p>
      {abilities.map((ability, i) => (
        <p key={i}>{toCapitalCase(ability.ability.name)}</p>
      ))}
    </>
  );

  return (
    <div className="container--absolute">
      <div className="card">
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
      </div>
    </div>
  );
};

export default Card;
