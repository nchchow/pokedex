import React from "react";

const MiniPokeball = ({ handleClose }) => {
  return (
    <div className="container--mini" onClick={handleClose}>
      <div className="pokeball pokeball--mini">
        <div className="pokeball__top pokeball__top--mini">
          <div className="pokeball__button pokeball__button--mini"></div>
        </div>
        <div className="pokeball__bottom pokeball__bottom--mini"></div>
      </div>
    </div>
  );
};

export default MiniPokeball;
