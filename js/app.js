const choices = document.querySelectorAll('.choice') // put all the choices in an array
const score = document.getElementById('score')
const result = document.getElementById('result')
const restart = document.getElementById('restart')
const modal = document.querySelector('.modal')
const scoreboard = {
  player: 0,
  computer: 0
}