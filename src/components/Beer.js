import React, {useContext} from "react";
import "../styles/beer.css";

import { ThemeContext } from "../contexts/ThemeContext";

const Beer = ({beer}) => {
  const {darkTheme} = useContext(ThemeContext);
  return (
    <div className="beer">
      <div>{darkTheme ? "dark theme!" : "light theme!"}</div>
      <div>Name: {beer.name}</div>
      <div>Name: {beer.description}</div>
      <div className="beer__image-wrap">
        <img className="beer__image" alt={beer.id} src={beer.image_url} />
      </div>
    </div>
  );
};

export default Beer;
