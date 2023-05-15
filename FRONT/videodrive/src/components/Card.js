const Card = ({ data }) => {
    return (
        <div className="cardGame">
            <img src={data.images[0]} alt="" />
        </div>
    );
};

export default Card;