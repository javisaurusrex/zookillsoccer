/**
* StaticText.js
* Text that cannot be changed.
* @inherits Text, Info, GamePiece
*/
import GamePiece from './GamePiece.js';
import Info from './Info.js';
import Text from './Text.js';

export default class StaticText extends Text {

  constructor (config) {
    super(config);
  }

};
