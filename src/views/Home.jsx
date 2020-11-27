import React from "react";
import Card from "../components/Card";
import AuthorInfo from "../components/AuthorInfo";
import Refresh from "../components/Refresh";

const Home = () => {
  return (
    <div className="container">
      <Refresh />

      <Card />

      <AuthorInfo />
    </div>
  );
};

export default Home;
