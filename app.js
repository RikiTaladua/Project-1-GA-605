// Word bank
const wordBank = ["doughnut", "Homer", "Bart", "Lisa", "Marge", "Krusty the Clown","Ned Flanders", "Milhouse", "Moe", "Mr Burns"];

// Scoreboard variables
let wins = 0;
let losses = 0; 

// Choose a random word from the word bank
let randomIndex = Math.floor(Math.random() * wordBank.length);
let word = wordBank[randomIndex];

// Select HTML elements
const wordElement = document.getElementById("word");
const spaceElement = document.getElementById("space");
const lettersElement = document.getElementById("letters");
const retryButton = document.getElementById("retry");
const scoreboardElement = document.getElementById("scoreboard");

// Underscores for the word
let wordArray = [];
for (let i = 0; i < word.length; i++) {
  wordArray.push("_");
}

// Display the word as underscores
wordElement.textContent = wordArray.join(" ");