const game = () => {
  let pScore = 0
  let cScore = 0

  // Start the Game
  const startGame = () => {
    const playBtn = document.querySelector('.intro button')
    const introScreen = document.querySelector('.intro')
    const match = document.querySelector('.match')

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut')
      match.classList.add('fadeIn')
    })
  }

  // call all the inner functions
  startGame()
}

// start the game function
game()