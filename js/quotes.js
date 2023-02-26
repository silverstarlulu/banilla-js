const quotes = [
  {
    quote:
      "Those who are believed to be most abject and humble are usually most ambitious and envious.",
    author: "Baruch Spinoza",
  },
  {
    quote: "Life isn't fair. It's just fairer than death, that's all.",
    author: "William Goldman",
  },
  {
    quote: "Much learning does not teach understanding.",
    author: "Heraclitusn",
  },
  {
    quote: "Strong reasons make strong actions.",
    author: "William Shakespeare",
  },
  {
    quote:
      "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle",
  },
  {
    quote: "I hear and I forget. I see and I remember. I do and I understand.",
    author: "Confucius",
  },
  {
    quote:
      "Opportunities are never lost. The other fellow takes those you miss.",
    author: "Unknown",
  },
  {
    quote: "To follow, without halt, one aim: There's the secret of success.",
    author: "Anna Pavlova",
  },
  {
    quote: "We can only learn to love by loving.",
    author: "Iris Murdoch",
  },
  {
    quote: "To love someone is to identify with them.",
    author: "Aristotle",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
