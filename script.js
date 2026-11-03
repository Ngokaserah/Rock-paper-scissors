

let userScore = document.getElementById('userscore');
let computerScore = document.getElementById('compscore');
let scoreBoard = document.getElementById('board');
let text = document.getElementById('board')
let compChos = document.getElementById('comp');
let resetBtn = document.getElementById('rbtn');
let timeRock = document.getElementById('year');

const choices = ['rock','paper','scissors'];


let score;

function playGame(user) {

let randChoice = Math.random()*3;
let randSelect = Math.floor(randChoice);

 let compChoice = choices[randSelect];

 console.log(compChoice);

 if (user === compChoice) {
    score = 'Draw  😔';  
    compChos.innerText = `Computer choose: ${compChoice}`;
 } else if (
    (user === 'scissors' && compChoice === 'paper') || 
    (user === 'paper' && compChoice === 'rock') || 
    (user === 'rock' && compChoice === 'scissors')
) {
    score = 'You win  🏆';
    compChos.innerText = `Computer choose: ${compChoice}`;
    userScore.innerHTML ++;
    
 } else {
    score = 'Computer win  🥳'
    compChos.innerText = `Computer choose: ${compChoice}`;
    computerScore.innerHTML ++;
 }
 
  
 text.innerText = score;  
} 

resetBtn.addEventListener('click',  resetGame);

   function resetGame () {
      userScore.innerHTML = 0;
      computerScore.innerHTML = 0;
   }
 const d = new Date();
 const y = d.getFullYear();
 timeRock.innerHTML =y;






 
