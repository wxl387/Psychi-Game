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
    document.getElementById('welcome').play();
    document.onkeyup = function(event) {
      // Determines which key was pressed.
      //to lower case!!! from car_sol.html
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

      //adding new guess to array 
      guessedLetter.push(userGuess);

      if(userGuess === computerChoice) {
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        document.getElementById('victory').play();
        alert("VICTORY");
        reset();
      } else {
        guesses--;
      }
      if (guesses === 8) {
        document.getElementById('1b').play();
      } else if (guesses === 7) {
        document.getElementById('2b').play();
      } else if (guesses === 6) {
        document.getElementById('3b').play();
      } else if (guesses === 5) {
        document.getElementById('4b').play();
      } else if (guesses === 4) {
        document.getElementById('5b').play();
      } else if (guesses === 0) {
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        document.getElementById('defeat').play();
        alert("DEFEAT");
        reset();
      } else{
        document.getElementById('moreb').play();
      }

      //updating guesses
      document.querySelector('#guesses').innerHTML = "Guesses left: " + guesses;
      document.querySelector('#guessedLetter').innerHTML = "Guessed Letter: " + guessedLetter;


      // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
      // var html =
      //   "<h1>The Psychic Game</h1>" +
      //   "<p>Guess what letter I'm thinking of" +
      //   "<p>Wins: " + wins + "</p>" +
      //   "<p>Losses: " + losses + "</p>" +
      //   "<p>Guesses Left: " + guesses + "</p>" +
      //   "<p>Your Guesses so far: " + guessedLetter + "</p>";
          
          
        // Set the inner HTML contents of the #game div to our html string
        // document.querySelector("#game").innerHTML = html;
      }
  