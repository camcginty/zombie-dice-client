'use strict'

const display = require('./display.js')
const store = require('./store.js')

let playerOneTurn = false

// can is empty until fillCan
const can = []

// playerHand is empty until takeDice
const playerHand = []

const shotDice = []

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

const startGame = function () {
  display.startGameDisplay()
  // on gamestart, make sure playerHand is empty
  playerHand.length = 0
  // make it playerOne's turn
  playerOneTurn = !playerOneTurn
  display.showPlayer(playerOneTurn)
  console.log(playerOneTurn)
  // put the dice in the can
  fillCan()
}

const changeTurn = function () {
  // swap the players' turns
  playerOneTurn = !playerOneTurn
  display.startTurnDisplay()
  // show whose turn it is
  display.showPlayer(playerOneTurn)
  // make sure player hand is empty
  playerHand.length = 0
  // put the dice in the can
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
  } else {
    console.log('error')
  }
}

const takeDice = function () {
  // if there are no more dice in the can, refill it
  if (can.length === 0) {
    refillCan()
  } else {
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
}

const refillCan = function () {
  // put dice back in the can
  fillCan()
  // subtract any dice that rolled shots. they stay on the board
  if (shotDice.length !== 0) {
    removeDice()
  }
}

const removeDice = function () {
  const colorDie = shotDice.length - 1
  if (shotDice[colorDie].color === 'red') {
    can.pop()
  } else if (shotDice[colorDie].color === 'yellow') {
    can.splice(7, 1)
  } else if (shotDice[colorDie].color === 'green') {
    can.splice(0, 1)
  }
  console.log(can)
}

let brains = 0
let tempBrains = 0
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
    tempBrains += 1
    document.getElementById('brains').innerHTML = brains
    playerHand.pop()
  } else if (playerHand[2].roll() === 'shot') {
    display.findDieImg(playerHand[2], 2, 'shot')
    shots += 1
    document.getElementById('shots').innerHTML = shots
    shotDice.push(playerHand[2])
    playerHand.pop()
  } else {
    display.findDieImg(playerHand[2], 2, 'feet')
    feet += 1
    document.getElementById('feet').innerHTML = feet
  }
  console.log(brains, shots, feet)
  console.log(playerHand)
  // roll the second die and increase the value of the thing you rolled
  playerHand[1].roll()
  if (playerHand[1].roll() === 'brain') {
    display.findDieImg(playerHand[1], 1, 'brain')
    brains += 1
    tempBrains += 1
    document.getElementById('brains').innerHTML = brains
    playerHand.splice(1, 1)
  } else if (playerHand[1].roll() === 'shot') {
    display.findDieImg(playerHand[1], 1, 'shot')
    shots += 1
    document.getElementById('shots').innerHTML = shots
    shotDice.push(playerHand[1])
    playerHand.splice(1, 1)
  } else {
    display.findDieImg(playerHand[1], 1, 'feet')
    feet += 1
    document.getElementById('feet').innerHTML = feet
  }
  console.log(brains, shots, feet)
  console.log(playerHand)
  // roll the third die and increase the value of the thing you rolled
  playerHand[0].roll()
  if (playerHand[0].roll() === 'brain') {
    display.findDieImg(playerHand[0], 0, 'brain')
    brains += 1
    tempBrains += 1
    document.getElementById('brains').innerHTML = brains
    playerHand.splice(0, 1)
  } else if (playerHand[0].roll() === 'shot') {
    display.findDieImg(playerHand[0], 0, 'shot')
    shots += 1
    document.getElementById('shots').innerHTML = shots
    shotDice.push(playerHand[0])
    playerHand.splice(0, 1)
  } else {
    display.findDieImg(playerHand[0], 0, 'feet')
    feet += 1
    document.getElementById('feet').innerHTML = feet
  }
  console.log(brains, tempBrains, shots, feet)
  console.log(playerHand)
  storeBrains()
  checkWinLose()
}

// feet counter goes back to zero
const resetFeet = function () {
  feet = 0
  document.getElementById('feet').innerHTML = feet
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
    display.winner()
    // gameOver()
  } else if (shots >= 3) {
    display.shotgunned()
    subtractBrains()
  }
  tempBrains = 0
}

const resetCounters = function () {
  brains = 0
  document.getElementById('brains').innerHTML = brains
  shots = 0
  document.getElementById('shots').innerHTML = shots
  feet = 0
  document.getElementById('feet').innerHTML = feet
}

store.playerOneBrains = 0
store.playerTwoBrains = 0

const subtractBrains = function () {
  console.log('subtractBrains, brains is', brains)
  if (playerOneTurn === true) {
    store.playerOneBrains -= brains
    document.getElementById('p1Brains').innerHTML = store.playerOneBrains
  } else if (playerOneTurn === false) {
    store.playerTwoBrains -= brains
    document.getElementById('p2Brains').innerHTML = store.playerTwoBrains
  } else {
    console.log('error')
  }
  console.log(store)
}

// add brains collected this turn to player's total brains this game
const storeBrains = function () {
  console.log(playerOneTurn)
  console.log(tempBrains)
  if (playerOneTurn === true) {
    store.playerOneBrains += tempBrains
    document.getElementById('p1Brains').innerHTML = store.playerOneBrains
  } else if (playerOneTurn === false) {
    store.playerTwoBrains += tempBrains
    document.getElementById('p2Brains').innerHTML = store.playerTwoBrains
  } else {
    console.log('error')
  }
  console.log(store)
}

const loseTurn = function () {
  resetCounters()
  display.lostTurn()
  changeTurn()
}

const endTurn = function () {
  // reset current brain/feet/shots counters
  resetCounters()
  // swap to other player's turn
  changeTurn()
}

// change display
// anything else need to be done here?
const gameOver = function () {
  store.playerOneBrains = 0
  document.getElementById('p1Brains').innerHTML = store.playerOneBrains
  store.playerTwoBrains = 0
  document.getElementById('p2Brains').innerHTML = store.playerTwoBrains
  display.endedGameDisplay()
}

module.exports = {
  startGame,
  startTurn,
  endTurn,
  rollDice,
  rollAgain,
  loseTurn,
  gameOver
}
