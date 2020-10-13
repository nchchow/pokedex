import React from "react";
import { toCapitalCase } from "../util/typography";

const Types = ({ types }) => {
  const type = types.map((type) => toCapitalCase(type.type.name)).join("/");
  return <p>Type: {type}</p>;
};

export default Types;
