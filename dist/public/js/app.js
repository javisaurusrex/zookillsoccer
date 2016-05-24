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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Animal characters
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits Character, GamePiece
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
;

},{"./Character.js":6,"./GamePiece.js":9}],2:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Animals in the area?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits Area, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var AnimalArea = function (_Area) {
  _inherits(AnimalArea, _Area);

  function AnimalArea(config) {
    _classCallCheck(this, AnimalArea);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AnimalArea).call(this, config));
  }

  return AnimalArea;
}(_Area3.default);

exports.default = AnimalArea;
;

},{"./Area.js":3,"./GamePiece.js":9}],3:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Area
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
;

},{"./GamePiece.js":9}],4:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Bear animal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits Animal, Character, GamePiece
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
;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":9}],5:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * The animals come from the cage
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits Area, GamePiece
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
;

},{"./Area.js":3,"./GamePiece.js":9}],6:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Character.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Generic character object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Character = function (_GamePiece) {
  _inherits(Character, _GamePiece);

  function Character(config) {
    _classCallCheck(this, Character);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Character).call(this, config)); //init 'parent' GamePiece
  }

  return Character;
}(_GamePiece3.default);

exports.default = Character;
;

},{"./GamePiece.js":9}],7:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits Text, Info, GamePiece
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
;

},{"./GamePiece.js":9,"./Info.js":14,"./Text.js":23}],8:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Ending screen for the game
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

},{"./GamePiece.js":9,"./Screen.js":20}],9:[function(require,module,exports){
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
    }]);

    return GamePiece;
}();

exports.default = GamePiece;

},{}],10:[function(require,module,exports){
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
;

},{"./GamePiece.js":9,"./Screen.js":20}],11:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Gorilla animal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits Animal, Character, GamePiece
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
;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":9}],12:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Gives health to the player/trump
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits Character, GamePiece
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
;

},{"./Character.js":6,"./GamePiece.js":9}],13:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Display user score
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits StaticText, Text, Info, GamePiece
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
;

},{"./GamePiece.js":9,"./Info.js":14,"./StaticText.js":22,"./Text.js":23}],14:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Generic information object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Info = function (_GamePiece) {
  _inherits(Info, _GamePiece);

  function Info(config) {
    _classCallCheck(this, Info);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Info).call(this, config)); //init 'parent' GamePiece
  }

  return Info;
}(_GamePiece3.default);

exports.default = Info;
;

},{"./GamePiece.js":9}],15:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Game instructions
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits StaticText, Text, Info, GamePiece
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
;

},{"./GamePiece.js":9,"./Info.js":14,"./StaticText.js":22,"./Text.js":23}],16:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Lion animal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits Animal, Character, GamePiece
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
;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":9}],17:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Player character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits Character, GamePiece
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
;

},{"./Character.js":6,"./GamePiece.js":9}],18:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Area where the player is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits Area, GamePiece
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
;

},{"./Area.js":3,"./GamePiece.js":9}],19:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits DynamicText,Text, Info, GamePiece
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
;

},{"./DynamicText.js":7,"./GamePiece.js":9,"./Info.js":14,"./Text.js":23}],20:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Screen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Generic Screen object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits GamePiece.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Screen = function (_GamePiece) {
  _inherits(Screen, _GamePiece);

  function Screen(config) {
    _classCallCheck(this, Screen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Screen).call(this, config)); //init 'parent' GamePiece
  }

  return Screen;
}(_GamePiece3.default);

