(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage = require('./StaticImage.js');

var _StaticImage2 = _interopRequireDefault(_StaticImage);

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

    // Animals get RandomWalk motion

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Animal).call(this, config));

    _this.mover.initRandomWalk(0.02, 'bottom');
    return _this;
  }

  _createClass(Animal, [{
    key: 'update',
    value: function update() {
      this.mover.updateRandomWalk();
    }
  }]);

  return Animal;
}(_Character3.default);

exports.default = Animal;

},{"./Character.js":7,"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":28}],2:[function(require,module,exports){
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

},{"./Area.js":3,"./GamePiece.js":12}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage = require('./StaticImage.js');

var _StaticImage2 = _interopRequireDefault(_StaticImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Area.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A generic region of the game screen. Used to add visual objects, and 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * create bounds for collision detection.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Info, Image, StaticImage
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Area = function (_GamePiece) {
  _inherits(Area, _GamePiece);

  function Area(config) {
    _classCallCheck(this, Area);

    // create a <div>, add to DOM, with optional image

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Area).call(this, config));

    _this.addToDOM(config.name, config.container, config.path);

    // position with absolute coordinated
    _this.setDOMPosition(config.position); //inherited from GamePiece
    _this.setDOMSize(config.size);
    return _this;
  }

  // create DOM element, Load a background image, and insert into container


  _createClass(Area, [{
    key: 'addToDOM',
    value: function addToDOM(name, container, imgPath) {
      this.dom = document.createElement('div');
      this.dom.id = name + '-area';

      // position absolutely
      this.dom.style.position = 'absolute';

      // Don't allow padding or margins or borders for Areas
      this.dom.style.margin = '0px';
      this.dom.style.padding = '0px';

      // add to the DOM
      container.insertBefore(this.dom, container.childNodes[0]);

      // if we have an image, insert in element background
      if (imgPath) {

        this.image = new _StaticImage2.default({
          name: this.dom.id + '-image'
        });

        this.image.loadBackgroundImage(this.dom, imgPath);
      }
    }

    // bounds detector for supplied Character

  }]);

  return Area;
}(_GamePiece3.default);

exports.default = Area;

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":28}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage2 = require('./StaticImage.js');

var _StaticImage3 = _interopRequireDefault(_StaticImage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Background.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game Logos, LogoTypes, Brand Name
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Background = function (_StaticImage) {
  _inherits(Background, _StaticImage);

  function Background(config) {
    _classCallCheck(this, Background);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Background).call(this, config));

    _this.setSource(config.source);
    _this.setAuthor(config.author);
    _this.loadBackgroundImage(config.domId, config.path);
    return _this;
  }

  return Background;
}(_StaticImage3.default);

exports.default = Background;

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":28}],5:[function(require,module,exports){
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

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],6:[function(require,module,exports){
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

},{"./Area.js":3,"./GamePiece.js":12}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage = require('./StaticImage.js');

var _StaticImage2 = _interopRequireDefault(_StaticImage);

var _Mover = require('./Mover.js');

var _Mover2 = _interopRequireDefault(_Mover);

var _Collider = require('./Collider.js');

var _Collider2 = _interopRequireDefault(_Collider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Character.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game-generated or user avatars. Characters are rendered in Canvas, but have their
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * position computed and updated outside canvas.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Character = function (_GamePiece) {
  _inherits(Character, _GamePiece);

  function Character(config) {
    _classCallCheck(this, Character);

    // Set position and size from configuration

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Character).call(this, config));

    _this.position = config.position;
    _this.size = config.size;

    // store a reference to the game object
    _this.game = config.game;

    _this.image = new _StaticImage2.default({
      name: config.name + '-image',
      path: config.path
    });
    //initialize a Mover object (animation)
    _this.mover = new _Mover2.default(_this);

    // Images don't automatically load when they're not attached to the DOM,
    // or a CSS background image
    _this.image.load(config.path, function () {
      console.log('loaded:' + config.name);
    });
    return _this;
  }

  // override default draw with our own


  _createClass(Character, [{
    key: 'draw',
    value: function draw(context) {
      if (this.image) {
        var img = this.image.data;
        console.log('drawing');
        if (img) {
          // draw image into HTML5 canvas
          context.drawImage(img, this.position.left, this.position.top);
        }
      }
    }
  }]);

  return Character;
}(_GamePiece3.default);

exports.default = Character;

},{"./Collider.js":8,"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./Mover.js":21,"./StaticImage.js":28}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * @class Collider
 * @description create the collision matrix defining which objects can collide 
 * with which objects. Objects that can collide have their potential colliders 
 * added as references, e.g. Player.trump or Trump.player.
 * @param Array characterArray the array of Characters who might be involved 
 * in collisions.
 */

var Collider = function () {
  function Collider(characterArray) {
    _classCallCheck(this, Collider);

    this.characterArray = characterArray;
    this.animalArray = []; //filled up in setUpCollisions
    this.setUpCollisions();
  }

  _createClass(Collider, [{
    key: 'setUpCollisions',
    value: function setUpCollisions() {
      for (var i = 0, len = this.characterArray.length; i < len; i++) {
        switch (this.characterArray[i].constructor.name) {
          case 'Lion':
          case 'Tiger':
          case 'Bear':
          case 'Gorilla':
            this.animalArray.push(this.characterArray[i]);
            break;
          case 'Trump':
            this.trump = this.characterArray[i];
            break;
          case 'Player':
            this.player = this.characterArray[i];
            break;
          default:
            break;
        }
      }

      //cross-connect the impactors
      this.trump.player = this.player;
      this.trump.animals = this.animalArray;
      this.player.trump = this.trump;

      //DEBUG
      window.animals = this.trump.animals;
    }
  }]);

  return Collider;
}();

exports.default = Collider;

},{}],9:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Info.js":18,"./Text.js":30}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

    // load the background image

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EndScreen).call(this, config));

    _this.loadBackground('img/screens/end-screen.png');

    // Load EndScreen sub-objects
    _this.loadInputScore();
    _this.loadHighScores();

    // Bind "play again" and "instructions" buttons.
    _this.bindReplay();
    _this.bindInstructions();
    return _this;
  }

  _createClass(EndScreen, [{
    key: 'loadInputScore',
    value: function loadInputScore() {}
  }, {
    key: 'loadHighScores',
    value: function loadHighScores() {}
  }, {
    key: 'bindReplay',
    value: function bindReplay() {
      console.log("in bindStart, this.game:" + this.game);
      // we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
      document.querySelector('#end-screen-play-button').addEventListener('click', function (e) {
        //alert("in handler, game:" + this.game)
        e.preventDefault();
        this.game.startGame();
      }.bind(this));
    }
  }, {
    key: 'bindInstructions',
    value: function bindInstructions() {
      console.log("in bindStart, this.game:" + this.game);
      // we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
      document.querySelector('#end-screen-instructions-button').addEventListener('click', function (e) {
        //alert("in handler, game:" + this.game)
        e.preventDefault();
        this.game.loadGame();
      }.bind(this));
    }
  }]);

  return EndScreen;
}(_Screen3.default);

exports.default = EndScreen;

},{"./GamePiece.js":12,"./Screen.js":25}],11:[function(require,module,exports){
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

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

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

var _Collider = require('./Collider.js');

var _Collider2 = _interopRequireDefault(_Collider);

var _Sounder = require('./Sounder.js');

var _Sounder2 = _interopRequireDefault(_Sounder);

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


//Import Collider and Sounder objects


var Game = function (_GamePiece) {
	_inherits(Game, _GamePiece);

	function Game(config) {
		_classCallCheck(this, Game);

		//game copyright

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Game).call(this, config));

		_this.warning = 'This game belongs to us, and nobody else.';

		//game reverts to StartScreen if unplayed
		_this.TIMEOUT = 5555;

		// define Id link to DOM
		_this.START_SCREEN_ID = 'start-screen';
		_this.GAME_SCREEN_ID = 'game-screen';
		_this.END_SCREEN_ID = 'end-screen';

		// model storage, screens
		_this.screens = [];

		// model storage, dynamic characters
		_this.displayCharacters = [];

		// initialize game, load start screen
		_this.init();

		return _this;
	} //end of constructor

	_createClass(Game, [{
		key: 'init',
		value: function init() {

			// Grab the HTML screen elements and encapsulate in a Screen class
			this.screens[this.START_SCREEN_ID] = new _StartScreen2.default({ name: 'Start Screen', id: this.START_SCREEN_ID, game: this });
			this.screens[this.GAME_SCREEN_ID] = new _GameScreen2.default({ name: 'Game Screen', id: this.GAME_SCREEN_ID, game: this });
			this.screens[this.END_SCREEN_ID] = new _EndScreen2.default({ name: 'End Screen', id: this.END_SCREEN_ID, game: this });

			// load the canvas
			this.loadCanvas();

			// make the start screen visible
			this.loadGame();
		}

		// get a reference to the HTML5 canvas context

	}, {
		key: 'loadCanvas',
		value: function loadCanvas() {
			this.canvas = document.querySelector('#game-screen-arena canvas');
			this.context = this.canvas.getContext("2d");
		}

		/**
   * Load Characters
   * dynamic Characters (e.g. those that animate) are loaded by Game.
   * Other static visual objects are loaded by Screen classes.
   */

	}, {
		key: 'loadPlayers',
		value: function loadPlayers() {
			this.displayCharacters.push(new _Player2.default({
				name: 'Player', position: { top: 510, left: 200 },
				path: 'img/players/player.png',
				game: this
			}));
		}
	}, {
		key: 'loadAnimals',
		value: function loadAnimals() {
			this.displayCharacters.push(new _Lion2.default({
				name: 'Lion',
				position: { top: 1.5, left: 65 }, //15,94//
				path: 'img/animals/lion1.png',
				game: this
			}));
			this.displayCharacters.push(new _Tiger2.default({
				name: 'Tiger',
				position: { top: 1.5, left: 304 }, //15,333//
				path: 'img/animals/tiger1.png',
				game: this
			}));
			this.displayCharacters.push(new _Bear2.default({
				name: 'Bear', position: { top: 1.5, left: 543 }, //15,570//
				path: 'img/animals/bear1.png',
				game: this
			}));
			this.displayCharacters.push(new _Gorilla2.default({
				name: 'Gorilla', position: { top: 3, left: 782 }, //15,812//
				path: 'img/animals/gorilla1.png',
				game: this
			}));
		}
	}, {
		key: 'loadTrumps',
		value: function loadTrumps() {
			this.displayCharacters.push(new _Trump2.default({
				name: 'Trump', position: { top: 420, left: 150 }, //450,200//
				path: 'img/trumps/trump1.png',
				game: this
			}));
		}
	}, {
		key: 'loadGame',
		value: function loadGame() {

			//load Info assets

			console.log('loading splash screen');
			this.screens[this.END_SCREEN_ID].hideScreen();
			this.screens[this.START_SCREEN_ID].showScreen();
		}
	}, {
		key: 'startGame',
		value: function startGame() {

			//load Characters
			this.loadAnimals();
			this.loadPlayers();
			this.loadTrumps();

			// add collision matrix
			this.collider = new _Collider2.default(this.displayCharacters);
			//load audio samples
			this.soundPool = new _Sounder2.default();
			this.soundPool.addSound('kick', 0.7);
			this.soundPool.addSound('lion', 0.7);
			this.soundPool.addSound('tiger', 0.7);
			this.soundPool.addSound('bear', 0.7);
			this.soundPool.addSound('gorilla', 0.7);
			//make GameScreen visible

			// initialize elapsed time
			this.startTime = new Date();

			// show GameScreen, hide others
			console.log('starting game');
			this.screens[this.START_SCREEN_ID].hideScreen();
			this.screens[this.END_SCREEN_ID].hideScreen();
			this.screens[this.GAME_SCREEN_ID].showScreen();
			this.gameLoop();
		}
	}, {
		key: 'endGame',
		value: function endGame() {

			console.log('ending game');

			// reset timer
			this.startTime = 0;

			// turn off animation
			cancelAnimationFrame(this.globalId);
			this.globalId = null;

			// go to end screen
			this.screens[this.GAME_SCREEN_ID].hideScreen();
			this.screens[this.END_SCREEN_ID].showScreen();
		}
	}, {
		key: 'elapsed',
		value: function elapsed() {

			// record time we have been in gameLoop
			this.endTime = new Date();

			// time difference in ms

			var timeDiff = (this.endTime - this.startTime) / 1000;

			// get seconds (Original had 'round' which incorrectly counts 0:28, 0:29, 1:30 ... 1:59, 1:0)
			return Math.round(timeDiff % 60);
		}
	}, {
		key: 'checkIfComplete',
		value: function checkIfComplete() {

			// game logic to see if the game should reset
			/////////////console.log('ELAPSED:' + this.elapsed());

			if (this.elapsed() > this.TIMEOUT) {
				// if idle too long, reset game to start
				return true;
			}

			return false;
		}
	}, {
		key: 'update',
		value: function update() {

			for (var i = 0, len = this.displayCharacters.length; i < len; i++) {

				var character = this.displayCharacters[i];

				switch (character.getClass()) {
					case 'Player':
					case 'Trump':
					case 'Lion':
					case 'Tiger':
					case 'Bear':
					case 'Gorilla':
					default:
						break;
				}

				character.update();
			}
		}
	}, {
		key: 'draw',
		value: function draw() {

			for (var i = 0, len = this.displayCharacters.length; i < len; i++) {
				this.displayCharacters[i].draw(this.context);
			}
		}
	}, {
		key: 'gameLoop',
		value: function gameLoop() {

			if (this.checkIfComplete()) {
				this.endGame();
				return;
			}
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.update();
			this.draw();

			//console.log('looping...')
			this.globalId = requestAnimationFrame(this.gameLoop.bind(this));
		}
	}]);

	return Game;
}(_GamePiece3.default);

exports.default = Game;

},{"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":5,"./Cage.js":6,"./Character.js":7,"./Collider.js":8,"./DynamicText.js":9,"./EndScreen.js":10,"./GamePiece.js":12,"./GameScreen.js":13,"./Gorilla.js":14,"./Health.js":15,"./Identity.js":16,"./Image.js":17,"./Info.js":18,"./Instructions.js":19,"./Lion.js":20,"./Player.js":22,"./PlayerArea.js":23,"./Score.js":24,"./Screen.js":25,"./Sounder.js":26,"./StartScreen.js":27,"./StaticText.js":29,"./Text.js":30,"./Tiger.js":31,"./Trump.js":32}],12:[function(require,module,exports){
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
    this.ready = true; // change to false for deferred loads
  }

  /** 
   * Set a position for the object, also the position of the 
   * DOM representation of the object
   */


  _createClass(GamePiece, [{
    key: 'setDOMPosition',
    value: function setDOMPosition(position) {
      this.position = position;
      if (this.dom) {
        this.dom.style.top = position.top + 'px';
        this.dom.style.left = position.left + 'px';
      }
    }

    /** 
     * Set the object size, also its DOM size
     */

  }, {
    key: 'setDOMSize',
    value: function setDOMSize(size) {
      this.size = size;
      if (this.dom) {
        this.dom.style.width = size.width + 'px';
        this.dom.style.height = size.height + 'px';
      }
    }

    /** 
     * Generate a unique ID for every game object.
     * @link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */

  }, {
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
     * Return the given name of this object
     */

  }, {
    key: 'getName',
    value: function getName() {
      return this.name;
    }

    /** 
     * return the class of the object
     */

  }, {
    key: 'getClass',
    value: function getClass() {
      return this.constructor.name;
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
     * Get the enclosing box outside the object for external collisions
     */

  }, {
    key: 'getCollisionRect',
    value: function getCollisionRect() {}

    /** 
     * Get the internal box when this object acts as a container for another
     */

  }, {
    key: 'getBoundsRect',
    value: function getBoundsRect() {}

    /** 
     * Generic 'ready' function (e.g. for delayed asset loads)
     */

  }, {
    key: 'setReady',
    value: function setReady(val) {
      this.ready = val;
    }

    /** 
     * Generic update (override)
     */

  }, {
    key: 'update',
    value: function update() {}

    /** 
     * generic draw (override)
     */

  }, {
    key: 'draw',
    value: function draw() {}
  }]);

  return GamePiece;
}();

exports.default = GamePiece;

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

var _Area = require('./Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _AnimalArea = require('./AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('./PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GameScreen).call(this, config));

    _this.cages = [];
    _this.animalAreas = [];
    _this.playerAreas = [];

    //GameScreen should hide its local header and footer
    _this.hideHeader();
    _this.hideFooter();

    // load the background image
    _this.loadBackground('img/screens/game-screen1.png');

    // get the section that has the canvas for overlay
    var arena = document.getElementById('game-screen-arena');

    // load sub-objects into the Arena
    _this.cages = _this.loadCages(arena, 'img/areas/cage1.png');
    _this.animalArea = _this.loadAnimalArea();
    _this.playerArea = _this.loadPlayerArea();

    return _this;
  }

  _createClass(GameScreen, [{
    key: 'loadCages',
    value: function loadCages(container, imgPath) {
      // load 4 Cages
      this.cages.push(new _Cage2.default({
        name: 'lion-cage',
        position: { top: 0, left: 70 },
        size: { width: 100, height: 100 },
        container: container,
        path: imgPath
      }));
      this.cages.push(new _Cage2.default({
        name: 'tiger-cage',
        position: { top: 0, left: 310 },
        size: { width: 100, height: 104 },
        container: container,
        path: imgPath
      }));
      this.cages.push(new _Cage2.default({
        name: 'bear-cage',
        position: { top: 0, left: 550 },
        size: { width: 100, height: 100 },
        container: container,
        path: imgPath
      }));
      this.cages.push(new _Cage2.default({
        name: 'gorilla-cage',
        position: { top: 0, left: 790 },
        size: { width: 100, height: 100 },
        container: container,
        path: imgPath
      }));
    }
  }, {
    key: 'loadAnimalArea',
    value: function loadAnimalArea() {
      // load Animal movement area
      this.animalAreas.push(new _AnimalArea2.default({
        name: 'Zoo',
        position: { top: 104, left: 6 },
        size: { width: 970, height: 410 },
        container: this.dom,
        path: null
      }));
    }
  }, {
    key: 'loadPlayerArea',
    value: function loadPlayerArea() {
      // load the Player
      this.playerAreas.push(new _PlayerArea2.default({
        name: 'Player Area',
        position: { top: 514, left: 6 },
        size: { width: 970, height: 100 },
        container: this.dom,
        path: null
      }));
    }
  }]);

  return GameScreen;
}(_Screen3.default);

exports.default = GameScreen;

},{"./AnimalArea.js":2,"./Area.js":3,"./Cage.js":6,"./GamePiece.js":12,"./PlayerArea.js":23,"./Screen.js":25}],14:[function(require,module,exports){
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

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],15:[function(require,module,exports){
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

},{"./Character.js":7,"./GamePiece.js":12}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage2 = require('./StaticImage.js');

var _StaticImage3 = _interopRequireDefault(_StaticImage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Identity.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game Logos, LogoTypes, Brand Name
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Identity = function (_StaticImage) {
	_inherits(Identity, _StaticImage);

	function Identity(config) {
		_classCallCheck(this, Identity);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Identity).call(this, config));

		_this.setSource(config.source);
		_this.setAuthor(config.author);
		_this.loadImageToDOM(config.domId, config.path);

		//Hide any <h2> text equivalent of identity in this CSS box
		var textIdentity = document.querySelector('#' + config.domId + ' h2');
		textIdentity.style.display = 'none';
		return _this;
	}

	return Identity;
}(_StaticImage3.default);

exports.default = Identity;

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":28}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info2 = require('./Info.js');

var _Info3 = _interopRequireDefault(_Info2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StaticImage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Image-style Information that cannot be changed once the game is loaded
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Image = function (_Info) {
	_inherits(Image, _Info);

	// save scope
	// TODO: refactor with arrow function

	function Image(config) {
		_classCallCheck(this, Image);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Image).call(this, config));

		_this.ready = false; //over-ride GamePiece and info with deferrals
		_this.image = null;
		_this.path = config.path;
		_this.author = config.author;
		_this.source = config.source;
		return _this;
	}

	// load an image


	_createClass(Image, [{
		key: 'load',
		value: function load(path, callback) {
			var that = this;
			that.setReady(false);
			console.log('entering load inImage');
			var img = document.createElement('img');
			img.src = path;
			img.onload = function () {
				console.log(that.name + ' image loaded from:' + path + ' w:' + img.width + ' h:' + img.height);
				that.setReady(true);
				that.data = img;

				if (callback) {
					callback();
				}
			};
			img.onerror = function (e) {
				console.log('error loading img from:' + path);
			};
		}

		// load image, append to existing DOM element
		// NOTE: this is over-written in Character.js, which loads images into Canvas

	}, {
		key: 'loadImageToDOM',
		value: function loadImageToDOM(domId, path, callback) {
			var that = this;
			this.load(path, function () {
				console.log('foreground image ' + path + ' loaded');
				document.getElementById(domId).appendChild(that.data);
				if (callback) {
					callback();
				}
			});
		}

		// load image as a CSS background image into existing DOM element.
		// NOTE: no local reference to image in this case

	}, {
		key: 'loadBackgroundImage',
		value: function loadBackgroundImage(container, path, callback) {
			console.log('loading background image:' + path);
			container.style.backgroundImage = 'url(' + path + ')';
			this.setReady(true);
			if (callback) {
				callback();
			}
		}

		// Draw the image to a supplied canvas context

	}, {
		key: 'drawToCanvas',
		value: function drawToCanvas(context, position, size) {
			context.drawImage(img, position.top, position.left, size.width, size.height);
		}

		// Draw to the DOM. Assume the Image was already attached to the DOM

	}, {
		key: 'drawToDOM',
		value: function drawToDOM(position, size) {
			this.image.style.top = position.top;
			this.image.style.left = position.left;
			this.image.style.width = size.width;
			this.image.style.height = size.height;
		}
	}]);

	return Image;
}(_Info3.default);

exports.default = Image;

},{"./GamePiece.js":12,"./Info.js":18}],18:[function(require,module,exports){
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

	_createClass(Info, [{
		key: 'setAuthor',
		value: function setAuthor(author) {
			this.author = author;
		}
	}, {
		key: 'setSource',
		value: function setSource(source) {
			this.source = source;
		}
	}]);

	return Info;
}(_GamePiece3.default);

exports.default = Info;

},{"./GamePiece.js":12}],19:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Info.js":18,"./StaticText.js":29,"./Text.js":30}],20:[function(require,module,exports){
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

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Mover
 * @description update position of object being animated by Game.
 */

