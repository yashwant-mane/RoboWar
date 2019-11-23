import React from "react";
import "tachyons";

const Card = ({name, email}) => {
  return (
    <div className="bg-light-red dib br3 pa3 ma3 grow bw2 shadow-5 tc">
      <img alt="robo" src={`https://robohash.org/${name}?size=200x200` }/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
