// computer randomly chooses 1 of 3 options
function computerPlay() {
    let randomChoice = Math.floor(Math.random() * 3);
    let comp;
    if (randomChoice == 0) {
      comp = 'rock';
    } else if (randomChoice == 1) {
      comp = 'paper';
    } else {
      comp = 'scissors';
    }
    return comp;
}

// user chooses 1 of 3 options
function playerPlay() {
    let userInput = window.prompt('Which do you choose? Rock, Paper, Scissors?');
    let plr = userInput.toLowerCase();
    return plr;
}

// play 1 round, message the result of this round at the end
function playRound(computerSelection, playerSelection) {
  playerSelection = playerPlay();
  computerSelection = computerPlay();
  console.log("Computer chooses " + computerSelection);
  let result;
  if (computerSelection == playerSelection) {
    console.log("It's a tie!")
    result = 'draw';
  } else if ((computerSelection == 'rock' && playerSelection == 'scissors') || (computerSelection == 'paper' && playerSelection =='rock') || (computerSelection == 'scissors' && playerSelection == 'paper')) {
    console.log(computerSelection + ' beats ' + playerSelection + '! Computer wins!');
    result =  'computer';
  } else {
    console.log(playerSelection + ' beats ' + computerSelection + '! You win!');
    result =  'player';
  }
  return result;
}

// play 5 rounds, keep counts of result in each round, get final result at the end

function game() {
  let computer = 0;
  let player = 0;
  let draw = 0;
  for (let i = 1; i <= 5; i++) {
    let resultRound = playRound();
    if (resultRound == 'draw') {
      draw++;
    } else if (resultRound == 'computer') {
      computer++;
    } else {
      player++;
    }
  }
  if (draw > computer && draw > player) {
    console.log("It's a tie!");
  } else if (computer > player) {
    console.log("Computer wins!");
  } else {
    console.log("You win!");
  }
}

game();
