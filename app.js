let userChosen
let computerChosen
var result = results()
const displayResult = document.getElementById('result')
const computerChoice = document.getElementById('computer-choice')
const randomNum = Math.round(Math.random()*3)
const userChoice = document.getElementById('user-choice')
const possibleChoices = document.querySelectorAll('.choices')

// get user chosen
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChosen = e.target.id
  generateComputerChoice()
  results()
  userChoice.innerHTML = userChosen
  computerChoice.innerHTML = computerChosen
  displayResult.innerHTML = result
}))

// get random computer chioce
function generateComputerChoice(){
  if(randomNum===1){
    return computerChosen = 'rock'
  } else if(randomNum===2){
    return computerChosen = 'paper'
  } else if(randomNum===3){
    return computerChosen = 'scissors'
  }
}

// get Results
function results(){
  if(computerChosen===userChosen){
    return result = 'a tie!''
  } else if(computerChosen==='rock' && (userChosen==='paper' || userChosen==='scissors'){
    return result = 'you lose!'
  } else if (computerChosen==='paper' && (userChosen==='rock' || userChosen==='scissors'){
    return result = 'you lose!'
  } else if (computerChosen==='scissors' && (userChosen==='rock' || userChosen==='paper'){
    return result = 'you lose!'
  } else if(userChosen==='rock' && (computerChosen==='paper' || computerChosen==='scissors'){
    return result = 'you lose!'
  } else if (userChosen==='paper' && (computerChosen==='rock' || computerChosen==='scissors'){
    return result = 'you lose!'
  } else if (userChosen==='scissors' && (computerChosen==='rock' || computerChosen==='paper'){
    return result = 'you lose!'
  }
}
