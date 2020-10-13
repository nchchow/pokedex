import React from "react";
import { toCapitalCase } from "../util/typography";

const Abilities = ({ abilities }) => (
  <>
    <p>Abilities:</p>
    {abilities.map((ability, i) => (
      <p key={i}>{toCapitalCase(ability.ability.name)}</p>
    ))}
  </>
);

export default Abilities;
