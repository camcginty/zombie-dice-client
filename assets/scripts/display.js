
let num

const startGameDisplay = function () {
  $('.notPlaying').hide()
  $('.firstRoll').show()
  $('.afterFirstRoll').hide()
  $('.players').show()
}

const showPlayer = function (playerOneTurn) {
  if (playerOneTurn === true) {
    $('.player1').css('font-size', '28px')
    $('.player2').css('font-size', '20px')
  } else if (playerOneTurn !== true) {
    $('.player1').css('font-size', '20px')
    $('.player2').css('font-size', '28px')
  }
}

const startTurnDisplay = function () {
  $('.firstRoll').show()
  $('.afterFirstRoll').hide()
}

const afterInitialRoll = function () {
  $('.firstRoll').hide()
  $('.afterFirstRoll').show()
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
  endedGameDisplay
}
