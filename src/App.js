import React, { useState } from "react";

import Player from "./Player.js";

export default function App() {

  const [players, setPlayers] = useState([
    {

      name: "LaMarcus Aldridge",

      yearsPro: 14,

      position: "Center-Forward"

    },

    {

      name: "Marco Belinelli",

      yearsPro: 13,

      position: "Guard"

    },

    {

      name: "DeMar DeRozan",

      yearsPro: 11,

      position: "Guard-Forward"

    }
  ]);

  const playersList = players.map(({ name, yearsPro, position }) => (

    <li key={name.replace(" ", "").toLowerCase()}>

      <Player

        allPlayers={players}

        removePlayer={setPlayers}

        name={name}

        yearsPro={yearsPro}

        position={position}

      />
    </li>
  ));
  return (
    <div className="App">
<h1>Click on any name to remove..!</h1>
      <h2>Team Members ({players.length})</h2>
      <ul className="List">{playersList}</ul>
      
    </div>
  );
}

