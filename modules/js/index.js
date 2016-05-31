/**
 * Create the game. Import the primary classes, and 'composit'
 * the overall Game object out of instances of the classes.
 */
import GamePiece from './GamePiece.js';
import Screen from './Screen.js';

//Screen inhertiance
import StartScreen from './StartScreen.js';
import GameScreen from './GameScreen.js';
import EndScreen from './EndScreen.js';

//Info inheritance
import Info from './Info.js';
import Text from './Text.js';
import DynamicText from './DynamicText.js';
import Score from './Score.js';
import StaticText from './StaticText.js';
import Identity from './Identity.js';
import Instructions from './Instructions.js';

//Character inheritance
import Character from './Character.js';
import Trump from './Trump.js';
import Player from './Player.js';
import Health from './Health.js';
import Animal from './Animal.js';
import Lion from './Lion.js';
import Tiger from './Tiger.js';
import Bear from './Bear.js';
import Gorilla from './Gorilla.js';

//Area inheritance
import Area from './Area.js';
import Cage from './Cage.js';
import AnimalArea from './AnimalArea.js';
import PlayerArea from './PlayerArea.js';
/**
 * Set up the game.
 */
var config = {
    name:'Forest Trump or Donald Gump rulz'
}

// Make some test game objects
var game = new GamePiece(config);
console.log(game.getName());

var config2 = {
  name: 'Thud Mutton, Esq'
};
var something = new GamePiece(config2);
console.log(something.getName());

//test Screen
var configScreen1 = {
  name: 'Opening Screen'
}
var ascreen =new Screen(configScreen1);
console.log(ascreen.getName());

//test StartScreen
var myStartScreen = new StartScreen({
  name: 'Begin!'})
  console.log(myStartScreen.getName());

//test GameScreen
var myGameScreen = new GameScreen({
  name: 'We are playing'})
  console.log(myGameScreen.getName());
//test EndScreen
var myEndScreen = new EndScreen({
  name: 'End of the Game'})
  console.log(myEndScreen.getName());
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
var myGorilla = new Gorilla({
  name: 'Donkey Kong'})
  console.log(myGorilla.getName());

//test Tiger
var myTiger = new Tiger ({
  name: 'Tigger'})
  console.log(myTiger.getName());

//test Bear
var myBear = new Bear ({
  name: 'Baloo'})
  console.log(myBear.getName());

//test Lion
var myLion = new Lion ({
  name: 'Mufasa'})
  console.log(myLion.getName());

//test Area
var myArea = new Area ({
  name: 'Stadium Area'})
  console.log(myArea.getName());

//test Cage
var myCage = new Cage ({
  name: 'the damn cages'})
  console.log(myCage.getName());
//test AnimalArea
//test PlayerArea
//var area = new Area(config);
//console.log(area.getName());

//var character = new Character(config);
//var player = new Player(config);
