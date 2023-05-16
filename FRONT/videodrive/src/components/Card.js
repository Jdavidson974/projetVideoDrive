import { Link } from "react-router-dom";
const Card = ({ data }) => {
    const prix = data.default_price.unit_amount_decimal
    let prixParsed = ',' + prix.substring(prix.length - 2);
    prixParsed = prix.substring(0, prix.length - 2) + prixParsed + "€";
    return (
        <Link to={"/detail/" + data.id} className="cardGame card-Link">
            <span className="text-center mb-2" >{data.name}</span>
            <div className="w-100 d-flex justify-content-center">
                <img height={80} src={data.images[0]} />
            </div>
            <span className="text-center mt-2" >{prixParsed}</span>
        </Link>
    );
};

export default Card;