var Mover = function () {
    function Mover(gameObj) {
        _classCallCheck(this, Mover);

        this.obj = gameObj;

        // Character has reference to Game
        this.game = gameObj.game;

        // Movement types
        this.type = 0;
        this.SLEW = 1;
        this.RANDOM = 2;
        this.PINGPOING = 3;

        if (!this.game.soundPool) {
            console.warn('no sounds initialized. Game will play silently');
        }
    }

    /**
     * @method truncator
     * @description truncate (not round) number to fixed number of decimals
     * @param Number num floating-point number
     * @param Integer decimals the number of decimals points to round to
     * @returns Number the truncated number
     */


    _createClass(Mover, [{
        key: 'truncator',
        value: function truncator(num, decimals) {
            var numPower = Math.pow(10, decimals); // "numPowerConverter" might be better
            return ~ ~(num * numPower) / numPower;
        }

        /**
         * @method randomizer
         * @description randomize a number
         */

    }, {
        key: 'randomizer',
        value: function randomizer() {
            var d = performance.now();
            d = parseInt(d) - d;
            d = this.truncator(d, 2) / 10;
            return d;
        }

        /**
         * @method getCenter
         */

    }, {
        key: 'getCenter',
        value: function getCenter(x, y, width, height) {
            return {
                x: x + width / 2,
                y: y + height / 2
            };
        }

        /**
         * @method initSlew
         * @description slew object horizontally with keypresses. Adds event
         * listeners for keydown and keyup events. Used for
         * Player characters moving horizontally in the PlayerArea
         */

    }, {
        key: 'initSlew',
        value: function initSlew() {
            var _this = this;

            console.log('init Slew motion');
            this.type = this.SLEW;

            this.speed = 0;
            this.ticker = 0;
            this.lastDir = 1;

            // add bottom, right to make a Rect for the PlayerArea
            this.bounds = this.game.screens['game-screen'].playerAreas[0].position;
            this.bounds.width = this.game.screens['game-screen'].playerAreas[0].size.width;
            this.bounds.height = this.game.screens['game-screen'].playerAreas[0].size.height;
            this.bounds.bottom = this.bounds.top + this.bounds.height;
            this.bounds.right = this.bounds.left + this.bounds.width;

            this.image = this.obj.image;

            // toggle the position of the Player when kicking
            this.unKick = this.obj.position.top;
            this.inKick = this.obj.position.top - 6;

            // NOTE: Trump is added to Player in Collider

            // flag our initialization
            this.inited = true;

            // listen for user events
            document.addEventListener('keydown', function (event) {
                return _this.slew(event);
            }, false);

            document.addEventListener('keyup', function (event) {
                return _this.unkick(event);
            }, false);
        }

        /**
         * @method initRandomWalk
         * @description init random motions along a path from the
         * top to the bottom of the screen. Used for
         * Animal characters moving through the AnimalArea.
         * @param Number prefSpeed the speed of movement
         * @param String direction the direction the Animal ultimately moves,
         * - 'top': overall movement up the screen
         * - 'left': overall movement to the screen left
         * - 'bottom': overall movement to the screen bottom (DEFAULT)
         * - 'right': overall movement to the screen right
         * - 'return': return immediately to the Cage area
         * - 'caged': stay in the Cage area
         */

    }, {
        key: 'initRandomWalk',
        value: function initRandomWalk(prefSpeed, direction) {
            console.log('init RandomWalk');
            this.type = this.RANDOM;

            this.speed = prefSpeed * this.timeStampRandom();
            this.delay = this.timeStampRandom() * 300;
            this.obj.direction = direction;
            this.counter = 0;
            this.delayCounter = 0;
            this.MAX = 30;
            this.MAX_DELAY = 300;

            // one-time play of Animal sound
            this.firstMove = true;

            // add bottom, right to make a Rect for the AnimalArea
            this.bounds = this.game.screens['game-screen'].animalAreas[0].position;
            this.bounds.width = this.game.screens['game-screen'].animalAreas[0].size.width;
            this.bounds.height = this.game.screens['game-screen'].animalAreas[0].size.height;
            this.bounds.bottom = this.bounds.top + this.bounds.height;
            this.bounds.right = this.bounds.left + this.bounds.width;

            // remember where we started (in the cage)
            this.startTop = this.obj.position.top;
            this.startLeft = this.obj.position.left;

            // cache position during new random moves
            this.newTop = 0, this.newLeft = 0;

            // get bottom and right from Character from its Image
            this.image = this.obj.image;

            // flag our initialization
            this.inited = true;
        }

        /**
         * @method initPingPong
         * @description init a ping-pong style motion. Used for
         * Trump characters moving through the AnimalArea.
         */

    }, {
        key: 'initPingPong',
        value: function initPingPong(prefSpeed) {
            console.log('init PingPong motion');
            this.type = this.PINGPONG;

            //Animal area
            // add bottom, right to make a Rect for the AnimalArea
            this.bounds = this.game.screens['game-screen'].animalAreas[0].position;
            this.bounds.width = this.game.screens['game-screen'].animalAreas[0].size.width;
            this.bounds.height = this.game.screens['game-screen'].animalAreas[0].size.height;
            this.bounds.bottom = this.bounds.top + this.bounds.height;
            this.bounds.right = this.bounds.left + this.bounds.width;

            this.obj.startTop = this.obj.position.top;

            // get bottom and right from Character from its Image
            this.image = this.obj.image;

            this.obj.speed = 0;
            this.obj.dx = 0;
            this.obj.dy = 0;

            // NOTE: Animals and Players are added to Trump in Collider

            // flag our initialization
            this.inited = true;
        }

        /**
         * @method slew
         * Move object slightly up for duration of space bar pressed down
            * Callback for keydown addEventListener
            * @param Event e the keydown event
            */

    }, {
        key: 'slew',
        value: function slew(e) {
            switch (e.keyCode) {
                case 32:
                case 38:
                    this.kick(e);
                    e.preventDefault(); //prevent scroll
                    break;
                case 37:
                    this.speed++;
                    this.ticker = 0;
                    this.obj.position.left -= this.speed;
                    this.lastDir = -1;
                    e.preventDefault(); //prevent scroll
                    break;
                case 39:
                    this.speed++;
                    this.ticker = 0;
                    this.obj.position.left += this.speed;
                    this.lastDir = 1;
                    e.preventDefault(); //prevent scroll
                    break;
                default:
                    break;
            }
        }

        /**
         * @method updateSlew
         * @description move back and forth horizontally, with a simple easing motion
         * when left and right arrow keys are pressed. Handle collisions with the left
         * and right walls of the PlayerArea.
         * Call in an update function inside the Character, e.g.
         * update () { updateRandomWalk(); }
         * The main Game object automatically finds and 'fires' update() function in
         * all Characters.
         */

    }, {
        key: 'updateSlew',
        value: function updateSlew() {
            if (!this.inited) {
                console.error('Player Slew NOT initialized (did you leave out of constructor?)');
                return;
            }
            this.ticker++;
            if (this.speed > 0) {
                if (this.ticker > 10) {
                    this.speed /= 2;
                    if (this.speed < 1) {
                        this.speed = 0;
                    }
                }
            }
            this.obj.position.left += this.lastDir * this.speed;

            //check bounds
            if (this.bounds) {
                if (this.image.data) {
                    var w = this.image.data.width;
                    if (this.obj.position.left < this.bounds.left) {
                        this.lastDir = 1;
                        this.speed /= 1.2;
                        this.obj.position.left = this.bounds.left + this.speed * 1.5;
                    } else if (this.obj.position.left > this.bounds.right - w) {
                        this.lastDir = -1;
                        this.speed /= 1.2;
                        this.obj.position.left = this.bounds.right - w - this.speed * 1.5;
                    }
                }
            }
        }

        /**
         * @method kick
         * @description if foot is near Trump, kick him into the Animal
         */

    }, {
        key: 'kick',
        value: function kick(e) {
            //console.log('::::THIS TRUMP:::::' + this.obj.trump)
            this.obj.position.top = this.inKick;

            if (!this.obj.trump) {
                console.error('Error: missing collision matrix (did you include Collider?)');
                return;
            }

            // see if we're close enough to kick in the y axis
            var trumpYDist = this.obj.position.top - this.obj.trump.image.data.width - this.obj.trump.position.top;
            //console.log('trumpYDist:' + trumpYDist)

            // If Player is close in Y, and inside X range, kick the Trump into AnimalArea
            if (trumpYDist < 10) {

                // start the Trump moving, speed
                this.obj.trump.speed = 40;

                // if too close to left wall, pre-assign a value
                if (this.obj.trump.position.left < this.bounds.left + 20) {
                    console.log(">>Trump: left bound correction");
                    this.obj.trump.dx = -0.2;
                    this.obj.trump.dy = 0.8;
                    return;
                }

                // compute dx and dy for Trump
                var dist = (this.obj.position.left - this.obj.trump.position.left) / 50;
                if (Math.abs(dist) < 1.0) {
                    var dx = dist;
                    if (dx > 0.003 && dx < 0.8) {
                        this.obj.trump.dx = dx;
                        this.obj.trump.dy = 1.0 - dx;
                        // start the kicking sound
                    } else if (dx < 0 && dx > -0.8) {
                            this.obj.trump.dx = dx;
                            this.obj.trump.dy = 1.0 + dx;
                        } else if (Math.abs(dx) < 0.003) {
                            var d = this.randomizer();
                            d = d - this.randomizer();
                            this.obj.trump.dx = d;
                            this.obj.trump.dy = 1.0 + dx;
                            // start the kicking sound
                        } else {
                                this.obj.trump.dx = 0;
                                this.obj.trump.dy = 0;
                            }

                    // start the kicking sound
                    if (this.game.soundPool) {
                        this.game.soundPool.playSound('kick');
                    }
                }
            }
        } // end of function

        /**
         * @method unkick
         * @description set position of Player back to original
         */

    }, {
        key: 'unkick',
        value: function unkick(e) {
            switch (e.keyCode) {
                case 32:
                case 38:
                    this.obj.position.top = this.unKick;
                    break;
            }
        }

        /**
         * @method timeStampRandom
         * @description randomize in a 10-fold range using window.performance
         */

    }, {
        key: 'timeStampRandom',
        value: function timeStampRandom() {
            var d = new Date().getTime();
            if (window.performance && typeof window.performance.now === "function") {
                d += performance.now(); //use high-precision timer if available
            }
            var num = 'xxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 10) % 10 | 0;
                d = Math.floor(d / 10);
                return (c == 'x' ? r : r & 0x3 | 0x8).toString(10);
            });
            return num / 10000;
        }

        /**
         * Returns a random number between min (inclusive) and max (exclusive)
         * @link
         */

    }, {
        key: 'getRandom',
        value: function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        /**
         * @method updateRandomWalk
         * @description generate a random walk, with one preferred direction,
         * giving the meandering motion used by Animals.
         * Call in an update function inside the Character, e.g.
         * update () { updateRandomWalk(); }
         * The main Game object automatically finds and 'fires' update() function in
         * all Characters.
         */

    }, {
        key: 'updateRandomWalk',
        value: function updateRandomWalk() {
            if (!this.inited) {
                console.error('Animal RandomWalk NOT initialized (did you leave out of constructor?)');
                return;
            }
            this.counter++;
            this.delayCounter++;
            if (this.delayCounter < this.delay) {
                //console.log('delayCounter:' + this.delayCounter + ' MAX:' + this.MAX_DELAY);
                return;
            }

            // Play animal's opening sound ONCE at start of movement
            if (this.firstMove && this.game.soundPool) {
                this.game.soundPool.playSound(this.obj.constructor.name.toLowerCase(), 0.7);
                this.firstMove = false;
            }

            // compute dx and dy from random walk. store initial position
            this.oldLeft = this.obj.position.left;
            this.oldTop = this.obj.position.top;

            // this.obj.direction was set in initRandomWalk
            switch (this.obj.direction) {
                case 'top':
                    this.obj.position.top -= this.speed + 0.1 * this.getRandom(1, this.speed);
                    this.obj.position.left -= 10 * this.getRandom(-this.speed, this.speed / 2);
                    break;
                case 'left':
                    this.obj.position.left -= this.speed + 0.5 * this.getRandom(0, this.speed);
                    this.obj.position.top += 10 * this.getRandom(-this.speed, this.speed);
                    break;
                case 'bottom':
                    if (this.counter > this.MAX) {
                        this.MAX = this.getRandom(2, 15);
                        this.newLeft = this.getRandom(-this.speed, this.speed);
                        this.counter = 0;
                    } else if (this.counter > this.MAX / 2) {
                        this.speed = this.getRandom(-0.2, 1.2); //NOTE: fine-tune this to make gameplay harder
                    }
                    this.obj.position.top += this.speed;
                    var r = this.getRandom(-1, 1);
                    this.obj.position.left -= r * this.newLeft;
                    break;
                case 'right':
                    this.obj.position.left += this.speed + 0.5 * this.getRandom(0, this.speed);
                    this.obj.position.top += 10 * this.getRandom(-this.speed, this.speed);
                    break;
                case 'return':
                    // This is caused by a Trump collider running into the Animal
                    // TODO: return Animal to its cage
                    this.obj.direction = 'caged';
                    // TODO: write return arc
                    break;
                case 'caged':
                    this.obj.position.left = this.startLeft;
                    this.obj.position.top = this.startTop;
                    // TODO: when caged, reset until it is uncaged again
                    break;
                default:
                    console.error('Mover.setPrefDirection: invalid direction:' + this.obj.direction);
                    break;
            }

            // Compute dx and dy for Animals
            var xdist = this.oldLeft - this.obj.position.left;
            var ydist = this.oldTop - this.obj.position.top;
            var sum = xdist + ydist;
            if (sum > 0.0001) {
                this.obj.dx = xdist / sum;
                this.obj.dy = ydist / sum;
            } else {
                this.obj.dx = 0;
                this.obj.dy = 0;
            }

            // save our new position
            this.oldLeft = this.obj.position.left;
            this.oldTop = this.obj.position.top;

            //console.log(' dx:' + this.obj.dx + ' dy:' + this.obj.dy + ' sum:' + sum)
        }
    }, {
        key: 'calculateCollision',
        value: function calculateCollision(trump, animal) {
            var w = this.obj.image.data.width;
            var h = this.obj.image.data.height;
            var aw = animal.image.data.width;
            var ah = animal.image.data.height;

            if (this.obj.position.left < animal.position.left + aw && this.obj.position.left + w > animal.position.left && this.obj.position.top < animal.position.top + ah && this.obj.position.top + h > animal.position.top) {

                //get Trump centeral point
                var tXCenter = this.obj.position.left + w / 2;
                var tYCenter = this.obj.position.top + h / 2;

                //get Animal central point
                var aXCenter = animal.position.left + aw / 2;
                var aYCenter = animal.position.top + ah / 2;

                //compute x and y vector between centers
                var cXDiff = tXCenter - aXCenter;
                var cYDiff = tYCenter = aYCenter;

                // Trump doesn't react if not moving (even if animal does)
                if (trump.speed != 0 && trump.dx != 0 && trump.dy != 0) {

                    // move object so it isn't colliding anymore
                    if (cXDiff >= 0) {
                        trump.position.x += cXDiff + 1;
                    } else {
                        trump.position.x -= cXDiff + 1;
                    }

                    if (cYDiff >= 0) {
                        trump.position.y += cYDiff + 1;
                    } else {
                        trump.position.y -= cYDiff + 1;
                    }

                    // normalize new vectors
                    trump.dx = -cXDiff / cYDiff;
                    trump.dy = -cYDiff / cXDiff;

                    // rounding error
                    var ddif = Math.abs(trump.dx + trump.dy);
                    if (ddif > 1.0) {
                        if (trump.dx >= 0) {
                            trump.dy -= ddif;
                        } else {
                            trump.dy += ddif;
                        }
                    }
                } //end of Trump is moving
                //console.log('dx::::::' + trump.dx + ' dy::::::' + trump.dy)

                return true;
            }
            return false;
        }

        /**
         * @method updatePingPong
         * @description move in a ping-pong style.
         * Call in an update function inside the Character, e.g.
         * update () { updateRandomWalk(); }
         * The main Game object automatically finds and 'fires' update() function in
         * all Characters.
         * Possible updates for motion:
         * 1. Collision with a Player (via kick() method) starts the Trump character moving
         * 2. Trump will bounce on all walls EXCEPT the bottom wall
         * 3. When the Trump intersects the bottom wall, they stop moving
         * 4. If they collide with an Animal, they bounce, and the Animal returns to its Cage.
         */

    }, {
        key: 'updatePingPong',
        value: function updatePingPong() {

            if (!this.inited) {
                console.error('Trump PingPong NOT initialized (did you leave out of constructor?)');
                return;
            }
            //console.log('dx:' + this.obj.dx + ' dy:' + this.obj.dy);
            this.obj.position.left -= this.obj.speed * this.obj.dx;
            this.obj.position.top -= this.obj.speed * this.obj.dy;

            //check bounds (AnimalArea)
            if (this.bounds) {
                if (this.obj.image.data) {

                    var w = this.obj.image.data.width;
                    var h = this.obj.image.data.height;

                    // catch cases where Trump gets into the Cage area
                    if (this.obj.position.top < this.bounds.top) {
                        if (this.obj.dy > 0) {
                            this.obj.dy = -this.obj.dy;
                        }
                        this.obj.position.top = this.bounds.top + 1;
                    }

                    // run this only if we are moving down the screen
                    if (this.obj.dy < 0) {
                        if (this.obj.position.top > this.obj.startTop - this.obj.dy * this.obj.speed) {
                            //this.obj.dy = -this.obj.dy;
                            this.obj.position.top = this.obj.startTop;
                            this.obj.dx = 0;
                            this.obj.dy = 0;
                        }
                        var dist = this.bounds.bottom - h - this.obj.position.top;
                        var spd = -this.obj.dy * this.obj.speed * 4;

                        // decelerate before stopping at bottom of AnimalArea
                        if (dist < spd && spd > 2) {
                            this.obj.speed /= 2;
                        }
                    } //end of dy negative (going down)

                    // bounce on the other 3 walls
                    if (this.obj.position.left < this.bounds.left) {
                        this.obj.dx = -this.obj.dx;
                    }
                    if (this.obj.position.top < this.bounds.top) {
                        this.obj.dy = -this.obj.dy;
                    }
                    if (this.obj.position.left > this.bounds.right - w) {
                        this.obj.dx = -this.obj.dx;
                    }

                    // If we encounder an animal, bounce, AND 'kick' the animal back into its cage
                    if (this.obj.animals) {
                        for (var i = 0, len = this.obj.animals.length; i < len; i++) {
                            var animal = this.obj.animals[i];

                            if (this.calculateCollision(this.obj, animal)) {
                                //set the Animal's state to return home
                                console.log('>>>RETURNING ANIMAL TO CAGE');
                                animal.direction = 'return';
                                if (this.obj.speed < 2) {
                                    this.obj.speed = 2;
                                }
                            }
                        }
                    }
                }
            }

            //break out of horizontal move
            if (this.obj.dy < 0.001 && this.obj.dx > 0.001) {
                var d = this.randomizer();
                this.obj.dy += d - this.randomizer();
            }
        }
    }]);

    return Mover;
}(); // end of class


exports.default = Mover;

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, config));

    _this.mover.initSlew(); //enables Player movement
    return _this;
  }

  _createClass(Player, [{
    key: 'update',
    value: function update() {
      this.mover.updateSlew(); //smooths motion, applies Collider
    }
  }]);

  return Player;
}(_Character3.default);

exports.default = Player;

},{"./Character.js":7,"./GamePiece.js":12}],23:[function(require,module,exports){
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

},{"./Area.js":3,"./GamePiece.js":12}],24:[function(require,module,exports){
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

},{"./DynamicText.js":9,"./GamePiece.js":12,"./Info.js":18,"./Text.js":30}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage = require('./StaticImage.js');

var _StaticImage2 = _interopRequireDefault(_StaticImage);

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

    // save a reference to our parent Game object

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Screen).call(this, config));

    _this.game = config.game;

    window.config = config; /////////////////////////DEBUG ONLY

    // Screens are defined in HTML, so save a reference to our DOM id
    _this.domId = config.id;

    // save a reference to the DOM element we're connected to
    _this.dom = document.getElementById(_this.domId);

    // insert the copyright info from the main Game object
    _this.addWarning();
    return _this;
  }

  // load a background image into the Screen


  _createClass(Screen, [{
    key: 'loadBackground',
    value: function loadBackground(path, callback) {
      console.log("loading:" + this.domId);
      this.backgroundImage = new _Image2.default({
        name: this.name + '-image',
        domId: this.id + '-image',
        path: path,
        callback: callback
      });
      this.backgroundImage.loadBackgroundImage(this.dom, path, callback);
    }

    // show and hide regions of the Screen

  }, {
    key: 'showScreen',
    value: function showScreen() {
      console.log("showing:" + this.domId);
      this.dom.style.display = "block";
    }
  }, {
    key: 'hideScreen',
    value: function hideScreen() {
      console.log("hiding:" + this.domId);
      this.dom.style.display = "none";
    }
  }, {
    key: 'showHeader',
    value: function showHeader() {
      this.dom.querySelector('.header').style.display = "block";
    }
  }, {
    key: 'hideHeader',
    value: function hideHeader() {
      this.dom.querySelector('.header').style.display = "none";
    }
  }, {
    key: 'showFooter',
    value: function showFooter() {
      this.dom.querySelector('.footer').style.display = "block";
    }
  }, {
    key: 'hideFooter',
    value: function hideFooter() {
      this.dom.querySelector('.footer').style.display = "none";
    }
  }, {
    key: 'addWarning',
    value: function addWarning() {
      this.dom.querySelector('.footer').innerHTML = this.game.warning;
    }
  }]);

  return Screen;
}(_GamePiece3.default);

exports.default = Screen;
;

},{"./GamePiece.js":12,"./Image.js":17,"./StaticImage.js":28}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * @class Sounder.js

 * @description provide sounds that other objects can play. Detects the kinds 
 * of audio files the web brower can play, and serves the first file it finds in 
 * the /audio folder of the distribution. Audio files are accessed by custom names 
 * for playback.

 * Adapted from
 * @http://blog.sklambert.com/html5-canvas-game-html5-audio-and-finishing-touches/

 * Sounder.js should be loaded in the main Game initialization process.

 * In addition, the distribution MUST have an /audio directory with files in multiple 
 * audio formats:
 * MP3 (.mp3)
 * Ogg-Vorbis (.ogg)
 * WAV (.wav)

 * Audio Editors:
 * Audacity (free)
 * @link http://www.audacityteam.org/
 * ProTools ($$$)
 * @link http://www.avid.com/pro-tools

 * Audio converters:
 * @link http://media.io/
 * @link https://sourceforge.net/projects/audacity/
 * @link http://www.mediahuman.com/audio-converter/
 * @link http://www.html5audioconverter.com/
 
 * Audio Samples:
 * @link http://www.grsites.com/archive/sounds/category/25/?offset=20
 * @link https://www.freesound.org
 */

