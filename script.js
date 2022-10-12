let img = document.querySelector(".dice1");
let button = document.querySelector(".button");
let scoreNumber = document.querySelector(".score-result");
let rollsNumber = document.querySelector(".rolls-result");
let winsNumber = document.querySelector(".wins-result");

let score = 0;
let rolls = 0;
let wins = 0;

button.addEventListener("click", () => {
  let number = Math.floor(Math.random() * 6 + 1);

  if (
    number === 6 ||
    number === 5 ||
    number === 4 ||
    number === 3 ||
    number === 2 ||
    number === 1
  ) {
    img.src = `imgs/dice${number}.png`;
  }

  console.log(number);
});

// let img = document.querySelector(".dice1");
// let button = document.querySelector(".button");
// let score = document.querySelector(".score-result").innerText;
// let rolls = document.querySelector(".rolls-result").innerText;
// let wins = document.querySelector(".wins-result").innerText;
// let newScore = parseInt(score, 10);
// let newRolls = parseInt(rolls, 10);
// let winner = parseInt(wins, 10);

// button.addEventListener("click", () => {
//   let number = Math.floor(Math.random() * 6 + 1);

//   if (
//     number === 6 ||
//     number === 5 ||
//     number === 4 ||
//     number === 3 ||
//     number === 2
//   ) {
//     img.src = `imgs/dice${number}.png`;
//     newScore += number;
//     newRolls += 1;
//     button.innerText = "Roll";
//   } else if (number === 1) {
//     img.src = `imgs/dice${number}.png`;
//     newScore = 0;
//     newRolls = 0;
//     button.innerText = "Restart";
//   }

//   if (newScore >= 20) {
//     winner += 1;
//     newScore = 0;
//     newRolls = 0;
//     document.querySelector(".your-score").style.display = "none";
//     document.querySelector(".rolls").style.display = "none";
//     button.innerText = "Restart";
//   }

//   document.querySelector(".wins-result").innerText = winner;
//   document.querySelector(".score-result").innerText = newScore;
//   document.querySelector(".rolls-result").innerText = newRolls;
//   console.log(newScore);
// });
