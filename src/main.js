let character = 'X'; //delcaring the variable character and setting the value to X
const wins = [
  ['A1', 'B1', 'C1'], //declaring all possible winning combination in a array or arrays
  ['A2', 'B2', 'C2'],
  ['A3', 'B3', 'C3'],
  ['A1', 'A2', 'A3'],
  ['B1', 'B2', 'B3'],
  ['C1', 'C2', 'C3'],
  ['A1', 'B2', 'C3'],
  ['A3', 'B2', 'C1'],
];
let player1Name; //declaring variable player1 name without setting the value
let player2Name; //declaring variable player2 name without setting the value

function setUp() { // declaring function setup
  setUpPlayer1();  // calling function setUpPlayer1
  setUpPlayer2();  // calling function setUpPlayer2
}

function setUpPlayer1() {
  player1Name = prompt('Enter player1 name:'); //calling function prompt with the parameter 'Enter player1 name:' then setting variable player1 name to the return value of prompt funtion
  const player1NameDiv = document.querySelector('#player1name');
  player1NameDiv.textContent = player1Name;
}

function setUpPlayer2() {
  player2Name = prompt('Enter player2 name:');
  const player2NameDiv = document.querySelector('#player2name');
  player2NameDiv.textContent = player2Name;
}

function move(div) { calls check for win
  draw(div);
  checkForWin();
}

function draw(div) {
  if (character == 'X') {
    character = 'O';
  } else {
    character = 'X';
  }
  div.innerHTML = character;
}

function checkForWin() {
  const fields = document.querySelectorAll('.field');
  const matchingDivs = Array.from(fields).filter(
    (div) => div.textContent === character,
  );
  const ids = matchingDivs.map((div) => div.id);

  if (wins.some((combo) => combo.every((id) => ids.includes(id)))) {
    showWinMessage();
  }
}

function showWinMessage() {
  document.querySelector('.winMessage').classList.add('show'); //first finding the htlm element with class winMessage then adding the class show
}

setUp();
