import React, { useEffect, useState } from "react";
import "../styles/app.css";
import axios from "axios";

import BeerList from "./BeerList";

const App = () => {
  const [beers, setBeers] = useState([]);

  const handleClick = (event) => {
    let query = "https://api.punkapi.com/v2/beers/";
    if (event.target.value !== "all") {
      query += event.target.value;
    }

    axios
      .get(query)
      .then((res) => {
        console.log(res.data);
        setBeers(res.data);
      })
      .catch((err) => console.log("Server error: " + err));
  };

  useEffect(() => {
    console.log("Beers updated");
  }, [beers]);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers/random")
      .then((res) => {
        console.log(res.data);
        setBeers(res.data);
      })
      .catch((err) => console.log("Server error: " + err));

    return () => {
      console.log("component destroyed");
    };
  }, []);

  return (
    <div className="app">
      App: {beers[0]?.name}
      {beers && <BeerList beers={beers} />}
      <button value="all" onClick={handleClick}>
        Get all the beers
      </button>
      <button value="random" onClick={handleClick}>
        Get a random beer
      </button>
    </div>
  );
};

export default App;
