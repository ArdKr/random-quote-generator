import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import GoHome from "../components/GoHome";
import { getAuthorQuotes } from "../services/api/quotes";

const Author = () => {
  const [quotes, setQuotes] = useState([]);

  const { name: authorName } = useParams();

  // Load quotes every time component mounts
  useEffect(() => {
    getAuthorQuotes(authorName).then((response) => {
      setQuotes(response.quotes);
    });
  }, [authorName]);

  return (
    <div className="container">
      <GoHome />

      <h1 className="authorName">Quotes by "{authorName}"</h1>

      {quotes.map(({ quoteText }) => {
        return <Card quoteText={quoteText} />;
      })}
    </div>
  );
};

export default Author;
