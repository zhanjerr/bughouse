//= require chessboard


console.log('this should not be called yet');

$(document).ready(function() {

// var board1 = ChessBoard('board1', {
//   position: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R',
//   pieceTheme: '/assets/chesspieces/wikipedia/{piece}.png'
// });

// var board2 = ChessBoard('board2', {
//   position: 'r1k4r/p2nb1p1/2b4p/1p1n1p2/2PP4/3Q1NB1/1P3PPP/R5K1',
//   pieceTheme: '/assets/chesspieces/wikipedia/{piece}.png',
//   sparePieces: true
// });

var onDrop = function(source, target, piece, newPos, oldPos, orientation) {
  console.log("Source: " + source);
  console.log("Target: " + target);
  console.log("Piece: " + piece);
  console.log("New position: " + ChessBoard.objToFen(newPos));
  console.log("Old position: " + ChessBoard.objToFen(oldPos));
  console.log("Orientation: " + orientation);
  console.log("--------------------");
};

var cfg = {
  draggable: true,
  position: 'start',
  onDrop: onDrop,
  pieceTheme: '/assets/chesspieces/wikipedia/{piece}.png',
  sparePieces: true,
  spareCounts: { 'wK':0, 'wQ':0, 'wR':0, 'wB':0, 'wN':2, 'wP':1, 'bK':0, 'bQ':0, 'bR':0, 'bB':0, 'bN':0, 'bP':0 },
};
var board = ChessBoard('board', cfg);


});