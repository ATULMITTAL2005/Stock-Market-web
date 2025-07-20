const symbol = "INFY";
const apiKey = "d1u52ahr01qle668jo6gd1u52ahr01qle668jo70"; // Replace with your API Key
 function apidata(symbol){
fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}`, {
  headers: {
    "X-Finnhub-Token": apiKey
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
 }


apidata(symbol);