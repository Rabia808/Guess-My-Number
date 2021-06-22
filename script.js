'use strict';

const secretNumber = document.querySelector('.number');
let number = Math.trunc(Math.random() * 20) + 1; //generating random number.
//console.log(number);

let score = 10; //max score
let highScore = 0;

//function for checking values
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //for empty input
  if (!guess) {
    score--;
    if (score < 1) {
      document.querySelector('.message').textContent = 'GAME OVER ⌛';
      document.querySelector('.score').textContent = '0';
    } else {
      document.querySelector('.message').textContent = 'Enter a Number📝';
      document.querySelector('.score').textContent = score;
    }
  }
  //correct input
  else if (guess === number) {
    if (score < 1) {
      document.querySelector('.message').textContent = 'GAME OVER ⌛';
      document.querySelector('.score').textContent = '0';
    } else {
      document.querySelector('.number').textContent = number;
      document.querySelector('.message').textContent =
        '🎉 Woohoooo...You Won 🎉';
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.background = '#60b347';
      secretNumber.style.width = '30rem';
      //saving highscore
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
  }
  //smaller input
  else if (guess < number) {
    score--;
    if (score < 1) {
      document.querySelector('.message').textContent = 'GAME OVER ⌛';
      document.querySelector('.score').textContent = '0';
    } else {
      document.querySelector('.message').textContent = ' Oops...Too Low 📉';
      document.querySelector('.score').textContent = score;
      //document.querySelector('.guess').value = '';
    }
  }
  //large input
  else if (guess > number) {
    score--;
    if (score < 1) {
      document.querySelector('.message').textContent = 'GAME OVER ⌛';
      document.querySelector('.score').textContent = '0';
    } else {
      document.querySelector('.message').textContent = ' Oops...Too High 📈';
      document.querySelector('.score').textContent = score;
    }
  }
});

//reset with Again Button===================================================================>
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 10;

  document.querySelector('.message').textContent = 'Start guessing...';
  console.log(number);
  secretNumber.textContent = '?';
  secretNumber.style.width = '15rem';
  document.querySelector('.guess').value = null; //empty input
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.background = 'linear-gradient(180deg, rgb(37, 233, 184), rgb(78, 82, 83))';
});
