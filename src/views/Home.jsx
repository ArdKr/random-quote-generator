import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import AuthorInfo from "../components/AuthorInfo";
import Refresh from "../components/Refresh";
import { getRandomQuote } from "../services/api/quotes";

const Home = () => {
  const [quoteDetails, setQuoteDetails] = useState({});
  const [refresh, setRefresh] = useState(true);

  const { quoteText, quoteAuthor, quoteGenre } = quoteDetails;

  useEffect(() => {
    getRandomQuote().then((response) => {
      setQuoteDetails(response.quote);
    });
  }, [refresh]);

  const newQuote = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container">
      <Refresh onClick={newQuote} />

      <Card quoteText={quoteText} />

      <AuthorInfo quoteAuthor={quoteAuthor} quoteGenre={quoteGenre} />
    </div>
  );
};

export default Home;
