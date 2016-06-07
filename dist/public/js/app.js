(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Animal.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The critters that Trump tries to stop from getting the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Animal = function (_Character) {
  _inherits(Animal, _Character);

  function Animal(config) {
    _classCallCheck(this, Animal);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Animal).call(this, config));
  }

  return Animal;
}(_Character3.default);

exports.default = Animal;

},{"./Character.js":6,"./GamePiece.js":10}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AnimalArea.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The region animals move through to get to Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Cage = function (_Area) {
  _inherits(Cage, _Area);

  function Cage(config) {
    _classCallCheck(this, Cage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Cage).call(this, config));
  }

  return Cage;
}(_Area3.default);

exports.default = Cage;

},{"./Area.js":3,"./GamePiece.js":10}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Area.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A generic region of the game screen.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Area = function (_GamePiece) {
  _inherits(Area, _GamePiece);

  function Area(config) {
    _classCallCheck(this, Area);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Area).call(this, config));
  }

  return Area;
}(_GamePiece3.default);

exports.default = Area;

},{"./GamePiece.js":10}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Bear.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Tiger, who tries to get the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Bear = function (_Animal) {
  _inherits(Bear, _Animal);

  function Bear(config) {
    _classCallCheck(this, Bear);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Bear).call(this, config));
  }

  return Bear;
}(_Animal3.default);

exports.default = Bear;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":10}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The region where animals are caged.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Cage = function (_Area) {
  _inherits(Cage, _Area);

  function Cage(config) {
    _classCallCheck(this, Cage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Cage).call(this, config));
  }

  return Cage;
}(_Area3.default);

exports.default = Cage;

},{"./Area.js":3,"./GamePiece.js":10}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Character.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game-generated or user avatars
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Character = function (_GamePiece) {
  _inherits(Character, _GamePiece);

  function Character(config) {
    _classCallCheck(this, Character);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Character).call(this, config));
  }

  _createClass(Character, [{
    key: 'update',
    value: function update() {}
  }, {
    key: 'draw',
    value: function draw() {}
  }]);

  return Character;
}(_GamePiece3.default); // end of class


exports.default = Character;

},{"./GamePiece.js":10}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text2 = require('./Text.js');

var _Text3 = _interopRequireDefault(_Text2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * DynamicText.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text that can be changed by user (e.g. input field), or 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * updated by the game itself.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var DynamicText = function (_Text) {
  _inherits(DynamicText, _Text);

  function DynamicText(config) {
    _classCallCheck(this, DynamicText);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DynamicText).call(this, config));
  }

  return DynamicText;
}(_Text3.default);

exports.default = DynamicText;

},{"./GamePiece.js":10,"./Info.js":15,"./Text.js":24}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * EndScreen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Ending screen for the game.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits Screen, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var EndScreen = function (_Screen) {
  _inherits(EndScreen, _Screen);

  function EndScreen(config) {
    _classCallCheck(this, EndScreen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(EndScreen).call(this, config));
  }

  return EndScreen;
}(_Screen3.default);

exports.default = EndScreen;

},{"./GamePiece.js":10,"./Screen.js":21}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

var _Screen = require('./Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('./StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('./GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _EndScreen = require('./EndScreen.js');

var _EndScreen2 = _interopRequireDefault(_EndScreen);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText = require('./StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Identity = require('./Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Instructions = require('./Instructions.js');

var _Instructions2 = _interopRequireDefault(_Instructions);

var _DynamicText = require('./DynamicText.js');

var _DynamicText2 = _interopRequireDefault(_DynamicText);

var _Score = require('./Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Trump = require('./Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

var _Animal = require('./Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

var _Lion = require('./Lion.js');

var _Lion2 = _interopRequireDefault(_Lion);

var _Tiger = require('./Tiger.js');

var _Tiger2 = _interopRequireDefault(_Tiger);

var _Bear = require('./Bear.js');

var _Bear2 = _interopRequireDefault(_Bear);

var _Gorilla = require('./Gorilla.js');

var _Gorilla2 = _interopRequireDefault(_Gorilla);

var _Health = require('./Health.js');

var _Health2 = _interopRequireDefault(_Health);

var _Area = require('./Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _AnimalArea = require('./AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('./PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The entire Game object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


//Screen inheritance


//Info inheritance


//Character inheritance


//Area inheritance.


var Game = function (_GamePiece) {
	_inherits(Game, _GamePiece);

	function Game(config) {
		_classCallCheck(this, Game);

		// Store the Ids of the DOM elements

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Game).call(this, config));

		_this.screenNames = {
			START_SCREEN: 'start-screen',
			GAME_SCREEN: 'game-screen',
			END_SCREEN: 'end-screen'
		};

		// Warning
		_this.warning = 'This game belongs to us, and nobody else.';

		//game reverts to StartScreen if unplayed
		_this.TIMEOUT = 5;

		//State object
		_this.screens = [];
		_this.displayCharacters = [];
		_this.displayInfo = [];

		_this.init();

		_this.loadGame();

		return _this;
	} //end of constructor

	_createClass(Game, [{
		key: 'init',
		value: function init() {
			this.screens[this.screenNames.START_SCREEN] = new _StartScreen2.default({ name: "Start Screen", id: this.screenNames.START_SCREEN, game: this });
			this.screens[this.screenNames.GAME_SCREEN] = new _GameScreen2.default({ name: "Game Screen", id: this.screenNames.GAME_SCREEN, game: this });
			this.screens[this.screenNames.END_SCREEN] = new _EndScreen2.default({ name: "End Screen", id: this.screenNames.END_SCREEN, game: this });
			this.state = this.screenNames.START_SCREEN;
		}
	}, {
		key: 'loadGame',
		value: function loadGame() {
			console.log('loading start screen');
			this.screens[this.screenNames.START_SCREEN].showScreen();
		}
	}, {
		key: 'startGame',
		value: function startGame() {}
	}, {
		key: 'endGame',
		value: function endGame() {}
	}, {
		key: 'elapsed',
		value: function elapsed() {}
	}, {
		key: 'checkIfComplete',
		value: function checkIfComplete() {}
	}, {
		key: 'update',
		value: function update() {}
	}, {
		key: 'draw',
		value: function draw() {}
	}, {
		key: 'gameLoop',
		value: function gameLoop() {}
	}]);

	return Game;
}(_GamePiece3.default); // end of class.


exports.default = Game;

},{"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":4,"./Cage.js":5,"./Character.js":6,"./DynamicText.js":7,"./EndScreen.js":8,"./GamePiece.js":10,"./GameScreen.js":11,"./Gorilla.js":12,"./Health.js":13,"./Identity.js":14,"./Info.js":15,"./Instructions.js":16,"./Lion.js":17,"./Player.js":18,"./PlayerArea.js":19,"./Score.js":20,"./Screen.js":21,"./StartScreen.js":22,"./StaticText.js":23,"./Text.js":24,"./Tiger.js":25,"./Trump.js":26}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * GamePiece.js
 * Basic Game object
 *
 * To make this work, you must be running the Babel transpiler, 
 * and watching for changes in this file with browserify. Two 
 * Terminal windows need to be open:
 * 1. one window where you typed the command "grunt"
 * 2. one window where you typed the command "npm start"
 */

var GamePiece = function () {
  function GamePiece(config) {
    _classCallCheck(this, GamePiece);

    //TODO: use super();
    this.name = config.name;
    this.uuid = this.setId();
  }

  /** 
   * Generate a unique ID for every game object.
   * @link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
   */


  _createClass(GamePiece, [{
    key: 'setId',
    value: function setId() {
      var d = new Date().getTime();
      if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
      }
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
      });
      return uuid;
    }

    /** 
     * Return the Class name of this object.
     */

  }, {
    key: 'getClass',
    value: function getClass() {
      return this.constructor.name; /* ES6 feature */
    }

    /** 
     * Return the given name of this object.
     */

  }, {
    key: 'getName',
    value: function getName() {
      return this.name;
    }

    /** 
     * Return the unique id of this object.
     */

  }, {
    key: 'getId',
    value: function getId() {
      return this.uuid;
    }

    /** 
     * Return the bounding box (Rect) for this object onscreen.
     */

  }, {
    key: 'getCollisionRect',
    value: function getCollisionRect() {}

    /** 
     * Return the box (Rect) for a container object.
     */

  }, {
    key: 'getBoundsRect',
    value: function getBoundsRect() {}

    /** 
     * Update the object. Override in sub-classes
     */

  }, {
    key: 'update',
    value: function update() {}

    /** 
     * Draw the object. Override in sub-classes.
     */

  }, {
    key: 'draw',
    value: function draw() {}
  }]);

  return GamePiece;
}(); // end of class


exports.default = GamePiece;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * GameScreen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Main game screen object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Screen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var GameScreen = function (_Screen) {
  _inherits(GameScreen, _Screen);

  function GameScreen(config) {
    _classCallCheck(this, GameScreen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GameScreen).call(this, config));
  }

  return GameScreen;
}(_Screen3.default);

