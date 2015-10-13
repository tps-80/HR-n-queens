/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.findNRooksSolution = function(n) {
  var solution = new Board({n:n});
  var counter = 0;
  var cords = []
 for (var i = 0; i < solution.rows().length; i++) {
    solution.togglePiece(i, i);
    if (!solution.hasAnyRooksConflicts()) {
      solution.get(i)[i] = 1;
    }
 }
//  console.log(cords)
// console.log(solution.rows())

// console.log(results)
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  console.log(JSON.stringify(solution.rows()))
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var factorial = function(num) {
  //   if( num === 0) {
  //     return 1;
  //   }
  //   else {
  //     return num * factorial(num-=1)
  //   }
  // }
  // var solutionCount = factorial(n); //fixme
  var solution = new Board({n: n});
  var counter = 0;
  var coords = {};
//   var innerFunc = function(board) {
//  //    for (var i = 0; i < board.rows().length; i++) {
//  //      for(var j = 0; j < board.rows()[i].length; j++){
//  //    board.togglePiece(i, i);
//  //    if (!board.hasAnyColConflicts() && !board.hasAnyRowConflicts()) {
//  //      board.get(i)[j] = 1;
//  //      coords.push([i,j])
//  //    } else {
//  //      board.get(i)[j] = 0;
//  //    }
//  // }
var inner = function(board, coords, row) {
//     counter++;
// // for(var j = 0; j < coords.length; j++) {
// //   for(var k = 0; k < coords.length; k++) {
// //     if(coords[j][k] === 1) {
// //       board.get(j)[k] === "*"
// //     }
// //   }
// // }
// // for (var i = 0; i < solution.rows().length; i++) {
// //     solution.togglePiece(i, i);
// //     if (solution.get(i)[i] !== "*" && !solution.hasAnyRooksConflicts()) {
// //       solution.get(i)[i] = 1;
// //       coords[i][i] = ;
// //   }
// //  }
// //  if(row === board.rows().length-1) {
// //   return counter;
// //  }
// //  console.log(counter)
// //  console.log(coords)
// //  inner(board, coords, row+1)
// // }

//  return inner(solution, coords, 0)
// }
// console.log(coords)
  // console.log(coords);
}


  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;;

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
   var solution = new Board({n:n});
//  for (var i = 0; i < solution.rows().length; i++) {
//   for (var j = 0; j < solution.rows()[i].length; j++) {
//       solution.togglePiece(i, j);
//     if (solution.hasAnyQueensConflicts() ) {
//       solution.get(i)[j] = 0;
//     } 
//   }
// }
//  console.log(solution.rows())
//   console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
//   return solution;
var row = 0;
var col = 0;
  var innerFunc = function(board) {
      board.togglePiece(row, col)
    if(board.hasAnyQueensConflicts()) {
      innerFunc(board, row+1, col);
    }
    innerFunc(board, row, col+1);
    if(col === board.rows().length ||  row === board.rows().length) {
      return board;
    }
  }
  return innerFunc(solution,0,0);
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
