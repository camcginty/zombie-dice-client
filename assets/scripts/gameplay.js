// 13 dice
// 6 green dice with 3 brains, 1 shot, 2 feet
// 4 yellow dice with 2 brains, 2 shots, 2 feet
// 3 red dice with 1 brain, 3 shots, 2 feet

const can = []

const playerHand = []

const dieOne = {
  color: 'blue',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function () {
    return this.sides[(Math.random() * this.sides.length) | 0]
  }
}

const dieTwo = {
  color: 'green',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function () {
    console.log(this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieThree = {
  color: 'green',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function () {
    console.log(this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieFour = {
  color: 'green',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function () {
    console.log(this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieFive = {
  color: 'green',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function () {
    console.log(this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieSix = {
  color: 'green',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function () {
    console.log(this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieSeven = {
  color: 'yellow',
  sides: ['brain', 'brain', 'feet', 'feet', 'shot', 'shot'],
  roll: function () {
    console.log(this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieEight = {
  color: 'yellow',
  sides: ['brain', 'brain', 'feet', 'feet', 'shot', 'shot'],
  roll: function () {
    console.log(this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieNine = {
  color: 'yellow',
  sides: ['brain', 'brain', 'feet', 'feet', 'shot', 'shot'],
  roll: function () {
    console.log(this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieTen = {
  color: 'yellow',
  sides: ['brain', 'brain', 'feet', 'feet', 'shot', 'shot'],
  roll: function () {
    console.log(this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieEleven = {
  color: 'red',
  sides: ['brain', 'feet', 'feet', 'shot', 'shot', 'shot'],
  roll: function () {
    console.log(this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieTwelve = {
  color: 'red',
  sides: ['brain', 'feet', 'feet', 'shot', 'shot', 'shot'],
  roll: function () {
    console.log(this.sides[(Math.random() * this.sides.length) | 0])
  }
}

const dieThirteen = {
  color: 'red',
  sides: ['brain', 'feet', 'feet', 'shot', 'shot', 'shot'],
  roll: function () {
    console.log(this.sides[(Math.random() * this.sides.length) | 0])
  }
}

// on gamestart, put the 13 dice in the can
const startGame = function () {
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
  dieNumber = [Math.floor(Math.random() * can.length)]
  console.log(dieNumber)
  playerHand.push(can[dieNumber])
  can.splice(dieNumber, 1)
  console.log(can)
  console.log(playerHand)

  dieNumber = [Math.floor(Math.random() * can.length)]
  playerHand.push(can[dieNumber])
  can.splice(dieNumber, 1)
  console.log(can)
  console.log(playerHand)

  dieNumber = [Math.floor(Math.random() * can.length)]
  playerHand.push(can[dieNumber])
  can.splice(dieNumber, 1)
  console.log(can)
  console.log(playerHand)
}

// roll 3 dice in player's hand
const rollDice = function () {
  takeDice()
  console.log(playerHand[0].roll())
  console.log(playerHand[1].roll())
  console.log(playerHand[2].roll())
}

module.exports = {
  startGame,
  rollDice
}
