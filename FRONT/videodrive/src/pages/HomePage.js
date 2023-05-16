import Card from "../components/Card";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  let [games, setGames] = useState([]);
  const fetchAllGame = () => {
    axios.get("http://localhost:3000/produits").then(
      games => {
        if (games) {
          setGames(games.data.data);
        } else {
          setGames([]);
        }
      }
    );
  }
  useEffect(fetchAllGame, []);
  return (
    <div className="card-container">
      <h2 className="w-100 my-4">Jeux tendances</h2>
      {games.map((data, index) => <Card key={index} data={data} />)}
    </div>
  );
};

export default HomePage;
