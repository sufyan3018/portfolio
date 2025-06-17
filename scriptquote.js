const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Your time is limited, don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  },
  {
    quote: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  }
];

function getQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random].quote;
  document.getElementById("author").innerText = "— " + quotes[random].author;
}
