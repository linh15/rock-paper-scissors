window.addEventListener("click", playRound);

function playRound(event) {
  console.log("before");

  if (event.path[2].className !== "player-options") {
    return;
  };

  console.log("after");

  let playerChoice;
  let playerStage = document.getElementById("player-stage");
  playerStage.className = "";
  playerStage.classList.add("fas");

  if (event.path[1].id == "player-rock") {
    playerChoice = "rock";
    playerStage.classList.add("fa-hand-rock");
  } else if (event.path[1].id == "player-paper") {
    playerChoice = "paper";
    playerStage.classList.add("fa-hand-paper");
  } else if (event.path[1].id == "player-scissors") {
    playerChoice = "scissors";
    playerStage.classList.add("fa-hand-scissors");
  }

  let compChoice = computerPlay();

  let result = getResult(playerChoice, compChoice);

  displayScore(result);
  //setTimeout(checkFinish, 1000);
  checkFinish();

}

function computerPlay() {
    let randomChoice = Math.floor(Math.random() * 3);
    let compChoice;
    let compStage = document.getElementById("comp-stage");
    compStage.className = "";
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

function getResult(playerChoice, compChoice) {
  let result;
  if (compChoice == playerChoice) {
    console.log("It's a tie!")
    result = 'draw';
  } else if ((compChoice == 'rock' && playerChoice == 'scissors') ||
            (compChoice == 'paper' && playerChoice =='rock') ||
            (compChoice == 'scissors' && playerChoice == 'paper')) {
    console.log('Computer wins!');
    result =  "computer";
  } else {
    console.log('You win!');
    result =  "player";
  }
  return result;
}

function displayScore(result) {

  let playerScore = Number(document.getElementById("player-score").innerHTML);
  let compScore = Number(document.getElementById("comp-score").innerHTML);
  if (result == "computer") {
    compScore += 1;
  } else if (result == "player") {
    playerScore += 1;
  }
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("comp-score").innerHTML = compScore;

  console.log(compScore);
  console.log(playerScore);
  // if (compScore == 5) {
  //   // alert("Computer wins!");
  //   // location.reload();
  // } else if (playerScore == 5) {
  //   // alert("You win!");
  //   // location.reload();
  // }
}

function checkFinish() {
  let playerScore = Number(document.getElementById("player-score").innerHTML);
  let compScore = Number(document.getElementById("comp-score").innerHTML);
  if (compScore == 5) {
    console.log("alert1");
    document.getElementById("final-result").innerHTML = "COMPUTER WINS THE GAME!!!";
    window.removeEventListener("click", playRound);
    // location.reload();
  } else if (playerScore == 5) {
    console.log("alert2");
    document.getElementById("final-result").innerHTML = "YOU WIN THE GAME!!!";
    window.removeEventListener("click", playRound);
    // location.reload();
  }
}
