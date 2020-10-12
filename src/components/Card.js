import React from "react";
import Stats from "./Stats";

const Card = ({ pokemon }) => {
  const Types = ({ types }) => (
    <>
      {types.map((type, i) => (
        <p key={i}>{type.type.name}</p>
      ))}
    </>
  );

  const Abilities = ({ abilities }) => (
    <>
      {abilities.map((ability, i) => (
        <p key={i}>{ability.ability.name}</p>
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
          <h3>{pokemon.name}</h3>
          <p>{pokemon.height}</p>
          <p>{pokemon.weight}</p>
          <Types types={pokemon.types} />
          <Abilities abilities={pokemon.abilities} />
          <Stats stats={pokemon.stats} />
        </div>
      </div>
    </div>
  );
};

export default Card;
