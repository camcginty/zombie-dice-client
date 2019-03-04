'use strict'

const display = require('./display.js')
const store = require('./store.js')

let playerOneTurn = false

// can is empty until fillCan
const can = []

// playerHand is empty until takeDice
const playerHand = []

// 13 dice
// 6 green dice with 3 brains, 1 shot, 2 feet
// 4 yellow dice with 2 brains, 2 shots, 2 feet
// 3 red dice with 1 brain, 3 shots, 2 feet
const dieOne = {
  color: 'green',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function () {
    return this.sides[(Math.random() * this.sides.length) | 0]
  }
}

const dieTwo = {
  color: 'green',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function () {
    return (this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieThree = {
  color: 'green',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function () {
    return (this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieFour = {
  color: 'green',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function () {
    return (this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieFive = {
  color: 'green',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function () {
    return (this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieSix = {
  color: 'green',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function () {
    return (this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieSeven = {
  color: 'yellow',
  sides: ['brain', 'brain', 'feet', 'feet', 'shot', 'shot'],
  roll: function () {
    return (this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieEight = {
  color: 'yellow',
  sides: ['brain', 'brain', 'feet', 'feet', 'shot', 'shot'],
  roll: function () {
    return (this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieNine = {
  color: 'yellow',
  sides: ['brain', 'brain', 'feet', 'feet', 'shot', 'shot'],
  roll: function () {
    return (this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieTen = {
  color: 'yellow',
  sides: ['brain', 'brain', 'feet', 'feet', 'shot', 'shot'],
  roll: function () {
    return (this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieEleven = {
  color: 'red',
  sides: ['brain', 'feet', 'feet', 'shot', 'shot', 'shot'],
  roll: function () {
    return (this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieTwelve = {
  color: 'red',
  sides: ['brain', 'feet', 'feet', 'shot', 'shot', 'shot'],
  roll: function () {
    return (this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieThirteen = {
  color: 'red',
  sides: ['brain', 'feet', 'feet', 'shot', 'shot', 'shot'],
  roll: function () {
    return (this.sides[(Math.random() * this.sides.length) | 0])
  }
}

// on gamestart, make sure playerHand is empty
// make it playerOne's turn
const startGame = function () {
  display.startGameDisplay()
  playerHand.length = 0
  playerOneTurn = !playerOneTurn
  display.showPlayer(playerOneTurn)
  console.log(playerOneTurn)
  fillCan()
}

const changeTurn = function () {
  display.startTurnDisplay()
  display.showPlayer()
  playerHand.length = 0
  fillCan()
}

// make sure can is empty
// then put the 13 dice in the can
const fillCan = function () {
  console.log(playerOneTurn)
  can.length = 0
  can.push(dieOne)
  can.push(dieTwo)
  can.push(dieThree)
  can.push(dieFour)
  can.push(dieFive)
  can.push(dieSix)
  can.push(dieSeven)
  can.push(dieEight)
  can.push(dieNine)
  can.push(dieTen)
  can.push(dieEleven)
  can.push(dieTwelve)
  can.push(dieThirteen)
  console.log(can)
}

let dieNumber

// checks if you've rolled already this turn
// starts rollDice function if it's your first roll of the turn
const startTurn = function () {
  if (brains === 0 && shots === 0 && feet === 0) {
    rollDice()
  }
}

// take 3 random dice out of the can and put them into the player's hand
const takeDice = function () {
  // pick a random die
  dieNumber = [Math.floor(Math.random() * can.length)]
  console.log(dieNumber)
  // add the die to playerHand
  playerHand.push(can[dieNumber])
  // remove the die from can
  can.splice(dieNumber, 1)
  console.log(can)
  console.log(playerHand)
}

let brains = 0
let feet = 0
let shots = 0

// roll the 3 dice in player's hand
const rollDice = function () {
  display.afterInitialRoll()
  // pull 3 dice from the can
  do {
    takeDice()
  } while (playerHand.length < 3)
  // roll the first die and increase the value of the thing you rolled
  playerHand[2].roll()
  if (playerHand[2].roll() === 'brain') {
    display.findDieImg(playerHand[2], 2, 'brain')
    brains += 1
    document.getElementById('brains').value = brains
    playerHand.pop()
  } else if (playerHand[2].roll() === 'shot') {
    display.findDieImg(playerHand[2], 2, 'shot')
    shots += 1
    document.getElementById('shots').value = shots
    playerHand.pop()
  } else {
    display.findDieImg(playerHand[2], 2, 'feet')
    feet += 1
    document.getElementById('feet').value = feet
  }
  console.log(brains, shots, feet)
  console.log(playerHand)
  // roll the second die and increase the value of the thing you rolled
  playerHand[1].roll()
  if (playerHand[1].roll() === 'brain') {
    display.findDieImg(playerHand[1], 1, 'brain')
    brains += 1
    document.getElementById('brains').value = brains
    playerHand.splice(1, 1)
  } else if (playerHand[1].roll() === 'shot') {
    display.findDieImg(playerHand[1], 1, 'shot')
    shots += 1
    document.getElementById('shots').value = shots
    playerHand.splice(1, 1)
  } else {
    display.findDieImg(playerHand[1], 1, 'feet')
    feet += 1
    document.getElementById('feet').value = feet
  }
  console.log(brains, shots, feet)
  console.log(playerHand)
  // roll the third die and increase the value of the thing you rolled
  playerHand[0].roll()
  if (playerHand[0].roll() === 'brain') {
    display.findDieImg(playerHand[0], 0, 'brain')
    brains += 1
    document.getElementById('brains').value = brains
    playerHand.splice(0, 1)
  } else if (playerHand[0].roll() === 'shot') {
    display.findDieImg(playerHand[0], 0, 'shot')
    shots += 1
    document.getElementById('shots').value = shots
    playerHand.splice(0, 1)
  } else {
    display.findDieImg(playerHand[0], 0, 'feet')
    feet += 1
    document.getElementById('feet').value = feet
  }
  console.log(brains, shots, feet)
  console.log(playerHand)
  checkWinLose()
}

// feet counter goes back to zero
const resetFeet = function () {
  feet = 0
  document.getElementById('feet').value = feet
}

// can only roll again if you've already rolled
const rollAgain = function () {
  if (brains > 0 | shots > 0 | feet > 0) {
    // feet counter goes back to zero
    resetFeet()
    rollDice()
  }
}

// check win/loss conditions
// eating 13 brains wins the game
// getting 3 shots in a turn ends your turn and forfeits your brains for the turn
const checkWinLose = function () {
  if (store.playerOneBrains >= 13 || store.playerTwoBrains >= 13) {
    if (brains >= 13) {
      alert('you ate so many brains! you win!')
      gameOver()
    } else if (shots >= 3) {
      alert('shotgunned! you lose all your brains this turn')
      loseTurn()
    }
  }
}

const resetCounters = function () {
  brains = 0
  document.getElementById('brains').value = brains
  shots = 0
  document.getElementById('shots').value = shots
  feet = 0
  document.getElementById('feet').value = feet
}

store.playerOneBrains = 0
store.playerTwoBrains = 0

// add brains collected this turn to player's total brains this game
const storeBrains = function () {
  console.log(playerOneTurn)
  if (playerOneTurn === true) {
    store.playerOneBrains += brains
  } else if (playerOneTurn === false) {
    store.playerTwoBrains += brains
  } else {
    console.log('error')
    console.log(playerOneTurn)
    console.log(store)
  }
  console.log(store)
  checkWinLose()
}

const loseTurn = function () {
  resetCounters()
  fillCan()
  playerOneTurn = !playerOneTurn
}

const endTurn = function () {
  // save brains, add to player's total brains
  storeBrains()
  // reset current brain/feet/shots counters
  resetCounters()
  // change player
  playerOneTurn = !playerOneTurn
  // swap to other player's turn
  changeTurn()
}

// change display
// anything else need to be done here?
const gameOver = function () {
  display.endedGameDisplay()
}

module.exports = {
  startGame,
  startTurn,
  endTurn,
  rollDice,
  rollAgain
}
