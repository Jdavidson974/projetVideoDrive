import React from "react";
import { Link } from "react-router-dom";

const Headerlink = () => {
  return (
    <div className="head-container">
      <header className="presentation">
        <div className="liste">
          <Link to="/">HOME</Link>
        </div>
        <h1 className="title">React Movie</h1>
        <div className="liste">
          <Link to="/coup-de-coeur">COUP DE COEUR</Link>
        </div>
      </header>
    </div>
  );
};

export default Headerlink;
