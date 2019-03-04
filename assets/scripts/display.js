
let color
let num
let roll

const findDieImg = function (playerDie, imgNum, rolled) {
  console.log(playerDie)
  if (playerDie.color === 'green') {
    color = 'green'
  } else if (playerDie.color === 'yellow') {
    color = 'yellow'
  } else {
    color = 'red'
  }
  num = imgNum + 1
  roll = rolled
  console.log(color, num, roll)
  setDieImg(color, num, roll)
}

let imgName

const setDieImg = function (color, num, roll) {
  if (num === 3) {
    imgName = '../../public/images/' + color + roll + '.jpeg'
    document.getElementById('die3').setAttribute('src', imgName)
    console.log(color + roll)
  } else if (num === 2) {
    imgName = '../../public/images/' + color + roll + '.jpeg'
    document.getElementById('die2').setAttribute('src', imgName)
  } else if (num === 1) {
    imgName = '../../public/images/' + color + roll + '.jpeg'
    document.getElementById('die1').setAttribute('src', imgName)
  }
}

module.exports = {
  findDieImg
}