var Sounder = function () {
	function Sounder() {
		_classCallCheck(this, Sounder);

		// Create an array of loaded sounds
		this.path = 'audio/';

		this.sounds = [];
		this.checkAudio();
	}

	/** 
  * @method checkAudio
  * @description see which audio file formats can be played by the browser.
  */


	_createClass(Sounder, [{
		key: 'checkAudio',
		value: function checkAudio() {
			var elem = document.createElement('audio');
			var bool = false;

			try {
				if (bool = !!elem.canPlayType) {
					bool = new Boolean(bool);
					bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '');
					bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/, '');
					bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '');
					bool.m4a = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/, '');
				}
			} catch (e) {}
			// list supported audio types
			//elem = null;
			this.type = bool;

			for (var i in this.type) {
				console.log(i + ' support:' + this.type[i]);
			}
		}

		/** 
   * @method setSound
   * @description callback for loading sound, adds to the 
   * sounds array for later playback.
   */

	}, {
		key: 'setSound',
		value: function setSound(e, name, volume) {
			if (!volume) {
				volume = 0.5;
			}
			this.sounds[name] = e.target;
			this.sounds[name].volume = volume;
		}

		/** 
   * @method soundError
   * @description callback for failed loads of sound files.
   */

	}, {
		key: 'soundError',
		value: function soundError(e, name) {
			console.error('Audio ' + name + ' faied to load');
			this.sounds[name] = null;
		}

		/** 
   * @method addSound
   * @description add a new sound. 
   * @param String name the name of the sound. The sound name 
   * must match the file containing the audio, e.g. for a sound called 
   * 'kick' there must be a file /audio/kick.mp3 
   * Possible formats (create them all during production)
   * - MP3 (.mp3)
   * - Ogg-Vorbis (.ogg)
   * - WAV (.wav)
   * @param Number volume the loudness of the sound, between 0 (silent) 
   * and 1.0 (as loud as possible).
   */

	}, {
		key: 'addSound',
		value: function addSound(name, volume) {
			var _this = this;

			if (!name) {
				console.error('tried to load audio file without a name and/or path, aborting');
				return;
			}
			// try creating the sound
			var snd;
			// get the extension and remaining path
			for (var i in this.type) {
				console.log('this.type[' + i + ']=' + this.type[i]);
				if (this.type[i] != "") {
					//returned dataType for elem.canPlayType(...)

					var filePath = this.path + name + '.' + i;
					console.log("TRYING TO LOAD:" + this.path + name + '.' + i);

					// Create the Audio object
					snd = new Audio(filePath);

					// trap load and error events
					snd.addEventListener('loadeddata', function (event) {
						return _this.setSound(event, name, volume);
					}, false);

					snd.addEventListener('error', function (event) {
						return _this.soundError(event, name);
					}, false);

					// start loading the sound
					snd.load();
					break;
				}
			}
			if (!snd) {
				console.error('sound file for:' + name + ' not found in audio');
			}
		}

		/** 
   * @method playSound
   * @description
   * @params String name the name of the sound. Must match the filename 
   * WITHOUT a file extension in the /audio folder for the game.
   */

	}, {
		key: 'playSound',
		value: function playSound(name) {
			if (this.sounds[name]) {
				this.sounds[name].play();
			} else {
				console.error('no sound file with name:' + name + ' in audio folder');
			}
		}

		/** 
   * @method fileExists
   * @description detect if a file is present on the server. Uses an 
   * synchronous Ajax technique, so SLOW if you are using a remote server. 
   * No comparable method exists for determining if a folder exists in 
   * client-side vanilla JavaScript.
   * @param String url the path to the file on the server.
   */

	}, {
		key: 'fileExists',
		value: function fileExists(url) {
			var xhr = new XMLHttpRequest();
			xhr.open('HEAD', url, false);
			xhr.send();
			if (xhr.status == '404') {
				return false;
			} else {
				return true;
			}
		}
	}]);

	return Sounder;
}(); // end of class


exports.default = Sounder;

},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText = require('./StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _Identity = require('./Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Background = require('./Background.js');

var _Background2 = _interopRequireDefault(_Background);

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

		// this.dom defined in Screen

		// Load StartScreen sub-objects

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StartScreen).call(this, config));

		_this.loadBackground('img/screens/start-screen2.png');

		// load identity image
		_this.loadIdentity();

		// load instructions
		_this.loadInstructions();

		// Make the start button open the main game screen
		_this.bindStart();
		return _this;
	}

	_createClass(StartScreen, [{
		key: 'loadIdentity',
		value: function loadIdentity() {
			this.identity = new _Identity2.default({
				name: 'identity',
				domId: 'start-screen-identity',
				path: 'img/identity/logo1.png',
				author: 'javiera silva',
				source: 'plyojump'
			});

			// set position of Identity
			this.identity.setDOMPosition({
				top: 0,
				left: 0
			});
		}
	}, {
		key: 'loadInstructions',
		value: function loadInstructions() {

			this.instructions = new _StaticText2.default({
				name: 'game instructions',
				domId: 'instructions',
				text: 'Play to win. That is all Trump cares about, and so should you.'
			});

			this.instructions.setDOMPosition({
				top: 0,
				left: 0
			});
		}
	}, {
		key: 'bindStart',
		value: function bindStart() {
			console.log("in bindStart, this.game:" + this.game);
			// we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
			document.querySelector('#start-screen-play-button').addEventListener('click', function (e) {
				//alert("in handler, game:" + this.game)
				e.preventDefault();
				this.game.startGame();
			}.bind(this));
		}
	}]);

	return StartScreen;
}(_Screen3.default);

exports.default = StartScreen;

},{"./Background.js":4,"./GamePiece.js":12,"./Identity.js":16,"./Image.js":17,"./Info.js":18,"./Screen.js":25,"./StaticText.js":29,"./Text.js":30}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image2 = require('./Image.js');

var _Image3 = _interopRequireDefault(_Image2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StaticImage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Image-style Information that cannot be changed once the game is loaded
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StaticImage = function (_Image) {
  _inherits(StaticImage, _Image);

  function StaticImage(config) {
    _classCallCheck(this, StaticImage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StaticImage).call(this, config));

    _this.static = true;
    return _this;
  }

  return StaticImage;
}(_Image3.default);

exports.default = StaticImage;

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18}],29:[function(require,module,exports){
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StaticText).call(this, config));

    _this.static = true;

    return _this;
  }

  return StaticText;
}(_Text3.default);

exports.default = StaticText;

},{"./GamePiece.js":12,"./Info.js":18,"./Text.js":30}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

    // set the text

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Text).call(this, config));

    _this.setText(config.text);

    // set the DOMId
    _this.addToDOM(config.domId);
    return _this;
  }

  _createClass(Text, [{
    key: 'setText',
    value: function setText(txt) {
      this.text = txt;
    }
  }, {
    key: 'addToDOM',
    value: function addToDOM(domId) {

      this.dom = document.createElement('div');
      this.dom.id = name + '-Text';
      this.dom.innerHTML = this.text;

      // container
      var container = document.getElementById(domId);

      // add to the DOM
      container.insertBefore(this.dom, container.childNodes[0]);
    }
  }]);

  return Text;
}(_Info3.default);

exports.default = Text;

},{"./GamePiece.js":12,"./Info.js":18}],31:[function(require,module,exports){
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

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

    //Trump gets PingPong motion

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Trump).call(this, config));

    _this.mover.initPingPong(0, _this); //pingpong won't start yet
    return _this;
  }

  _createClass(Trump, [{
    key: 'update',
    value: function update() {
      this.mover.updatePingPong(); //allows pingpong motion
    }
  }]);

  return Trump;
}(_Character3.default);

