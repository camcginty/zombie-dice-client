'use strict'
const gameplay = require('./gameplay.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('.playingGame').hide()
  $('.start').on('click', gameplay.startGame)
  $('.roll').on('click', gameplay.startTurn)
  $('.rollAgain').on('click', gameplay.rollAgain)
  $('.endTurn').on('click', gameplay.endTurn)
})
