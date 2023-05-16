import axios from "axios";
import { useEffect, useState } from "react";

const DetailPage = () => {
  let [myObject, setObject] = useState();
  const fetchDetails = () => {
    axios
      .get(`http://localhost:3000/produits/prod_NsfOws6OtkClCk`)
      .then((detail) => {
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
          <div>
            <img src={myObject.images[0]} alt="" />
          </div>
          <div>
            <span>{myObject.name}</span>
            <span>{myObject.prix.unit_amount_decimal} Euro</span>
          </div>
        </div>
        <div className="card-synopsi">
          <h4>Resumer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio
            porro voluptate aperiam, placeat quisquam mollitia quod? Sed quam ex
            debitis earum! Delectus, sit. Necessitatibus commodi perferendis
            aperiam earum molestias?
          </p>
        </div>
      </div>
    )
  );
};

export default DetailPage;
