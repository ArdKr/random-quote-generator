import React from "react";
import { useParams } from "react-router-dom";

const Author = () => {
  const { name } = useParams();

  return <h1>{name}</h1>;
};

export default Author;
