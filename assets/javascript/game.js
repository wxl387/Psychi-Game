  //alaviable alphabet for AI to pick
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //tracking scores
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var guessedLetter = [];

  //computer random picks
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);

  //create function: reset
    var reset = function() {
      guesses = 9;
      guessedLetter = [];
    }

  //run the game
    document.onkeyup = function(event) {
      // Determines which key was pressed.
      //to lower case!!! from car_sol.html
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

      //adding new guess to array 
      guessedLetter.push(userGuess);

      if(userGuess === computerChoice) {
        wins++;
        reset();
      } else {
        guesses--;
        if (guesses === 0) {
        losses++;
        reset();
        }
      }

      // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
      var html =
        "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guesses + "</p>" +
        "<p>Your Guesses so far: " + guessedLetter + "</p>";
          
          
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }
  