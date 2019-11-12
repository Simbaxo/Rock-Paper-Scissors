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
  const winner = getWinner(playerChoice, computerChoice)
  showWinner(winner, computerChoice)
}

// Get Computers Choice
function getComputerChoice() {
  const rand = Math.random()
  if (rand < 0.34) {
    return 'Rock'
  } else if (rand <= 0.67) {
    return 'Paper'
  } else {
    return 'Choices'
  }
}

// Get Game Winner
function getWinner(p, c) {
  if (p === c) {
    return 'Draw'
  } else if (p === 'Rock') {
    if (c === 'Paper') {
      return 'Computer'
    } else {
      return 'Player'
    }
  } else if (p === 'Paper') {
    if (c === 'Scissors') {
      return 'Computer'
    } else {
      return 'Player'
    }
  } else if (p === 'Scissors') {
    if (c === 'Rock') {
      return 'Computer'
    } else {
      return 'Player'
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    // Increment Player Score
    scoreboard.player++
    // Show Modal Result
    result.innerHTML = `
      <h1 class='text-win'>You Win</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice}</strong></p>
    `
  } else if (winner === 'computer') {
    // Increment Computer Score
    scoreboard.computer++
    // Show Modal Result
    result.innerHTML = `
      <h1 class='text-lose'>You Lose</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice}</strong></p>
    `
  } else {
    result.innerHTML = `
      <h1>You Draw</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice}</strong></p>
    `
  }
  // Show Score
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Player: ${scoreboard.computer}</p>
  `

  modal.style.display = 'block'
}

// Clear Modal
function clearModal(e) {
  if(e.target === modal) {
    modal.style.display = 'none'
  }
}

// Event Listeners
choices.forEach(choice => choice.addEventListener('click', play))
window.addEventListener('click', clearModal)