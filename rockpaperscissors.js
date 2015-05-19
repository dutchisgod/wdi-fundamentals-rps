////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    // hw 3- I added one variabe named move in , if the move variable is true then the value is evaluated, if a move is not made it becomes the OR || value and asks for a getInput().
    //hw-3 updatated to move or getInput();
    // Hw 4- only 3 values are rock paper and scissors.
    return move || getInput();

}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    // hw 3- I added one variabe named move in , if the move variable is true then the value is evaluated, if a move is not made it becomes the OR || value and asks for a random play.
    // hw 3- updated to move or randomPlay(). added variables for playerMove definition, to getplayerMove() and computerMove variable to getComputerMove()
    // Hw 4- only 3 values rock, paper, and scissors. 
    // hw 5 -
    return move || 'randomPlay()';
}
    var playerMover = getPlayerMover();
    var computerMove = getComputerMove();

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    // Hw-4 keep rules in mind, and set the absolute equality of === to either playerMove or computerMove values. Use if values for player or computer, depending on the results, have the console.log read winning result in quotes, and set winner variable to either the player or computer, continue with else if commands for all possible out comes, continue else if with computer until all out comes are done, then  .
    // hw-4 updated changed first condition to absolute equality of tie for playerMove and computerMove, else if functions move from tie to else if.
    // hw 5-  tracks who wone each round, until computer or player wins 5 times total.
    if (playerMove === computerMove) {
        winner ='tie'; 
            return console.log ("Tie.");
        }
        else if (playerMove  === 'paper' && computerMove === 'rock' ) {
             winner = 'player';

        } else if (playerMove === 'scissors' && computerMove === 'paper') {
            winner = 'Player';
            
    }       else if (playerMove === 'rock' && computerMove 'scissors'){
        winner = 'player';
    } else { winner = 'computer';
    }
        return console.log(winner + "won");
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    
    if ( playerWins > computerWins) {
        return 'player wins';
    } else { 
            return 'computer wins'
        }
    return [playerWins, computerWins];
}
playToFive();

