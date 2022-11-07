import React from "react";
import "../styles/beer.css";

const Beer = ({beer}) => {
  return (
    <div className="beer">
      <div>Name: {beer.name}</div>
      <div>Name: {beer.description}</div>
      <div className="beer__image-wrap">
        <img className="beer__image" alt={beer.id} src={beer.image_url} />
      </div>
    </div>
  );
};

export default Beer;
