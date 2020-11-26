import React from "react";
import { useParams } from "react-router-dom";

const Author = () => {
  const { name: authorName } = useParams();

  return <h1>{authorName}</h1>;
};

export default Author;
