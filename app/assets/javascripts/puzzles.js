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
  position: 'r1bq1bkr/ppp3pp/2n1p3/3Bp3/8/5Q2/PPPP1PPP/RNB1K2R',
  onDrop: onDrop1,
  pieceTheme: '/assets/chesspieces/wikipedia/{piece}.png',
  sparePieces: true,
  spareCounts: { 'wK':0, 'wQ':0, 'wR':0, 'wB':0, 'wN':0, 'wP':1, 'bK':0, 'bQ':0, 'bR':0, 'bB':0, 'bN':0, 'bP':1 },
};

var cfg2 = {
  orientation: 'black',
  draggable: true,
  position: 'rnbqkb1r/ppp2ppp/5n2/3p4/2PP4/5N2/PP3PPP/RNBQKB1R',
  onDrop: onDrop2,
  pieceTheme: '/assets/chesspieces/wikipedia/{piece}.png',
  sparePieces: true,
  spareCounts: { 'wK':0, 'wQ':0, 'wR':0, 'wB':0, 'wN':1, 'wP':1, 'bK':0, 'bQ':0, 'bR':0, 'bB':0, 'bN':1, 'bP':1 },
}

var board1 = ChessBoard('board1', cfg1);
var board2 = ChessBoard('board2', cfg2);

});