exports.default = Trump;

},{"./Character.js":7,"./GamePiece.js":12}],33:[function(require,module,exports){
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

},{"../../tests/Tests.js":34,"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":5,"./Cage.js":6,"./Character.js":7,"./DynamicText.js":9,"./EndScreen.js":10,"./Game.js":11,"./GamePiece.js":12,"./GameScreen.js":13,"./Gorilla.js":14,"./Health.js":15,"./Identity.js":16,"./Info.js":18,"./Instructions.js":19,"./Lion.js":20,"./Player.js":22,"./PlayerArea.js":23,"./Score.js":24,"./Screen.js":25,"./StartScreen.js":27,"./StaticText.js":29,"./Text.js":30,"./Tiger.js":31,"./Trump.js":32}],34:[function(require,module,exports){
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

},{"../modules/js/Animal.js":1,"../modules/js/AnimalArea.js":2,"../modules/js/Area.js":3,"../modules/js/Bear.js":5,"../modules/js/Cage.js":6,"../modules/js/Character.js":7,"../modules/js/DynamicText.js":9,"../modules/js/EndScreen.js":10,"../modules/js/Game.js":11,"../modules/js/GamePiece.js":12,"../modules/js/GameScreen.js":13,"../modules/js/Gorilla.js":14,"../modules/js/Health.js":15,"../modules/js/Identity.js":16,"../modules/js/Info.js":18,"../modules/js/Instructions.js":19,"../modules/js/Lion.js":20,"../modules/js/Player.js":22,"../modules/js/PlayerArea.js":23,"../modules/js/Score.js":24,"../modules/js/Screen.js":25,"../modules/js/StartScreen.js":27,"../modules/js/StaticText.js":29,"../modules/js/Text.js":30,"../modules/js/Tiger.js":31,"../modules/js/Trump.js":32}]},{},[33])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyIsIm1vZHVsZXMvanMvQXJlYS5qcyIsIm1vZHVsZXMvanMvQmFja2dyb3VuZC5qcyIsIm1vZHVsZXMvanMvQmVhci5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvQ2hhcmFjdGVyLmpzIiwibW9kdWxlcy9qcy9Db2xsaWRlci5qcyIsIm1vZHVsZXMvanMvRHluYW1pY1RleHQuanMiLCJtb2R1bGVzL2pzL0VuZFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvR2FtZS5qcyIsIm1vZHVsZXMvanMvR2FtZVBpZWNlLmpzIiwibW9kdWxlcy9qcy9HYW1lU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9Hb3JpbGxhLmpzIiwibW9kdWxlcy9qcy9IZWFsdGguanMiLCJtb2R1bGVzL2pzL0lkZW50aXR5LmpzIiwibW9kdWxlcy9qcy9JbWFnZS5qcyIsIm1vZHVsZXMvanMvSW5mby5qcyIsIm1vZHVsZXMvanMvSW5zdHJ1Y3Rpb25zLmpzIiwibW9kdWxlcy9qcy9MaW9uLmpzIiwibW9kdWxlcy9qcy9Nb3Zlci5qcyIsIm1vZHVsZXMvanMvUGxheWVyLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzIiwibW9kdWxlcy9qcy9TY29yZS5qcyIsIm1vZHVsZXMvanMvU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9Tb3VuZGVyLmpzIiwibW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhdGljSW1hZ2UuanMiLCJtb2R1bGVzL2pzL1N0YXRpY1RleHQuanMiLCJtb2R1bGVzL2pzL1RleHQuanMiLCJtb2R1bGVzL2pzL1RpZ2VyLmpzIiwibW9kdWxlcy9qcy9UcnVtcC5qcyIsIm1vZHVsZXMvanMvaW5kZXguanMiLCJ0ZXN0cy9UZXN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoi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c291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIEFuaW1hbC5qc1xuICogVGhlIGNyaXR0ZXJzIHRoYXQgVHJ1bXAgdHJpZXMgdG8gc3RvcCBmcm9tIGdldHRpbmcgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5cbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYWwgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gICAgLy8gQW5pbWFscyBnZXQgUmFuZG9tV2FsayBtb3Rpb25cbiAgICB0aGlzLm1vdmVyLmluaXRSYW5kb21XYWxrKDAuMDIsICdib3R0b20nKTtcbiBcdH1cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLm1vdmVyLnVwZGF0ZVJhbmRvbVdhbGsoKTtcbiAgfVxuIH1cbiIsIi8qKiBcbiAqIEFuaW1hbEFyZWEuanNcbiAqIFRoZSByZWdpb24gYW5pbWFscyBtb3ZlIHRocm91Z2ggdG8gZ2V0IHRvIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYWdlIGV4dGVuZHMgQXJlYSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcbiBcdH1cblxuIH0iLCIvKiogXG4gKiBBcmVhLmpzXG4gKiBBIGdlbmVyaWMgcmVnaW9uIG9mIHRoZSBnYW1lIHNjcmVlbi4gVXNlZCB0byBhZGQgdmlzdWFsIG9iamVjdHMsIGFuZCBcbiAqIGNyZWF0ZSBib3VuZHMgZm9yIGNvbGxpc2lvbiBkZXRlY3Rpb24uXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBJbmZvLCBJbWFnZSwgU3RhdGljSW1hZ2VcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJlYSBleHRlbmRzIEdhbWVQaWVjZSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcblxuIFx0XHQvLyBjcmVhdGUgYSA8ZGl2PiwgYWRkIHRvIERPTSwgd2l0aCBvcHRpb25hbCBpbWFnZVxuIFx0XHR0aGlzLmFkZFRvRE9NKGNvbmZpZy5uYW1lLCBjb25maWcuY29udGFpbmVyLCBjb25maWcucGF0aCk7XG5cbiBcdFx0Ly8gcG9zaXRpb24gd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlZFxuIFx0XHR0aGlzLnNldERPTVBvc2l0aW9uKGNvbmZpZy5wb3NpdGlvbik7IC8vaW5oZXJpdGVkIGZyb20gR2FtZVBpZWNlXG4gXHRcdHRoaXMuc2V0RE9NU2l6ZShjb25maWcuc2l6ZSk7XG4gXHR9XG5cbiBcdC8vIGNyZWF0ZSBET00gZWxlbWVudCwgTG9hZCBhIGJhY2tncm91bmQgaW1hZ2UsIGFuZCBpbnNlcnQgaW50byBjb250YWluZXJcbiBcdGFkZFRvRE9NIChuYW1lLCBjb250YWluZXIsIGltZ1BhdGgpIHtcbiBcdFx0dGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiBcdFx0dGhpcy5kb20uaWQgPSBuYW1lICsgJy1hcmVhJztcblxuIFx0XHQvLyBwb3NpdGlvbiBhYnNvbHV0ZWx5XG4gXHRcdHRoaXMuZG9tLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblxuIFx0XHQvLyBEb24ndCBhbGxvdyBwYWRkaW5nIG9yIG1hcmdpbnMgb3IgYm9yZGVycyBmb3IgQXJlYXNcbiBcdFx0dGhpcy5kb20uc3R5bGUubWFyZ2luID0gJzBweCc7XG4gXHRcdHRoaXMuZG9tLnN0eWxlLnBhZGRpbmcgPSAnMHB4JztcblxuIFx0XHQvLyBhZGQgdG8gdGhlIERPTVxuIFx0XHRjb250YWluZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tLCBjb250YWluZXIuY2hpbGROb2Rlc1swXSk7XG5cbiBcdFx0Ly8gaWYgd2UgaGF2ZSBhbiBpbWFnZSwgaW5zZXJ0IGluIGVsZW1lbnQgYmFja2dyb3VuZFxuIFx0XHRpZiAoaW1nUGF0aCkge1xuXG4gXHRcdFx0dGhpcy5pbWFnZSA9IG5ldyBTdGF0aWNJbWFnZShcbiBcdFx0XHRcdHtcbiBcdFx0XHRcdFx0bmFtZTogdGhpcy5kb20uaWQgKyAnLWltYWdlJ1xuIFx0XHRcdFx0fVxuIFx0XHRcdCk7XG5cbiBcdFx0XHR0aGlzLmltYWdlLmxvYWRCYWNrZ3JvdW5kSW1hZ2UgKHRoaXMuZG9tLCBpbWdQYXRoKTtcbiBcdFx0fVxuXG4gXHR9XG5cbiBcdC8vIGJvdW5kcyBkZXRlY3RvciBmb3Igc3VwcGxpZWQgQ2hhcmFjdGVyXG5cblxuIH0iLCIvKiogXG4gKiBCYWNrZ3JvdW5kLmpzXG4gKiBHYW1lIExvZ29zLCBMb2dvVHlwZXMsIEJyYW5kIE5hbWVcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIFN0YXRpY0ltYWdlIHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdHRoaXMuc2V0U291cmNlKGNvbmZpZy5zb3VyY2UpO1xuXHRcdHRoaXMuc2V0QXV0aG9yKGNvbmZpZy5hdXRob3IpO1xuXHRcdHRoaXMubG9hZEJhY2tncm91bmRJbWFnZShjb25maWcuZG9tSWQsIGNvbmZpZy5wYXRoKTtcblx0fVxuXG59XG4iLCIvKiogXG4gKiBCZWFyLmpzXG4gKiBBIFRpZ2VyLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVhciBleHRlbmRzIEFuaW1hbCB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG5cblxuIH0iLCIvKiogXG4gKiBDYWdlLmpzXG4gKiBUaGUgcmVnaW9uIHdoZXJlIGFuaW1hbHMgYXJlIGNhZ2VkLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQXJlYVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhZ2UgZXh0ZW5kcyBBcmVhIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXG4gXHRcdHN1cGVyKGNvbmZpZyk7XG5cbiBcdH1cblxuIH0iLCIvKipcbiAqIENoYXJhY3Rlci5qc1xuICogR2FtZS1nZW5lcmF0ZWQgb3IgdXNlciBhdmF0YXJzLiBDaGFyYWN0ZXJzIGFyZSByZW5kZXJlZCBpbiBDYW52YXMsIGJ1dCBoYXZlIHRoZWlyXG4gKiBwb3NpdGlvbiBjb21wdXRlZCBhbmQgdXBkYXRlZCBvdXRzaWRlIGNhbnZhcy5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG4gaW1wb3J0IE1vdmVyIGZyb20gJy4vTW92ZXIuanMnO1xuIGltcG9ydCBDb2xsaWRlciBmcm9tICcuL0NvbGxpZGVyLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlciBleHRlbmRzIEdhbWVQaWVjZSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG5cbiBcdFx0Ly8gU2V0IHBvc2l0aW9uIGFuZCBzaXplIGZyb20gY29uZmlndXJhdGlvblxuIFx0XHR0aGlzLnBvc2l0aW9uID0gY29uZmlnLnBvc2l0aW9uO1xuIFx0XHR0aGlzLnNpemUgPSBjb25maWcuc2l6ZTtcblxuIFx0XHQvLyBzdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgZ2FtZSBvYmplY3RcbiBcdFx0dGhpcy5nYW1lID0gY29uZmlnLmdhbWU7XG5cbiBcdFx0dGhpcy5pbWFnZSA9IG5ldyBTdGF0aWNJbWFnZShcbiBcdFx0XHR7XG4gXHRcdFx0XHRuYW1lOiBjb25maWcubmFtZSArICctaW1hZ2UnLFxuIFx0XHRcdFx0cGF0aDogY29uZmlnLnBhdGhcbiBcdFx0XHR9XG4gXHRcdCk7XG4gICAgLy9pbml0aWFsaXplIGEgTW92ZXIgb2JqZWN0IChhbmltYXRpb24pXG4gICAgdGhpcy5tb3ZlciA9IG5ldyBNb3Zlcih0aGlzKTtcblxuIFx0XHQvLyBJbWFnZXMgZG9uJ3QgYXV0b21hdGljYWxseSBsb2FkIHdoZW4gdGhleSdyZSBub3QgYXR0YWNoZWQgdG8gdGhlIERPTSxcbiBcdFx0Ly8gb3IgYSBDU1MgYmFja2dyb3VuZCBpbWFnZVxuIFx0XHR0aGlzLmltYWdlLmxvYWQoY29uZmlnLnBhdGgsIGZ1bmN0aW9uICgpIHtjb25zb2xlLmxvZygnbG9hZGVkOicgKyBjb25maWcubmFtZSk7fSk7XG4gXHR9XG5cbiBcdC8vIG92ZXJyaWRlIGRlZmF1bHQgZHJhdyB3aXRoIG91ciBvd25cbiBcdGRyYXcgKGNvbnRleHQpIHtcblx0XHRpZiAodGhpcy5pbWFnZSkge1xuXHRcdFx0dmFyIGltZyA9IHRoaXMuaW1hZ2UuZGF0YTtcblx0XHRcdGNvbnNvbGUubG9nKCdkcmF3aW5nJylcblx0XHRcdGlmIChpbWcpIHtcblx0XHRcdFx0Ly8gZHJhdyBpbWFnZSBpbnRvIEhUTUw1IGNhbnZhc1xuIFx0XHQgXHRcdGNvbnRleHQuZHJhd0ltYWdlKGltZywgdGhpcy5wb3NpdGlvbi5sZWZ0LCB0aGlzLnBvc2l0aW9uLnRvcCk7XG5cdFx0XHR9XG5cdFx0fVxuIFx0fVxuIH1cbiIsIi8qKiBcbiAqIEBjbGFzcyBDb2xsaWRlclxuICogQGRlc2NyaXB0aW9uIGNyZWF0ZSB0aGUgY29sbGlzaW9uIG1hdHJpeCBkZWZpbmluZyB3aGljaCBvYmplY3RzIGNhbiBjb2xsaWRlIFxuICogd2l0aCB3aGljaCBvYmplY3RzLiBPYmplY3RzIHRoYXQgY2FuIGNvbGxpZGUgaGF2ZSB0aGVpciBwb3RlbnRpYWwgY29sbGlkZXJzIFxuICogYWRkZWQgYXMgcmVmZXJlbmNlcywgZS5nLiBQbGF5ZXIudHJ1bXAgb3IgVHJ1bXAucGxheWVyLlxuICogQHBhcmFtIEFycmF5IGNoYXJhY3RlckFycmF5IHRoZSBhcnJheSBvZiBDaGFyYWN0ZXJzIHdobyBtaWdodCBiZSBpbnZvbHZlZCBcbiAqIGluIGNvbGxpc2lvbnMuXG4gKi9cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaWRlciB7XG5cbiBcdGNvbnN0cnVjdG9yIChjaGFyYWN0ZXJBcnJheSkge1xuIFx0XHR0aGlzLmNoYXJhY3RlckFycmF5ID0gY2hhcmFjdGVyQXJyYXk7XG4gXHRcdHRoaXMuYW5pbWFsQXJyYXkgPSBbXTsgLy9maWxsZWQgdXAgaW4gc2V0VXBDb2xsaXNpb25zXG4gXHRcdHRoaXMuc2V0VXBDb2xsaXNpb25zKCk7XG4gXHR9XG5cbiBcdHNldFVwQ29sbGlzaW9ucyAoKSB7XG4gXHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmNoYXJhY3RlckFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gXHRcdFx0c3dpdGNoICh0aGlzLmNoYXJhY3RlckFycmF5W2ldLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiBcdFx0XHRcdGNhc2UgJ0xpb24nOlxuIFx0XHRcdFx0Y2FzZSAnVGlnZXInOlxuIFx0XHRcdFx0Y2FzZSAnQmVhcic6XG4gXHRcdFx0XHRjYXNlICdHb3JpbGxhJzpcbiBcdFx0XHRcdFx0dGhpcy5hbmltYWxBcnJheS5wdXNoKHRoaXMuY2hhcmFjdGVyQXJyYXlbaV0pO1xuIFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdGNhc2UgJ1RydW1wJzpcbiBcdFx0XHRcdFx0dGhpcy50cnVtcCA9IHRoaXMuY2hhcmFjdGVyQXJyYXlbaV07XG4gXHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0Y2FzZSAnUGxheWVyJzpcbiBcdFx0XHRcdFx0dGhpcy5wbGF5ZXIgPSB0aGlzLmNoYXJhY3RlckFycmF5W2ldO1xuIFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vY3Jvc3MtY29ubmVjdCB0aGUgaW1wYWN0b3JzXG4gXHRcdHRoaXMudHJ1bXAucGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gXHRcdHRoaXMudHJ1bXAuYW5pbWFscyA9IHRoaXMuYW5pbWFsQXJyYXk7XG4gXHRcdHRoaXMucGxheWVyLnRydW1wID0gdGhpcy50cnVtcDtcblxuIFx0XHQvL0RFQlVHXG4gXHRcdHdpbmRvdy5hbmltYWxzID0gdGhpcy50cnVtcC5hbmltYWxzO1xuIFx0XHRcblxuIFx0fVxuIH0iLCIvKiogXG4gKiBEeW5hbWljVGV4dC5qc1xuICogVGV4dCB0aGF0IGNhbiBiZSBjaGFuZ2VkIGJ5IHVzZXIgKGUuZy4gaW5wdXQgZmllbGQpLCBvciBcbiAqIHVwZGF0ZWQgYnkgdGhlIGdhbWUgaXRzZWxmLlxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljVGV4dCBleHRlbmRzIFRleHQge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXHR9XG59XG4iLCIvKiogXG4gKiBFbmRTY3JlZW4uanNcbiAqIEVuZGluZyBzY3JlZW4gZm9yIHRoZSBnYW1lLlxuICogQGluaGVyaXRzIFNjcmVlbiwgR2FtZVBpZWNlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbiBcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG5cbiBcdFx0Ly8gbG9hZCB0aGUgYmFja2dyb3VuZCBpbWFnZVxuIFx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9lbmQtc2NyZWVuLnBuZycpO1xuXG4gXHRcdC8vIExvYWQgRW5kU2NyZWVuIHN1Yi1vYmplY3RzXG4gXHRcdHRoaXMubG9hZElucHV0U2NvcmUoKTtcbiBcdFx0dGhpcy5sb2FkSGlnaFNjb3JlcygpO1xuXG4gXHRcdC8vIEJpbmQgXCJwbGF5IGFnYWluXCIgYW5kIFwiaW5zdHJ1Y3Rpb25zXCIgYnV0dG9ucy5cbiBcdFx0dGhpcy5iaW5kUmVwbGF5KCk7XG4gXHRcdHRoaXMuYmluZEluc3RydWN0aW9ucygpO1xuIFx0fVxuXG4gXHRsb2FkSW5wdXRTY29yZSAoKSB7XG5cbiBcdH1cblxuIFx0bG9hZEhpZ2hTY29yZXMgKCkge1xuXG4gXHR9XG5cbiBcdGJpbmRSZXBsYXkgKCkge1xuXHRcdGNvbnNvbGUubG9nKFwiaW4gYmluZFN0YXJ0LCB0aGlzLmdhbWU6XCIgKyB0aGlzLmdhbWUpXG5cdFx0Ly8gd2UgdXNlIGJpbmQoKSB0byBsaW5rIHRoZSBmdW5jdGlvbiBiZWxvdyB0byBTdGFydFNjcmVlbiAob3RoZXJ3aXNlLCBpdCB0aGlua3MgaXQgaXMgaW5zaWRlIHdpbmRvdylcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLXNjcmVlbi1wbGF5LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmdhbWUuc3RhcnRHYW1lKCk7XG5cblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRiaW5kSW5zdHJ1Y3Rpb25zICgpIHtcblx0XHRjb25zb2xlLmxvZyhcImluIGJpbmRTdGFydCwgdGhpcy5nYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdC8vIHdlIHVzZSBiaW5kKCkgdG8gbGluayB0aGUgZnVuY3Rpb24gYmVsb3cgdG8gU3RhcnRTY3JlZW4gKG90aGVyd2lzZSwgaXQgdGhpbmtzIGl0IGlzIGluc2lkZSB3aW5kb3cpXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZC1zY3JlZW4taW5zdHJ1Y3Rpb25zLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmdhbWUubG9hZEdhbWUoKTtcblxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuIH0iLCIvKipcbiAqIEdhbWUuanNcbiAqIFRoZSBlbnRpcmUgR2FtZSBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbi8vU2NyZWVuIGluaGVyaXRhbmNlXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuL1N0YXJ0U2NyZWVuLmpzJztcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZVNjcmVlbi5qcyc7XG5pbXBvcnQgRW5kU2NyZWVuIGZyb20gJy4vRW5kU2NyZWVuLmpzJztcblxuLy9JbmZvIGluaGVyaXRhbmNlXG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG5pbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eS5qcyc7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4vSW5zdHJ1Y3Rpb25zLmpzJztcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL0R5bmFtaWNUZXh0LmpzJztcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJztcblxuLy9DaGFyYWN0ZXIgaW5oZXJpdGFuY2VcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuaW1wb3J0IFRydW1wIGZyb20gJy4vVHJ1bXAuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcbmltcG9ydCBMaW9uIGZyb20gJy4vTGlvbi5qcyc7XG5pbXBvcnQgVGlnZXIgZnJvbSAnLi9UaWdlci5qcyc7XG5pbXBvcnQgQmVhciBmcm9tICcuL0JlYXIuanMnO1xuaW1wb3J0IEdvcmlsbGEgZnJvbSAnLi9Hb3JpbGxhLmpzJztcbmltcG9ydCBIZWFsdGggZnJvbSAnLi9IZWFsdGguanMnO1xuXG4vL0FyZWEgaW5oZXJpdGFuY2UuXG5pbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuaW1wb3J0IENhZ2UgZnJvbSAnLi9DYWdlLmpzJztcbmltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XG5pbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuL1BsYXllckFyZWEuanMnO1xuXG4vL0ltcG9ydCBDb2xsaWRlciBhbmQgU291bmRlciBvYmplY3RzXG5pbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XG5pbXBvcnQgU291bmRlciBmcm9tICcuL1NvdW5kZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cblx0XHRzdXBlcihjb25maWcpO1xuXG5cdFx0Ly9nYW1lIGNvcHlyaWdodFxuXHRcdHRoaXMud2FybmluZyA9ICdUaGlzIGdhbWUgYmVsb25ncyB0byB1cywgYW5kIG5vYm9keSBlbHNlLic7XG5cblx0XHQvL2dhbWUgcmV2ZXJ0cyB0byBTdGFydFNjcmVlbiBpZiB1bnBsYXllZFxuXHRcdHRoaXMuVElNRU9VVCA9IDU1NTU7XG5cblx0XHQvLyBkZWZpbmUgSWQgbGluayB0byBET01cblx0XHR0aGlzLlNUQVJUX1NDUkVFTl9JRCA9ICdzdGFydC1zY3JlZW4nO1xuXHRcdHRoaXMuR0FNRV9TQ1JFRU5fSUQgPSAnZ2FtZS1zY3JlZW4nO1xuXHRcdHRoaXMuRU5EX1NDUkVFTl9JRCA9ICdlbmQtc2NyZWVuJztcblxuXHRcdC8vIG1vZGVsIHN0b3JhZ2UsIHNjcmVlbnNcblx0XHR0aGlzLnNjcmVlbnMgPSBbXTtcblxuXHRcdC8vIG1vZGVsIHN0b3JhZ2UsIGR5bmFtaWMgY2hhcmFjdGVyc1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMgPSBbXTtcblxuXHRcdC8vIGluaXRpYWxpemUgZ2FtZSwgbG9hZCBzdGFydCBzY3JlZW5cblx0XHR0aGlzLmluaXQoKTtcblxuXHR9IC8vZW5kIG9mIGNvbnN0cnVjdG9yXG5cblx0aW5pdCAoKSB7XG5cblx0XHQvLyBHcmFiIHRoZSBIVE1MIHNjcmVlbiBlbGVtZW50cyBhbmQgZW5jYXBzdWxhdGUgaW4gYSBTY3JlZW4gY2xhc3Ncblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5TVEFSVF9TQ1JFRU5fSURdID0gbmV3IFN0YXJ0U2NyZWVuKHtuYW1lOiAnU3RhcnQgU2NyZWVuJywgaWQ6IHRoaXMuU1RBUlRfU0NSRUVOX0lELCBnYW1lOiB0aGlzfSk7XG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuR0FNRV9TQ1JFRU5fSURdID0gbmV3IEdhbWVTY3JlZW4oe25hbWU6ICdHYW1lIFNjcmVlbicsIGlkOiB0aGlzLkdBTUVfU0NSRUVOX0lELCBnYW1lOiB0aGlzfSk7XG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuRU5EX1NDUkVFTl9JRF0gPSBuZXcgRW5kU2NyZWVuKHtuYW1lOiAnRW5kIFNjcmVlbicsIGlkOiB0aGlzLkVORF9TQ1JFRU5fSUQsIGdhbWU6IHRoaXN9KTtcblxuXHRcdC8vIGxvYWQgdGhlIGNhbnZhc1xuXHRcdHRoaXMubG9hZENhbnZhcygpO1xuXG5cdFx0Ly8gbWFrZSB0aGUgc3RhcnQgc2NyZWVuIHZpc2libGVcblx0XHR0aGlzLmxvYWRHYW1lKCk7XG5cdH1cblxuXHQvLyBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIEhUTUw1IGNhbnZhcyBjb250ZXh0XG5cdGxvYWRDYW52YXMgKCkge1xuXHRcdHRoaXMuY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUtc2NyZWVuLWFyZW5hIGNhbnZhcycpO1xuXHRcdHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMb2FkIENoYXJhY3RlcnNcblx0ICogZHluYW1pYyBDaGFyYWN0ZXJzIChlLmcuIHRob3NlIHRoYXQgYW5pbWF0ZSkgYXJlIGxvYWRlZCBieSBHYW1lLlxuXHQgKiBPdGhlciBzdGF0aWMgdmlzdWFsIG9iamVjdHMgYXJlIGxvYWRlZCBieSBTY3JlZW4gY2xhc3Nlcy5cblx0ICovXG5cdGxvYWRQbGF5ZXJzICgpIHtcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXG5cdFx0XHRuZXcgUGxheWVyKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ1BsYXllcicsIHBvc2l0aW9uOiB7dG9wOiA1MTAsIGxlZnQ6IDIwMH0sXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9wbGF5ZXJzL3BsYXllci5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cblxuXHRsb2FkQW5pbWFscyAoKSB7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IExpb24oXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnTGlvbicsXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDEuNSwgbGVmdDogNjV9LCAvLzE1LDk0Ly9cblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvbGlvbjEucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBUaWdlcihcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdUaWdlcicsXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDEuNSwgbGVmdDogMzA0fSwgLy8xNSwzMzMvL1xuXHRcdFx0XHRcdHBhdGg6ICdpbWcvYW5pbWFscy90aWdlcjEucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBCZWFyKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ0JlYXInLCBwb3NpdGlvbjoge3RvcDogMS41LCBsZWZ0OiA1NDN9LCAvLzE1LDU3MC8vXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9hbmltYWxzL2JlYXIxLnBuZycsXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXG5cdFx0XHRuZXcgR29yaWxsYShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdHb3JpbGxhJywgcG9zaXRpb246IHt0b3A6IDMsIGxlZnQ6IDc4Mn0sIC8vMTUsODEyLy9cblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvZ29yaWxsYTEucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXG5cdH1cblxuXHRsb2FkVHJ1bXBzICgpIHtcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXG5cdFx0XHRuZXcgVHJ1bXAoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnVHJ1bXAnLCBwb3NpdGlvbjoge3RvcDogNDIwLCBsZWZ0OiAxNTB9LCAvLzQ1MCwyMDAvL1xuXHRcdFx0XHRcdHBhdGg6ICdpbWcvdHJ1bXBzL3RydW1wMS5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cblx0fVxuXG5cdGxvYWRHYW1lICgpIHtcblxuXHRcdC8vbG9hZCBJbmZvIGFzc2V0c1xuXG5cdFx0Y29uc29sZS5sb2coJ2xvYWRpbmcgc3BsYXNoIHNjcmVlbicpO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKVxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLlNUQVJUX1NDUkVFTl9JRF0uc2hvd1NjcmVlbigpO1xuXHR9XG5cblx0c3RhcnRHYW1lICgpIHtcblxuXHRcdC8vbG9hZCBDaGFyYWN0ZXJzXG5cdFx0dGhpcy5sb2FkQW5pbWFscygpO1xuXHRcdHRoaXMubG9hZFBsYXllcnMoKTtcblx0XHR0aGlzLmxvYWRUcnVtcHMoKTtcblxuXHRcdC8vIGFkZCBjb2xsaXNpb24gbWF0cml4XG5cdFx0dGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcih0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzKTtcblx0XHQvL2xvYWQgYXVkaW8gc2FtcGxlc1xuXHRcdHRoaXMuc291bmRQb29sID0gbmV3IFNvdW5kZXIoKTtcblx0XHR0aGlzLnNvdW5kUG9vbC5hZGRTb3VuZCgna2ljaycsIDAuNyk7XG5cdFx0dGhpcy5zb3VuZFBvb2wuYWRkU291bmQoJ2xpb24nLCAwLjcpO1xuXHRcdHRoaXMuc291bmRQb29sLmFkZFNvdW5kKCd0aWdlcicsIDAuNyk7XG5cdFx0dGhpcy5zb3VuZFBvb2wuYWRkU291bmQoJ2JlYXInLCAwLjcpO1xuXHRcdHRoaXMuc291bmRQb29sLmFkZFNvdW5kKCdnb3JpbGxhJywgMC43KTtcblx0XHQvL21ha2UgR2FtZVNjcmVlbiB2aXNpYmxlXG5cblx0XHQvLyBpbml0aWFsaXplIGVsYXBzZWQgdGltZVxuXHRcdHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcblxuXHRcdC8vIHNob3cgR2FtZVNjcmVlbiwgaGlkZSBvdGhlcnNcblx0XHRjb25zb2xlLmxvZygnc3RhcnRpbmcgZ2FtZScpO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLlNUQVJUX1NDUkVFTl9JRF0uaGlkZVNjcmVlbigpO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0uc2hvd1NjcmVlbigpO1xuXHRcdHRoaXMuZ2FtZUxvb3AoKTtcblx0fVxuXG5cdGVuZEdhbWUgKCkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2VuZGluZyBnYW1lJyk7XG5cblx0XHQvLyByZXNldCB0aW1lclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcblxuXHRcdC8vIHR1cm4gb2ZmIGFuaW1hdGlvblxuXHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2xvYmFsSWQpO1xuXHRcdHRoaXMuZ2xvYmFsSWQgPSBudWxsO1xuXG5cdFx0Ly8gZ28gdG8gZW5kIHNjcmVlblxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkdBTUVfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKCk7XG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuRU5EX1NDUkVFTl9JRF0uc2hvd1NjcmVlbigpO1xuXHR9XG5cblx0ZWxhcHNlZCAoKSB7XG5cblx0XHQvLyByZWNvcmQgdGltZSB3ZSBoYXZlIGJlZW4gaW4gZ2FtZUxvb3Bcblx0XHR0aGlzLmVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG5cdFx0Ly8gdGltZSBkaWZmZXJlbmNlIGluIG1zXG5cblx0XHR2YXIgdGltZURpZmYgPSAodGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMDtcblxuXHRcdC8vIGdldCBzZWNvbmRzIChPcmlnaW5hbCBoYWQgJ3JvdW5kJyB3aGljaCBpbmNvcnJlY3RseSBjb3VudHMgMDoyOCwgMDoyOSwgMTozMCAuLi4gMTo1OSwgMTowKVxuXHRcdHJldHVybiBNYXRoLnJvdW5kKHRpbWVEaWZmICUgNjApO1xuXHR9XG5cblx0Y2hlY2tJZkNvbXBsZXRlICgpIHtcblxuXHRcdC8vIGdhbWUgbG9naWMgdG8gc2VlIGlmIHRoZSBnYW1lIHNob3VsZCByZXNldFxuXHRcdC8vLy8vLy8vLy8vLy9jb25zb2xlLmxvZygnRUxBUFNFRDonICsgdGhpcy5lbGFwc2VkKCkpO1xuXG5cdFx0aWYgKHRoaXMuZWxhcHNlZCgpID4gdGhpcy5USU1FT1VUKSB7XG5cdFx0XHQvLyBpZiBpZGxlIHRvbyBsb25nLCByZXNldCBnYW1lIHRvIHN0YXJ0XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR1cGRhdGUgKCkge1xuXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblxuXHRcdFx0dmFyIGNoYXJhY3RlciA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnNbaV07XG5cblx0XHRcdHN3aXRjaCAoY2hhcmFjdGVyLmdldENsYXNzKCkpIHtcblx0XHRcdFx0Y2FzZSAnUGxheWVyJzpcblx0XHRcdFx0Y2FzZSAnVHJ1bXAnOlxuXHRcdFx0XHRjYXNlICdMaW9uJzpcblx0XHRcdFx0Y2FzZSAnVGlnZXInOlxuXHRcdFx0XHRjYXNlICdCZWFyJzpcblx0XHRcdFx0Y2FzZSAnR29yaWxsYSc6XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNoYXJhY3Rlci51cGRhdGUoKTtcblx0XHR9XG5cdH1cblxuXHRkcmF3ICgpIHtcblxuXHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzW2ldLmRyYXcodGhpcy5jb250ZXh0KTtcblx0XHR9XG5cdH1cblxuXHRnYW1lTG9vcCAoKSB7XG5cblx0XHRpZiAodGhpcy5jaGVja0lmQ29tcGxldGUoKSkge1xuXHRcdFx0dGhpcy5lbmRHYW1lKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0XHR0aGlzLmRyYXcoKTtcblxuXHRcdC8vY29uc29sZS5sb2coJ2xvb3BpbmcuLi4nKVxuXHRcdHRoaXMuZ2xvYmFsSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpKTtcblx0fVxuXG59XG4iLCIvKiogXG4gKiBHYW1lUGllY2UuanNcbiAqIEJhc2ljIEdhbWUgb2JqZWN0XG4gKlxuICogVG8gbWFrZSB0aGlzIHdvcmssIHlvdSBtdXN0IGJlIHJ1bm5pbmcgdGhlIEJhYmVsIHRyYW5zcGlsZXIsIFxuICogYW5kIHdhdGNoaW5nIGZvciBjaGFuZ2VzIGluIHRoaXMgZmlsZSB3aXRoIGJyb3dzZXJpZnkuIFR3byBcbiAqIFRlcm1pbmFsIHdpbmRvd3MgbmVlZCB0byBiZSBvcGVuOlxuICogMS4gb25lIHdpbmRvdyB3aGVyZSB5b3UgdHlwZWQgdGhlIGNvbW1hbmQgXCJncnVudFwiXG4gKiAyLiBvbmUgd2luZG93IHdoZXJlIHlvdSB0eXBlZCB0aGUgY29tbWFuZCBcIm5wbSBzdGFydFwiXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQaWVjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgICAgIC8vVE9ETzogdXNlIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgICAgICB0aGlzLnV1aWQgPSB0aGlzLnNldElkKCk7XG4gICAgICAgIHRoaXMucmVhZHkgPSB0cnVlOyAvLyBjaGFuZ2UgdG8gZmFsc2UgZm9yIGRlZmVycmVkIGxvYWRzXG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIFNldCBhIHBvc2l0aW9uIGZvciB0aGUgb2JqZWN0LCBhbHNvIHRoZSBwb3NpdGlvbiBvZiB0aGUgXG4gICAgICogRE9NIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3RcbiAgICAgKi9cbiAgICBzZXRET01Qb3NpdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICBpZiAodGhpcy5kb20pIHtcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdCArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogU2V0IHRoZSBvYmplY3Qgc2l6ZSwgYWxzbyBpdHMgRE9NIHNpemVcbiAgICAgKi9cbiAgICBzZXRET01TaXplIChzaXplKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIGlmICh0aGlzLmRvbSkge1xuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUud2lkdGggPSBzaXplLndpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgZXZlcnkgZ2FtZSBvYmplY3QuXG4gICAgICogQGxpbmsgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvY3JlYXRlLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0XG4gICAgICovXG4gICAgc2V0SWQgKCkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICAgICAgICB9XG4gICAgICAgIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTYpJTE2IHwgMDtcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTYpO1xuICAgICAgICAgICAgcmV0dXJuIChjPT0neCcgPyByIDogKHImMHgzfDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1dWlkO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBSZXR1cm4gdGhlIGdpdmVuIG5hbWUgb2YgdGhpcyBvYmplY3RcbiAgICAgKi9cbiAgICBnZXROYW1lICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogcmV0dXJuIHRoZSBjbGFzcyBvZiB0aGUgb2JqZWN0XG4gICAgICovXG4gICAgZ2V0Q2xhc3MgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBSZXR1cm4gdGhlIHVuaXF1ZSBpZCBvZiB0aGlzIG9iamVjdC5cbiAgICAgKi9cbiAgICBnZXRJZCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV1aWQ7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEdldCB0aGUgZW5jbG9zaW5nIGJveCBvdXRzaWRlIHRoZSBvYmplY3QgZm9yIGV4dGVybmFsIGNvbGxpc2lvbnNcbiAgICAgKi9cbiAgICBnZXRDb2xsaXNpb25SZWN0ICgpIHtcblxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBHZXQgdGhlIGludGVybmFsIGJveCB3aGVuIHRoaXMgb2JqZWN0IGFjdHMgYXMgYSBjb250YWluZXIgZm9yIGFub3RoZXJcbiAgICAgKi9cbiAgICBnZXRCb3VuZHNSZWN0ICgpIHtcblxuICAgIH1cblx0XG5cdC8qKiBcblx0ICogR2VuZXJpYyAncmVhZHknIGZ1bmN0aW9uIChlLmcuIGZvciBkZWxheWVkIGFzc2V0IGxvYWRzKVxuXHQgKi9cblx0c2V0UmVhZHkgKHZhbCkge1xuXHRcdHRoaXMucmVhZHkgPSB2YWw7XG5cdH1cblxuICAgIC8qKiBcbiAgICAgKiBHZW5lcmljIHVwZGF0ZSAob3ZlcnJpZGUpXG4gICAgICovXG4gICAgdXBkYXRlICgpIHtcblxuICAgIH1cblxuICAgICAvKiogXG4gICAgICAqIGdlbmVyaWMgZHJhdyAob3ZlcnJpZGUpXG4gICAgICAqL1xuICAgIGRyYXcgKCkge1xuXG4gICAgfVxufVxuXG5cbiIsIi8qKlxuICogR2FtZVNjcmVlbi5qc1xuICogTWFpbiBnYW1lIHNjcmVlbiBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuIGltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XG4gaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcbiBpbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xuXG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHRcdHRoaXMuY2FnZXMgPSBbXTtcbiBcdFx0dGhpcy5hbmltYWxBcmVhcyA9IFtdO1xuIFx0XHR0aGlzLnBsYXllckFyZWFzID0gW107XG5cbiBcdFx0Ly9HYW1lU2NyZWVuIHNob3VsZCBoaWRlIGl0cyBsb2NhbCBoZWFkZXIgYW5kIGZvb3RlclxuIFx0XHR0aGlzLmhpZGVIZWFkZXIoKTtcbiBcdFx0dGhpcy5oaWRlRm9vdGVyKCk7XG5cbiBcdFx0Ly8gbG9hZCB0aGUgYmFja2dyb3VuZCBpbWFnZVxuIFx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9nYW1lLXNjcmVlbjEucG5nJyk7XG5cbiBcdFx0Ly8gZ2V0IHRoZSBzZWN0aW9uIHRoYXQgaGFzIHRoZSBjYW52YXMgZm9yIG92ZXJsYXlcbiBcdFx0dmFyIGFyZW5hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2NyZWVuLWFyZW5hJyk7XG5cbiBcdFx0Ly8gbG9hZCBzdWItb2JqZWN0cyBpbnRvIHRoZSBBcmVuYVxuIFx0XHR0aGlzLmNhZ2VzICAgPSB0aGlzLmxvYWRDYWdlcyhhcmVuYSwgJ2ltZy9hcmVhcy9jYWdlMS5wbmcnKTtcbiBcdFx0dGhpcy5hbmltYWxBcmVhID0gdGhpcy5sb2FkQW5pbWFsQXJlYSgpO1xuIFx0XHR0aGlzLnBsYXllckFyZWEgPSB0aGlzLmxvYWRQbGF5ZXJBcmVhKCk7XG5cbiBcdH1cblxuIFx0bG9hZENhZ2VzIChjb250YWluZXIsIGltZ1BhdGgpIHtcbiBcdFx0Ly8gbG9hZCA0IENhZ2VzXG4gXHRcdHRoaXMuY2FnZXMucHVzaChcbiBcdFx0XHRuZXcgQ2FnZShcbiBcdFx0XHRcdHtcbiBcdFx0XHRcdFx0bmFtZTogJ2xpb24tY2FnZScsXG4gXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiA3MH0sXG4gXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSxcbiBcdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsXG4gXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcbiBcdFx0XHRcdH1cbiBcdFx0XHQpXG4gXHRcdCk7XG5cdFx0dGhpcy5jYWdlcy5wdXNoKFxuXHRcdFx0bmV3IENhZ2UoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAndGlnZXItY2FnZScsXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDMxMH0sXG5cdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDR9LFxuXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLFxuXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5jYWdlcy5wdXNoKFxuXHRcdFx0bmV3IENhZ2UoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnYmVhci1jYWdlJyxcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogNTUwfSxcblx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDEwMCwgaGVpZ2h0OjEwMH0sXG5cdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsXG5cdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblx0XHR0aGlzLmNhZ2VzLnB1c2goXG5cdFx0XHRuZXcgQ2FnZShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdnb3JpbGxhLWNhZ2UnLFxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiA3OTB9LFxuXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSxcblx0XHRcdFx0XHRjb250YWluZXI6IGNvbnRhaW5lcixcblx0XHRcdFx0XHRwYXRoOiBpbWdQYXRoXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuIFx0fVxuXG4gXHRsb2FkQW5pbWFsQXJlYSAoKSB7XG4gXHRcdC8vIGxvYWQgQW5pbWFsIG1vdmVtZW50IGFyZWFcbiBcdFx0dGhpcy5hbmltYWxBcmVhcy5wdXNoKFxuIFx0XHRcdG5ldyBBbmltYWxBcmVhKFxuIFx0XHRcdFx0e1xuIFx0XHRcdFx0XHRuYW1lOiAnWm9vJyxcbiBcdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDEwNCwgbGVmdDogNn0sXG4gXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogOTcwLCBoZWlnaHQ6IDQxMH0sXG4gXHRcdFx0XHRcdGNvbnRhaW5lcjogdGhpcy5kb20sXG4gXHRcdFx0XHRcdHBhdGg6IG51bGxcbiBcdFx0XHRcdH1cbiBcdFx0XHQpXG4gXHRcdCk7XG4gXHR9XG5cbiBcdGxvYWRQbGF5ZXJBcmVhICgpIHtcbiBcdFx0Ly8gbG9hZCB0aGUgUGxheWVyXG4gXHRcdHRoaXMucGxheWVyQXJlYXMucHVzaChcbiBcdFx0XHRuZXcgUGxheWVyQXJlYShcbiBcdFx0XHRcdHtcbiBcdFx0XHRcdFx0bmFtZTogJ1BsYXllciBBcmVhJyxcbiBcdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDUxNCwgbGVmdDogNn0sXG4gXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogOTcwLCBoZWlnaHQ6IDEwMH0sXG4gXHRcdFx0XHRcdGNvbnRhaW5lcjogdGhpcy5kb20sXG4gXHRcdFx0XHRcdHBhdGg6IG51bGxcbiBcdFx0XHRcdH1cbiBcdFx0XHQpXG4gXHRcdCk7XG4gXHR9XG5cbiB9XG4iLCIvKiogXG4gKiBHb3JpbGxhLmpzXG4gKiBBIEdvcmlsbGEsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBHb3JpbGxhIGV4dGVuZHMgQW5pbWFsIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cbiB9IiwiLyoqIFxuICogSGVhbHRoLmpzXG4gKiBUaGUgY3JpdHRlcnMgdGhhdCBUcnVtcCB0cmllcyB0byBzdG9wIGZyb20gZ2V0dGluZyB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWx0aCBleHRlbmRzIENoYXJhY3RlciB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG5cbiB9IiwiLyoqIFxuICogSWRlbnRpdHkuanNcbiAqIEdhbWUgTG9nb3MsIExvZ29UeXBlcywgQnJhbmQgTmFtZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZGVudGl0eSBleHRlbmRzIFN0YXRpY0ltYWdlIHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdHRoaXMuc2V0U291cmNlKGNvbmZpZy5zb3VyY2UpO1xuXHRcdHRoaXMuc2V0QXV0aG9yKGNvbmZpZy5hdXRob3IpO1xuXHRcdHRoaXMubG9hZEltYWdlVG9ET00oY29uZmlnLmRvbUlkLCBjb25maWcucGF0aCk7XG5cblx0XHQvL0hpZGUgYW55IDxoMj4gdGV4dCBlcXVpdmFsZW50IG9mIGlkZW50aXR5IGluIHRoaXMgQ1NTIGJveFxuXHRcdHZhciB0ZXh0SWRlbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGNvbmZpZy5kb21JZCArICcgaDInKTtcblx0XHR0ZXh0SWRlbnRpdHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxuXG59XG4iLCIvKiogXG4gKiBTdGF0aWNJbWFnZS5qc1xuICogSW1hZ2Utc3R5bGUgSW5mb3JtYXRpb24gdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCBvbmNlIHRoZSBnYW1lIGlzIGxvYWRlZFxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBJbmZvIHtcblxuXHQvLyBzYXZlIHNjb3BlXG5cdC8vIFRPRE86IHJlZmFjdG9yIHdpdGggYXJyb3cgZnVuY3Rpb25cblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0XHR0aGlzLnJlYWR5ID0gZmFsc2U7IC8vb3Zlci1yaWRlIEdhbWVQaWVjZSBhbmQgaW5mbyB3aXRoIGRlZmVycmFsc1xuXHRcdHRoaXMuaW1hZ2UgPSBudWxsO1xuXHRcdHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoO1xuXHRcdHRoaXMuYXV0aG9yID0gY29uZmlnLmF1dGhvcjtcblx0XHR0aGlzLnNvdXJjZSA9IGNvbmZpZy5zb3VyY2U7XG5cdH1cblxuXHQvLyBsb2FkIGFuIGltYWdlXG5cdGxvYWQgKHBhdGgsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdHRoYXQuc2V0UmVhZHkoZmFsc2UpO1xuXHRcdGNvbnNvbGUubG9nKCdlbnRlcmluZyBsb2FkIGluSW1hZ2UnKTtcblx0XHR2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0aW1nLnNyYyA9IHBhdGg7XG5cdFx0aW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnNvbGUubG9nKHRoYXQubmFtZSArICcgaW1hZ2UgbG9hZGVkIGZyb206JyArIHBhdGggKyAnIHc6JyArIGltZy53aWR0aCArICcgaDonICsgaW1nLmhlaWdodClcblx0XHRcdHRoYXQuc2V0UmVhZHkodHJ1ZSk7XG5cdFx0XHR0aGF0LmRhdGEgPSBpbWc7XG5cdFx0XHRcblx0XHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGltZy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdlcnJvciBsb2FkaW5nIGltZyBmcm9tOicgKyBwYXRoKTtcblx0XHR9XG5cdH1cblxuXHQvLyBsb2FkIGltYWdlLCBhcHBlbmQgdG8gZXhpc3RpbmcgRE9NIGVsZW1lbnRcblx0Ly8gTk9URTogdGhpcyBpcyBvdmVyLXdyaXR0ZW4gaW4gQ2hhcmFjdGVyLmpzLCB3aGljaCBsb2FkcyBpbWFnZXMgaW50byBDYW52YXNcblx0bG9hZEltYWdlVG9ET00gKGRvbUlkLCBwYXRoLCBjYWxsYmFjaykge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHR0aGlzLmxvYWQocGF0aCwgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZvcmVncm91bmQgaW1hZ2UgJyArIHBhdGggKyAnIGxvYWRlZCcpXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JZCkuYXBwZW5kQ2hpbGQodGhhdC5kYXRhKTtcblx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdH1cblxuXHQvLyBsb2FkIGltYWdlIGFzIGEgQ1NTIGJhY2tncm91bmQgaW1hZ2UgaW50byBleGlzdGluZyBET00gZWxlbWVudC4gXG5cdC8vIE5PVEU6IG5vIGxvY2FsIHJlZmVyZW5jZSB0byBpbWFnZSBpbiB0aGlzIGNhc2Vcblx0bG9hZEJhY2tncm91bmRJbWFnZSAoY29udGFpbmVyLCBwYXRoLCBjYWxsYmFjaykge1xuXHRcdGNvbnNvbGUubG9nKCdsb2FkaW5nIGJhY2tncm91bmQgaW1hZ2U6JyArIHBhdGgpXG5cdFx0Y29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZT0ndXJsKCcgKyBwYXRoICsgJyknO1xuXHRcdHRoaXMuc2V0UmVhZHkodHJ1ZSk7XG5cdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH1cblx0fVxuXG5cdC8vIERyYXcgdGhlIGltYWdlIHRvIGEgc3VwcGxpZWQgY2FudmFzIGNvbnRleHRcblx0ZHJhd1RvQ2FudmFzIChjb250ZXh0LCBwb3NpdGlvbiwgc2l6ZSkge1xuXHRcdGNvbnRleHQuZHJhd0ltYWdlKGltZywgcG9zaXRpb24udG9wLCBwb3NpdGlvbi5sZWZ0LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG5cdH1cblxuXHQvLyBEcmF3IHRvIHRoZSBET00uIEFzc3VtZSB0aGUgSW1hZ2Ugd2FzIGFscmVhZHkgYXR0YWNoZWQgdG8gdGhlIERPTVxuXHRkcmF3VG9ET00gKHBvc2l0aW9uLCBzaXplKSB7XG5cdFx0dGhpcy5pbWFnZS5zdHlsZS50b3AgPSBwb3NpdGlvbi50b3A7XG5cdFx0dGhpcy5pbWFnZS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdDtcblx0XHR0aGlzLmltYWdlLnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aDtcblx0XHR0aGlzLmltYWdlLnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuXHR9XG5cbn1cbiIsIi8qKiBcbiAqIEluZm8uanNcbiAqIEdlbmVyaWMgaW5mb3JtYWl0b24gb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXHR9XG5cblx0c2V0QXV0aG9yIChhdXRob3IpIHtcblx0XHR0aGlzLmF1dGhvciA9IGF1dGhvcjtcblx0fVxuXG5cdHNldFNvdXJjZSAoc291cmNlKSB7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxufSIsIi8qKiBcbiAqIEluc3RydWN0aW9ucy5qc1xuICogVGV4dCB3aGljaCB0ZWxscyB0aGUgUGxheWVyIGhvdyB0byBwbGF5IHRoZSBnYW1lLlxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuIGltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydWN0aW9ucyBleHRlbmRzIFN0YXRpY1RleHQge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXHR9XG59XG4iLCIvKiogXG4gKiBMaW9uLmpzXG4gKiBBIExpb24sIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBMaW9uIGV4dGVuZHMgQW5pbWFsIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cbiB9IiwiLyoqXG4gKiBAY2xhc3MgTW92ZXJcbiAqIEBkZXNjcmlwdGlvbiB1cGRhdGUgcG9zaXRpb24gb2Ygb2JqZWN0IGJlaW5nIGFuaW1hdGVkIGJ5IEdhbWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVyIHtcblxuXHRjb25zdHJ1Y3RvciAoZ2FtZU9iaikge1xuXHRcdHRoaXMub2JqID0gZ2FtZU9iajtcblxuICAgICAgICAvLyBDaGFyYWN0ZXIgaGFzIHJlZmVyZW5jZSB0byBHYW1lXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWVPYmouZ2FtZTtcblxuICAgICAgICAvLyBNb3ZlbWVudCB0eXBlc1xuICAgICAgICB0aGlzLnR5cGUgPSAwO1xuICAgICAgICB0aGlzLlNMRVcgPSAxO1xuICAgICAgICB0aGlzLlJBTkRPTSA9IDI7XG4gICAgICAgIHRoaXMuUElOR1BPSU5HID0gMztcblxuICAgICAgICBpZiAoIXRoaXMuZ2FtZS5zb3VuZFBvb2wpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignbm8gc291bmRzIGluaXRpYWxpemVkLiBHYW1lIHdpbGwgcGxheSBzaWxlbnRseScpO1xuICAgICAgICB9XG5cblx0fVxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCB0cnVuY2F0b3JcbiAgICAgKiBAZGVzY3JpcHRpb24gdHJ1bmNhdGUgKG5vdCByb3VuZCkgbnVtYmVyIHRvIGZpeGVkIG51bWJlciBvZiBkZWNpbWFsc1xuICAgICAqIEBwYXJhbSBOdW1iZXIgbnVtIGZsb2F0aW5nLXBvaW50IG51bWJlclxuICAgICAqIEBwYXJhbSBJbnRlZ2VyIGRlY2ltYWxzIHRoZSBudW1iZXIgb2YgZGVjaW1hbHMgcG9pbnRzIHRvIHJvdW5kIHRvXG4gICAgICogQHJldHVybnMgTnVtYmVyIHRoZSB0cnVuY2F0ZWQgbnVtYmVyXG4gICAgICovXG4gICAgdHJ1bmNhdG9yIChudW0sIGRlY2ltYWxzKSB7XG4gICAgICAgIHZhciBudW1Qb3dlciA9IE1hdGgucG93KDEwLCBkZWNpbWFscyk7IC8vIFwibnVtUG93ZXJDb252ZXJ0ZXJcIiBtaWdodCBiZSBiZXR0ZXJcbiAgICAgICAgcmV0dXJuIH5+KG51bSAqIG51bVBvd2VyKS9udW1Qb3dlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIHJhbmRvbWl6ZXJcbiAgICAgKiBAZGVzY3JpcHRpb24gcmFuZG9taXplIGEgbnVtYmVyXG4gICAgICovXG4gICAgcmFuZG9taXplciAoKSB7XG4gICAgICAgIHZhciBkID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIChkID0gcGFyc2VJbnQoZCkgLSBkKTtcbiAgICAgICAgZCA9IHRoaXMudHJ1bmNhdG9yKGQsIDIpIC8gMTA7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgZ2V0Q2VudGVyXG4gICAgICovXG4gICAgZ2V0Q2VudGVyICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB4ICsgKHdpZHRoLzIpLFxuICAgICAgICAgICAgeTogeSArIChoZWlnaHQvMilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgaW5pdFNsZXdcbiAgICAgKiBAZGVzY3JpcHRpb24gc2xldyBvYmplY3QgaG9yaXpvbnRhbGx5IHdpdGgga2V5cHJlc3Nlcy4gQWRkcyBldmVudFxuICAgICAqIGxpc3RlbmVycyBmb3Iga2V5ZG93biBhbmQga2V5dXAgZXZlbnRzLiBVc2VkIGZvclxuICAgICAqIFBsYXllciBjaGFyYWN0ZXJzIG1vdmluZyBob3Jpem9udGFsbHkgaW4gdGhlIFBsYXllckFyZWFcbiAgICAgKi9cblx0aW5pdFNsZXcgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBTbGV3IG1vdGlvbicpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLlNMRVc7XG5cblxuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgdGhpcy50aWNrZXIgPSAwO1xuICAgICAgICB0aGlzLmxhc3REaXIgPSAxO1xuXG4gICAgICAgIC8vIGFkZCBib3R0b20sIHJpZ2h0IHRvIG1ha2UgYSBSZWN0IGZvciB0aGUgUGxheWVyQXJlYVxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLnBsYXllckFyZWFzWzBdLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLmJvdW5kcy53aWR0aCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLnBsYXllckFyZWFzWzBdLnNpemUud2lkdGg7XG4gICAgICAgIHRoaXMuYm91bmRzLmhlaWdodCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLnBsYXllckFyZWFzWzBdLnNpemUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5ib3R0b20gPSB0aGlzLmJvdW5kcy50b3AgKyB0aGlzLmJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRzLnJpZ2h0ID0gdGhpcy5ib3VuZHMubGVmdCArIHRoaXMuYm91bmRzLndpZHRoO1xuXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLm9iai5pbWFnZTtcblxuICAgICAgICAvLyB0b2dnbGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBQbGF5ZXIgd2hlbiBraWNraW5nXG4gICAgICAgIHRoaXMudW5LaWNrID0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xuICAgICAgICB0aGlzLmluS2ljayA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcCAtIDY7XG5cbiAgICAgICAgLy8gTk9URTogVHJ1bXAgaXMgYWRkZWQgdG8gUGxheWVyIGluIENvbGxpZGVyXG5cbiAgICAgICAgLy8gZmxhZyBvdXIgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIGxpc3RlbiBmb3IgdXNlciBldmVudHNcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsXG4gICAgICAgICAgICBldmVudCA9PiB0aGlzLnNsZXcoZXZlbnQpLCBmYWxzZSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLFxuICAgICAgICAgICAgZXZlbnQgPT4gdGhpcy51bmtpY2soZXZlbnQpLCBmYWxzZSk7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgaW5pdFJhbmRvbVdhbGtcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdCByYW5kb20gbW90aW9ucyBhbG9uZyBhIHBhdGggZnJvbSB0aGVcbiAgICAgKiB0b3AgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLiBVc2VkIGZvclxuICAgICAqIEFuaW1hbCBjaGFyYWN0ZXJzIG1vdmluZyB0aHJvdWdoIHRoZSBBbmltYWxBcmVhLlxuICAgICAqIEBwYXJhbSBOdW1iZXIgcHJlZlNwZWVkIHRoZSBzcGVlZCBvZiBtb3ZlbWVudFxuICAgICAqIEBwYXJhbSBTdHJpbmcgZGlyZWN0aW9uIHRoZSBkaXJlY3Rpb24gdGhlIEFuaW1hbCB1bHRpbWF0ZWx5IG1vdmVzLFxuICAgICAqIC0gJ3RvcCc6IG92ZXJhbGwgbW92ZW1lbnQgdXAgdGhlIHNjcmVlblxuICAgICAqIC0gJ2xlZnQnOiBvdmVyYWxsIG1vdmVtZW50IHRvIHRoZSBzY3JlZW4gbGVmdFxuICAgICAqIC0gJ2JvdHRvbSc6IG92ZXJhbGwgbW92ZW1lbnQgdG8gdGhlIHNjcmVlbiBib3R0b20gKERFRkFVTFQpXG4gICAgICogLSAncmlnaHQnOiBvdmVyYWxsIG1vdmVtZW50IHRvIHRoZSBzY3JlZW4gcmlnaHRcbiAgICAgKiAtICdyZXR1cm4nOiByZXR1cm4gaW1tZWRpYXRlbHkgdG8gdGhlIENhZ2UgYXJlYVxuICAgICAqIC0gJ2NhZ2VkJzogc3RheSBpbiB0aGUgQ2FnZSBhcmVhXG4gICAgICovXG4gICAgaW5pdFJhbmRvbVdhbGsgKHByZWZTcGVlZCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0IFJhbmRvbVdhbGsnKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5SQU5ET007XG5cbiAgICAgICAgdGhpcy5zcGVlZCA9IHByZWZTcGVlZCAqIHRoaXMudGltZVN0YW1wUmFuZG9tKCk7XG4gICAgICAgIHRoaXMuZGVsYXkgPSB0aGlzLnRpbWVTdGFtcFJhbmRvbSgpICogMzAwO1xuICAgICAgICB0aGlzLm9iai5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuZGVsYXlDb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5NQVggPSAzMDtcbiAgICAgICAgdGhpcy5NQVhfREVMQVkgPSAzMDA7XG5cbiAgICAgICAgLy8gb25lLXRpbWUgcGxheSBvZiBBbmltYWwgc291bmRcbiAgICAgICAgdGhpcy5maXJzdE1vdmUgPSB0cnVlO1xuXG4gICAgICAgIC8vIGFkZCBib3R0b20sIHJpZ2h0IHRvIG1ha2UgYSBSZWN0IGZvciB0aGUgQW5pbWFsQXJlYVxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLmJvdW5kcy53aWR0aCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUud2lkdGg7XG4gICAgICAgIHRoaXMuYm91bmRzLmhlaWdodCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5ib3R0b20gPSB0aGlzLmJvdW5kcy50b3AgKyB0aGlzLmJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRzLnJpZ2h0ID0gdGhpcy5ib3VuZHMubGVmdCArIHRoaXMuYm91bmRzLndpZHRoO1xuXG4gICAgICAgIC8vIHJlbWVtYmVyIHdoZXJlIHdlIHN0YXJ0ZWQgKGluIHRoZSBjYWdlKVxuICAgICAgICB0aGlzLnN0YXJ0VG9wID0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xuICAgICAgICB0aGlzLnN0YXJ0TGVmdCA9IHRoaXMub2JqLnBvc2l0aW9uLmxlZnQ7XG5cbiAgICAgICAgLy8gY2FjaGUgcG9zaXRpb24gZHVyaW5nIG5ldyByYW5kb20gbW92ZXNcbiAgICAgICAgdGhpcy5uZXdUb3AgPSAwLCB0aGlzLm5ld0xlZnQgPSAwO1xuXG4gICAgICAgIC8vIGdldCBib3R0b20gYW5kIHJpZ2h0IGZyb20gQ2hhcmFjdGVyIGZyb20gaXRzIEltYWdlXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLm9iai5pbWFnZTtcblxuICAgICAgICAvLyBmbGFnIG91ciBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBpbml0UGluZ1BvbmdcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdCBhIHBpbmctcG9uZyBzdHlsZSBtb3Rpb24uIFVzZWQgZm9yXG4gICAgICogVHJ1bXAgY2hhcmFjdGVycyBtb3ZpbmcgdGhyb3VnaCB0aGUgQW5pbWFsQXJlYS5cbiAgICAgKi9cbiAgICBpbml0UGluZ1BvbmcgKHByZWZTcGVlZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBQaW5nUG9uZyBtb3Rpb24nKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5QSU5HUE9ORztcblxuICAgICAgICAvL0FuaW1hbCBhcmVhXG4gICAgICAgIC8vIGFkZCBib3R0b20sIHJpZ2h0IHRvIG1ha2UgYSBSZWN0IGZvciB0aGUgQW5pbWFsQXJlYVxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLmJvdW5kcy53aWR0aCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUud2lkdGg7XG4gICAgICAgIHRoaXMuYm91bmRzLmhlaWdodCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5ib3R0b20gPSB0aGlzLmJvdW5kcy50b3AgKyB0aGlzLmJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRzLnJpZ2h0ID0gdGhpcy5ib3VuZHMubGVmdCArIHRoaXMuYm91bmRzLndpZHRoO1xuXG4gICAgICAgIHRoaXMub2JqLnN0YXJ0VG9wID0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xuXG4gICAgICAgIC8vIGdldCBib3R0b20gYW5kIHJpZ2h0IGZyb20gQ2hhcmFjdGVyIGZyb20gaXRzIEltYWdlXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLm9iai5pbWFnZTtcblxuICAgICAgICB0aGlzLm9iai5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMub2JqLmR4ID0gMDtcbiAgICAgICAgdGhpcy5vYmouZHkgPSAwO1xuXG4gICAgICAgIC8vIE5PVEU6IEFuaW1hbHMgYW5kIFBsYXllcnMgYXJlIGFkZGVkIHRvIFRydW1wIGluIENvbGxpZGVyXG5cbiAgICAgICAgLy8gZmxhZyBvdXIgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIH1cblxuXHQvKipcblx0ICogQG1ldGhvZCBzbGV3XG5cdCAqIE1vdmUgb2JqZWN0IHNsaWdodGx5IHVwIGZvciBkdXJhdGlvbiBvZiBzcGFjZSBiYXIgcHJlc3NlZCBkb3duXG4gICAgICogQ2FsbGJhY2sgZm9yIGtleWRvd24gYWRkRXZlbnRMaXN0ZW5lclxuICAgICAqIEBwYXJhbSBFdmVudCBlIHRoZSBrZXlkb3duIGV2ZW50XG4gICAgICovXG5cdHNsZXcgKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIHRoaXMua2ljayhlKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vcHJldmVudCBzY3JvbGxcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCsrO1xuICAgICAgICAgICAgICAgIHRoaXMudGlja2VyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gLTE7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnQgc2Nyb2xsXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQrKztcbiAgICAgICAgICAgICAgICB0aGlzLnRpY2tlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IDE7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnQgc2Nyb2xsXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cdH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgdXBkYXRlU2xld1xuICAgICAqIEBkZXNjcmlwdGlvbiBtb3ZlIGJhY2sgYW5kIGZvcnRoIGhvcml6b250YWxseSwgd2l0aCBhIHNpbXBsZSBlYXNpbmcgbW90aW9uXG4gICAgICogd2hlbiBsZWZ0IGFuZCByaWdodCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkLiBIYW5kbGUgY29sbGlzaW9ucyB3aXRoIHRoZSBsZWZ0XG4gICAgICogYW5kIHJpZ2h0IHdhbGxzIG9mIHRoZSBQbGF5ZXJBcmVhLlxuICAgICAqIENhbGwgaW4gYW4gdXBkYXRlIGZ1bmN0aW9uIGluc2lkZSB0aGUgQ2hhcmFjdGVyLCBlLmcuXG4gICAgICogdXBkYXRlICgpIHsgdXBkYXRlUmFuZG9tV2FsaygpOyB9XG4gICAgICogVGhlIG1haW4gR2FtZSBvYmplY3QgYXV0b21hdGljYWxseSBmaW5kcyBhbmQgJ2ZpcmVzJyB1cGRhdGUoKSBmdW5jdGlvbiBpblxuICAgICAqIGFsbCBDaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHVwZGF0ZVNsZXcgKCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5pdGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQbGF5ZXIgU2xldyBOT1QgaW5pdGlhbGl6ZWQgKGRpZCB5b3UgbGVhdmUgb3V0IG9mIGNvbnN0cnVjdG9yPyknKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpY2tlcisrO1xuICAgICAgICBpZiAodGhpcy5zcGVlZCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpY2tlciA+IDEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAvPSAyO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSAodGhpcy5sYXN0RGlyICogdGhpcy5zcGVlZCk7XG5cbiAgICAgICAgLy9jaGVjayBib3VuZHNcbiAgICAgICAgaWYgKHRoaXMuYm91bmRzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHcgPSB0aGlzLmltYWdlLmRhdGEud2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPCB0aGlzLmJvdW5kcy5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLz0gMS4yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ID0gdGhpcy5ib3VuZHMubGVmdCArICh0aGlzLnNwZWVkICogMS41KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPiB0aGlzLmJvdW5kcy5yaWdodCAtIHcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLz0gMS4yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ID0gdGhpcy5ib3VuZHMucmlnaHQgLSB3IC0gKHRoaXMuc3BlZWQgKiAxLjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2Qga2lja1xuICAgICAqIEBkZXNjcmlwdGlvbiBpZiBmb290IGlzIG5lYXIgVHJ1bXAsIGtpY2sgaGltIGludG8gdGhlIEFuaW1hbFxuICAgICAqL1xuICAgIGtpY2sgKGUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnOjo6OlRISVMgVFJVTVA6Ojo6OicgKyB0aGlzLm9iai50cnVtcClcbiAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wID0gdGhpcy5pbktpY2s7XG5cbiAgICAgICAgaWYgKCF0aGlzLm9iai50cnVtcCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6IG1pc3NpbmcgY29sbGlzaW9uIG1hdHJpeCAoZGlkIHlvdSBpbmNsdWRlIENvbGxpZGVyPyknKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNlZSBpZiB3ZSdyZSBjbG9zZSBlbm91Z2ggdG8ga2ljayBpbiB0aGUgeSBheGlzXG4gICAgICAgIHZhciB0cnVtcFlEaXN0ID0gdGhpcy5vYmoucG9zaXRpb24udG9wIC0gdGhpcy5vYmoudHJ1bXAuaW1hZ2UuZGF0YS53aWR0aCAtIHRoaXMub2JqLnRydW1wLnBvc2l0aW9uLnRvcDtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndHJ1bXBZRGlzdDonICsgdHJ1bXBZRGlzdClcblxuICAgICAgICAvLyBJZiBQbGF5ZXIgaXMgY2xvc2UgaW4gWSwgYW5kIGluc2lkZSBYIHJhbmdlLCBraWNrIHRoZSBUcnVtcCBpbnRvIEFuaW1hbEFyZWFcbiAgICAgICAgaWYgKHRydW1wWURpc3QgPCAxMCkge1xuXG4gICAgICAgICAgICAvLyBzdGFydCB0aGUgVHJ1bXAgbW92aW5nLCBzcGVlZFxuICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuc3BlZWQgPSA0MDtcblxuICAgICAgICAgICAgLy8gaWYgdG9vIGNsb3NlIHRvIGxlZnQgd2FsbCwgcHJlLWFzc2lnbiBhIHZhbHVlXG4gICAgICAgICAgICBpZiAodGhpcy5vYmoudHJ1bXAucG9zaXRpb24ubGVmdCA8ICh0aGlzLmJvdW5kcy5sZWZ0ICsgMjApKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI+PlRydW1wOiBsZWZ0IGJvdW5kIGNvcnJlY3Rpb25cIilcbiAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IC0wLjI7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHkgPSAwLjg7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb21wdXRlIGR4IGFuZCBkeSBmb3IgVHJ1bXBcbiAgICAgICAgICAgIHZhciBkaXN0ID0gKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLSB0aGlzLm9iai50cnVtcC5wb3NpdGlvbi5sZWZ0KSAvIDUwO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpc3QpIDwgMS4wKSB7XG4gICAgICAgICAgICAgICAgdmFyIGR4ID0gZGlzdDtcbiAgICAgICAgICAgICAgICBpZihkeCA+IDAuMDAzICYmIGR4IDwgMC44KSB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHggPSBkeDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHkgPSAxLjAgLSBkeDtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnQgdGhlIGtpY2tpbmcgc291bmRcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGR4IDwgMCAmJiBkeCA+IC0wLjgpIHtcbiAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IGR4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDEuMCArIGR4O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZHgpIDwgMC4wMDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLnJhbmRvbWl6ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgZCA9IGQgLSB0aGlzLnJhbmRvbWl6ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHggPSBkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDEuMCArIGR4O1xuICAgICAgICAgICAgICAgICAgICAvLyBzdGFydCB0aGUga2lja2luZyBzb3VuZFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHkgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHN0YXJ0IHRoZSBraWNraW5nIHNvdW5kXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5zb3VuZFBvb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kUG9vbC5wbGF5U291bmQoJ2tpY2snKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gLy8gZW5kIG9mIGZ1bmN0aW9uXG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIHVua2lja1xuICAgICAqIEBkZXNjcmlwdGlvbiBzZXQgcG9zaXRpb24gb2YgUGxheWVyIGJhY2sgdG8gb3JpZ2luYWxcbiAgICAgKi9cbiAgICB1bmtpY2sgKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMudW5LaWNrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCB0aW1lU3RhbXBSYW5kb21cbiAgICAgKiBAZGVzY3JpcHRpb24gcmFuZG9taXplIGluIGEgMTAtZm9sZCByYW5nZSB1c2luZyB3aW5kb3cucGVyZm9ybWFuY2VcbiAgICAgKi9cblx0dGltZVN0YW1wUmFuZG9tICgpIHtcblx0XHR2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICAgICAgICB9XG5cdFx0dmFyIG51bSA9ICd4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxMCklMTAgfCAwO1xuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZC8xMCk7XG4gICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTApO1xuICAgICAgICB9KTtcbiAgICAgIHJldHVybiBudW0gLyAxMDAwMDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpXG5cdCAqIEBsaW5rXG5cdCAqL1xuXHRnZXRSYW5kb20obWluLCBtYXgpIHtcbiAgIFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG5cdH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgdXBkYXRlUmFuZG9tV2Fsa1xuICAgICAqIEBkZXNjcmlwdGlvbiBnZW5lcmF0ZSBhIHJhbmRvbSB3YWxrLCB3aXRoIG9uZSBwcmVmZXJyZWQgZGlyZWN0aW9uLFxuICAgICAqIGdpdmluZyB0aGUgbWVhbmRlcmluZyBtb3Rpb24gdXNlZCBieSBBbmltYWxzLlxuICAgICAqIENhbGwgaW4gYW4gdXBkYXRlIGZ1bmN0aW9uIGluc2lkZSB0aGUgQ2hhcmFjdGVyLCBlLmcuXG4gICAgICogdXBkYXRlICgpIHsgdXBkYXRlUmFuZG9tV2FsaygpOyB9XG4gICAgICogVGhlIG1haW4gR2FtZSBvYmplY3QgYXV0b21hdGljYWxseSBmaW5kcyBhbmQgJ2ZpcmVzJyB1cGRhdGUoKSBmdW5jdGlvbiBpblxuICAgICAqIGFsbCBDaGFyYWN0ZXJzLlxuICAgICAqL1xuXHR1cGRhdGVSYW5kb21XYWxrICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluaXRlZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQW5pbWFsIFJhbmRvbVdhbGsgTk9UIGluaXRpYWxpemVkIChkaWQgeW91IGxlYXZlIG91dCBvZiBjb25zdHJ1Y3Rvcj8pJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblx0XHR0aGlzLmNvdW50ZXIrKztcblx0XHR0aGlzLmRlbGF5Q291bnRlcisrO1xuXHRcdGlmICh0aGlzLmRlbGF5Q291bnRlciA8IHRoaXMuZGVsYXkpIHtcblx0XHRcdC8vY29uc29sZS5sb2coJ2RlbGF5Q291bnRlcjonICsgdGhpcy5kZWxheUNvdW50ZXIgKyAnIE1BWDonICsgdGhpcy5NQVhfREVMQVkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuICAgICAgICAvLyBQbGF5IGFuaW1hbCdzIG9wZW5pbmcgc291bmQgT05DRSBhdCBzdGFydCBvZiBtb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5maXJzdE1vdmUgJiYgdGhpcy5nYW1lLnNvdW5kUG9vbCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kUG9vbC5wbGF5U291bmQodGhpcy5vYmouY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpLCAwLjcpO1xuICAgICAgICAgICAgdGhpcy5maXJzdE1vdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbXB1dGUgZHggYW5kIGR5IGZyb20gcmFuZG9tIHdhbGsuIHN0b3JlIGluaXRpYWwgcG9zaXRpb25cbiAgICAgICAgdGhpcy5vbGRMZWZ0ID0gdGhpcy5vYmoucG9zaXRpb24ubGVmdDtcbiAgICAgICAgdGhpcy5vbGRUb3AgPSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XG5cbiAgICAgICAgLy8gdGhpcy5vYmouZGlyZWN0aW9uIHdhcyBzZXQgaW4gaW5pdFJhbmRvbVdhbGtcblx0XHRzd2l0Y2ggKHRoaXMub2JqLmRpcmVjdGlvbikge1xuXHRcdFx0Y2FzZSAndG9wJzpcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wIC09ICh0aGlzLnNwZWVkICsgKDAuMSAqIHRoaXMuZ2V0UmFuZG9tKDEsIHRoaXMuc3BlZWQpKSk7XG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gMTAgKiAodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQvMikpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2xlZnQnOlxuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC09ICh0aGlzLnNwZWVkICsgKDAuNSAqIHRoaXMuZ2V0UmFuZG9tKDAsIHRoaXMuc3BlZWQpKSk7XG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCArPSAxMCAqKHRoaXMuZ2V0UmFuZG9tKC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnYm90dG9tJzpcbiBcdFx0XHRcdGlmICh0aGlzLmNvdW50ZXIgPiB0aGlzLk1BWCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk1BWCA9IHRoaXMuZ2V0UmFuZG9tKDIsIDE1KTtcblx0XHRcdFx0XHR0aGlzLm5ld0xlZnQgPSAodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpKTtcblx0XHRcdFx0XHR0aGlzLmNvdW50ZXIgPSAwO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlciA+IHRoaXMuTUFYIC8gMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5nZXRSYW5kb20oLTAuMiwgMS4yKSAvL05PVEU6IGZpbmUtdHVuZSB0aGlzIHRvIG1ha2UgZ2FtZXBsYXkgaGFyZGVyXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLmdldFJhbmRvbSgtMSwgMSk7XG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gciAqIHRoaXMubmV3TGVmdDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdyaWdodCc6XG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gKHRoaXMuc3BlZWQgKyAoMC41ICogdGhpcy5nZXRSYW5kb20oMCwgdGhpcy5zcGVlZCkpKTtcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wICs9IDEwICogKHRoaXMuZ2V0UmFuZG9tKC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmV0dXJuJzpcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGNhdXNlZCBieSBhIFRydW1wIGNvbGxpZGVyIHJ1bm5pbmcgaW50byB0aGUgQW5pbWFsXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogcmV0dXJuIEFuaW1hbCB0byBpdHMgY2FnZVxuICAgICAgICAgICAgICAgIHRoaXMub2JqLmRpcmVjdGlvbiA9ICdjYWdlZCc7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogd3JpdGUgcmV0dXJuIGFyY1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2FnZWQnOlxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPSB0aGlzLnN0YXJ0TGVmdDtcbiAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLnN0YXJ0VG9wO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IHdoZW4gY2FnZWQsIHJlc2V0IHVudGlsIGl0IGlzIHVuY2FnZWQgYWdhaW5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ01vdmVyLnNldFByZWZEaXJlY3Rpb246IGludmFsaWQgZGlyZWN0aW9uOicgKyB0aGlzLm9iai5kaXJlY3Rpb24pO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cbiAgICAgICAgLy8gQ29tcHV0ZSBkeCBhbmQgZHkgZm9yIEFuaW1hbHNcbiAgICAgICAgdmFyIHhkaXN0ID0gdGhpcy5vbGRMZWZ0IC0gdGhpcy5vYmoucG9zaXRpb24ubGVmdDtcbiAgICAgICAgdmFyIHlkaXN0ID0gdGhpcy5vbGRUb3AgLSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XG4gICAgICAgIHZhciBzdW0gPSB4ZGlzdCArIHlkaXN0O1xuICAgICAgICBpZiAoc3VtID4gMC4wMDAxKSB7XG4gICAgICAgICAgICB0aGlzLm9iai5keCA9IHhkaXN0IC8gc3VtO1xuICAgICAgICAgICAgdGhpcy5vYmouZHkgPSB5ZGlzdCAvIHN1bTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub2JqLmR4ID0gMDtcbiAgICAgICAgICAgIHRoaXMub2JqLmR5ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNhdmUgb3VyIG5ldyBwb3NpdGlvblxuICAgICAgICB0aGlzLm9sZExlZnQgPSB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0O1xuICAgICAgICB0aGlzLm9sZFRvcCA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKCcgZHg6JyArIHRoaXMub2JqLmR4ICsgJyBkeTonICsgdGhpcy5vYmouZHkgKyAnIHN1bTonICsgc3VtKVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZUNvbGxpc2lvbiAodHJ1bXAsIGFuaW1hbCkge1xuICAgICAgICB2YXIgdyA9IHRoaXMub2JqLmltYWdlLmRhdGEud2lkdGg7XG4gICAgICAgIHZhciBoID0gdGhpcy5vYmouaW1hZ2UuZGF0YS5oZWlnaHQ7XG4gICAgICAgIHZhciBhdyA9IGFuaW1hbC5pbWFnZS5kYXRhLndpZHRoO1xuICAgICAgICB2YXIgYWggPSBhbmltYWwuaW1hZ2UuZGF0YS5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPCBhbmltYWwucG9zaXRpb24ubGVmdCArIGF3ICYmXG4gICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ICsgdyA+IGFuaW1hbC5wb3NpdGlvbi5sZWZ0ICYmXG4gICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPCBhbmltYWwucG9zaXRpb24udG9wICsgYWggJiZcbiAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCArIGggPiBhbmltYWwucG9zaXRpb24udG9wKSB7XG5cbiAgICAgICAgICAgICAgICAvL2dldCBUcnVtcCBjZW50ZXJhbCBwb2ludFxuICAgICAgICAgICAgICAgIHZhciB0WENlbnRlciA9IHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKyB3LzI7XG4gICAgICAgICAgICAgICAgdmFyIHRZQ2VudGVyID0gdGhpcy5vYmoucG9zaXRpb24udG9wICArIGgvMjtcblxuICAgICAgICAgICAgICAgIC8vZ2V0IEFuaW1hbCBjZW50cmFsIHBvaW50XG4gICAgICAgICAgICAgICAgdmFyIGFYQ2VudGVyID0gYW5pbWFsLnBvc2l0aW9uLmxlZnQgKyBhdy8yO1xuICAgICAgICAgICAgICAgIHZhciBhWUNlbnRlciA9IGFuaW1hbC5wb3NpdGlvbi50b3AgKyBhaC8yO1xuXG4gICAgICAgICAgICAgICAgLy9jb21wdXRlIHggYW5kIHkgdmVjdG9yIGJldHdlZW4gY2VudGVyc1xuICAgICAgICAgICAgICAgIHZhciBjWERpZmYgPSB0WENlbnRlciAtIGFYQ2VudGVyO1xuICAgICAgICAgICAgICAgIHZhciBjWURpZmYgPSB0WUNlbnRlciA9IGFZQ2VudGVyO1xuXG4gICAgICAgICAgICAgICAgLy8gVHJ1bXAgZG9lc24ndCByZWFjdCBpZiBub3QgbW92aW5nIChldmVuIGlmIGFuaW1hbCBkb2VzKVxuICAgICAgICAgICAgICAgIGlmICh0cnVtcC5zcGVlZCAhPSAwICYmIHRydW1wLmR4ICE9IDAgJiYgdHJ1bXAuZHkgIT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG1vdmUgb2JqZWN0IHNvIGl0IGlzbid0IGNvbGxpZGluZyBhbnltb3JlXG4gICAgICAgICAgICAgICAgICAgIGlmIChjWERpZmYgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1bXAucG9zaXRpb24ueCArPSAoY1hEaWZmICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5wb3NpdGlvbi54IC09IChjWERpZmYgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjWURpZmYgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1bXAucG9zaXRpb24ueSArPSAoY1lEaWZmICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5wb3NpdGlvbi55IC09IChjWURpZmYgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBuZXcgdmVjdG9yc1xuICAgICAgICAgICAgICAgICAgICB0cnVtcC5keCA9IC1jWERpZmYgLyBjWURpZmY7XG4gICAgICAgICAgICAgICAgICAgIHRydW1wLmR5ID0gLWNZRGlmZiAvIGNYRGlmZjtcblxuICAgICAgICAgICAgICAgICAgICAvLyByb3VuZGluZyBlcnJvclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGRpZiA9IE1hdGguYWJzKHRydW1wLmR4ICsgdHJ1bXAuZHkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGRpZiA+IDEuMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRydW1wLmR4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5keSAtPSBkZGlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5keSArPSBkZGlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvL2VuZCBvZiBUcnVtcCBpcyBtb3ZpbmdcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdkeDo6Ojo6OicgKyB0cnVtcC5keCArICcgZHk6Ojo6OjonICsgdHJ1bXAuZHkpXG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVBpbmdQb25nXG4gICAgICogQGRlc2NyaXB0aW9uIG1vdmUgaW4gYSBwaW5nLXBvbmcgc3R5bGUuXG4gICAgICogQ2FsbCBpbiBhbiB1cGRhdGUgZnVuY3Rpb24gaW5zaWRlIHRoZSBDaGFyYWN0ZXIsIGUuZy5cbiAgICAgKiB1cGRhdGUgKCkgeyB1cGRhdGVSYW5kb21XYWxrKCk7IH1cbiAgICAgKiBUaGUgbWFpbiBHYW1lIG9iamVjdCBhdXRvbWF0aWNhbGx5IGZpbmRzIGFuZCAnZmlyZXMnIHVwZGF0ZSgpIGZ1bmN0aW9uIGluXG4gICAgICogYWxsIENoYXJhY3RlcnMuXG4gICAgICogUG9zc2libGUgdXBkYXRlcyBmb3IgbW90aW9uOlxuICAgICAqIDEuIENvbGxpc2lvbiB3aXRoIGEgUGxheWVyICh2aWEga2ljaygpIG1ldGhvZCkgc3RhcnRzIHRoZSBUcnVtcCBjaGFyYWN0ZXIgbW92aW5nXG4gICAgICogMi4gVHJ1bXAgd2lsbCBib3VuY2Ugb24gYWxsIHdhbGxzIEVYQ0VQVCB0aGUgYm90dG9tIHdhbGxcbiAgICAgKiAzLiBXaGVuIHRoZSBUcnVtcCBpbnRlcnNlY3RzIHRoZSBib3R0b20gd2FsbCwgdGhleSBzdG9wIG1vdmluZ1xuICAgICAqIDQuIElmIHRoZXkgY29sbGlkZSB3aXRoIGFuIEFuaW1hbCwgdGhleSBib3VuY2UsIGFuZCB0aGUgQW5pbWFsIHJldHVybnMgdG8gaXRzIENhZ2UuXG4gICAgICovXG4gICAgdXBkYXRlUGluZ1BvbmcgKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5pbml0ZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RydW1wIFBpbmdQb25nIE5PVCBpbml0aWFsaXplZCAoZGlkIHlvdSBsZWF2ZSBvdXQgb2YgY29uc3RydWN0b3I/KScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2R4OicgKyB0aGlzLm9iai5keCArICcgZHk6JyArIHRoaXMub2JqLmR5KTtcbiAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSB0aGlzLm9iai5zcGVlZCAqIHRoaXMub2JqLmR4O1xuICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgLT0gdGhpcy5vYmouc3BlZWQgKiB0aGlzLm9iai5keTtcblxuICAgICAgICAvL2NoZWNrIGJvdW5kcyAoQW5pbWFsQXJlYSlcbiAgICAgICAgaWYgKHRoaXMuYm91bmRzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYmouaW1hZ2UuZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHcgPSB0aGlzLm9iai5pbWFnZS5kYXRhLndpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBoID0gdGhpcy5vYmouaW1hZ2UuZGF0YS5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAvLyBjYXRjaCBjYXNlcyB3aGVyZSBUcnVtcCBnZXRzIGludG8gdGhlIENhZ2UgYXJlYVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi50b3AgPCB0aGlzLmJvdW5kcy50b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLmR5ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHkgPSAtdGhpcy5vYmouZHk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wID0gdGhpcy5ib3VuZHMudG9wICsgMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBydW4gdGhpcyBvbmx5IGlmIHdlIGFyZSBtb3ZpbmcgZG93biB0aGUgc2NyZWVuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLmR5IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24udG9wID4gKHRoaXMub2JqLnN0YXJ0VG9wIC0gKHRoaXMub2JqLmR5ICogdGhpcy5vYmouc3BlZWQpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLm9iai5keSA9IC10aGlzLm9iai5keTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMub2JqLnN0YXJ0VG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0ID0gdGhpcy5ib3VuZHMuYm90dG9tIC0gaCAtIHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwZCA9IC10aGlzLm9iai5keSAqIHRoaXMub2JqLnNwZWVkICogNDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBkZWNlbGVyYXRlIGJlZm9yZSBzdG9wcGluZyBhdCBib3R0b20gb2YgQW5pbWFsQXJlYVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdCA8IHNwZCAmJiBzcGQgPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5zcGVlZCAvPSAyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvL2VuZCBvZiBkeSBuZWdhdGl2ZSAoZ29pbmcgZG93bilcblxuICAgICAgICAgICAgICAgIC8vIGJvdW5jZSBvbiB0aGUgb3RoZXIgMyB3YWxsc1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IDwgdGhpcy5ib3VuZHMubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keCA9IC10aGlzLm9iai5keDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLnRvcCA8IHRoaXMuYm91bmRzLnRvcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keSA9IC10aGlzLm9iai5keTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPiB0aGlzLmJvdW5kcy5yaWdodCAtIHcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHggPSAtdGhpcy5vYmouZHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZW5jb3VuZGVyIGFuIGFuaW1hbCwgYm91bmNlLCBBTkQgJ2tpY2snIHRoZSBhbmltYWwgYmFjayBpbnRvIGl0cyBjYWdlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLmFuaW1hbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMub2JqLmFuaW1hbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmltYWwgPSB0aGlzLm9iai5hbmltYWxzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxjdWxhdGVDb2xsaXNpb24odGhpcy5vYmosIGFuaW1hbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB0aGUgQW5pbWFsJ3Mgc3RhdGUgdG8gcmV0dXJuIGhvbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPj4+UkVUVVJOSU5HIEFOSU1BTCBUTyBDQUdFJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYWwuZGlyZWN0aW9uID0gJ3JldHVybic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnNwZWVkIDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5zcGVlZCA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9icmVhayBvdXQgb2YgaG9yaXpvbnRhbCBtb3ZlXG4gICAgICAgIGlmICh0aGlzLm9iai5keSA8IDAuMDAxICYmIHRoaXMub2JqLmR4ID4gMC4wMDEpIHtcbiAgICAgICAgICAgIHZhciBkID0gdGhpcy5yYW5kb21pemVyKCk7XG4gICAgICAgICAgICB0aGlzLm9iai5keSArPSBkIC0gdGhpcy5yYW5kb21pemVyKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufSAvLyBlbmQgb2YgY2xhc3NcbiIsIi8qKlxuICogUGxheWVyLmpzXG4gKiBVc2VyLWNvbnRyb2xsZWQgQ2hhcmFjdGVyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gICAgdGhpcy5tb3Zlci5pbml0U2xldygpOyAvL2VuYWJsZXMgUGxheWVyIG1vdmVtZW50XG4gXHR9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLm1vdmVyLnVwZGF0ZVNsZXcoKTsgLy9zbW9vdGhzIG1vdGlvbiwgYXBwbGllcyBDb2xsaWRlclxuICB9XG5cbiB9XG4iLCIvKiogXG4gKiBQbGF5ZXJBcmVhLmpzXG4gKiBUaGUgcmVnaW9uIHdoZXJlIHRoZSBQbGF5ZXIgY2FuIG1vdmUuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQXJlYSBleHRlbmRzIEFyZWEge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG4gXHR9XG5cbiB9IiwiLyoqIFxuICogU2NvcmUuanNcbiAqIERpc3BsYXkgdXNlciBzY29yZVxuICogQGluaGVyaXRzIER5bmFtaWNUZXh0LCBUZXh0LCBJbmZvLCBHYW1lUGllY2VcbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL0R5bmFtaWNUZXh0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBEeW5hbWljVGV4dCB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cbn0iLCIvKiogXG4gKiBTY3JlZW4uanNcbiAqIEdlbmVyaWMgU2NyZWVuIG9iamVjdFxuICogQGluaGVyaXRzIEdhbWVQaWVjZS5qc1xuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBJZGVudGl0eSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbiBleHRlbmRzIEdhbWVQaWVjZSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTsgLy9pbml0ICdwYXJlbnQnIEdhbWVQaWVjZVxuXG4gXHRcdC8vIHNhdmUgYSByZWZlcmVuY2UgdG8gb3VyIHBhcmVudCBHYW1lIG9iamVjdFxuIFx0XHR0aGlzLmdhbWUgPSBjb25maWcuZ2FtZTtcblxuIFx0XHR3aW5kb3cuY29uZmlnID0gY29uZmlnOyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vREVCVUcgT05MWVxuXG4gXHRcdC8vIFNjcmVlbnMgYXJlIGRlZmluZWQgaW4gSFRNTCwgc28gc2F2ZSBhIHJlZmVyZW5jZSB0byBvdXIgRE9NIGlkXG4gXHRcdHRoaXMuZG9tSWQgPSBjb25maWcuaWQ7XG5cbiBcdFx0Ly8gc2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgRE9NIGVsZW1lbnQgd2UncmUgY29ubmVjdGVkIHRvXG4gXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kb21JZCk7XG5cbiBcdFx0Ly8gaW5zZXJ0IHRoZSBjb3B5cmlnaHQgaW5mbyBmcm9tIHRoZSBtYWluIEdhbWUgb2JqZWN0XG4gXHRcdHRoaXMuYWRkV2FybmluZygpO1xuIFx0fVxuXG4gXHQvLyBsb2FkIGEgYmFja2dyb3VuZCBpbWFnZSBpbnRvIHRoZSBTY3JlZW5cbiBcdGxvYWRCYWNrZ3JvdW5kIChwYXRoLCBjYWxsYmFjaykge1xuIFx0XHRjb25zb2xlLmxvZyhcImxvYWRpbmc6XCIgKyB0aGlzLmRvbUlkKTtcbiBcdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBuZXcgU3RhdGljSW1hZ2UoXG4gXHRcdFx0e1xuIFx0XHRcdFx0bmFtZTogdGhpcy5uYW1lICsgJy1pbWFnZScsXG4gXHRcdFx0XHRkb21JZDogdGhpcy5pZCArICctaW1hZ2UnLFxuIFx0XHRcdFx0cGF0aDogcGF0aCxcbiBcdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFja1xuIFx0XHRcdH1cbiBcdFx0KTtcbiBcdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UubG9hZEJhY2tncm91bmRJbWFnZSh0aGlzLmRvbSwgcGF0aCwgY2FsbGJhY2spO1xuIFx0fVxuXG4gXHQvLyBzaG93IGFuZCBoaWRlIHJlZ2lvbnMgb2YgdGhlIFNjcmVlblxuIFx0c2hvd1NjcmVlbiAoKSB7XG4gXHRcdGNvbnNvbGUubG9nKFwic2hvd2luZzpcIiArIHRoaXMuZG9tSWQpO1xuIFx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuIFx0fVxuXG4gXHRoaWRlU2NyZWVuICgpIHtcbiBcdFx0Y29uc29sZS5sb2coXCJoaWRpbmc6XCIgKyB0aGlzLmRvbUlkKTtcbiBcdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuIFx0fVxuXG4gXHRzaG93SGVhZGVyICgpIHtcbiBcdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gXHR9XG5cbiBcdGhpZGVIZWFkZXIgKCkge1xuXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiBcdH1cblxuIFx0c2hvd0Zvb3RlciAoKSB7XG5cdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiBcdH1cblxuIFx0aGlkZUZvb3RlciAoKSB7XG5cdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuIFx0fVxuXG4gXHRhZGRXYXJuaW5nICgpIHtcbiBcdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLmlubmVySFRNTCA9IHRoaXMuZ2FtZS53YXJuaW5nO1xuIFx0fVxuXG4gfTsiLCIvKiogXG4gKiBAY2xhc3MgU291bmRlci5qc1xuXG4gKiBAZGVzY3JpcHRpb24gcHJvdmlkZSBzb3VuZHMgdGhhdCBvdGhlciBvYmplY3RzIGNhbiBwbGF5LiBEZXRlY3RzIHRoZSBraW5kcyBcbiAqIG9mIGF1ZGlvIGZpbGVzIHRoZSB3ZWIgYnJvd2VyIGNhbiBwbGF5LCBhbmQgc2VydmVzIHRoZSBmaXJzdCBmaWxlIGl0IGZpbmRzIGluIFxuICogdGhlIC9hdWRpbyBmb2xkZXIgb2YgdGhlIGRpc3RyaWJ1dGlvbi4gQXVkaW8gZmlsZXMgYXJlIGFjY2Vzc2VkIGJ5IGN1c3RvbSBuYW1lcyBcbiAqIGZvciBwbGF5YmFjay5cblxuICogQWRhcHRlZCBmcm9tXG4gKiBAaHR0cDovL2Jsb2cuc2tsYW1iZXJ0LmNvbS9odG1sNS1jYW52YXMtZ2FtZS1odG1sNS1hdWRpby1hbmQtZmluaXNoaW5nLXRvdWNoZXMvXG5cbiAqIFNvdW5kZXIuanMgc2hvdWxkIGJlIGxvYWRlZCBpbiB0aGUgbWFpbiBHYW1lIGluaXRpYWxpemF0aW9uIHByb2Nlc3MuXG5cbiAqIEluIGFkZGl0aW9uLCB0aGUgZGlzdHJpYnV0aW9uIE1VU1QgaGF2ZSBhbiAvYXVkaW8gZGlyZWN0b3J5IHdpdGggZmlsZXMgaW4gbXVsdGlwbGUgXG4gKiBhdWRpbyBmb3JtYXRzOlxuICogTVAzICgubXAzKVxuICogT2dnLVZvcmJpcyAoLm9nZylcbiAqIFdBViAoLndhdilcblxuICogQXVkaW8gRWRpdG9yczpcbiAqIEF1ZGFjaXR5IChmcmVlKVxuICogQGxpbmsgaHR0cDovL3d3dy5hdWRhY2l0eXRlYW0ub3JnL1xuICogUHJvVG9vbHMgKCQkJClcbiAqIEBsaW5rIGh0dHA6Ly93d3cuYXZpZC5jb20vcHJvLXRvb2xzXG5cbiAqIEF1ZGlvIGNvbnZlcnRlcnM6XG4gKiBAbGluayBodHRwOi8vbWVkaWEuaW8vXG4gKiBAbGluayBodHRwczovL3NvdXJjZWZvcmdlLm5ldC9wcm9qZWN0cy9hdWRhY2l0eS9cbiAqIEBsaW5rIGh0dHA6Ly93d3cubWVkaWFodW1hbi5jb20vYXVkaW8tY29udmVydGVyL1xuICogQGxpbmsgaHR0cDovL3d3dy5odG1sNWF1ZGlvY29udmVydGVyLmNvbS9cbiBcbiAqIEF1ZGlvIFNhbXBsZXM6XG4gKiBAbGluayBodHRwOi8vd3d3Lmdyc2l0ZXMuY29tL2FyY2hpdmUvc291bmRzL2NhdGVnb3J5LzI1Lz9vZmZzZXQ9MjBcbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmZyZWVzb3VuZC5vcmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmRlciB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuXG5cdFx0Ly8gQ3JlYXRlIGFuIGFycmF5IG9mIGxvYWRlZCBzb3VuZHNcblx0XHR0aGlzLnBhdGggPSAnYXVkaW8vJztcblxuXHRcdHRoaXMuc291bmRzID0gW107XG5cdFx0dGhpcy5jaGVja0F1ZGlvKCk7XG5cdH1cblxuXHQvKiogXG5cdCAqIEBtZXRob2QgY2hlY2tBdWRpb1xuXHQgKiBAZGVzY3JpcHRpb24gc2VlIHdoaWNoIGF1ZGlvIGZpbGUgZm9ybWF0cyBjYW4gYmUgcGxheWVkIGJ5IHRoZSBicm93c2VyLlxuXHQgKi9cblx0Y2hlY2tBdWRpbyAoKSB7XG5cdFx0dmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xuXHRcdHZhciBib29sID0gZmFsc2U7XG5cblx0XHR0cnkge1xuXHRcdFx0aWYgKGJvb2wgPSAhIWVsZW0uY2FuUGxheVR5cGUpIHtcblx0XHRcdFx0Ym9vbCA9IG5ldyBCb29sZWFuKGJvb2wpO1xuXHRcdFx0XHRib29sLm9nZyA9IGVsZW0uY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywnJyk7XG5cdFx0XHRcdGJvb2wubXAzID0gZWxlbS5jYW5QbGF5VHlwZSgnYXVkaW8vbXBlZzsnKS5yZXBsYWNlKC9ebm8kLywnJyk7XG5cdFx0XHRcdGJvb2wud2F2ID0gZWxlbS5jYW5QbGF5VHlwZSgnYXVkaW8vd2F2OyBjb2RlY3M9XCIxXCInKS5yZXBsYWNlKC9ebm8kLywnJyk7XG5cdFx0XHRcdGJvb2wubTRhID0gKGVsZW0uY2FuUGxheVR5cGUoJ2F1ZGlvL3gtbTRhOycpIHx8IGVsZW0uY2FuUGxheVR5cGUoJ2F1ZGlvL2FhYzsnKSkucmVwbGFjZSgvXm5vJC8sJycpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHQvLyBsaXN0IHN1cHBvcnRlZCBhdWRpbyB0eXBlc1xuXHRcdFx0Ly9lbGVtID0gbnVsbDsgXG5cdFx0XHR0aGlzLnR5cGUgPSBib29sO1xuXG5cdFx0XHRmb3IgKHZhciBpIGluIHRoaXMudHlwZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhpICsgJyBzdXBwb3J0OicgKyB0aGlzLnR5cGVbaV0pO1xuXHRcdFx0fVxuXHR9XG5cblx0LyoqIFxuXHQgKiBAbWV0aG9kIHNldFNvdW5kXG5cdCAqIEBkZXNjcmlwdGlvbiBjYWxsYmFjayBmb3IgbG9hZGluZyBzb3VuZCwgYWRkcyB0byB0aGUgXG5cdCAqIHNvdW5kcyBhcnJheSBmb3IgbGF0ZXIgcGxheWJhY2suXG5cdCAqL1xuXHRzZXRTb3VuZCAoZSwgbmFtZSwgdm9sdW1lKSB7XG5cdFx0aWYgKCF2b2x1bWUpIHtcblx0XHRcdHZvbHVtZSA9IDAuNTtcblx0XHR9XG5cdFx0dGhpcy5zb3VuZHNbbmFtZV0gPSBlLnRhcmdldDtcblx0XHR0aGlzLnNvdW5kc1tuYW1lXS52b2x1bWUgPSB2b2x1bWU7XG5cdH1cblxuXHQvKiogXG5cdCAqIEBtZXRob2Qgc291bmRFcnJvclxuXHQgKiBAZGVzY3JpcHRpb24gY2FsbGJhY2sgZm9yIGZhaWxlZCBsb2FkcyBvZiBzb3VuZCBmaWxlcy5cblx0ICovXG5cdHNvdW5kRXJyb3IgKGUsIG5hbWUpIHtcblx0XHRjb25zb2xlLmVycm9yKCdBdWRpbyAnICsgbmFtZSArICcgZmFpZWQgdG8gbG9hZCcpO1xuXHRcdHRoaXMuc291bmRzW25hbWVdID0gbnVsbDtcblx0fVxuXG5cdC8qKiBcblx0ICogQG1ldGhvZCBhZGRTb3VuZFxuXHQgKiBAZGVzY3JpcHRpb24gYWRkIGEgbmV3IHNvdW5kLiBcblx0ICogQHBhcmFtIFN0cmluZyBuYW1lIHRoZSBuYW1lIG9mIHRoZSBzb3VuZC4gVGhlIHNvdW5kIG5hbWUgXG5cdCAqIG11c3QgbWF0Y2ggdGhlIGZpbGUgY29udGFpbmluZyB0aGUgYXVkaW8sIGUuZy4gZm9yIGEgc291bmQgY2FsbGVkIFxuXHQgKiAna2ljaycgdGhlcmUgbXVzdCBiZSBhIGZpbGUgL2F1ZGlvL2tpY2subXAzIFxuXHQgKiBQb3NzaWJsZSBmb3JtYXRzIChjcmVhdGUgdGhlbSBhbGwgZHVyaW5nIHByb2R1Y3Rpb24pXG5cdCAqIC0gTVAzICgubXAzKVxuXHQgKiAtIE9nZy1Wb3JiaXMgKC5vZ2cpXG5cdCAqIC0gV0FWICgud2F2KVxuXHQgKiBAcGFyYW0gTnVtYmVyIHZvbHVtZSB0aGUgbG91ZG5lc3Mgb2YgdGhlIHNvdW5kLCBiZXR3ZWVuIDAgKHNpbGVudCkgXG5cdCAqIGFuZCAxLjAgKGFzIGxvdWQgYXMgcG9zc2libGUpLlxuXHQgKi9cblx0YWRkU291bmQgKG5hbWUsIHZvbHVtZSkge1xuXHRcdGlmICghbmFtZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcigndHJpZWQgdG8gbG9hZCBhdWRpbyBmaWxlIHdpdGhvdXQgYSBuYW1lIGFuZC9vciBwYXRoLCBhYm9ydGluZycpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyB0cnkgY3JlYXRpbmcgdGhlIHNvdW5kXG5cdFx0dmFyIHNuZDtcblx0XHQvLyBnZXQgdGhlIGV4dGVuc2lvbiBhbmQgcmVtYWluaW5nIHBhdGhcblx0XHRmb3IgKHZhciBpIGluIHRoaXMudHlwZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3RoaXMudHlwZVsnICsgaSArICddPScgKyB0aGlzLnR5cGVbaV0pO1xuXHRcdFx0aWYgKHRoaXMudHlwZVtpXSAhPSBcIlwiKSB7IC8vcmV0dXJuZWQgZGF0YVR5cGUgZm9yIGVsZW0uY2FuUGxheVR5cGUoLi4uKVxuXG5cdFx0XHRcdHZhciBmaWxlUGF0aCA9IHRoaXMucGF0aCArIG5hbWUgKyAnLicgKyBpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlRSWUlORyBUTyBMT0FEOlwiICsgdGhpcy5wYXRoICsgbmFtZSArICcuJyArIGkpO1xuXG5cdFx0XHRcdC8vIENyZWF0ZSB0aGUgQXVkaW8gb2JqZWN0XG5cdFx0XHRcdHNuZCA9IG5ldyBBdWRpbyhmaWxlUGF0aCk7XG5cblx0XHRcdFx0Ly8gdHJhcCBsb2FkIGFuZCBlcnJvciBldmVudHNcblx0XHRcdFx0c25kLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZGRhdGEnLCBcblx0XHRcdFx0XHRldmVudCA9PiB0aGlzLnNldFNvdW5kKGV2ZW50LCBuYW1lLCB2b2x1bWUpLCBmYWxzZSk7XG5cblx0XHRcdFx0c25kLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgXG5cdFx0XHRcdFx0ZXZlbnQgPT4gdGhpcy5zb3VuZEVycm9yKGV2ZW50LCBuYW1lKSwgZmFsc2UpO1xuXG5cdFx0XHRcdC8vIHN0YXJ0IGxvYWRpbmcgdGhlIHNvdW5kXG5cdFx0XHRcdHNuZC5sb2FkKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIXNuZCkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignc291bmQgZmlsZSBmb3I6JyArIG5hbWUgKyAnIG5vdCBmb3VuZCBpbiBhdWRpbycpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqIFxuXHQgKiBAbWV0aG9kIHBsYXlTb3VuZFxuXHQgKiBAZGVzY3JpcHRpb25cblx0ICogQHBhcmFtcyBTdHJpbmcgbmFtZSB0aGUgbmFtZSBvZiB0aGUgc291bmQuIE11c3QgbWF0Y2ggdGhlIGZpbGVuYW1lIFxuXHQgKiBXSVRIT1VUIGEgZmlsZSBleHRlbnNpb24gaW4gdGhlIC9hdWRpbyBmb2xkZXIgZm9yIHRoZSBnYW1lLlxuXHQgKi9cblx0cGxheVNvdW5kIChuYW1lKSB7XG5cdFx0aWYgKHRoaXMuc291bmRzW25hbWVdKSB7XG5cdFx0XHR0aGlzLnNvdW5kc1tuYW1lXS5wbGF5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ25vIHNvdW5kIGZpbGUgd2l0aCBuYW1lOicgKyBuYW1lICsgJyBpbiBhdWRpbyBmb2xkZXInKTtcblx0XHR9XG5cdH1cblxuXHQvKiogXG5cdCAqIEBtZXRob2QgZmlsZUV4aXN0c1xuXHQgKiBAZGVzY3JpcHRpb24gZGV0ZWN0IGlmIGEgZmlsZSBpcyBwcmVzZW50IG9uIHRoZSBzZXJ2ZXIuIFVzZXMgYW4gXG5cdCAqIHN5bmNocm9ub3VzIEFqYXggdGVjaG5pcXVlLCBzbyBTTE9XIGlmIHlvdSBhcmUgdXNpbmcgYSByZW1vdGUgc2VydmVyLiBcblx0ICogTm8gY29tcGFyYWJsZSBtZXRob2QgZXhpc3RzIGZvciBkZXRlcm1pbmluZyBpZiBhIGZvbGRlciBleGlzdHMgaW4gXG5cdCAqIGNsaWVudC1zaWRlIHZhbmlsbGEgSmF2YVNjcmlwdC5cblx0ICogQHBhcmFtIFN0cmluZyB1cmwgdGhlIHBhdGggdG8gdGhlIGZpbGUgb24gdGhlIHNlcnZlci5cblx0ICovXG5cdGZpbGVFeGlzdHModXJsKSB7XG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdHhoci5vcGVuKCdIRUFEJywgdXJsLCBmYWxzZSk7XG5cdFx0eGhyLnNlbmQoKTtcblx0XHRpZiAoeGhyLnN0YXR1cyA9PSAnNDA0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxufSAvLyBlbmQgb2YgY2xhc3MiLCIvKipcbiAqIFN0YXJ0U2NyZWVuLmpzXG4gKiBPcGVuaW5nIHNjcmVlbiBmb3IgZ2FtZS5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XG5cbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbmltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuL0lkZW50aXR5LmpzJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vQmFja2dyb3VuZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0U2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdC8vIHRoaXMuZG9tIGRlZmluZWQgaW4gU2NyZWVuXG5cblx0XHQvLyBMb2FkIFN0YXJ0U2NyZWVuIHN1Yi1vYmplY3RzXG5cdFx0dGhpcy5sb2FkQmFja2dyb3VuZCgnaW1nL3NjcmVlbnMvc3RhcnQtc2NyZWVuMi5wbmcnKTtcblxuXHRcdC8vIGxvYWQgaWRlbnRpdHkgaW1hZ2Vcblx0XHR0aGlzLmxvYWRJZGVudGl0eSgpO1xuXG5cdFx0Ly8gbG9hZCBpbnN0cnVjdGlvbnNcblx0XHR0aGlzLmxvYWRJbnN0cnVjdGlvbnMoKTtcblxuXHRcdC8vIE1ha2UgdGhlIHN0YXJ0IGJ1dHRvbiBvcGVuIHRoZSBtYWluIGdhbWUgc2NyZWVuXG5cdFx0dGhpcy5iaW5kU3RhcnQoKTtcblx0fVxuXG5cdGxvYWRJZGVudGl0eSAoKSB7XG5cdFx0dGhpcy5pZGVudGl0eSA9IG5ldyBJZGVudGl0eShcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ2lkZW50aXR5Jyxcblx0XHRcdFx0ZG9tSWQ6ICdzdGFydC1zY3JlZW4taWRlbnRpdHknLFxuXHRcdFx0XHRwYXRoOiAnaW1nL2lkZW50aXR5L2xvZ28xLnBuZycsXG5cdFx0XHRcdGF1dGhvcjogJ2phdmllcmEgc2lsdmEnLFxuXHRcdFx0XHRzb3VyY2U6ICdwbHlvanVtcCdcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0Ly8gc2V0IHBvc2l0aW9uIG9mIElkZW50aXR5XG5cdFx0dGhpcy5pZGVudGl0eS5zZXRET01Qb3NpdGlvbiAoXG5cdFx0XHR7XG5cdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0bGVmdDogMFxuXHRcdFx0fVxuXHRcdCk7XG5cblx0fVxuXG5cdGxvYWRJbnN0cnVjdGlvbnMgKCkge1xuXG5cdFx0dGhpcy5pbnN0cnVjdGlvbnMgPSBuZXcgU3RhdGljVGV4dChcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ2dhbWUgaW5zdHJ1Y3Rpb25zJyxcblx0XHRcdFx0ZG9tSWQ6ICdpbnN0cnVjdGlvbnMnLFxuXHRcdFx0XHR0ZXh0OiAnUGxheSB0byB3aW4uIFRoYXQgaXMgYWxsIFRydW1wIGNhcmVzIGFib3V0LCBhbmQgc28gc2hvdWxkIHlvdS4nXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaW5zdHJ1Y3Rpb25zLnNldERPTVBvc2l0aW9uKFxuXHRcdFx0e1xuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHR9XG5cdFx0KTtcblxuXHR9XG5cblx0YmluZFN0YXJ0ICgpIHtcblx0XHRjb25zb2xlLmxvZyhcImluIGJpbmRTdGFydCwgdGhpcy5nYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdC8vIHdlIHVzZSBiaW5kKCkgdG8gbGluayB0aGUgZnVuY3Rpb24gYmVsb3cgdG8gU3RhcnRTY3JlZW4gKG90aGVyd2lzZSwgaXQgdGhpbmtzIGl0IGlzIGluc2lkZSB3aW5kb3cpXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0LXNjcmVlbi1wbGF5LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcblx0XHRcdGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdC8vYWxlcnQoXCJpbiBoYW5kbGVyLCBnYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRoaXMuZ2FtZS5zdGFydEdhbWUoKTtcblxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxufVxuIiwiLyoqIFxuICogU3RhdGljSW1hZ2UuanNcbiAqIEltYWdlLXN0eWxlIEluZm9ybWF0aW9uIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgb25jZSB0aGUgZ2FtZSBpcyBsb2FkZWRcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWNJbWFnZSBleHRlbmRzIEltYWdlIHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdHRoaXMuc3RhdGljID0gdHJ1ZTtcblx0fVxuXG59XG4iLCIvKiogXG4gKiBTdGF0aWNUZXh0LmpzXG4gKiBUZXh0IHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgYWZ0ZXIgbG9hZGVkIGJ5IHRoZSBnYW1lXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpY1RleHQgZXh0ZW5kcyBUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdHRoaXMuc3RhdGljID0gdHJ1ZTtcblxuXHR9XG5cbn1cbiIsIi8qKiBcbiAqIFRleHQuanNcbiAqIENyZWF0ZXMgYSB0ZXh0LXR5cGUgSW5mbyBvYmplY3RcbiAqIEBpbmhlcml0cyBJbmZvLCBHYW1lUGllY2VcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgSW5mbyB7XG5cbiBcdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHRcdC8vIHNldCB0aGUgdGV4dFxuIFx0XHR0aGlzLnNldFRleHQoY29uZmlnLnRleHQpO1xuXG4gXHRcdC8vIHNldCB0aGUgRE9NSWRcbiBcdFx0dGhpcy5hZGRUb0RPTShjb25maWcuZG9tSWQpO1xuIFx0fVxuXG4gXHRzZXRUZXh0ICh0eHQpIHtcbiBcdFx0dGhpcy50ZXh0ID0gdHh0O1xuIFx0fVxuXG4gXHRhZGRUb0RPTSAoZG9tSWQpIHtcblxuIFx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuIFx0XHR0aGlzLmRvbS5pZCA9IG5hbWUgKyAnLVRleHQnO1xuIFx0XHR0aGlzLmRvbS5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XG5cbiBcdFx0Ly8gY29udGFpbmVyXG4gXHRcdHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JZCk7XG5cbiBcdFx0Ly8gYWRkIHRvIHRoZSBET01cbiBcdFx0Y29udGFpbmVyLmluc2VydEJlZm9yZSh0aGlzLmRvbSwgY29udGFpbmVyLmNoaWxkTm9kZXNbMF0pO1xuXG5cdH1cblxuIH0iLCIvKiogXG4gKiBUaWdlci5qc1xuICogQSBUaWdlciwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpZ2VyIGV4dGVuZHMgQW5pbWFsIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cbiB9IiwiLyoqXG4gKiBUcnVtcC5qc1xuICogVGhlIGJhbGwtbGlrZSBDaGFyYWN0ZXIgeW91IGtpY2sgaW50byBBbmltYWxzXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJ1bXAgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gICAgLy9UcnVtcCBnZXRzIFBpbmdQb25nIG1vdGlvblxuICAgIHRoaXMubW92ZXIuaW5pdFBpbmdQb25nKDAsIHRoaXMpOyAvL3Bpbmdwb25nIHdvbid0IHN0YXJ0IHlldFxuIFx0fVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5tb3Zlci51cGRhdGVQaW5nUG9uZygpOyAvL2FsbG93cyBwaW5ncG9uZyBtb3Rpb25cbiAgfVxuIH1cbiIsIi8qKiBcbiAqIENyZWF0ZSB0aGUgZ2FtZS4gSW1wb3J0IHRoZSBwcmltYXJ5IGNsYXNzZXMsIGFuZCAnY29tcG9zaXRlJyBcbiAqIHRoZSBvdmVyYWxsIEdhbWUgb2JqZWN0IG91dCBvZiBpbnN0YW5jZXMgb2YgdGhlIGNsYXNzZXMuXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4vL1RoZSBlbnRpcmUgZ2FtZVxuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lLmpzJztcblxuLy9TY3JlZW4gaW5oZXJpdGFuY2VcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4vU3RhcnRTY3JlZW4uanMnO1xuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi9HYW1lU2NyZWVuLmpzJztcbmltcG9ydCBFbmRTY3JlZW4gZnJvbSAnLi9FbmRTY3JlZW4uanMnO1xuXG4vL0luZm8gaW5oZXJpdGFuY2VcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuL0lkZW50aXR5LmpzJztcbmltcG9ydCBJbnN0cnVjdGlvbnMgZnJvbSAnLi9JbnN0cnVjdGlvbnMuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnO1xuXG4vL0NoYXJhY3RlciBpbmhlcml0YW5jZVxuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi9UcnVtcC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuaW1wb3J0IExpb24gZnJvbSAnLi9MaW9uLmpzJztcbmltcG9ydCBUaWdlciBmcm9tICcuL1RpZ2VyLmpzJztcbmltcG9ydCBCZWFyIGZyb20gJy4vQmVhci5qcyc7XG5pbXBvcnQgR29yaWxsYSBmcm9tICcuL0dvcmlsbGEuanMnO1xuaW1wb3J0IEhlYWx0aCBmcm9tICcuL0hlYWx0aC5qcyc7XG5cbi8vQXJlYSBpbmhlcml0YW5jZS5cbmltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5pbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xuaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi9BbmltYWxBcmVhLmpzJztcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4vUGxheWVyQXJlYS5qcyc7XG5cbi8vVGVzdCBmaWxlICh2ZXJ5IHNpbXBsZSB0ZXN0cnVubmVyKVxuaW1wb3J0IFRlc3RzIGZyb20gJy4uLy4uL3Rlc3RzL1Rlc3RzLmpzJztcblxuLyoqIFxuICogU2V0IHVwIHRlc3RzLlxuICovXG52YXIgbXlUZXN0cyA9IG5ldyBUZXN0cygpO1xuXG4vKipcbiAqIFNldCB1cCB0aGUgR2FtZVxuICovXG52YXIgbXlHYW1lID0gbmV3IEdhbWUoe25hbWU6IFwiWm9vS2lsbFNvY2NlclwifSk7XG5cbi8qKiBcbiAqIEVYUE9SVCBUTyBXRUIgQ09OU09MRVxuICogVG8gbWFrZSBzb21ldGhpbmcgdmlzaWJsZSBpbiBXZWIgY29uc29sZSBmb3IgZGVidWdnaW50LCBhdHRhY2ggdG8gd2luZG93IG9iamVjdFxuICogTk9URTogUHJvZmVzc2lvbmFsIGNvZGUgdXNlcyBzcGVjaWFsaXplZCB0ZXN0aW5nIG1vZHVsZXMgbGlrZSBNb2NoYSwgS2FybWEsIGFuZCBcbiAqIHNpbWlsYXIgdGVzdGluZyBsaWJyYXJpZXMuXG4gKi9cblxuLy8gd2UgY2FuIHJ1biB0aGlzIHRlc3QgbWFudWFsbHkgd2l0aCB0ZXN0cy5ydW4oKTtcbndpbmRvdy50ZXN0cyA9IG15VGVzdHM7XG5cbi8vIG1ha2UgdGhlIGdhbWUgb2JqZWN0IHZpc2libGUgc28gd2UgY2FuIGluc3BlY3QgaXQuXG53aW5kb3cuZ2FtZSA9IG15R2FtZTtcblxuY29uc29sZS5sb2coJ1pPT0tJTExTT0NDRVIgR2FtZSBpbml0aWFsaXplZC4gQWNjZXNzIGdhbWUgdmlhIFwiZ2FtZVwiLiBVc2UgVGVzdHMucnVuKCkgdG8gdGVzdC4nKVxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4uL21vZHVsZXMvanMvR2FtZVBpZWNlLmpzJztcblxuLy9UaGUgZW50aXJlIGdhbWVcbmltcG9ydCBHYW1lIGZyb20gJy4uL21vZHVsZXMvanMvR2FtZS5qcyc7XG5cbi8vU2NyZWVuIGluaGVyaXRhbmNlXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvU2NyZWVuLmpzJztcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL1N0YXJ0U2NyZWVuLmpzJztcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvR2FtZVNjcmVlbi5qcyc7XG5pbXBvcnQgRW5kU2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvRW5kU2NyZWVuLmpzJztcblxuLy9JbmZvIGluaGVyaXRhbmNlXG5pbXBvcnQgSW5mbyBmcm9tICcuLi9tb2R1bGVzL2pzL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9UZXh0LmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4uL21vZHVsZXMvanMvU3RhdGljVGV4dC5qcyc7XG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi4vbW9kdWxlcy9qcy9JZGVudGl0eS5qcyc7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4uL21vZHVsZXMvanMvSW5zdHJ1Y3Rpb25zLmpzJztcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuLi9tb2R1bGVzL2pzL0R5bmFtaWNUZXh0LmpzJztcbmltcG9ydCBTY29yZSBmcm9tICcuLi9tb2R1bGVzL2pzL1Njb3JlLmpzJztcblxuLy9DaGFyYWN0ZXIgaW5oZXJpdGFuY2VcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9DaGFyYWN0ZXIuanMnO1xuaW1wb3J0IFRydW1wIGZyb20gJy4uL21vZHVsZXMvanMvVHJ1bXAuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9tb2R1bGVzL2pzL1BsYXllci5qcyc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4uL21vZHVsZXMvanMvQW5pbWFsLmpzJztcbmltcG9ydCBMaW9uIGZyb20gJy4uL21vZHVsZXMvanMvTGlvbi5qcyc7XG5pbXBvcnQgVGlnZXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9UaWdlci5qcyc7XG5pbXBvcnQgQmVhciBmcm9tICcuLi9tb2R1bGVzL2pzL0JlYXIuanMnO1xuaW1wb3J0IEdvcmlsbGEgZnJvbSAnLi4vbW9kdWxlcy9qcy9Hb3JpbGxhLmpzJztcbmltcG9ydCBIZWFsdGggZnJvbSAnLi4vbW9kdWxlcy9qcy9IZWFsdGguanMnO1xuXG4vL0FyZWEgaW5oZXJpdGFuY2UuXG5pbXBvcnQgQXJlYSBmcm9tICcuLi9tb2R1bGVzL2pzL0FyZWEuanMnO1xuaW1wb3J0IENhZ2UgZnJvbSAnLi4vbW9kdWxlcy9qcy9DYWdlLmpzJztcbmltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyc7XG5pbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuLi9tb2R1bGVzL2pzL1BsYXllckFyZWEuanMnO1xuXG4vKiogXG4gKiBURVNUQkVEIC0gVGVzdCBhbGwgb3VyIG9iamVjdHMuIFRoaXMgaXMgYSB2ZXJ5IGJhc2ljIHRlc3Rpbmcgc3lzdGVtLiBcbiAqIE5PVEU6IFByb2Zlc3Npb25hbCBjb2RlIHVzZXMgdGVzdGluZyBsaWJyYXJpZXMgbGlrZSBLYXJtYSBhbmQgTW9jaGEuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RzIHtcblxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdH1cblxuXHQvLyBCZWNhdXNlIHdlIG1ha2UgdGhlc2Ugb2JqZWN0cyB3aXRoICd2YXInIHRoZXkgYXJlIHNjb3BlZCB0byB0aGUgcnVuKCkgZnVuY3Rpb24uXG5cdHJ1biAoKSB7XG5cblx0XHR2YXIgY29uZmlnID0ge25hbWU6J0ZvcmVzdCBUcnVtcCBvciBEb25hbGQgR3VtcCBydWx6J307XG5cblx0XHQvLyBNYWtlIHNvbWUgdGVzdCBnYW1lIG9iamVjdHNcblx0XHR2YXIgZ2FtZSA9IG5ldyBHYW1lKGNvbmZpZyk7XG5cdFx0Y29uc29sZS5sb2coZ2FtZS5nZXROYW1lKCkpO1xuXG5cdFx0Ly90ZXN0IEdhbWUgT2JqZWN0XG5cdFx0dmFyIG15R2FtZSA9IG5ldyBHYW1lKHtuYW1lOiBcIlpvb0tpbGxTb2NjZXJcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15R2FtZS5nZXROYW1lKCkpO1xuXG5cdFx0Ly9vdGhlciBvYmplY3RzXG5cdFx0dmFyIG15U2NyZWVuID0gbmV3IFNjcmVlbih7bmFtZTogXCJPcGVuaW5nIFNjcmVlblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlTY3JlZW4uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVN0YXJ0U2NyZWVuID0gbmV3IFN0YXJ0U2NyZWVuKHtuYW1lOiBcIlN0YXJ0IFNjcmVlblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlTdGFydFNjcmVlbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15R2FtZVNjcmVlbiA9IG5ldyBHYW1lU2NyZWVuKHtuYW1lOiBcIkdhbWUgU2NyZWVuXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUdhbWVTY3JlZW4uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUVuZFNjcmVlbiA9IG5ldyBFbmRTY3JlZW4oe25hbWU6IFwiRW5kIFNjcmVlblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlFbmRTY3JlZW4uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUluZm8gPSBuZXcgSW5mbyh7bmFtZTogXCJHZW5lcmljIEluZm9ybWF0aW9uXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUluZm8uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVRleHQgPSBuZXcgVGV4dCh7bmFtZTogXCJHZW5lcmljIFRleHQgT2JqZWN0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVRleHQuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVN0YXRpY1RleHQgPSBuZXcgU3RhdGljVGV4dCh7bmFtZTogXCJHZW5lcmljIFN0YXRpYyBUZXh0IE9iamVjdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlTdGF0aWNUZXh0LmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlJZGVudGl0eSA9IG5ldyBJZGVudGl0eSh7bmFtZTogXCJHZW5lcmljIElkZW50aXR5IE9iamVjdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlJZGVudGl0eS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15SW5zdHJ1Y3Rpb25zID0gbmV3IEluc3RydWN0aW9ucyh7bmFtZTogXCJHZW5lcmljIEluc3RydWN0aW9ucyBPYmplY3RcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15SW5zdHJ1Y3Rpb25zLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlEeW5hbWljVGV4dCA9IG5ldyBEeW5hbWljVGV4dCh7bmFtZTogXCJHZW5lcmljIER5bmFtaWMgVGV4dCBPYmplY3RcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15RHluYW1pY1RleHQuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVNjb3JlID0gbmV3IFNjb3JlKHtuYW1lOiBcInNjb3Jlcy4uLlwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlTY29yZS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15Q2hhcmFjdGVyID0gbmV3IENoYXJhY3Rlcih7bmFtZTogXCJHZW5lcmljIENoYXJhY3RlclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlDaGFyYWN0ZXIuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVRydW1wID0gbmV3IFRydW1wKHtuYW1lOiBcIkRvbmFsZCBUcnVtcFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlUcnVtcC5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15UGxheWVyID0gbmV3IFBsYXllcih7bmFtZTogXCJFbmQgVXNlclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlQbGF5ZXIuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUFuaW1hbCA9IG5ldyBBbmltYWwoe25hbWU6IFwiR2VuZXJpYyBBbmltYWxcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15QW5pbWFsLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlMaW9uID0gbmV3IExpb24oe25hbWU6IFwiQ293YXJkbHkgdGhlIExpb25cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15TGlvbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15VGlnZXIgPSBuZXcgVGlnZXIoe25hbWU6IFwiQ2hvbXBlciB0aGUgVGlnZXJcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15VGlnZXIuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUJlYXIgPSBuZXcgQmVhcih7bmFtZTogXCJNYXVsZXIgdGhlIEJlYXJcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15QmVhci5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15R29yaWxsYSA9IG5ldyBHb3JpbGxhKHsgbmFtZTogXCJTcHVua3kgdGhlIEdvcmlsbGFcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15R29yaWxsYS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15SGVhbHRoID0gbmV3IEhlYWx0aCh7bmFtZTogXCJPbmUgSGVhbHRoIEtpdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlIZWFsdGguZ2V0TmFtZSgpKTtcblxuXHRcdC8vQXJlYSBpbmhlcml0YW5jZS5cblx0XHR2YXIgbXlBcmVhID0gbmV3IEFyZWEoe25hbWU6IFwiR2VuZXJpYyBBcmVhXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUFyZWEuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUNhZ2UgPSBuZXcgQ2FnZSh7bmFtZTogXCJHZW5lcmljIEFyZWFcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15Q2FnZS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15QW5pbWFsQXJlYSA9IG5ldyBBbmltYWxBcmVhKHtuYW1lOiBcIkFuaW1hbEFyZWFcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15QW5pbWFsQXJlYS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15UGxheWVyQXJlYSA9IG5ldyBQbGF5ZXJBcmVhKHtuYW1lOiBcIlBsYXllckFyZWFcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15UGxheWVyQXJlYS5nZXROYW1lKCkpO1xuXHR9XG59XG4iXX0=
