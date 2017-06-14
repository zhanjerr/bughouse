$(document).ready(function(resizeBoard) {

  const parsed = gon.puzzle.solution[0].split('/');
  const solution = {
    player: parsed[0],
    piece: parsed[1],
    source: parsed[2],
    target: parsed[3]
  };

  const validate = function(player, piece, source, target){

    if (player == solution.player && piece == solution.piece && source == solution.source && target == solution.target){
      $("div.correct").toggleClass("show");
    }
    else {
      $("div.wrong").toggleClass("show");
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
    console.log(validate(2, piece, source, target));
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


  $(window).resize(board1.resize);
  $(window).resize(board2.resize);

 console.log('everything is ready');
});


// trying to play with the life-cyle to get the board to
// resize after everything is loaded
// to test this bug, open an incognito window and hit any
// puzzle page and you should be able to reproduce
// once in a while you get lucky and things load in the proper order
// so test at least 10 + times before assuming it's fixed
$(window).on("load", function() {
  $(window).resize();
})

