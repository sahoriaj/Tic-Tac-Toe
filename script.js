const board = document.querySelectorAll(".cell");
const resetButton = document.getElementById("reset");

let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleCellClick(event) {
  const cell = event.target;
  const index = cell.dataset.index;

  if (gameState[index] !== "" || !gameActive) return;

  gameState[index] = currentPlayer;
  cell.textContent = currentPlayer;

  if (checkWin()) {
    alert(`${currentPlayer} wins!`);
    gameActive = false;
    return;
  }

  if (!gameState.includes("")) {
    alert("It's a draw!");
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin() {
  return winConditions.some((condition) => {
    return condition.every((index) => gameState[index] === currentPlayer);
  });
}

function resetGame() {
  gameState = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;

  board.forEach((cell) => (cell.textContent = ""));
}

board.forEach((cell) => cell.addEventListener("click", handleCellClick));
resetButton.addEventListener("click", resetGame);
