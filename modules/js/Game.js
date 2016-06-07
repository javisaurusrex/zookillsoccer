/** 
 * Game.js
 * The entire Game object
 * @inherits GamePiece
 */
import GamePiece from './GamePiece.js';

//Screen inheritance
import Screen from './Screen.js';
import StartScreen from './StartScreen.js';
import GameScreen from './GameScreen.js';
import EndScreen from './EndScreen.js';

//Info inheritance
import Info from './Info.js';
import Text from './Text.js';
import StaticText from './StaticText.js';
import Identity from './Identity.js';
import Instructions from './Instructions.js';
import DynamicText from './DynamicText.js';
import Score from './Score.js';

//Character inheritance
import Character from './Character.js';
import Trump from './Trump.js';
import Player from './Player.js';
import Animal from './Animal.js';
import Lion from './Lion.js';
import Tiger from './Tiger.js';
import Bear from './Bear.js';
import Gorilla from './Gorilla.js';
import Health from './Health.js';

//Area inheritance.
import Area from './Area.js';
import Cage from './Cage.js';
import AnimalArea from './AnimalArea.js';
import PlayerArea from './PlayerArea.js';

export default class Game extends GamePiece {

	constructor (config) {

		super(config);

		// Store the Ids of the DOM elements
		this.screenNames = {
			START_SCREEN : 'start-screen',
			GAME_SCREEN : 'game-screen',
			END_SCREEN : 'end-screen'
		}

		// Warning
		this.warning = 'This game belongs to us, and nobody else.';

		//game reverts to StartScreen if unplayed
		this.TIMEOUT = 5;

		//State object
		this.screens = [];
		this.displayCharacters = [];
		this.displayInfo = [];

		this.init();

		this.loadGame();

	} //end of constructor

	init () {
		this.screens[this.screenNames.START_SCREEN] = new StartScreen({name: "Start Screen", id: this.screenNames.START_SCREEN, game:this});
		this.screens[this.screenNames.GAME_SCREEN] = new GameScreen({name: "Game Screen", id: this.screenNames.GAME_SCREEN, game: this});
		this.screens[this.screenNames.END_SCREEN] = new EndScreen({name: "End Screen", id: this.screenNames.END_SCREEN, game: this});
		this.state = this.screenNames.START_SCREEN;
	}

	loadGame () {
		console.log('loading start screen');
		this.screens[this.screenNames.START_SCREEN].showScreen();
	}

	startGame () {

	}

	endGame () {

	}

	elapsed () {

	}

	checkIfComplete () {

	}

	update () {

	}

	draw () {

	}

	gameLoop () {
		
	}

} // end of class.






