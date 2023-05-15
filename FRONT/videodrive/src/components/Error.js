import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <Link to="/">404 ERROR</Link>
    </div>
  );
};

export default ErrorPage;
