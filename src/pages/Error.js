import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page section">
      <div className="error-container">
        <h1>Oppps! Something went wrong!!!</h1>
        <Link to="/">
          <button className="btn btn-primary">Back to Home Page </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Error;
