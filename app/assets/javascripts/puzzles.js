//= require chessboard.min


console.log('this should not be called yet');

$(document).ready(function() {


var board1 = ChessBoard('board1', {
  position: 'start',
  showNotation: false,
  pieceTheme: '/assets/chesspieces/wikipedia/{piece}.png',
  draggable: true
});

var board2 = ChessBoard('board2', {
  position: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R',
  showNotation: false,
  pieceTheme: '/assets/chesspieces/wikipedia/{piece}.png'
});

var board3 = ChessBoard('board3', {
  position: 'r1k4r/p2nb1p1/2b4p/1p1n1p2/2PP4/3Q1NB1/1P3PPP/R5K1',
  showNotation: false,
  pieceTheme: '/assets/chesspieces/wikipedia/{piece}.png'
});

});