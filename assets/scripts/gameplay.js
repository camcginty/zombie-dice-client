
// can is empty until startGame
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

// on gamestart, make sure can and playerHand are empty
// put the 13 dice in the can
const startGame = function () {
  playerHand.length = 0
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
  // pull 3 dice from the can
  do {
    takeDice()
  } while (playerHand.length < 3)
  // roll the first die and increase the value of the thing you rolled
  playerHand[2].roll()
  if (playerHand[2].roll() === 'brain') {
    brains += 1
    document.getElementById('brains').value = brains
    playerHand.pop()
  } else if (playerHand[2].roll() === 'shot') {
    shots += 1
    document.getElementById('shots').value = shots
    playerHand.pop()
  } else {
    feet += 1
    document.getElementById('feet').value = feet
  }
  console.log(brains, shots, feet)
  console.log(playerHand)
  // roll the second die and increase the value of the thing you rolled
  playerHand[1].roll()
  if (playerHand[1].roll() === 'brain') {
    brains += 1
    document.getElementById('brains').value = brains
    playerHand.splice(1, 1)
  } else if (playerHand[1].roll() === 'shot') {
    shots += 1
    document.getElementById('shots').value = shots
    playerHand.splice(1, 1)
  } else {
    feet += 1
    document.getElementById('feet').value = feet
  }
  console.log(brains, shots, feet)
  console.log(playerHand)
  // roll the third die and increase the value of the thing you rolled
  playerHand[0].roll()
  if (playerHand[0].roll() === 'brain') {
    brains += 1
    document.getElementById('brains').value = brains
    playerHand.splice(0, 1)
  } else if (playerHand[0].roll() === 'shot') {
    shots += 1
    document.getElementById('shots').value = shots
    playerHand.splice(0, 1)
  } else {
    feet += 1
    document.getElementById('feet').value = feet
  }
  console.log(brains, shots, feet)
  console.log(playerHand)
  checkWinLose()
}

const resetFeet = function () {
  feet = 0
  document.getElementById('feet').value = feet
}

const rollAgain = function () {
  if (brains > 0 | shots > 0 | feet > 0) {
    resetFeet()
    rollDice()
  }
}

const checkWinLose = function () {
  if (brains >= 13) {
    alert('you ate so many brains! you win!')
  } else if (shots >= 3) {
    alert('shotgunned! you lose all your brains this turn')
  }
}

module.exports = {
  startGame,
  rollDice,
  rollAgain
}
