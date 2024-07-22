let userMove = '';
let computerMove = '';
let result = '';
let game = {
  wins: 0,
  Tie: 0,
  Loose: 0
};

let gameHistory = [];

function captureUserMove(move) {
  userMove = move;
  console.log("userMove: " + userMove);
}

function generateComputerMove() {
  const randNum = Math.random();
  if (randNum < 1 / 3) {
    computerMove = 'Rock';
  } else if (randNum < 2 / 3) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors'; // Corrected the string to 'Scissors'
  }

  console.log("computerMove: " + computerMove);
}

function evaluateMove() {
  if (userMove === computerMove) {
    result = 'Tie';
  } else if (
    (userMove === 'Rock' && computerMove === 'Scissors') ||
    (userMove === 'Scissors' && computerMove === 'Paper') ||
    (userMove === 'Paper' && computerMove === 'Rock')
  ) {
    result = 'Win'; // Corrected the string to 'Win'
  } else {
    result = 'Loose'; // Corrected the string to 'Loose'
  }

  console.log('result: ' + result);
}

function updateScores() {
  if (result === 'Win') {
    game.wins++;
  } else if (result === 'Tie') {
    game.Tie++;
  } else if (result === 'Loose') {
    game.Loose++;
  }
  console.log(game);

  const gameHistoryItem = {
    userMove: userMove,
    computerMove: computerMove,
    result: result
  };

  gameHistory.push(gameHistoryItem);
  console.log("gameHistory: ");
  console.log(gameHistory);
}

function renderGameSummary() {
  const gamesPlayed = game.wins + game.Tie + game.Loose;
  console.log("GamesPlayed: " + gamesPlayed);

  document.getElementById('wins').innerHTML = game.wins;
  document.getElementById('Tie').innerHTML = game.Tie;
  document.getElementById('Losse').innerHTML = game.Loose;
  document.getElementById('gamesPlayed').innerHTML = gamesPlayed;
}

function renderGameHistory() {
  let gameHistoryHTML = `
    <tr>
      <th>#</th>
      <th>User Move</th>
      <th>Computer Move</th>
      <th>Result</th>
    </tr>`;

  for (let i = 0; i < gameHistory.length; i++) {
    const gameItem = gameHistory[i];
    gameHistoryHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${gameItem.userMove}</td>
        <td>${gameItem.computerMove}</td>
        <td>${gameItem.result}</td>
      </tr>
    `;
  }
  document.getElementById('gameHistory').innerHTML = gameHistoryHTML;
}

function playGame(move){
  captureUserMove(move);
   generateComputerMove();
    evaluateMove();
     updateScores();
      renderGameSummary();
       renderGameHistory()
}

function resetScores(){
  game.wins = 0;
  game.Tie = 0;
  game.Loose = 0;
  gameHistory = [];
}