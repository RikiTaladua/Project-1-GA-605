// Word bank
const wordBank = ["doughnut", "Homer", "Bart", "Lisa", "Marge", "Krusty the Clown","Ned Flanders", "Milhouse", "Moe", "Mr Burns"];

// Scoreboard variables
let wins = 0;
let losses = 0; 

// Choose a random word from the word bank
let randomIndex = Math.floor(Math.random() * wordBank.length);
let word = wordBank[randomIndex];