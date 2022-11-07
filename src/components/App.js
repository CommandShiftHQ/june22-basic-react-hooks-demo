import React, { useEffect, useState } from "react";
import "../styles/app.css";
import axios from "axios";

import BeerList from "./BeerList";

const App = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers/random")
      .then((res) => {
        console.log(res.data);
        setBeers(res.data)
      })
      .catch((err) => console.log("Server error: " + err));

    return(()=> {
      console.log("component destroyed")
    })
  }, []);

  return (
    <div className="app">
      App: {beers[0]?.name}
      {beers && <BeerList beers={beers} />}
    </div>
  );
}

export default App;
