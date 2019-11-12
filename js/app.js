const choices = document.querySelectorAll('.choice') // put all the choices in an array
const score = document.getElementById('score')
const result = document.getElementById('result')
const restart = document.getElementById('restart')
const modal = document.querySelector('.modal')
const scoreboard = {
  player: 0,
  computer: 0
}

// Play Game
function play(e) {
  restart.style.display = 'inline-block'
  const playerChoice = e.target.id
  const computerChoice = getComputerChoice()

  console.log(playerChoice, computerChoice)
}

// Get Computers Choice
function getComputerChoice() {
  const rand = Math.random()
  if (rand < 0.34) {
    return 'rock'
  } else if (rand <= 0.67) {
    return 'paper'
  } else {
    return 'choices'
  }
}

// Event Listeners
choices.forEach(choice => choice.addEventListener('click', play))