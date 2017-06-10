//= require chessboard
$(document).ready(function() {


var onDrop1 = function(source, target, piece, newPos, oldPos, orientation) {
  console.log("Board 1:")
  console.log("Source: " + source);
  console.log("Target: " + target);
  console.log("Piece: " + piece);
  console.log("New position: " + ChessBoard.objToFen(newPos));
  console.log("Old position: " + ChessBoard.objToFen(oldPos));
  console.log("Orientation: " + orientation);
  console.log("--------------------");
};

var onDrop2 = function(source, target, piece, newPos, oldPos, orientation) {
  console.log("Board 2:")
  console.log("Source: " + source);
  console.log("Target: " + target);
  console.log("Piece: " + piece);
  console.log("New position: " + ChessBoard.objToFen(newPos));
  console.log("Old position: " + ChessBoard.objToFen(oldPos));
  console.log("Orientation: " + orientation);
  console.log("--------------------");
};

var cfg1 = {
  orientation: 'white',
  draggable: true,
  position: gon.puzzle.board1_FEN,
  onDrop: onDrop1,
  pieceTheme: '/assets/chesspieces/wikipedia/{piece}.png',
  sparePieces: true,
  spareCounts: gon.puzzle.board1_spare,
};

var cfg2 = {
  orientation: 'black',
  draggable: true,
  position: gon.puzzle.board2_FEN,
  onDrop: onDrop2,
  pieceTheme: '/assets/chesspieces/wikipedia/{piece}.png',
  sparePieces: true,
  spareCounts: gon.puzzle.board2_spare,
}

var board1 = ChessBoard('board1', cfg1);
var board2 = ChessBoard('board2', cfg2);

});