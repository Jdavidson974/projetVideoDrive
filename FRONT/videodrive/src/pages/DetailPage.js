import axios from "axios";
import React, { useEffect, useState } from "react";

const DetailPage = () => {
  const fetchDetail = () => {
    axios
      .get("http://localhost:3000/produits/" + "prod_NsfOws6OtkClCk")
      .then((detailFilm) => {
        console.log(detailFilm);
      });
  };
  useEffect(fetchDetail, []);
  return <div>toto</div>;
};

export default DetailPage;
