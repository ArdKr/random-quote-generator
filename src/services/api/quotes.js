const axios = require("axios");

// Make an api request and return a random quote
export const getRandomQuote = async () => {
  const url = "https://quote-garden.herokuapp.com/api/v2/quotes/random";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