exports.default = GameScreen;

},{"./GamePiece.js":10,"./Screen.js":21}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Gorilla.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Gorilla, who tries to get the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Gorilla = function (_Animal) {
  _inherits(Gorilla, _Animal);

  function Gorilla(config) {
    _classCallCheck(this, Gorilla);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Gorilla).call(this, config));
  }

  return Gorilla;
}(_Animal3.default);

exports.default = Gorilla;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":10}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Health.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The critters that Trump tries to stop from getting the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Health = function (_Character) {
  _inherits(Health, _Character);

  function Health(config) {
    _classCallCheck(this, Health);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Health).call(this, config));
  }

  return Health;
}(_Character3.default);

exports.default = Health;

},{"./Character.js":6,"./GamePiece.js":10}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText2 = require('./StaticText.js');

var _StaticText3 = _interopRequireDefault(_StaticText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Identity.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game Logos, LogoTypes, Brand Name
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Identity = function (_StaticText) {
  _inherits(Identity, _StaticText);

  function Identity(config) {
    _classCallCheck(this, Identity);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Identity).call(this, config));
  }

  return Identity;
}(_StaticText3.default);

exports.default = Identity;

},{"./GamePiece.js":10,"./Info.js":15,"./StaticText.js":23,"./Text.js":24}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Info.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Generic informaiton object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Info = function (_GamePiece) {
  _inherits(Info, _GamePiece);

  function Info(config) {
    _classCallCheck(this, Info);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Info).call(this, config));
  }

  return Info;
}(_GamePiece3.default);

exports.default = Info;

},{"./GamePiece.js":10}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText2 = require('./StaticText.js');

var _StaticText3 = _interopRequireDefault(_StaticText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Instructions.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text which tells the Player how to play the game.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Instructions = function (_StaticText) {
  _inherits(Instructions, _StaticText);

  function Instructions(config) {
    _classCallCheck(this, Instructions);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Instructions).call(this, config));
  }

  return Instructions;
}(_StaticText3.default);

exports.default = Instructions;

},{"./GamePiece.js":10,"./Info.js":15,"./StaticText.js":23,"./Text.js":24}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Lion.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Lion, who tries to get the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Lion = function (_Animal) {
  _inherits(Lion, _Animal);

  function Lion(config) {
    _classCallCheck(this, Lion);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Lion).call(this, config));
  }

  return Lion;
}(_Animal3.default);

exports.default = Lion;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":10}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Player.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * User-controlled Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Player = function (_Character) {
  _inherits(Player, _Character);

  function Player(config) {
    _classCallCheck(this, Player);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, config));
  }

  return Player;
}(_Character3.default);

exports.default = Player;

},{"./Character.js":6,"./GamePiece.js":10}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * PlayerArea.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The region where the Player can move.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var PlayerArea = function (_Area) {
  _inherits(PlayerArea, _Area);

  function PlayerArea(config) {
    _classCallCheck(this, PlayerArea);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PlayerArea).call(this, config));
  }

  return PlayerArea;
}(_Area3.default);

exports.default = PlayerArea;

},{"./Area.js":3,"./GamePiece.js":10}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _DynamicText2 = require('./DynamicText.js');

var _DynamicText3 = _interopRequireDefault(_DynamicText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Score.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Display user score
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits DynamicText, Text, Info, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Score = function (_DynamicText) {
  _inherits(Score, _DynamicText);

  function Score(config) {
    _classCallCheck(this, Score);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Score).call(this, config));
  }

  return Score;
}(_DynamicText3.default);

exports.default = Score;

},{"./DynamicText.js":7,"./GamePiece.js":10,"./Info.js":15,"./Text.js":24}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Screen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Generic Screen object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Screen = function (_GamePiece) {
  _inherits(Screen, _GamePiece);

  function Screen(config) {
    _classCallCheck(this, Screen);

    //init 'parent' GamePiece

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Screen).call(this, config));

    _this.game = config.game;
    _this.screenId = config.id; // id of HTML <div> to use.
    window.config = config; //TEMPORARY DEBUG
    _this.loadScreen(); //grab the <div> with the config.id
    return _this;
  }

  _createClass(Screen, [{
    key: 'loadScreen',
    value: function loadScreen() {
      console.log('loading div id:' + this.screenId);
      this.dom = document.getElementById(this.screenId);
    }
  }, {
    key: 'showScreen',
    value: function showScreen() {
      this.dom.style.display = 'block';
    }
  }, {
    key: 'hideScreen',
    value: function hideScreen() {
      this.dom.style.display = 'none';
    }
  }, {
    key: 'showHeader',
    value: function showHeader() {
      this.dom.querySelector('.header').style.display = 'block';
    }
  }, {
    key: 'showFooter',
    value: function showFooter() {
      this.dom.querySelector('.footer').style.display = 'block';
    }
  }, {
    key: 'hideHeader',
    value: function hideHeader() {
      this.dom.querySelector('.header').style.display = 'none';
    }
  }, {
    key: 'hideFooter',
    value: function hideFooter() {
      this.dom.querySelector('.footer').style.display = 'none';
    }
  }, {
    key: 'addWarning',
    value: function addWarning() {
      this.dom.querySelector('.footer').innerHTML = this.game.warning;
    }
  }]);

  return Screen;
}(_GamePiece3.default); // end of class.


exports.default = Screen;

},{"./GamePiece.js":10}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StartScreen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Opening screen for game.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Screen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StartScreen = function (_Screen) {
  _inherits(StartScreen, _Screen);

  function StartScreen(config) {
    _classCallCheck(this, StartScreen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(StartScreen).call(this, config));
  }

  return StartScreen;
}(_Screen3.default);

exports.default = StartScreen;

},{"./GamePiece.js":10,"./Screen.js":21}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text2 = require('./Text.js');

