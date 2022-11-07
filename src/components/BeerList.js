import React from "react";
import "../styles/beerlist.css";

import Beer from "./Beer";

const BeerList = ({beers}) => {
  return (
    <div className="beerlist">
      Beerlist: Number of beers to display: {beers.length}
      {beers.map(beer => {
        return <Beer key={beer.id} beer={beer} />
      })}
    </div>
  );
};

export default BeerList;
