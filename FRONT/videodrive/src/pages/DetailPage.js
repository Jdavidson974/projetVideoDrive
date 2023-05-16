import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
const DetailPage = () => {
  const { id } = useParams();
  let [myObject, setObject] = useState();
  const fetchDetails = () => {
    axios.get(`http://localhost:3000/produits/${id}`).then((detail) => {
      setObject(detail.data);
    });
  };
  useEffect(fetchDetails, []);
  if (!myObject) {
    return null;
  }

  return (
    myObject && (
      <div className="card-jeux">
        <div className="card-info">
          <img src={myObject.images[0]} alt="" />
          <div className="jeux-detail">
            <span>{myObject.name}</span>
            <span>{myObject.prix.unit_amount_decimal}€</span>
            <span>En Stock</span>
          </div>
          <div className="btn-container">
            <button className="btn btn-success">Ajouter au panier</button>
            <button className="btn btn-info">Achat Maintenant</button>
          </div>
        </div>
        <div className="card-synopsi">
          <h4>Resumer</h4>
          <p>{myObject.description}</p>
        </div>
      </div>
    )
  );
};

export default DetailPage;
