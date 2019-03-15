
let num

const startGameDisplay = function () {
  $('.notPlaying').hide()
  $('.firstRoll').show()
  $('.afterFirstRoll').hide()
  $('.players').show()
  document.getElementById('otherText').innerHTML = ', there are 13 dice in the can. Pick 3 at random and roll them.'
}

const showPlayer = function (playerOneTurn) {
  if (playerOneTurn === true) {
    document.getElementById('player#').innerHTML = 'Player One'
  } else if (playerOneTurn !== true) {
    document.getElementById('player#').innerHTML = 'Player Two'
  }
}

const startTurnDisplay = function () {
  $('.firstRoll').show()
  $('.afterFirstRoll').hide()
  document.getElementById('otherText').innerHTML = ', there are 13 dice in the can. Pick 3 at random and roll them.'
}

const afterInitialRoll = function () {
  $('.firstRoll').hide()
  $('.afterFirstRoll').show()
  document.getElementById('otherText').innerHTML = ' rolled'
}

const findDieImg = function (playerDie, imgNum, roll) {
  console.log(playerDie)
  num = imgNum + 1
  if (num === 1) {
    document.getElementById('die3').setAttribute('src', '../../public/images/' + playerDie.color + roll + '.jpeg')
    document.getElementById('die3').setAttribute('alt', 'die showing ' + playerDie.color + roll)
  } else if (num === 2) {
    document.getElementById('die2').setAttribute('src', '../../public/images/' + playerDie.color + roll + '.jpeg')
    document.getElementById('die2').setAttribute('alt', 'die showing ' + playerDie.color + roll)
  } else if (num === 3) {
    document.getElementById('die1').setAttribute('src', '../../public/images/' + playerDie.color + roll + '.jpeg')
    document.getElementById('die1').setAttribute('alt', 'die showing ' + playerDie.color + roll)
  }
}

const shotgunned = function () {
  document.getElementById('otherText').innerHTML = ', you were shot 3 times! You lose all your brains this turn.'
  $('#shotgunned').show()
  $('#brainsID').hide()
  $('#shotsID').hide()
  $('#feetID').hide()
  $('#nextMove').hide()
}

const lostTurn = function () {
  $('#shotgunned').hide()
  $('#brainsID').show()
  $('#shotsID').show()
  $('#feetID').show()
  $('#nextMove').show()
}

const winner = function () {
  document.getElementById('otherText').innerHTML = ', you ate so many brains! What a good zombie!'
  $('#brained').show()
  $('#brainsID').hide()
  $('#shotsID').hide()
  $('#feetID').hide()
  $('#nextMove').hide()
}

const endedGameDisplay = function () {
  $('.notPlaying').hide()
  $('.firstRoll').show()
  $('.afterFirstRoll').hide()
}

module.exports = {
  startGameDisplay,
  showPlayer,
  startTurnDisplay,
  afterInitialRoll,
  findDieImg,
  shotgunned,
  lostTurn,
  winner,
  endedGameDisplay
}
