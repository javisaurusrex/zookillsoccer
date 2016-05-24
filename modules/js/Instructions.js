/**
* Instructions.js
* Game instructions
* @inherits StaticText, Text, Info, GamePiece
*/
import GamePiece from './GamePiece.js';
import Info from './Info.js';
import Text from './Text.js';
import StaticText from './StaticText.js';

export default class Instructions extends StaticText {

  constructor (config) {
    super(config);
  }

};
