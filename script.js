// function playAGame() {
//   computerPlay()
//   playerPlay()
//   displayComputer()
//   displayPlayer()
//   displayResult()
//   displayScore()
// }
//
//


// // computer randomly chooses 1 of 3 options
function computerPlay() {
    let randomChoice = Math.floor(Math.random() * 3);
    let compChoice;
    let compStage = document.getElementById("comp-stage");
    compStage.classList.add("fas");
    if (randomChoice == 0) {
      compStage.classList.add("fa-hand-rock");
      compChoice = "rock";
    } else if (randomChoice == 1) {
      compStage.classList.add("fa-hand-paper");
      compChoice = "paper";
    } else {
      compStage.classList.add("fa-hand-scissors");
      compChoice = "scissors";
    }
    return compChoice;
}

// computerPlay();


// user chooses 1 of 3 options
function playerPlay() {
    let playerStage = document.getElementById("player-stage");
    playerStage.classList.add("fas");

    document.getElementById("player-rock").addEventListener("click", () => {
      playerStage.classList.add("fa-hand-rock");
      computerPlay();
      return "rock";
    });

    document.getElementById("player-paper").addEventListener("click", () => {
      playerStage.classList.add("fa-hand-paper");
      let playerChoice = "paper";
      computerPlay();
    });

    document.getElementById("player-scissors").addEventListener("click", () => {
      playerStage.classList.add("fa-hand-scissors");
      let playerChoice = "scissors";
      computerPlay();
    });
    //
    // console.log(items);
    // let choice;
    //
    // for (let i = 0; i < items.length; i++) {
    //   items[i].addEventListener("click", function() {
    //     let item = items[i];
    //     if (item.id == "player-rock") {
    //       choice = "rock";
    //     } else if (item.id == "player-paper") {
    //       choice = "paper";
    //     } else if (item.id == "player-scissors") {
    //       choice = "scissors";
    //     }
    //   });
    // }

}

// playerPlay();







// play 1 round, message the result of this round at the end
function playRound(computerSelection, playerSelection) {
  playerSelection = playerPlay();
  computerSelection = computerPlay();

  let result;
  if (computerSelection == playerSelection) {
    console.log("It's a tie!")
    result = 'draw';
  } else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
            (computerSelection == 'paper' && playerSelection =='rock') ||
            (computerSelection == 'scissors' && playerSelection == 'paper')) {
    console.log(computerSelection + ' beats ' + playerSelection + '! Computer wins!');
    result =  'computer';
  } else {
    console.log(playerSelection + ' beats ' + computerSelection + '! You win!');
    result =  'player';
  }
  return result;
}
