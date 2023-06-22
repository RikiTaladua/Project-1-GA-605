// Word bank
const wordBank = ["doughnut","homer simpson", "marge simpson", "bart simpson", "lisa simpson", "maggie simpson", "ned flanders", "maude flanders", "rod flanders", "todd flanders", "mr burns", "smithers", "waylon smithers", "moe szyslak", "barney gumble", "chief wiggum", "ralph wiggum", "apu nahasapeemapetilon", "nelson muntz", "milhouse van houten", "martin prince", "principal skinner", "superintendent chalmers", "patty bouvier", "selma bouvier", "krusty the clown", "sideshow bob", "ned flanders", "nedward flanders jr", "hans moleman", "cletus spuckler", "comic book guy", "abe simpson", "groundskeeper willie", "edna krabappel", "reverend lovejoy", "mayor quimby", "dr hibbert", "lenny leonard", "carl carlson", "snake jailbird", "fat tony", "disco stu", "lionel hutz", "troy mcclure", "duffman", "bumblebee man", "sideshow mel", "kent brockman", "dr nick riviera", "gil gunderson", "judge snyder", "itchy", "scratchy", "kang", "kodos", "mona simpson", "santas little helper"];

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
     // Replace underscores with the guessed letter›
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
retryButton.addEventListener("click", function () {
    // Reset game
    randomIndex = Math.floor(Math.random() * wordBank.length);
    word = wordBank[randomIndex];
    wordArray = [];
    for (let i = 0; i < word.length; i++) {
      wordArray.push("_");
    }
    wordElement.textContent = wordArray.join(" ");
    usedLetters.clear(); // Clear used letters set
    spaceElement.textContent = "";
    lettersElement.querySelectorAll("button").forEach(function (button) {
      button.removeAttribute("disabled"); // Remove the disabled attribute
      button.classList.remove("correct", "dark", "used");
    });
    wrongGuesses = 0; // Reset wrong guesses count
  });
  

// Start of game
let remainingGuesses = 6;

// Function to update the scoreboard
function updateScoreboard() {
    scoreboardElement.textContent = `Wins: ${wins} | Losses: ${losses}`;
  }
  
  // Call the updateScoreboard function to display the initial values
  updateScoreboard();
  