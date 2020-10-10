import React from "react";

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

  const Stats = ({ stats }) => (
    <>
      {stats.map((stat, i) => (
        <p key={i}>
          {stat.stat.name}: {stat.base_stat}
        </p>
      ))}
    </>
  );

  return (
    <div>
      <img src="" alt="" />
      <p>{pokemon.name}</p>
      <p>{pokemon.height}</p>
      <p>{pokemon.weight}</p>
      <Types types={pokemon.types} />
      <Abilities abilities={pokemon.abilities} />
      <Stats stats={pokemon.stats} />
    </div>
  );
};

export default Card;