exports.default = Screen;
;

},{"./GamePiece.js":9}],21:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Opening screen for game
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
;

},{"./GamePiece.js":9,"./Screen.js":20}],22:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Text that cannot be changed.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits Text, Info, GamePiece
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
;

},{"./GamePiece.js":9,"./Info.js":14,"./Text.js":23}],23:[function(require,module,exports){
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
;

},{"./GamePiece.js":9,"./Info.js":14}],24:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Lion animal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits Animal, Character, GamePiece
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
;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":9}],25:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Trump character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @inherits Character, GamePiece
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
;

},{"./Character.js":6,"./GamePiece.js":9}],26:[function(require,module,exports){
'use strict';

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

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

var _DynamicText = require('./DynamicText.js');

var _DynamicText2 = _interopRequireDefault(_DynamicText);

var _Score = require('./Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _StaticText = require('./StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Identity = require('./Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Instructions = require('./Instructions.js');

var _Instructions2 = _interopRequireDefault(_Instructions);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Trump = require('./Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

var _Health = require('./Health.js');

var _Health2 = _interopRequireDefault(_Health);

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

var _Area = require('./Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _AnimalArea = require('./AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('./PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Set up the game.
 */


//Area inheritance


//Info inheritance
var config = {
  name: 'Forest Trump or Donald Gump rulz'
};

// Make some test game objects


//Character inheritance


//Screen inhertiance
/**
 * Create the game. Import the primary classes, and 'composit'
 * the overall Game object out of instances of the classes.
 */
var game = new _GamePiece2.default(config);
console.log(game.getName());

var config2 = {
  name: 'Thud Mutton, Esq'
};
var something = new _GamePiece2.default(config2);
console.log(something.getName());

//test Screen
var configScreen1 = {
  name: 'Opening Screen'
};
var ascreen = new _Screen2.default(configScreen1);
console.log(ascreen.getName());

//test StartScreen
var myStartScreen = new _StartScreen2.default({
  name: 'Begin!' });
console.log(myStartScreen.getName());

//test GameScreen
var myGameScreen = new _GameScreen2.default({
  name: 'We are playing' });
console.log(myGameScreen.getName());
//test EndScreen
//test Info
//test Text
//test DynamicText
//test Score
//test StaticText
//test Identity
//test Instructions
//test Character
//test Trump
//test Player
//test Health
//test Animal

//test Gorilla
var myGorilla = new _Gorilla2.default({
  name: 'Donkey Kong' });
console.log(myGorilla.getName());

//test Tiger
var myTiger = new _Tiger2.default({
  name: 'Tigger' });
console.log(myTiger.getName());

//test Bear
var myBear = new _Bear2.default({
  name: 'Baloo' });
console.log(myBear.getName());

//test Lion
var myLion = new _Lion2.default({
  name: 'Mufasa' });
console.log(myLion.getName());

//test Area
var myArea = new _Area2.default({
  name: 'Stadium Area' });
console.log(myArea.getName());

//test Cage
var myCage = new _Cage2.default({
  name: 'the damn cages' });
console.log(myCage.getName());
//test AnimalArea
//test PlayerArea
//var area = new Area(config);
//console.log(area.getName());

//var character = new Character(config);
//var player = new Player(config);

},{"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":4,"./Cage.js":5,"./Character.js":6,"./DynamicText.js":7,"./EndScreen.js":8,"./GamePiece.js":9,"./GameScreen.js":10,"./Gorilla.js":11,"./Health.js":12,"./Identity.js":13,"./Info.js":14,"./Instructions.js":15,"./Lion.js":16,"./Player.js":17,"./PlayerArea.js":18,"./Score.js":19,"./Screen.js":20,"./StartScreen.js":21,"./StaticText.js":22,"./Text.js":23,"./Tiger.js":24,"./Trump.js":25}]},{},[26])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyIsIm1vZHVsZXMvanMvQXJlYS5qcyIsIm1vZHVsZXMvanMvQmVhci5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvQ2hhcmFjdGVyLmpzIiwibW9kdWxlcy9qcy9EeW5hbWljVGV4dC5qcyIsIm1vZHVsZXMvanMvRW5kU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9HYW1lUGllY2UuanMiLCJtb2R1bGVzL2pzL0dhbWVTY3JlZW4uanMiLCJtb2R1bGVzL2pzL0dvcmlsbGEuanMiLCJtb2R1bGVzL2pzL0hlYWx0aC5qcyIsIm1vZHVsZXMvanMvSWRlbnRpdHkuanMiLCJtb2R1bGVzL2pzL0luZm8uanMiLCJtb2R1bGVzL2pzL0luc3RydWN0aW9ucy5qcyIsIm1vZHVsZXMvanMvTGlvbi5qcyIsIm1vZHVsZXMvanMvUGxheWVyLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzIiwibW9kdWxlcy9qcy9TY29yZS5qcyIsIm1vZHVsZXMvanMvU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhdGljVGV4dC5qcyIsIm1vZHVsZXMvanMvVGV4dC5qcyIsIm1vZHVsZXMvanMvVGlnZXIuanMiLCJtb2R1bGVzL2pzL1RydW1wLmpzIiwibW9kdWxlcy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0tBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLE07OztBQUVuQixrQkFBYSxNQUFiLEVBQXFCO0FBQUE7O0FBQUEscUZBQ2IsTUFEYTtBQUVwQjs7Ozs7a0JBSmtCLE07QUFNcEI7Ozs7Ozs7OztBQ1REOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLFU7OztBQUVuQixzQkFBYSxNQUFiLEVB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RSxRQUFRLEdBQVIsQ0FBWSxPQUFPLE9BQVAsRUFBWjs7O0FBR0YsSUFBSSxTQUFTLG1CQUFVO0FBQ3JCLFFBQU0sZ0JBRGUsRUFBVixDQUFiO0FBRUUsUUFBUSxHQUFSLENBQVksT0FBTyxPQUFQLEVBQVoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4qIEFuaW1hbC5qc1xuKiBBbmltYWwgY2hhcmFjdGVyc1xuKiBAaW5oZXJpdHMgQ2hhcmFjdGVyLCBHYW1lUGllY2VcbiovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYWwgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbn07XG4iLCIvKipcbiogQW5pbWFsQXJlYS5qc1xuKiBBbmltYWxzIGluIHRoZSBhcmVhP1xuKiBAaW5oZXJpdHMgQXJlYSwgR2FtZVBpZWNlXG4qL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYWxBcmVhIGV4dGVuZHMgQXJlYSB7XG5cbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxufTtcbiIsIi8qKlxuKiBBcmVhLmpzXG4qIEFyZWFcbiogQGluaGVyaXRzIEdhbWVQaWVjZVxuKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmVhIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG59O1xuIiwiLyoqXG4qIEJlYXIuanNcbiogQmVhciBhbmltYWxcbiogQGluaGVyaXRzIEFuaW1hbCwgQ2hhcmFjdGVyLCBHYW1lUGllY2VcbiovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlYXIgZXh0ZW5kcyBBbmltYWwge1xuXG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbn07XG4iLCIvKipcbiogQ2FnZS5qc1xuKiBUaGUgYW5pbWFscyBjb21lIGZyb20gdGhlIGNhZ2VcbiogQGluaGVyaXRzIEFyZWEsIEdhbWVQaWVjZVxuKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIEFyZWEge1xuXG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbn07XG4iLCIvKipcbiogQ2hhcmFjdGVyLmpzXG4qIEdlbmVyaWMgY2hhcmFjdGVyIG9iamVjdFxuKiBAaW5oZXJpdHMgR2FtZVBpZWNlXG4qL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlciBleHRlbmRzIEdhbWVQaWVjZSB7XG5cbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7IC8vaW5pdCAncGFyZW50JyBHYW1lUGllY2VcbiAgfVxuXG59O1xuIiwiLyoqXG4qIER5bmFtaWNUZXh0LmpzXG4qIFRleHQgdGhhdCBjYW4gYmUgY2hhbmdlZCBieSB1c2VyIChlLmcuIGlucHV0IGZpZWxkKSwgb3JcbiogdXBkYXRlZCBieSB0aGUgZ2FtZSBpdHNlbGYuXG4qIEBpbmhlcml0cyBUZXh0LCBJbmZvLCBHYW1lUGllY2VcbiovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljVGV4dCBleHRlbmRzIFRleHQge1xuXG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbn07XG4iLCIvKipcbiogRW5kU2NyZWVuLmpzXG4qIEVuZGluZyBzY3JlZW4gZm9yIHRoZSBnYW1lXG4qIEBpbmhlcml0cyBTY3JlZW4sIEdhbWVQaWVjZVxuKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cbn1cbiIsIi8qKlxuICogR2FtZVBpZWNlLmpzXG4gKiBCYXNpYyBHYW1lIG9iamVjdFxuICpcbiAqIFRvIG1ha2UgdGhpcyB3b3JrLCB5b3UgbXVzdCBiZSBydW5uaW5nIHRoZSBCYWJlbCB0cmFuc3BpbGVyLFxuICogYW5kIHdhdGNoaW5nIGZvciBjaGFuZ2VzIGluIHRoaXMgZmlsZSB3aXRoIGJyb3dzZXJpZnkuIFR3b1xuICogVGVybWluYWwgd2luZG93cyBuZWVkIHRvIGJlIG9wZW46XG4gKiAxLiBvbmUgd2luZG93IHdoZXJlIHlvdSB0eXBlZCB0aGUgY29tbWFuZCBcImdydW50XCJcbiAqIDIuIG9uZSB3aW5kb3cgd2hlcmUgeW91IHR5cGVkIHRoZSBjb21tYW5kIFwibnBtIHN0YXJ0XCJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBpZWNlIHtcblxuICAgIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBcdC8vVE9ETzogdXNlIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgICAgICB0aGlzLnV1aWQgPSB0aGlzLnNldElkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGV2ZXJ5IGdhbWUgb2JqZWN0LlxuICAgICAqIEBsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWF0ZS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxuICAgICAqL1xuICAgIHNldElkICgpIHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjE2KSUxNiB8IDA7XG4gICAgICAgICAgICBkID0gTWF0aC5mbG9vcihkLzE2KTtcbiAgICAgICAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXVpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGdpdmVuIG5hbWUgb2YgdGhpcyBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0TmFtZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSB1bmlxdWUgaWQgb2YgdGhpcyBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0SWQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51dWlkO1xuICAgIH1cbn1cbiIsIi8qKlxuKiBHYW1lU2NyZWVuLmpzXG4qIE1haW4gZ2FtZSBzY3JlZW4gb2JqZWN0XG4qIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxuKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbn07XG4iLCIvKipcbiogR29yaWxsYS5qc1xuKiBHb3JpbGxhIGFuaW1hbFxuKiBAaW5oZXJpdHMgQW5pbWFsLCBDaGFyYWN0ZXIsIEdhbWVQaWVjZVxuKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29yaWxsYSBleHRlbmRzIEFuaW1hbCB7XG5cbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxufTtcbiIsIi8qKlxuKiBIZWFsdGguanNcbiogR2l2ZXMgaGVhbHRoIHRvIHRoZSBwbGF5ZXIvdHJ1bXBcbiogQGluaGVyaXRzIENoYXJhY3RlciwgR2FtZVBpZWNlXG4qL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhbHRoIGV4dGVuZHMgQ2hhcmFjdGVyIHtcblxuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG59O1xuIiwiLyoqXG4qIElkZW50aXR5LmpzXG4qIERpc3BsYXkgdXNlciBzY29yZVxuKiBAaW5oZXJpdHMgU3RhdGljVGV4dCwgVGV4dCwgSW5mbywgR2FtZVBpZWNlXG4qL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkZW50aXR5IGV4dGVuZHMgU3RhdGljVGV4dCB7XG5cbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxufTtcbiIsIi8qKlxuKiBJbmZvLmpzXG4qIEdlbmVyaWMgaW5mb3JtYXRpb24gb2JqZWN0XG4qIEBpbmhlcml0cyBHYW1lUGllY2VcbiovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mbyBleHRlbmRzIEdhbWVQaWVjZSB7XG5cbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7IC8vaW5pdCAncGFyZW50JyBHYW1lUGllY2VcbiAgfVxuXG59O1xuIiwiLyoqXG4qIEluc3RydWN0aW9ucy5qc1xuKiBHYW1lIGluc3RydWN0aW9uc1xuKiBAaW5oZXJpdHMgU3RhdGljVGV4dCwgVGV4dCwgSW5mbywgR2FtZVBpZWNlXG4qL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydWN0aW9ucyBleHRlbmRzIFN0YXRpY1RleHQge1xuXG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbn07XG4iLCIvKipcbiogTGlvbi5qc1xuKiBMaW9uIGFuaW1hbFxuKiBAaW5oZXJpdHMgQW5pbWFsLCBDaGFyYWN0ZXIsIEdhbWVQaWVjZVxuKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlvbiBleHRlbmRzIEFuaW1hbCB7XG5cbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxufTtcbiIsIi8qKlxuKiBQbGF5ZXIuanNcbiogUGxheWVyIGNoYXJhY3RlclxuKiBAaW5oZXJpdHMgQ2hhcmFjdGVyLCBHYW1lUGllY2VcbiovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbn07XG4iLCIvKipcbiogUGxheWVyQXJlYS5qc1xuKiBBcmVhIHdoZXJlIHRoZSBwbGF5ZXIgaXNcbiogQGluaGVyaXRzIEFyZWEsIEdhbWVQaWVjZVxuKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQXJlYSBleHRlbmRzIEFyZWEge1xuXG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbn07XG4iLCIvKipcbiogU2NvcmUuanNcbiogRGlzcGxheSB1c2VyIHNjb3JlXG4qIEBpbmhlcml0cyBEeW5hbWljVGV4dCxUZXh0LCBJbmZvLCBHYW1lUGllY2VcbiovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIER5bmFtaWNUZXh0IHtcblxuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG59O1xuIiwiLyoqXG4qIFNjcmVlbi5qc1xuKiBHZW5lcmljIFNjcmVlbiBvYmplY3RcbiogQGluaGVyaXRzIEdhbWVQaWVjZS5qc1xuKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW4gZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpOyAvL2luaXQgJ3BhcmVudCcgR2FtZVBpZWNlXG4gIH1cblxufTtcbiIsIi8qKlxuKiBTdGFydFNjcmVlbi5qc1xuKiBPcGVuaW5nIHNjcmVlbiBmb3IgZ2FtZVxuKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBTY3JlZW5cbiovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cbn07XG4iLCIvKipcbiogU3RhdGljVGV4dC5qc1xuKiBUZXh0IHRoYXQgY2Fubm90IGJlIGNoYW5nZWQuXG4qIEBpbmhlcml0cyBUZXh0LCBJbmZvLCBHYW1lUGllY2VcbiovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWNUZXh0IGV4dGVuZHMgVGV4dCB7XG5cbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxufTtcbiIsIi8qKlxuKiBUZXh0LmpzXG4qIENyZWF0ZXMgYSB0ZXh0LXR5cGUgSW5mbyBvYmplY3RcbiogQGluaGVyaXRzIEluZm8sIEdhbWVQaWVjZVxuKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIEluZm8ge1xuXG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpOyBcbiAgfVxuXG59O1xuIiwiLyoqXG4qIFRpZ2VyLmpzXG4qIExpb24gYW5pbWFsXG4qIEBpbmhlcml0cyBBbmltYWwsIENoYXJhY3RlciwgR2FtZVBpZWNlXG4qL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWdlciBleHRlbmRzIEFuaW1hbCB7XG5cbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxufTtcbiIsIi8qKlxuKiBUcnVtcC5qc1xuKiBUcnVtcCBjaGFyYWN0ZXJcbiogQGluaGVyaXRzIENoYXJhY3RlciwgR2FtZVBpZWNlXG4qL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJ1bXAgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpOyBcbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBDcmVhdGUgdGhlIGdhbWUuIEltcG9ydCB0aGUgcHJpbWFyeSBjbGFzc2VzLCBhbmQgJ2NvbXBvc2l0J1xuICogdGhlIG92ZXJhbGwgR2FtZSBvYmplY3Qgb3V0IG9mIGluc3RhbmNlcyBvZiB0aGUgY2xhc3Nlcy5cbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuLy9TY3JlZW4gaW5oZXJ0aWFuY2VcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuL1N0YXJ0U2NyZWVuLmpzJztcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZVNjcmVlbi5qcyc7XG5pbXBvcnQgRW5kU2NyZWVuIGZyb20gJy4vRW5kU2NyZWVuLmpzJztcblxuLy9JbmZvIGluaGVyaXRhbmNlXG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL0R5bmFtaWNUZXh0LmpzJztcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eS5qcyc7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4vSW5zdHJ1Y3Rpb25zLmpzJztcblxuLy9DaGFyYWN0ZXIgaW5oZXJpdGFuY2VcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuaW1wb3J0IFRydW1wIGZyb20gJy4vVHJ1bXAuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XG5pbXBvcnQgSGVhbHRoIGZyb20gJy4vSGVhbHRoLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuaW1wb3J0IExpb24gZnJvbSAnLi9MaW9uLmpzJztcbmltcG9ydCBUaWdlciBmcm9tICcuL1RpZ2VyLmpzJztcbmltcG9ydCBCZWFyIGZyb20gJy4vQmVhci5qcyc7XG5pbXBvcnQgR29yaWxsYSBmcm9tICcuL0dvcmlsbGEuanMnO1xuXG4vL0FyZWEgaW5oZXJpdGFuY2VcbmltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5pbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xuaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi9BbmltYWxBcmVhLmpzJztcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4vUGxheWVyQXJlYS5qcyc7XG4vKipcbiAqIFNldCB1cCB0aGUgZ2FtZS5cbiAqL1xudmFyIGNvbmZpZyA9IHtcbiAgICBuYW1lOidGb3Jlc3QgVHJ1bXAgb3IgRG9uYWxkIEd1bXAgcnVseidcbn1cblxuLy8gTWFrZSBzb21lIHRlc3QgZ2FtZSBvYmplY3RzXG52YXIgZ2FtZSA9IG5ldyBHYW1lUGllY2UoY29uZmlnKTtcbmNvbnNvbGUubG9nKGdhbWUuZ2V0TmFtZSgpKTtcblxudmFyIGNvbmZpZzIgPSB7XG4gIG5hbWU6ICdUaHVkIE11dHRvbiwgRXNxJ1xufTtcbnZhciBzb21ldGhpbmcgPSBuZXcgR2FtZVBpZWNlKGNvbmZpZzIpO1xuY29uc29sZS5sb2coc29tZXRoaW5nLmdldE5hbWUoKSk7XG5cbi8vdGVzdCBTY3JlZW5cbnZhciBjb25maWdTY3JlZW4xID0ge1xuICBuYW1lOiAnT3BlbmluZyBTY3JlZW4nXG59XG52YXIgYXNjcmVlbiA9bmV3IFNjcmVlbihjb25maWdTY3JlZW4xKTtcbmNvbnNvbGUubG9nKGFzY3JlZW4uZ2V0TmFtZSgpKTtcblxuLy90ZXN0IFN0YXJ0U2NyZWVuXG52YXIgbXlTdGFydFNjcmVlbiA9IG5ldyBTdGFydFNjcmVlbih7XG4gIG5hbWU6ICdCZWdpbiEnfSlcbiAgY29uc29sZS5sb2cobXlTdGFydFNjcmVlbi5nZXROYW1lKCkpO1xuXG4vL3Rlc3QgR2FtZVNjcmVlblxudmFyIG15R2FtZVNjcmVlbiA9IG5ldyBHYW1lU2NyZWVuKHtcbiAgbmFtZTogJ1dlIGFyZSBwbGF5aW5nJ30pXG4gIGNvbnNvbGUubG9nKG15R2FtZVNjcmVlbi5nZXROYW1lKCkpO1xuLy90ZXN0IEVuZFNjcmVlblxuLy90ZXN0IEluZm9cbi8vdGVzdCBUZXh0XG4vL3Rlc3QgRHluYW1pY1RleHRcbi8vdGVzdCBTY29yZVxuLy90ZXN0IFN0YXRpY1RleHRcbi8vdGVzdCBJZGVudGl0eVxuLy90ZXN0IEluc3RydWN0aW9uc1xuLy90ZXN0IENoYXJhY3RlclxuLy90ZXN0IFRydW1wXG4vL3Rlc3QgUGxheWVyXG4vL3Rlc3QgSGVhbHRoXG4vL3Rlc3QgQW5pbWFsXG5cbi8vdGVzdCBHb3JpbGxhXG52YXIgbXlHb3JpbGxhID0gbmV3IEdvcmlsbGEoe1xuICBuYW1lOiAnRG9ua2V5IEtvbmcnfSlcbiAgY29uc29sZS5sb2cobXlHb3JpbGxhLmdldE5hbWUoKSk7XG5cbi8vdGVzdCBUaWdlclxudmFyIG15VGlnZXIgPSBuZXcgVGlnZXIgKHtcbiAgbmFtZTogJ1RpZ2dlcid9KVxuICBjb25zb2xlLmxvZyhteVRpZ2VyLmdldE5hbWUoKSk7XG5cbi8vdGVzdCBCZWFyXG52YXIgbXlCZWFyID0gbmV3IEJlYXIgKHtcbiAgbmFtZTogJ0JhbG9vJ30pXG4gIGNvbnNvbGUubG9nKG15QmVhci5nZXROYW1lKCkpO1xuXG4vL3Rlc3QgTGlvblxudmFyIG15TGlvbiA9IG5ldyBMaW9uICh7XG4gIG5hbWU6ICdNdWZhc2EnfSlcbiAgY29uc29sZS5sb2cobXlMaW9uLmdldE5hbWUoKSk7XG5cbi8vdGVzdCBBcmVhXG52YXIgbXlBcmVhID0gbmV3IEFyZWEgKHtcbiAgbmFtZTogJ1N0YWRpdW0gQXJlYSd9KVxuICBjb25zb2xlLmxvZyhteUFyZWEuZ2V0TmFtZSgpKTtcblxuLy90ZXN0IENhZ2VcbnZhciBteUNhZ2UgPSBuZXcgQ2FnZSAoe1xuICBuYW1lOiAndGhlIGRhbW4gY2FnZXMnfSlcbiAgY29uc29sZS5sb2cobXlDYWdlLmdldE5hbWUoKSk7XG4vL3Rlc3QgQW5pbWFsQXJlYVxuLy90ZXN0IFBsYXllckFyZWFcbi8vdmFyIGFyZWEgPSBuZXcgQXJlYShjb25maWcpO1xuLy9jb25zb2xlLmxvZyhhcmVhLmdldE5hbWUoKSk7XG5cbi8vdmFyIGNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIoY29uZmlnKTtcbi8vdmFyIHBsYXllciA9IG5ldyBQbGF5ZXIoY29uZmlnKTtcbiJdfQ==
