//= require chessboard

const parsed = gon.puzzle.solution[0].split('/');
const solution = {
  player: parsed[0],
  piece: parsed[1],
  source: parsed[2],
  target: parsed[3]
};

console.log(solution);


$(document).ready(function() {


const validate = function(player, piece, source, target){

  if (player == solution.player && piece == solution.piece && source == solution.source && target == solution.target){
    return 'You got it sunny';
  }
  else {
    return 'Still listening';
  }
};

const onDragStart = function(source, piece, position, orientation) {
  if ((orientation === 'white' && piece.search(/^w/) === -1) ||
      (orientation === 'black' && piece.search(/^b/) === -1)) {
    return false;
  }
};

const onDrop1 = function(source, target, piece, newPos, oldPos, orientation) {
  console.log(validate(1, piece, source, target));
};

const onDrop2 = function(source, target, piece, newPos, oldPos, orientation) {
  console.log("Board 2:")
  console.log("Source: " + source);
  console.log("Target: " + target);
  console.log("Piece: " + piece);
  console.log("New position: " + newPos);
  console.log("Old position: " + oldPos);
  console.log("Orientation: " + orientation);
  console.log("--------------------");
};

let cfg1 = {
  orientation: 'white',
  draggable: true,
  position: gon.puzzle.board1_FEN,
  onDrop: onDrop1,
  onDragStart: onDragStart,
  pieceTheme: '/assets/chesspieces/wikipedia/{piece}.png',
  sparePieces: true,
  spareCounts: gon.puzzle.board1_spare,
};

let cfg2 = {
  orientation: 'black',
  draggable: true,
  onDragStart: onDragStart,
  position: gon.puzzle.board2_FEN,
  onDrop: onDrop2,
  pieceTheme: '/assets/chesspieces/wikipedia/{piece}.png',
  sparePieces: true,
  spareCounts: gon.puzzle.board2_spare,
};

let board1 = ChessBoard('board1', cfg1);
let board2 = ChessBoard('board2', cfg2);

});