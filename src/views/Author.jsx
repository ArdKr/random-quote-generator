import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import AuthorInfo from "../components/AuthorInfo";
import Refresh from "../components/Refresh";

const Author = () => {
  const { name: authorName } = useParams();

  return (
    <div className="container">
      <Refresh />

      <Card />
      <Card />
      <Card />

    </div>
  );
};

export default Author;
