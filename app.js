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

// Keep track of wrong guesses and used letters
let wrongGuesses = 0;
const usedLetters = new Set();

// Button clicks
lettersElement.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      const letter = event.target.textContent.toLowerCase();

      // Check if the letter has already been used
    if (usedLetters.has(letter)) {
        event.target.disabled = true;
        return;
      }

      // Add the letter to the set of used letters
    usedLetters.add(letter);

    event.target.disabled = true;
    if (word.includes(letter)) {
     // Replace underscores with the guessed letter
     for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          wordArray[i] = letter;
        }
      }
      wordElement.textContent = wordArray.join(" ");

      if (!wordArray.includes("_")) {
        // Player wins the game
        spaceElement.textContent = "WIN!";
        wins++;
        updateScoreboard();
      }
    } else {
      // Incorrect guess
      event.target.classList.add("dark");
      event.target.classList.add("used"); // Add 'used' class for styling
      wrongGuesses++;

      // Update the incorrect guess count and display
      spaceElement.textContent = `Wrong Guesses: ${wrongGuesses}`;

      if (wrongGuesses === 6) {
        // Player loses the game
        wordElement.textContent = word;
        spaceElement.textContent = "LOSS!";
        losses++;
        updateScoreboard();
      }
    }
  }
});

// Retry button
retryButton.addEventListener("click", function() {
    // Reset game
    randomIndex = Math.floor(Math.random() * wordBank.length);
    word = wordBank[randomIndex];
    wordArray = [];
    for (let i = 0; i < word.length; i++) {
      wordArray.push("_");
    }
    wordElement.textContent = wordArray.join(" ");
    wrongGuesses = 0;
    spaceElement.textContent = "";
    lettersElement.querySelectorAll("button").forEach(function(button) {
      button.disabled = false;
      button.classList.remove("correct", "dark", "used");
    });
  });
  