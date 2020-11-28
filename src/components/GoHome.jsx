import React from "react";
import { Link } from "react-router-dom";

const GoHome = () => {
  return (
    <Link className="home" to="/">
      &larr; Go back
    </Link>
  );
};

export default GoHome;
