let img = document.querySelector(".dice1");
let button = document.querySelector(".button");
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
    score = 0;
    rolls = 0;
    loseMsg.style.visibility = "visible";
    button.innerText = "Do you want to restart?";
  } else {
    img.src = `imgs/dice${number}.png`;
    score += number;
    rolls++;
    loseMsg.style.visibility = "hidden";
    button.innerText = "Roll again";
  }

  if (score >= 20) {
    wins++;
    loseMsg.style.visibility = "visible";
    loseMsg.innerText = "Yay! You won!";
    button.innerText = "Do you want to restart?";
    score = 0;
    rolls = 0;
  }

  winsNumber.innerText = wins;
  rollsNumber.innerText = rolls;
  scoreNumber.innerText = score;
  wins.innerText = wins;

  console.log(score);
});
