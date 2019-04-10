webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts

__webpack_require__(2);

// styles
__webpack_require__(6);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var gameplay = __webpack_require__(3);

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(function () {
  // your JS code goes here
  $('.playingGame').hide();
  $('#shotgunned').hide();
  $('#brained').hide();
  $('.start').on('click', gameplay.startGame);
  $('.roll').on('click', gameplay.startTurn);
  $('.rollAgain').on('click', gameplay.rollAgain);
  $('.endTurn').on('click', gameplay.endTurn);
  $('#shotgunned').on('click', gameplay.loseTurn);
  $('#brained').on('click', gameplay.gameOver);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var display = __webpack_require__(4);
var store = __webpack_require__(5);

var playerOneTurn = false;

// can is empty until fillCan
var can = [];

// playerHand is empty until takeDice
var playerHand = [];

var shotDice = [];

// 13 dice
// 6 green dice with 3 brains, 1 shot, 2 feet
// 4 yellow dice with 2 brains, 2 shots, 2 feet
// 3 red dice with 1 brain, 3 shots, 2 feet
var dieOne = {
  color: 'green',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function roll() {
    return this.sides[Math.random() * this.sides.length | 0];
  }
};

var dieTwo = {
  color: 'green',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function roll() {
    return this.sides[Math.random() * this.sides.length | 0];
  }
};

var dieThree = {
  color: 'green',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function roll() {
    return this.sides[Math.random() * this.sides.length | 0];
  }
};

var dieFour = {
  color: 'green',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function roll() {
    return this.sides[Math.random() * this.sides.length | 0];
  }
};

var dieFive = {
  color: 'green',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function roll() {
    return this.sides[Math.random() * this.sides.length | 0];
  }
};

var dieSix = {
  color: 'green',
  sides: ['brain', 'brain', 'brain', 'feet', 'feet', 'shot'],
  roll: function roll() {
    return this.sides[Math.random() * this.sides.length | 0];
  }
};

var dieSeven = {
  color: 'yellow',
  sides: ['brain', 'brain', 'feet', 'feet', 'shot', 'shot'],
  roll: function roll() {
    return this.sides[Math.random() * this.sides.length | 0];
  }
};

var dieEight = {
  color: 'yellow',
  sides: ['brain', 'brain', 'feet', 'feet', 'shot', 'shot'],
  roll: function roll() {
    return this.sides[Math.random() * this.sides.length | 0];
  }
};

var dieNine = {
  color: 'yellow',
  sides: ['brain', 'brain', 'feet', 'feet', 'shot', 'shot'],
  roll: function roll() {
    return this.sides[Math.random() * this.sides.length | 0];
  }
};

var dieTen = {
  color: 'yellow',
  sides: ['brain', 'brain', 'feet', 'feet', 'shot', 'shot'],
  roll: function roll() {
    return this.sides[Math.random() * this.sides.length | 0];
  }
};

var dieEleven = {
  color: 'red',
  sides: ['brain', 'feet', 'feet', 'shot', 'shot', 'shot'],
  roll: function roll() {
    return this.sides[Math.random() * this.sides.length | 0];
  }
};

var dieTwelve = {
  color: 'red',
  sides: ['brain', 'feet', 'feet', 'shot', 'shot', 'shot'],
  roll: function roll() {
    return this.sides[Math.random() * this.sides.length | 0];
  }
};

var dieThirteen = {
  color: 'red',
  sides: ['brain', 'feet', 'feet', 'shot', 'shot', 'shot'],
  roll: function roll() {
    return this.sides[Math.random() * this.sides.length | 0];
  }
};

var startGame = function startGame() {
  display.startGameDisplay();
  // on gamestart, make sure playerHand is empty
  playerHand.length = 0;
  // make it playerOne's turn
  playerOneTurn = !playerOneTurn;
  display.showPlayer(playerOneTurn);
  console.log(playerOneTurn);
  // put the dice in the can
  fillCan();
};

var changeTurn = function changeTurn() {
  // swap the players' turns
  playerOneTurn = !playerOneTurn;
  display.startTurnDisplay();
  // show whose turn it is
  display.showPlayer(playerOneTurn);
  // make sure player hand is empty
  playerHand.length = 0;
  // put the dice in the can
  fillCan();
};

// make sure can is empty
// then put the 13 dice in the can
var fillCan = function fillCan() {
  console.log(playerOneTurn);
  can.length = 0;
  can.push(dieOne);
  can.push(dieTwo);
  can.push(dieThree);
  can.push(dieFour);
  can.push(dieFive);
  can.push(dieSix);
  can.push(dieSeven);
  can.push(dieEight);
  can.push(dieNine);
  can.push(dieTen);
  can.push(dieEleven);
  can.push(dieTwelve);
  can.push(dieThirteen);
  console.log(can);
};

var dieNumber = void 0;

// checks if you've rolled already this turn
// starts rollDice function if it's your first roll of the turn
var startTurn = function startTurn() {
  if (brains === 0 && shots === 0 && feet === 0) {
    rollDice();
  } else {
    console.log('error');
  }
};

var takeDice = function takeDice() {
  // if there are no more dice in the can, refill it
  if (can.length === 0) {
    refillCan();
  } else {
    // pick a random die
    dieNumber = [Math.floor(Math.random() * can.length)];
    console.log(dieNumber);
    // add the die to playerHand
    playerHand.push(can[dieNumber]);
    // remove the die from can
    can.splice(dieNumber, 1);
    console.log(can);
    console.log(playerHand);
  }
};

var refillCan = function refillCan() {
  // put dice back in the can
  fillCan();
  // subtract any dice that rolled shots. they stay on the board
  if (shotDice.length !== 0) {
    removeDice();
  }
};

var removeDice = function removeDice() {
  var colorDie = shotDice.length - 1;
  if (shotDice[colorDie].color === 'red') {
    can.pop();
  } else if (shotDice[colorDie].color === 'yellow') {
    can.splice(7, 1);
  } else if (shotDice[colorDie].color === 'green') {
    can.splice(0, 1);
  }
  console.log(can);
};

var brains = 0;
var tempBrains = 0;
var feet = 0;
var shots = 0;

// roll the 3 dice in player's hand
var rollDice = function rollDice() {
  display.afterInitialRoll();
  // pull 3 dice from the can
  do {
    takeDice();
  } while (playerHand.length < 3);
  // roll the first die and increase the value of the thing you rolled
  playerHand[2].roll();
  if (playerHand[2].roll() === 'brain') {
    display.findDieImg(playerHand[2], 2, 'brain');
    brains += 1;
    tempBrains += 1;
    document.getElementById('brains').innerHTML = brains;
    playerHand.pop();
  } else if (playerHand[2].roll() === 'shot') {
    display.findDieImg(playerHand[2], 2, 'shot');
    shots += 1;
    document.getElementById('shots').innerHTML = shots;
    shotDice.push(playerHand[2]);
    playerHand.pop();
  } else {
    display.findDieImg(playerHand[2], 2, 'feet');
    feet += 1;
    document.getElementById('feet').innerHTML = feet;
  }
  console.log(brains, shots, feet);
  console.log(playerHand);
  // roll the second die and increase the value of the thing you rolled
  playerHand[1].roll();
  if (playerHand[1].roll() === 'brain') {
    display.findDieImg(playerHand[1], 1, 'brain');
    brains += 1;
    tempBrains += 1;
    document.getElementById('brains').innerHTML = brains;
    playerHand.splice(1, 1);
  } else if (playerHand[1].roll() === 'shot') {
    display.findDieImg(playerHand[1], 1, 'shot');
    shots += 1;
    document.getElementById('shots').innerHTML = shots;
    shotDice.push(playerHand[1]);
    playerHand.splice(1, 1);
  } else {
    display.findDieImg(playerHand[1], 1, 'feet');
    feet += 1;
    document.getElementById('feet').innerHTML = feet;
  }
  console.log(brains, shots, feet);
  console.log(playerHand);
  // roll the third die and increase the value of the thing you rolled
  playerHand[0].roll();
  if (playerHand[0].roll() === 'brain') {
    display.findDieImg(playerHand[0], 0, 'brain');
    brains += 1;
    tempBrains += 1;
    document.getElementById('brains').innerHTML = brains;
    playerHand.splice(0, 1);
  } else if (playerHand[0].roll() === 'shot') {
    display.findDieImg(playerHand[0], 0, 'shot');
    shots += 1;
    document.getElementById('shots').innerHTML = shots;
    shotDice.push(playerHand[0]);
    playerHand.splice(0, 1);
  } else {
    display.findDieImg(playerHand[0], 0, 'feet');
    feet += 1;
    document.getElementById('feet').innerHTML = feet;
  }
  console.log(brains, tempBrains, shots, feet);
  console.log(playerHand);
  storeBrains();
  checkWinLose();
};

// feet counter goes back to zero
var resetFeet = function resetFeet() {
  feet = 0;
  document.getElementById('feet').innerHTML = feet;
};

// can only roll again if you've already rolled
var rollAgain = function rollAgain() {
  if (brains > 0 | shots > 0 | feet > 0) {
    // feet counter goes back to zero
    resetFeet();
    rollDice();
  }
};

// check win/loss conditions
// eating 13 brains wins the game
// getting 3 shots in a turn ends your turn and forfeits your brains for the turn
var checkWinLose = function checkWinLose() {
  if (store.playerOneBrains >= 13 || store.playerTwoBrains >= 13) {
    display.winner();
    // gameOver()
  } else if (shots >= 3) {
    display.shotgunned();
    subtractBrains();
  }
  tempBrains = 0;
};

var resetCounters = function resetCounters() {
  brains = 0;
  document.getElementById('brains').innerHTML = brains;
  shots = 0;
  document.getElementById('shots').innerHTML = shots;
  feet = 0;
  document.getElementById('feet').innerHTML = feet;
};

store.playerOneBrains = 0;
store.playerTwoBrains = 0;

var subtractBrains = function subtractBrains() {
  console.log('subtractBrains, brains is', brains);
  if (playerOneTurn === true) {
    store.playerOneBrains -= brains;
    document.getElementById('p1Brains').innerHTML = store.playerOneBrains;
  } else if (playerOneTurn === false) {
    store.playerTwoBrains -= brains;
    document.getElementById('p2Brains').innerHTML = store.playerTwoBrains;
  } else {
    console.log('error');
  }
  console.log(store);
};

// add brains collected this turn to player's total brains this game
var storeBrains = function storeBrains() {
  console.log(playerOneTurn);
  console.log(tempBrains);
  if (playerOneTurn === true) {
    store.playerOneBrains += tempBrains;
    document.getElementById('p1Brains').innerHTML = store.playerOneBrains;
  } else if (playerOneTurn === false) {
    store.playerTwoBrains += tempBrains;
    document.getElementById('p2Brains').innerHTML = store.playerTwoBrains;
  } else {
    console.log('error');
  }
  console.log(store);
};

var loseTurn = function loseTurn() {
  resetCounters();
  display.lostTurn();
  changeTurn();
};

var endTurn = function endTurn() {
  // reset current brain/feet/shots counters
  resetCounters();
  // swap to other player's turn
  changeTurn();
};

// change display
// anything else need to be done here?
var gameOver = function gameOver() {
  store.playerOneBrains = 0;
  document.getElementById('p1Brains').innerHTML = store.playerOneBrains;
  store.playerTwoBrains = 0;
  document.getElementById('p2Brains').innerHTML = store.playerTwoBrains;
  display.endedGameDisplay();
};

module.exports = {
  startGame: startGame,
  startTurn: startTurn,
  endTurn: endTurn,
  rollDice: rollDice,
  rollAgain: rollAgain,
  loseTurn: loseTurn,
  gameOver: gameOver
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var num = void 0;

var startGameDisplay = function startGameDisplay() {
  $('.notPlaying').hide();
  $('.firstRoll').show();
  $('.afterFirstRoll').hide();
  $('.players').show();
  document.getElementById('otherText').innerHTML = ', there are 13 dice in the can. Pick 3 at random and roll them.';
};

var showPlayer = function showPlayer(playerOneTurn) {
  if (playerOneTurn === true) {
    document.getElementById('player#').innerHTML = 'Player One';
  } else if (playerOneTurn !== true) {
    document.getElementById('player#').innerHTML = 'Player Two';
  }
};

var startTurnDisplay = function startTurnDisplay() {
  $('.firstRoll').show();
  $('.afterFirstRoll').hide();
  document.getElementById('otherText').innerHTML = ', there are 13 dice in the can. Pick 3 at random and roll them.';
};

var afterInitialRoll = function afterInitialRoll() {
  $('.firstRoll').hide();
  $('.afterFirstRoll').show();
  document.getElementById('otherText').innerHTML = ' rolled';
};

var findDieImg = function findDieImg(playerDie, imgNum, roll) {
  console.log(playerDie);
  num = imgNum + 1;
  if (num === 1) {
    document.getElementById('die3').setAttribute('src', 'https://camcginty.github.io/zombie-dice-client/public/images/' + playerDie.color + roll + '.jpeg');
    document.getElementById('die3').setAttribute('alt', 'die showing ' + playerDie.color + roll);
  } else if (num === 2) {
    document.getElementById('die2').setAttribute('src', 'https://camcginty.github.io/zombie-dice-client/public/images/' + playerDie.color + roll + '.jpeg');
    document.getElementById('die2').setAttribute('alt', 'die showing ' + playerDie.color + roll);
  } else if (num === 3) {
    document.getElementById('die1').setAttribute('src', 'https://camcginty.github.io/zombie-dice-client/public/images/' + playerDie.color + roll + '.jpeg');
    document.getElementById('die1').setAttribute('alt', 'die showing ' + playerDie.color + roll);
  }
};

var shotgunned = function shotgunned() {
  document.getElementById('otherText').innerHTML = ', you were shot 3 times! You lose all your brains this turn.';
  $('#shotgunned').show();
  $('#brainsID').hide();
  $('#shotsID').hide();
  $('#feetID').hide();
  $('#nextMove').hide();
};

var lostTurn = function lostTurn() {
  $('#shotgunned').hide();
  $('#brainsID').show();
  $('#shotsID').show();
  $('#feetID').show();
  $('#nextMove').show();
};

var winner = function winner() {
  document.getElementById('otherText').innerHTML = ', you ate so many brains! What a good zombie!';
  $('#brained').show();
  $('#brainsID').hide();
  $('#shotsID').hide();
  $('#feetID').hide();
  $('#nextMove').hide();
};

var endedGameDisplay = function endedGameDisplay() {
  $('.notPlaying').hide();
  $('.firstRoll').show();
  $('.afterFirstRoll').hide();
};

module.exports = {
  startGameDisplay: startGameDisplay,
  showPlayer: showPlayer,
  startTurnDisplay: startTurnDisplay,
  afterInitialRoll: afterInitialRoll,
  findDieImg: findDieImg,
  shotgunned: shotgunned,
  lostTurn: lostTurn,
  winner: winner,
  endedGameDisplay: endedGameDisplay
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = {};

module.exports = store;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(7);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(11)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(8);
exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "a {\n  color: #34383d; }\n\nbody {\n  background-image: url(" + escape(__webpack_require__(10)) + ");\n  color: #34383d;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 1.5; }\n\nbutton {\n  border: 0;\n  border-radius: 4px;\n  color: #34383d;\n  font-weight: bold;\n  padding: 4px 6px;\n  width: auto; }\n\n#brainsID {\n  margin-bottom: 5px;\n  margin-top: 5px; }\n\n#die1 {\n  height: 50px;\n  width: 50px; }\n\n#die2 {\n  height: 50px;\n  width: 50px; }\n\n#die3 {\n  height: 50px;\n  width: 50px; }\n\n#feetID {\n  margin-bottom: 5px;\n  margin-top: 5px; }\n\n#shotsID {\n  margin-bottom: 5px;\n  margin-top: 5px; }\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "09246ce23f7fb368f56fd37d8b82d5ae.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(12);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
],[1]);