var _Text3 = _interopRequireDefault(_Text2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StaticText.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text that cannot be changed after loaded by the game
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StaticText = function (_Text) {
  _inherits(StaticText, _Text);

  function StaticText(config) {
    _classCallCheck(this, StaticText);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(StaticText).call(this, config));
  }

  return StaticText;
}(_Text3.default);

exports.default = StaticText;

},{"./GamePiece.js":10,"./Info.js":15,"./Text.js":24}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info2 = require('./Info.js');

var _Info3 = _interopRequireDefault(_Info2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Creates a text-type Info object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits Info, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Text = function (_Info) {
  _inherits(Text, _Info);

  function Text(config) {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Text).call(this, config));
  }

  return Text;
}(_Info3.default);

exports.default = Text;

},{"./GamePiece.js":10,"./Info.js":15}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Tiger.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Tiger, who tries to get the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Tiger = function (_Animal) {
  _inherits(Tiger, _Animal);

  function Tiger(config) {
    _classCallCheck(this, Tiger);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tiger).call(this, config));
  }

  return Tiger;
}(_Animal3.default);

exports.default = Tiger;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":10}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Trump.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The ball-like Character you kick into Animals
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Trump = function (_Character) {
  _inherits(Trump, _Character);

  function Trump(config) {
    _classCallCheck(this, Trump);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Trump).call(this, config));
  }

  return Trump;
}(_Character3.default);

