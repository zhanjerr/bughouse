//= require chessboard
$(document).ready(function() {

console.log(gon.puzzle.solution);

// const

const onDragStart = function(source, piece, position, orientation) {
  if ((orientation === 'white' && piece.search(/^w/) === -1) ||
      (orientation === 'black' && piece.search(/^b/) === -1)) {
    return false;
  }
};

const onDrop1 = function(source, target, piece, newPos, oldPos, orientation) {
  console.log("Board 1:")
  console.log("Source: " + source);
  console.log("Target: " + target);
  console.log("Piece: " + piece);
  console.log("New position: " + ChessBoard.objToFen(newPos));
  console.log("Old position: " + ChessBoard.objToFen(oldPos));
  console.log("Orientation: " + orientation);
  console.log("--------------------");
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
}

let board1 = ChessBoard('board1', cfg1);
let board2 = ChessBoard('board2', cfg2);

});