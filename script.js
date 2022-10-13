let img = document.querySelector(".dice1");
let button = document.querySelector(".button");
let restartButton = document.querySelector(".restartButton");
let scoreNumber = document.querySelector(".score-result");
let rollsNumber = document.querySelector(".rolls-result");
let winsNumber = document.querySelector(".wins-result");
let loseMsg = document.querySelector(".lose");

let score = 0;
let rolls = 0;
let wins = 0;

button.addEventListener("click", () => {
  let number = Math.floor(Math.random() * 6 + 1);

  if (number === 1) {
    img.src = `imgs/dice${number}.png`;
    loseMsg.style.visibility = "visible";
    button.style.display = "none";
    restartButton.style.display = "block";
  } else {
    img.src = `imgs/dice${number}.png`;
    score += number;
    rolls++;
    loseMsg.style.visibility = "hidden";
  }

  if (score >= 20) {
    wins++;
    loseMsg.style.visibility = "visible";
    loseMsg.innerText = "Yay! You won!";
    button.style.display = "none";
    restartButton.style.display = "block";
  }

  winsNumber.innerText = wins;
  rollsNumber.innerText = rolls;
  scoreNumber.innerText = score;
});

restartButton.addEventListener("click", () => {
  button.style.display = "block";
  loseMsg.style.visibility = "hidden";
  restartButton.style.display = "none";
  score = 0;
  rolls = 0;
  rollsNumber.innerText = rolls;
  scoreNumber.innerText = score;
});