exports.default = Trump;

},{"./Character.js":6,"./GamePiece.js":10}],27:[function(require,module,exports){
'use strict';

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Game = require('./Game.js');

var _Game2 = _interopRequireDefault(_Game);

var _Screen = require('./Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('./StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('./GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _EndScreen = require('./EndScreen.js');

var _EndScreen2 = _interopRequireDefault(_EndScreen);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText = require('./StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Identity = require('./Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Instructions = require('./Instructions.js');

var _Instructions2 = _interopRequireDefault(_Instructions);

var _DynamicText = require('./DynamicText.js');

var _DynamicText2 = _interopRequireDefault(_DynamicText);

var _Score = require('./Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Trump = require('./Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

var _Animal = require('./Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

var _Lion = require('./Lion.js');

var _Lion2 = _interopRequireDefault(_Lion);

var _Tiger = require('./Tiger.js');

var _Tiger2 = _interopRequireDefault(_Tiger);

var _Bear = require('./Bear.js');

var _Bear2 = _interopRequireDefault(_Bear);

var _Gorilla = require('./Gorilla.js');

var _Gorilla2 = _interopRequireDefault(_Gorilla);

var _Health = require('./Health.js');

var _Health2 = _interopRequireDefault(_Health);

var _Area = require('./Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _AnimalArea = require('./AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('./PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

var _Tests = require('../../tests/Tests.js');

var _Tests2 = _interopRequireDefault(_Tests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 
 * Set up tests.
 */


//Character inheritance


//The entire game
var myTests = new _Tests2.default();

/**
 * Set up the Game
 */


//Test file (very simple testrunner)


//Area inheritance.


//Info inheritance


//Screen inheritance
/** 
 * Create the game. Import the primary classes, and 'composite' 
 * the overall Game object out of instances of the classes.
 */
var myGame = new _Game2.default({ name: "ZooKillSoccer" });

/** 
 * EXPORT TO WEB CONSOLE
 * To make something visible in Web console for debuggint, attach to window object
 * NOTE: Professional code uses specialized testing modules like Mocha, Karma, and 
 * similar testing libraries.
 */

// we can run this test manually with tests.run();
window.tests = myTests;

// make the game object visible so we can inspect it.
window.game = myGame;

console.log('ZOOKILLSOCCER Game initialized. Access game via "game". Use Tests.run() to test.');

},{"../../tests/Tests.js":28,"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":4,"./Cage.js":5,"./Character.js":6,"./DynamicText.js":7,"./EndScreen.js":8,"./Game.js":9,"./GamePiece.js":10,"./GameScreen.js":11,"./Gorilla.js":12,"./Health.js":13,"./Identity.js":14,"./Info.js":15,"./Instructions.js":16,"./Lion.js":17,"./Player.js":18,"./PlayerArea.js":19,"./Score.js":20,"./Screen.js":21,"./StartScreen.js":22,"./StaticText.js":23,"./Text.js":24,"./Tiger.js":25,"./Trump.js":26}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

//The entire game


//Screen inheritance


//Info inheritance


//Character inheritance


//Area inheritance.


var _GamePiece = require('../modules/js/GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Game = require('../modules/js/Game.js');

var _Game2 = _interopRequireDefault(_Game);

var _Screen = require('../modules/js/Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('../modules/js/StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('../modules/js/GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _EndScreen = require('../modules/js/EndScreen.js');

var _EndScreen2 = _interopRequireDefault(_EndScreen);

var _Info = require('../modules/js/Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('../modules/js/Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText = require('../modules/js/StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Identity = require('../modules/js/Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Instructions = require('../modules/js/Instructions.js');

var _Instructions2 = _interopRequireDefault(_Instructions);

var _DynamicText = require('../modules/js/DynamicText.js');

var _DynamicText2 = _interopRequireDefault(_DynamicText);

var _Score = require('../modules/js/Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _Character = require('../modules/js/Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Trump = require('../modules/js/Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('../modules/js/Player.js');

var _Player2 = _interopRequireDefault(_Player);

var _Animal = require('../modules/js/Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

var _Lion = require('../modules/js/Lion.js');

var _Lion2 = _interopRequireDefault(_Lion);

var _Tiger = require('../modules/js/Tiger.js');

var _Tiger2 = _interopRequireDefault(_Tiger);

var _Bear = require('../modules/js/Bear.js');

var _Bear2 = _interopRequireDefault(_Bear);

var _Gorilla = require('../modules/js/Gorilla.js');

var _Gorilla2 = _interopRequireDefault(_Gorilla);

var _Health = require('../modules/js/Health.js');

var _Health2 = _interopRequireDefault(_Health);

var _Area = require('../modules/js/Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _Cage = require('../modules/js/Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _AnimalArea = require('../modules/js/AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('../modules/js/PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * TESTBED - Test all our objects. This is a very basic testing system. 
 * NOTE: Professional code uses testing libraries like Karma and Mocha.
 */

var Tests = function () {
	function Tests() {
		_classCallCheck(this, Tests);
	}

	// Because we make these objects with 'var' they are scoped to the run() function.


	_createClass(Tests, [{
		key: 'run',
		value: function run() {

			var config = { name: 'Forest Trump or Donald Gump rulz' };

			// Make some test game objects
			var game = new _Game2.default(config);
			console.log(game.getName());

			//test Game Object
			var myGame = new _Game2.default({ name: "ZooKillSoccer" });
			console.log(myGame.getName());

			//other objects
			var myScreen = new _Screen2.default({ name: "Opening Screen" });
			console.log(myScreen.getName());

			var myStartScreen = new _StartScreen2.default({ name: "Start Screen" });
			console.log(myStartScreen.getName());

			var myGameScreen = new _GameScreen2.default({ name: "Game Screen" });
			console.log(myGameScreen.getName());

			var myEndScreen = new _EndScreen2.default({ name: "End Screen" });
			console.log(myEndScreen.getName());

			var myInfo = new _Info2.default({ name: "Generic Information" });
			console.log(myInfo.getName());

			var myText = new _Text2.default({ name: "Generic Text Object" });
			console.log(myText.getName());

			var myStaticText = new _StaticText2.default({ name: "Generic Static Text Object" });
			console.log(myStaticText.getName());

			var myIdentity = new _Identity2.default({ name: "Generic Identity Object" });
			console.log(myIdentity.getName());

			var myInstructions = new _Instructions2.default({ name: "Generic Instructions Object" });
			console.log(myInstructions.getName());

			var myDynamicText = new _DynamicText2.default({ name: "Generic Dynamic Text Object" });
			console.log(myDynamicText.getName());

			var myScore = new _Score2.default({ name: "scores..." });
			console.log(myScore.getName());

			var myCharacter = new _Character2.default({ name: "Generic Character" });
			console.log(myCharacter.getName());

			var myTrump = new _Trump2.default({ name: "Donald Trump" });
			console.log(myTrump.getName());

			var myPlayer = new _Player2.default({ name: "End User" });
			console.log(myPlayer.getName());

			var myAnimal = new _Animal2.default({ name: "Generic Animal" });
			console.log(myAnimal.getName());

			var myLion = new _Lion2.default({ name: "Cowardly the Lion" });
			console.log(myLion.getName());

			var myTiger = new _Tiger2.default({ name: "Chomper the Tiger" });
			console.log(myTiger.getName());

			var myBear = new _Bear2.default({ name: "Mauler the Bear" });
			console.log(myBear.getName());

			var myGorilla = new _Gorilla2.default({ name: "Spunky the Gorilla" });
			console.log(myGorilla.getName());

			var myHealth = new _Health2.default({ name: "One Health Kit" });
			console.log(myHealth.getName());

			//Area inheritance.
			var myArea = new _Area2.default({ name: "Generic Area" });
			console.log(myArea.getName());

			var myCage = new _Cage2.default({ name: "Generic Area" });
			console.log(myCage.getName());

			var myAnimalArea = new _AnimalArea2.default({ name: "AnimalArea" });
			console.log(myAnimalArea.getName());

			var myPlayerArea = new _PlayerArea2.default({ name: "PlayerArea" });
			console.log(myPlayerArea.getName());
		}
	}]);

	return Tests;
}();

exports.default = Tests;

},{"../modules/js/Animal.js":1,"../modules/js/AnimalArea.js":2,"../modules/js/Area.js":3,"../modules/js/Bear.js":4,"../modules/js/Cage.js":5,"../modules/js/Character.js":6,"../modules/js/DynamicText.js":7,"../modules/js/EndScreen.js":8,"../modules/js/Game.js":9,"../modules/js/GamePiece.js":10,"../modules/js/GameScreen.js":11,"../modules/js/Gorilla.js":12,"../modules/js/Health.js":13,"../modules/js/Identity.js":14,"../modules/js/Info.js":15,"../modules/js/Instructions.js":16,"../modules/js/Lion.js":17,"../modules/js/Player.js":18,"../modules/js/PlayerArea.js":19,"../modules/js/Score.js":20,"../modules/js/Screen.js":21,"../modules/js/StartScreen.js":22,"../modules/js/StaticText.js":23,"../modules/js/Text.js":24,"../modules/js/Tiger.js":25,"../modules/js/Trump.js":26}]},{},[27])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyIsIm1vZHVsZXMvanMvQXJlYS5qcyIsIm1vZHVsZXMvanMvQmVhci5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvQ2hhcmFjdGVyLmpzIiwibW9kdWxlcy9qcy9EeW5hbWljVGV4dC5qcyIsIm1vZHVsZXMvanMvRW5kU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9HYW1lLmpzIiwibW9kdWxlcy9qcy9HYW1lUGllY2UuanMiLCJtb2R1bGVzL2pzL0dhbWVTY3JlZW4uanMiLCJtb2R1bGVzL2pzL0dvcmlsbGEuanMiLCJtb2R1bGVzL2pzL0hlYWx0aC5qcyIsIm1vZHVsZXMvanMvSWRlbnRpdHkuanMiLCJtb2R1bGVzL2pzL0luZm8uanMiLCJtb2R1bGVzL2pzL0luc3RydWN0aW9ucy5qcyIsIm1vZHVsZXMvanMvTGlvbi5qcyIsIm1vZHVsZXMvanMvUGxheWVyLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzIiwibW9kdWxlcy9qcy9TY29yZS5qcyIsIm1vZHVsZXMvanMvU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhdGljVGV4dC5qcyIsIm1vZHVsZXMvanMvVGV4dC5qcyIsIm1vZHVsZXMvanMvVGlnZXIuanMiLCJtb2R1bGVzL2pzL1RydW1wLmpzIiwibW9kdWxlcy9qcy9pbmRleC5qcyIsInRlc3RzL1Rlc3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDS0M7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTTs7O0FBRXBCLGtCQUFhLE1BQWIsRUFBcUI7QUFBQTs7QUFBQSxxRkFDYixNQURhO0FBRXBCOzs7OztrQkFKbUIsTTs7Ozs7Ozs7O0FDSHJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7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QUFNLGNBQVAsRUFBVCxDQUFiO0FBQ0EsV0FBUSxHQUFSLENBQVksT0FBTyxPQUFQLEVBQVo7O0FBRUEsT0FBSSxlQUFlLHlCQUFlLEVBQUMsTUFBTSxZQUFQLEVBQWYsQ0FBbkI7QUFDQSxXQUFRLEdBQVIsQ0FBWSxhQUFhLE9BQWIsRUFBWjs7QUFFQSxPQUFJLGVBQWUseUJBQWUsRUFBQyxNQUFNLFlBQVAsRUFBZixDQUFuQjtBQUNBLFdBQVEsR0FBUixDQUFZLGFBQWEsT0FBYixFQUFaO0FBQ0E7Ozs7OztrQkEzRm1CLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqIFxuICogQW5pbWFsLmpzXG4gKiBUaGUgY3JpdHRlcnMgdGhhdCBUcnVtcCB0cmllcyB0byBzdG9wIGZyb20gZ2V0dGluZyB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hbCBleHRlbmRzIENoYXJhY3RlciB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKiBcbiAqIEFuaW1hbEFyZWEuanNcbiAqIFRoZSByZWdpb24gYW5pbWFscyBtb3ZlIHRocm91Z2ggdG8gZ2V0IHRvIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYWdlIGV4dGVuZHMgQXJlYSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcbiBcdH1cblxuIH0iLCIvKiogXG4gKiBBcmVhLmpzXG4gKiBBIGdlbmVyaWMgcmVnaW9uIG9mIHRoZSBnYW1lIHNjcmVlbi5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJlYSBleHRlbmRzIEdhbWVQaWVjZSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcbiBcdH1cblxuIH0iLCIvKiogXG4gKiBCZWFyLmpzXG4gKiBBIFRpZ2VyLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVhciBleHRlbmRzIEFuaW1hbCB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKiBcbiAqIENhZ2UuanNcbiAqIFRoZSByZWdpb24gd2hlcmUgYW5pbWFscyBhcmUgY2FnZWQuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIEFyZWEge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG4gXHR9XG5cbiB9IiwiLyoqIFxuICogQ2hhcmFjdGVyLmpzXG4gKiBHYW1lLWdlbmVyYXRlZCBvciB1c2VyIGF2YXRhcnNcbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cblxuIFx0dXBkYXRlICgpIHtcblxuIFx0fVxuXG4gXHRkcmF3ICgpIHtcblxuIFx0fVxuXG4gfSAvLyBlbmQgb2YgY2xhc3MiLCIvKiogXG4gKiBEeW5hbWljVGV4dC5qc1xuICogVGV4dCB0aGF0IGNhbiBiZSBjaGFuZ2VkIGJ5IHVzZXIgKGUuZy4gaW5wdXQgZmllbGQpLCBvciBcbiAqIHVwZGF0ZWQgYnkgdGhlIGdhbWUgaXRzZWxmLlxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljVGV4dCBleHRlbmRzIFRleHQge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXHR9XG59XG4iLCIvKiogXG4gKiBFbmRTY3JlZW4uanNcbiAqIEVuZGluZyBzY3JlZW4gZm9yIHRoZSBnYW1lLlxuICogQGluaGVyaXRzIFNjcmVlbiwgR2FtZVBpZWNlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbiBcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKiBcbiAqIEdhbWUuanNcbiAqIFRoZSBlbnRpcmUgR2FtZSBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbi8vU2NyZWVuIGluaGVyaXRhbmNlXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuL1N0YXJ0U2NyZWVuLmpzJztcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZVNjcmVlbi5qcyc7XG5pbXBvcnQgRW5kU2NyZWVuIGZyb20gJy4vRW5kU2NyZWVuLmpzJztcblxuLy9JbmZvIGluaGVyaXRhbmNlXG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eS5qcyc7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4vSW5zdHJ1Y3Rpb25zLmpzJztcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL0R5bmFtaWNUZXh0LmpzJztcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJztcblxuLy9DaGFyYWN0ZXIgaW5oZXJpdGFuY2VcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuaW1wb3J0IFRydW1wIGZyb20gJy4vVHJ1bXAuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcbmltcG9ydCBMaW9uIGZyb20gJy4vTGlvbi5qcyc7XG5pbXBvcnQgVGlnZXIgZnJvbSAnLi9UaWdlci5qcyc7XG5pbXBvcnQgQmVhciBmcm9tICcuL0JlYXIuanMnO1xuaW1wb3J0IEdvcmlsbGEgZnJvbSAnLi9Hb3JpbGxhLmpzJztcbmltcG9ydCBIZWFsdGggZnJvbSAnLi9IZWFsdGguanMnO1xuXG4vL0FyZWEgaW5oZXJpdGFuY2UuXG5pbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuaW1wb3J0IENhZ2UgZnJvbSAnLi9DYWdlLmpzJztcbmltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XG5pbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuL1BsYXllckFyZWEuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cblx0XHRzdXBlcihjb25maWcpO1xuXG5cdFx0Ly8gU3RvcmUgdGhlIElkcyBvZiB0aGUgRE9NIGVsZW1lbnRzXG5cdFx0dGhpcy5zY3JlZW5OYW1lcyA9IHtcblx0XHRcdFNUQVJUX1NDUkVFTiA6ICdzdGFydC1zY3JlZW4nLFxuXHRcdFx0R0FNRV9TQ1JFRU4gOiAnZ2FtZS1zY3JlZW4nLFxuXHRcdFx0RU5EX1NDUkVFTiA6ICdlbmQtc2NyZWVuJ1xuXHRcdH1cblxuXHRcdC8vIFdhcm5pbmdcblx0XHR0aGlzLndhcm5pbmcgPSAnVGhpcyBnYW1lIGJlbG9uZ3MgdG8gdXMsIGFuZCBub2JvZHkgZWxzZS4nO1xuXG5cdFx0Ly9nYW1lIHJldmVydHMgdG8gU3RhcnRTY3JlZW4gaWYgdW5wbGF5ZWRcblx0XHR0aGlzLlRJTUVPVVQgPSA1O1xuXG5cdFx0Ly9TdGF0ZSBvYmplY3Rcblx0XHR0aGlzLnNjcmVlbnMgPSBbXTtcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzID0gW107XG5cdFx0dGhpcy5kaXNwbGF5SW5mbyA9IFtdO1xuXG5cdFx0dGhpcy5pbml0KCk7XG5cblx0XHR0aGlzLmxvYWRHYW1lKCk7XG5cblx0fSAvL2VuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdGluaXQgKCkge1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLnNjcmVlbk5hbWVzLlNUQVJUX1NDUkVFTl0gPSBuZXcgU3RhcnRTY3JlZW4oe25hbWU6IFwiU3RhcnQgU2NyZWVuXCIsIGlkOiB0aGlzLnNjcmVlbk5hbWVzLlNUQVJUX1NDUkVFTiwgZ2FtZTp0aGlzfSk7XG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuc2NyZWVuTmFtZXMuR0FNRV9TQ1JFRU5dID0gbmV3IEdhbWVTY3JlZW4oe25hbWU6IFwiR2FtZSBTY3JlZW5cIiwgaWQ6IHRoaXMuc2NyZWVuTmFtZXMuR0FNRV9TQ1JFRU4sIGdhbWU6IHRoaXN9KTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5zY3JlZW5OYW1lcy5FTkRfU0NSRUVOXSA9IG5ldyBFbmRTY3JlZW4oe25hbWU6IFwiRW5kIFNjcmVlblwiLCBpZDogdGhpcy5zY3JlZW5OYW1lcy5FTkRfU0NSRUVOLCBnYW1lOiB0aGlzfSk7XG5cdFx0dGhpcy5zdGF0ZSA9IHRoaXMuc2NyZWVuTmFtZXMuU1RBUlRfU0NSRUVOO1xuXHR9XG5cblx0bG9hZEdhbWUgKCkge1xuXHRcdGNvbnNvbGUubG9nKCdsb2FkaW5nIHN0YXJ0IHNjcmVlbicpO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLnNjcmVlbk5hbWVzLlNUQVJUX1NDUkVFTl0uc2hvd1NjcmVlbigpO1xuXHR9XG5cblx0c3RhcnRHYW1lICgpIHtcblxuXHR9XG5cblx0ZW5kR2FtZSAoKSB7XG5cblx0fVxuXG5cdGVsYXBzZWQgKCkge1xuXG5cdH1cblxuXHRjaGVja0lmQ29tcGxldGUgKCkge1xuXG5cdH1cblxuXHR1cGRhdGUgKCkge1xuXG5cdH1cblxuXHRkcmF3ICgpIHtcblxuXHR9XG5cblx0Z2FtZUxvb3AgKCkge1xuXHRcdFxuXHR9XG5cbn0gLy8gZW5kIG9mIGNsYXNzLlxuXG5cblxuXG5cblxuIiwiLyoqIFxuICogR2FtZVBpZWNlLmpzXG4gKiBCYXNpYyBHYW1lIG9iamVjdFxuICpcbiAqIFRvIG1ha2UgdGhpcyB3b3JrLCB5b3UgbXVzdCBiZSBydW5uaW5nIHRoZSBCYWJlbCB0cmFuc3BpbGVyLCBcbiAqIGFuZCB3YXRjaGluZyBmb3IgY2hhbmdlcyBpbiB0aGlzIGZpbGUgd2l0aCBicm93c2VyaWZ5LiBUd28gXG4gKiBUZXJtaW5hbCB3aW5kb3dzIG5lZWQgdG8gYmUgb3BlbjpcbiAqIDEuIG9uZSB3aW5kb3cgd2hlcmUgeW91IHR5cGVkIHRoZSBjb21tYW5kIFwiZ3J1bnRcIlxuICogMi4gb25lIHdpbmRvdyB3aGVyZSB5b3UgdHlwZWQgdGhlIGNvbW1hbmQgXCJucG0gc3RhcnRcIlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGllY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIFx0Ly9UT0RPOiB1c2Ugc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgICAgIHRoaXMudXVpZCA9IHRoaXMuc2V0SWQoKTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGV2ZXJ5IGdhbWUgb2JqZWN0LlxuICAgICAqIEBsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWF0ZS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxuICAgICAqL1xuICAgIHNldElkICgpIHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjE2KSUxNiB8IDA7XG4gICAgICAgICAgICBkID0gTWF0aC5mbG9vcihkLzE2KTtcbiAgICAgICAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXVpZDtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogUmV0dXJuIHRoZSBDbGFzcyBuYW1lIG9mIHRoaXMgb2JqZWN0LlxuICAgICAqL1xuICAgIGdldENsYXNzICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTsgLyogRVM2IGZlYXR1cmUgKi9cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogUmV0dXJuIHRoZSBnaXZlbiBuYW1lIG9mIHRoaXMgb2JqZWN0LlxuICAgICAqL1xuICAgIGdldE5hbWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBSZXR1cm4gdGhlIHVuaXF1ZSBpZCBvZiB0aGlzIG9iamVjdC5cbiAgICAgKi9cbiAgICBnZXRJZCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV1aWQ7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIFJldHVybiB0aGUgYm91bmRpbmcgYm94IChSZWN0KSBmb3IgdGhpcyBvYmplY3Qgb25zY3JlZW4uXG4gICAgICovXG4gICAgZ2V0Q29sbGlzaW9uUmVjdCAoKSB7XG5cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogUmV0dXJuIHRoZSBib3ggKFJlY3QpIGZvciBhIGNvbnRhaW5lciBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0Qm91bmRzUmVjdCAoKSB7XG5cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogVXBkYXRlIHRoZSBvYmplY3QuIE92ZXJyaWRlIGluIHN1Yi1jbGFzc2VzXG4gICAgICovXG4gICAgdXBkYXRlICgpIHtcblxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBEcmF3IHRoZSBvYmplY3QuIE92ZXJyaWRlIGluIHN1Yi1jbGFzc2VzLlxuICAgICAqL1xuICAgIGRyYXcgKCkge1xuXG4gICAgfVxuXG59IC8vIGVuZCBvZiBjbGFzc1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiLyoqIFxuICogR2FtZVNjcmVlbi5qc1xuICogTWFpbiBnYW1lIHNjcmVlbiBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuIFx0fVxuXG4gfSIsIi8qKiBcbiAqIEdvcmlsbGEuanNcbiAqIEEgR29yaWxsYSwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvcmlsbGEgZXh0ZW5kcyBBbmltYWwge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuIH0iLCIvKiogXG4gKiBIZWFsdGguanNcbiAqIFRoZSBjcml0dGVycyB0aGF0IFRydW1wIHRyaWVzIHRvIHN0b3AgZnJvbSBnZXR0aW5nIHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhbHRoIGV4dGVuZHMgQ2hhcmFjdGVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cblxuIH0iLCIvKiogXG4gKiBJZGVudGl0eS5qc1xuICogR2FtZSBMb2dvcywgTG9nb1R5cGVzLCBCcmFuZCBOYW1lXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG4gaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlbnRpdHkgZXh0ZW5kcyBTdGF0aWNUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxufVxuIiwiLyoqIFxuICogSW5mby5qc1xuICogR2VuZXJpYyBpbmZvcm1haXRvbiBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm8gZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG5cdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cbn0iLCIvKiogXG4gKiBJbnN0cnVjdGlvbnMuanNcbiAqIFRleHQgd2hpY2ggdGVsbHMgdGhlIFBsYXllciBob3cgdG8gcGxheSB0aGUgZ2FtZS5cbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbiBpbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVjdGlvbnMgZXh0ZW5kcyBTdGF0aWNUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxufVxuIiwiLyoqIFxuICogTGlvbi5qc1xuICogQSBMaW9uLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlvbiBleHRlbmRzIEFuaW1hbCB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKiBcbiAqIFBsYXllci5qc1xuICogVXNlci1jb250cm9sbGVkIENoYXJhY3RlclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIENoYXJhY3RlciB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKiBcbiAqIFBsYXllckFyZWEuanNcbiAqIFRoZSByZWdpb24gd2hlcmUgdGhlIFBsYXllciBjYW4gbW92ZS5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJBcmVhIGV4dGVuZHMgQXJlYSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcbiBcdH1cblxuIH0iLCIvKiogXG4gKiBTY29yZS5qc1xuICogRGlzcGxheSB1c2VyIHNjb3JlXG4gKiBAaW5oZXJpdHMgRHluYW1pY1RleHQsIFRleHQsIEluZm8sIEdhbWVQaWVjZVxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIER5bmFtaWNUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxufSIsIi8qKiBcbiAqIFNjcmVlbi5qc1xuICogR2VuZXJpYyBTY3JlZW4gb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLmpzXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbiBleHRlbmRzIEdhbWVQaWVjZSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTsgLy9pbml0ICdwYXJlbnQnIEdhbWVQaWVjZVxuXG4gXHRcdHRoaXMuZ2FtZSA9IGNvbmZpZy5nYW1lO1xuIFx0XHR0aGlzLnNjcmVlbklkID0gY29uZmlnLmlkOyAvLyBpZCBvZiBIVE1MIDxkaXY+IHRvIHVzZS5cbiBcdFx0d2luZG93LmNvbmZpZyA9IGNvbmZpZzsgLy9URU1QT1JBUlkgREVCVUdcbiBcdFx0dGhpcy5sb2FkU2NyZWVuKCk7IC8vZ3JhYiB0aGUgPGRpdj4gd2l0aCB0aGUgY29uZmlnLmlkXG4gXHR9XG5cbiBcdGxvYWRTY3JlZW4gKCkge1xuIFx0XHRjb25zb2xlLmxvZygnbG9hZGluZyBkaXYgaWQ6JyArIHRoaXMuc2NyZWVuSWQpO1xuIFx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc2NyZWVuSWQpO1xuIFx0fVxuXG4gXHRzaG93U2NyZWVuICgpIHtcbiBcdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gXHR9XG5cbiBcdGhpZGVTY3JlZW4gKCkge1xuIFx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuIFx0fVxuXG4gXHRzaG93SGVhZGVyICgpIHtcbiBcdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuIFx0fVxuXG4gXHRzaG93Rm9vdGVyICgpIHtcbiBcdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuIFx0fVxuXG4gXHRoaWRlSGVhZGVyICgpIHtcbiBcdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gXHR9XG5cbiBcdGhpZGVGb290ZXIgKCkge1xuIFx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiBcdH1cblxuIFx0YWRkV2FybmluZyAoKSB7XG4gXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKS5pbm5lckhUTUwgPSB0aGlzLmdhbWUud2FybmluZztcbiBcdH1cblxuIH0gLy8gZW5kIG9mIGNsYXNzLlxuXG5cblxuXG5cbiIsIi8qKiBcbiAqIFN0YXJ0U2NyZWVuLmpzXG4gKiBPcGVuaW5nIHNjcmVlbiBmb3IgZ2FtZS5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cbn0iLCIvKiogXG4gKiBTdGF0aWNUZXh0LmpzXG4gKiBUZXh0IHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgYWZ0ZXIgbG9hZGVkIGJ5IHRoZSBnYW1lXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpY1RleHQgZXh0ZW5kcyBUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxufVxuIiwiLyoqIFxuICogVGV4dC5qc1xuICogQ3JlYXRlcyBhIHRleHQtdHlwZSBJbmZvIG9iamVjdFxuICogQGluaGVyaXRzIEluZm8sIEdhbWVQaWVjZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBJbmZvIHtcblxuIFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG4gXHR9XG5cbiB9IiwiLyoqIFxuICogVGlnZXIuanNcbiAqIEEgVGlnZXIsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBUaWdlciBleHRlbmRzIEFuaW1hbCB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKiBcbiAqIFRydW1wLmpzXG4gKiBUaGUgYmFsbC1saWtlIENoYXJhY3RlciB5b3Uga2ljayBpbnRvIEFuaW1hbHNcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBUcnVtcCBleHRlbmRzIENoYXJhY3RlciB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKiBcbiAqIENyZWF0ZSB0aGUgZ2FtZS4gSW1wb3J0IHRoZSBwcmltYXJ5IGNsYXNzZXMsIGFuZCAnY29tcG9zaXRlJyBcbiAqIHRoZSBvdmVyYWxsIEdhbWUgb2JqZWN0IG91dCBvZiBpbnN0YW5jZXMgb2YgdGhlIGNsYXNzZXMuXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4vL1RoZSBlbnRpcmUgZ2FtZVxuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lLmpzJztcblxuLy9TY3JlZW4gaW5oZXJpdGFuY2VcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4vU3RhcnRTY3JlZW4uanMnO1xuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi9HYW1lU2NyZWVuLmpzJztcbmltcG9ydCBFbmRTY3JlZW4gZnJvbSAnLi9FbmRTY3JlZW4uanMnO1xuXG4vL0luZm8gaW5oZXJpdGFuY2VcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuL0lkZW50aXR5LmpzJztcbmltcG9ydCBJbnN0cnVjdGlvbnMgZnJvbSAnLi9JbnN0cnVjdGlvbnMuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnO1xuXG4vL0NoYXJhY3RlciBpbmhlcml0YW5jZVxuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi9UcnVtcC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuaW1wb3J0IExpb24gZnJvbSAnLi9MaW9uLmpzJztcbmltcG9ydCBUaWdlciBmcm9tICcuL1RpZ2VyLmpzJztcbmltcG9ydCBCZWFyIGZyb20gJy4vQmVhci5qcyc7XG5pbXBvcnQgR29yaWxsYSBmcm9tICcuL0dvcmlsbGEuanMnO1xuaW1wb3J0IEhlYWx0aCBmcm9tICcuL0hlYWx0aC5qcyc7XG5cbi8vQXJlYSBpbmhlcml0YW5jZS5cbmltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5pbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xuaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi9BbmltYWxBcmVhLmpzJztcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4vUGxheWVyQXJlYS5qcyc7XG5cbi8vVGVzdCBmaWxlICh2ZXJ5IHNpbXBsZSB0ZXN0cnVubmVyKVxuaW1wb3J0IFRlc3RzIGZyb20gJy4uLy4uL3Rlc3RzL1Rlc3RzLmpzJztcblxuLyoqIFxuICogU2V0IHVwIHRlc3RzLlxuICovXG52YXIgbXlUZXN0cyA9IG5ldyBUZXN0cygpO1xuXG4vKipcbiAqIFNldCB1cCB0aGUgR2FtZVxuICovXG52YXIgbXlHYW1lID0gbmV3IEdhbWUoe25hbWU6IFwiWm9vS2lsbFNvY2NlclwifSk7XG5cbi8qKiBcbiAqIEVYUE9SVCBUTyBXRUIgQ09OU09MRVxuICogVG8gbWFrZSBzb21ldGhpbmcgdmlzaWJsZSBpbiBXZWIgY29uc29sZSBmb3IgZGVidWdnaW50LCBhdHRhY2ggdG8gd2luZG93IG9iamVjdFxuICogTk9URTogUHJvZmVzc2lvbmFsIGNvZGUgdXNlcyBzcGVjaWFsaXplZCB0ZXN0aW5nIG1vZHVsZXMgbGlrZSBNb2NoYSwgS2FybWEsIGFuZCBcbiAqIHNpbWlsYXIgdGVzdGluZyBsaWJyYXJpZXMuXG4gKi9cblxuLy8gd2UgY2FuIHJ1biB0aGlzIHRlc3QgbWFudWFsbHkgd2l0aCB0ZXN0cy5ydW4oKTtcbndpbmRvdy50ZXN0cyA9IG15VGVzdHM7XG5cbi8vIG1ha2UgdGhlIGdhbWUgb2JqZWN0IHZpc2libGUgc28gd2UgY2FuIGluc3BlY3QgaXQuXG53aW5kb3cuZ2FtZSA9IG15R2FtZTtcblxuY29uc29sZS5sb2coJ1pPT0tJTExTT0NDRVIgR2FtZSBpbml0aWFsaXplZC4gQWNjZXNzIGdhbWUgdmlhIFwiZ2FtZVwiLiBVc2UgVGVzdHMucnVuKCkgdG8gdGVzdC4nKVxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4uL21vZHVsZXMvanMvR2FtZVBpZWNlLmpzJztcblxuLy9UaGUgZW50aXJlIGdhbWVcbmltcG9ydCBHYW1lIGZyb20gJy4uL21vZHVsZXMvanMvR2FtZS5qcyc7XG5cbi8vU2NyZWVuIGluaGVyaXRhbmNlXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvU2NyZWVuLmpzJztcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL1N0YXJ0U2NyZWVuLmpzJztcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvR2FtZVNjcmVlbi5qcyc7XG5pbXBvcnQgRW5kU2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvRW5kU2NyZWVuLmpzJztcblxuLy9JbmZvIGluaGVyaXRhbmNlXG5pbXBvcnQgSW5mbyBmcm9tICcuLi9tb2R1bGVzL2pzL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9UZXh0LmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4uL21vZHVsZXMvanMvU3RhdGljVGV4dC5qcyc7XG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi4vbW9kdWxlcy9qcy9JZGVudGl0eS5qcyc7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4uL21vZHVsZXMvanMvSW5zdHJ1Y3Rpb25zLmpzJztcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuLi9tb2R1bGVzL2pzL0R5bmFtaWNUZXh0LmpzJztcbmltcG9ydCBTY29yZSBmcm9tICcuLi9tb2R1bGVzL2pzL1Njb3JlLmpzJztcblxuLy9DaGFyYWN0ZXIgaW5oZXJpdGFuY2VcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9DaGFyYWN0ZXIuanMnO1xuaW1wb3J0IFRydW1wIGZyb20gJy4uL21vZHVsZXMvanMvVHJ1bXAuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9tb2R1bGVzL2pzL1BsYXllci5qcyc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4uL21vZHVsZXMvanMvQW5pbWFsLmpzJztcbmltcG9ydCBMaW9uIGZyb20gJy4uL21vZHVsZXMvanMvTGlvbi5qcyc7XG5pbXBvcnQgVGlnZXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9UaWdlci5qcyc7XG5pbXBvcnQgQmVhciBmcm9tICcuLi9tb2R1bGVzL2pzL0JlYXIuanMnO1xuaW1wb3J0IEdvcmlsbGEgZnJvbSAnLi4vbW9kdWxlcy9qcy9Hb3JpbGxhLmpzJztcbmltcG9ydCBIZWFsdGggZnJvbSAnLi4vbW9kdWxlcy9qcy9IZWFsdGguanMnO1xuXG4vL0FyZWEgaW5oZXJpdGFuY2UuXG5pbXBvcnQgQXJlYSBmcm9tICcuLi9tb2R1bGVzL2pzL0FyZWEuanMnO1xuaW1wb3J0IENhZ2UgZnJvbSAnLi4vbW9kdWxlcy9qcy9DYWdlLmpzJztcbmltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyc7XG5pbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuLi9tb2R1bGVzL2pzL1BsYXllckFyZWEuanMnO1xuXG4vKiogXG4gKiBURVNUQkVEIC0gVGVzdCBhbGwgb3VyIG9iamVjdHMuIFRoaXMgaXMgYSB2ZXJ5IGJhc2ljIHRlc3Rpbmcgc3lzdGVtLiBcbiAqIE5PVEU6IFByb2Zlc3Npb25hbCBjb2RlIHVzZXMgdGVzdGluZyBsaWJyYXJpZXMgbGlrZSBLYXJtYSBhbmQgTW9jaGEuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RzIHtcblxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdH1cblxuXHQvLyBCZWNhdXNlIHdlIG1ha2UgdGhlc2Ugb2JqZWN0cyB3aXRoICd2YXInIHRoZXkgYXJlIHNjb3BlZCB0byB0aGUgcnVuKCkgZnVuY3Rpb24uXG5cdHJ1biAoKSB7XG5cblx0XHR2YXIgY29uZmlnID0ge25hbWU6J0ZvcmVzdCBUcnVtcCBvciBEb25hbGQgR3VtcCBydWx6J307XG5cblx0XHQvLyBNYWtlIHNvbWUgdGVzdCBnYW1lIG9iamVjdHNcblx0XHR2YXIgZ2FtZSA9IG5ldyBHYW1lKGNvbmZpZyk7XG5cdFx0Y29uc29sZS5sb2coZ2FtZS5nZXROYW1lKCkpO1xuXG5cdFx0Ly90ZXN0IEdhbWUgT2JqZWN0XG5cdFx0dmFyIG15R2FtZSA9IG5ldyBHYW1lKHtuYW1lOiBcIlpvb0tpbGxTb2NjZXJcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15R2FtZS5nZXROYW1lKCkpO1xuXG5cdFx0Ly9vdGhlciBvYmplY3RzXG5cdFx0dmFyIG15U2NyZWVuID0gbmV3IFNjcmVlbih7bmFtZTogXCJPcGVuaW5nIFNjcmVlblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlTY3JlZW4uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVN0YXJ0U2NyZWVuID0gbmV3IFN0YXJ0U2NyZWVuKHtuYW1lOiBcIlN0YXJ0IFNjcmVlblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlTdGFydFNjcmVlbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15R2FtZVNjcmVlbiA9IG5ldyBHYW1lU2NyZWVuKHtuYW1lOiBcIkdhbWUgU2NyZWVuXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUdhbWVTY3JlZW4uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUVuZFNjcmVlbiA9IG5ldyBFbmRTY3JlZW4oe25hbWU6IFwiRW5kIFNjcmVlblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlFbmRTY3JlZW4uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUluZm8gPSBuZXcgSW5mbyh7bmFtZTogXCJHZW5lcmljIEluZm9ybWF0aW9uXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUluZm8uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVRleHQgPSBuZXcgVGV4dCh7bmFtZTogXCJHZW5lcmljIFRleHQgT2JqZWN0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVRleHQuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVN0YXRpY1RleHQgPSBuZXcgU3RhdGljVGV4dCh7bmFtZTogXCJHZW5lcmljIFN0YXRpYyBUZXh0IE9iamVjdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlTdGF0aWNUZXh0LmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlJZGVudGl0eSA9IG5ldyBJZGVudGl0eSh7bmFtZTogXCJHZW5lcmljIElkZW50aXR5IE9iamVjdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlJZGVudGl0eS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15SW5zdHJ1Y3Rpb25zID0gbmV3IEluc3RydWN0aW9ucyh7bmFtZTogXCJHZW5lcmljIEluc3RydWN0aW9ucyBPYmplY3RcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15SW5zdHJ1Y3Rpb25zLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlEeW5hbWljVGV4dCA9IG5ldyBEeW5hbWljVGV4dCh7bmFtZTogXCJHZW5lcmljIER5bmFtaWMgVGV4dCBPYmplY3RcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15RHluYW1pY1RleHQuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVNjb3JlID0gbmV3IFNjb3JlKHtuYW1lOiBcInNjb3Jlcy4uLlwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlTY29yZS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15Q2hhcmFjdGVyID0gbmV3IENoYXJhY3Rlcih7bmFtZTogXCJHZW5lcmljIENoYXJhY3RlclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlDaGFyYWN0ZXIuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVRydW1wID0gbmV3IFRydW1wKHtuYW1lOiBcIkRvbmFsZCBUcnVtcFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlUcnVtcC5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15UGxheWVyID0gbmV3IFBsYXllcih7bmFtZTogXCJFbmQgVXNlclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlQbGF5ZXIuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUFuaW1hbCA9IG5ldyBBbmltYWwoe25hbWU6IFwiR2VuZXJpYyBBbmltYWxcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15QW5pbWFsLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlMaW9uID0gbmV3IExpb24oe25hbWU6IFwiQ293YXJkbHkgdGhlIExpb25cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15TGlvbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15VGlnZXIgPSBuZXcgVGlnZXIoe25hbWU6IFwiQ2hvbXBlciB0aGUgVGlnZXJcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15VGlnZXIuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUJlYXIgPSBuZXcgQmVhcih7bmFtZTogXCJNYXVsZXIgdGhlIEJlYXJcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15QmVhci5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15R29yaWxsYSA9IG5ldyBHb3JpbGxhKHsgbmFtZTogXCJTcHVua3kgdGhlIEdvcmlsbGFcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15R29yaWxsYS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15SGVhbHRoID0gbmV3IEhlYWx0aCh7bmFtZTogXCJPbmUgSGVhbHRoIEtpdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlIZWFsdGguZ2V0TmFtZSgpKTtcblxuXHRcdC8vQXJlYSBpbmhlcml0YW5jZS5cblx0XHR2YXIgbXlBcmVhID0gbmV3IEFyZWEoe25hbWU6IFwiR2VuZXJpYyBBcmVhXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUFyZWEuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUNhZ2UgPSBuZXcgQ2FnZSh7bmFtZTogXCJHZW5lcmljIEFyZWFcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15Q2FnZS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15QW5pbWFsQXJlYSA9IG5ldyBBbmltYWxBcmVhKHtuYW1lOiBcIkFuaW1hbEFyZWFcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15QW5pbWFsQXJlYS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15UGxheWVyQXJlYSA9IG5ldyBQbGF5ZXJBcmVhKHtuYW1lOiBcIlBsYXllckFyZWFcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15UGxheWVyQXJlYS5nZXROYW1lKCkpO1xuXHR9XG59XG4iXX0=
