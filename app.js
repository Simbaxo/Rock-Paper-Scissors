function computerPlay() {
  let game = ['Rock', 'Paper', 'Scissors']
  const cpuPick = game[Math.floor(Math.random() * game.length)]
  return cpuPick
}