const axios = require("axios");

const makeRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

// Make an api request and return a random quote
export const getRandomQuote = async () => {
  const url = "https://quote-garden.herokuapp.com/api/v2/quotes/random";

  return makeRequest(url);
};

// Make an api request and return 3 quotes from an author
export const getAuthorQuotes = async (authorName) => {
  const url = `https://quote-garden.herokuapp.com/api/v2/authors/${authorName}?page=1&limit=3`;

  return makeRequest(url);
};
