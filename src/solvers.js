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
 for (var i = 0; i < solution.rows().length; i++) {
    solution.togglePiece(i, i);
    if (!solution.hasAnyRooksConflicts()) {
      solution.get(i)[i] = 1;
    }
 }
//  console.log(cords)
console.log("Solution rows",solution.rows())

// console.log(results)
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var count = 0;
  var board = new Board({n: n});

  var innerFunc = function (row) {
    if(row === n) {
      count++;
      return;
    }
    for(var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if(!board.hasAnyRooksConflicts()) {
        innerFunc(row+1)
      }
      board.togglePiece(row, col);
    }
  }
innerFunc(0)
return count;


  // innerFunc(0);
  // return count;
//   // var factorial = function(num) {
//   //   if( num === 0) {
//   //     return 1;
//   //   }
//   //   else {
//   //     return num * factorial(num-=1)
//   //   }
//   // }
//   // var solutionCount = factorial(n); //fixme
//   var solution = new Board({n: n});
//   var counter = 0;
//   var coords = {};
// //   var innerFunc = function(board) {
// //  //    for (var i = 0; i < board.rows().length; i++) {
// //  //      for(var j = 0; j < board.rows()[i].length; j++){
// //  //    board.togglePiece(i, i);
// //  //    if (!board.hasAnyColConflicts() && !board.hasAnyRowConflicts()) {
// //  //      board.get(i)[j] = 1;
// //  //      coords.push([i,j])
// //  //    } else {
// //  //      board.get(i)[j] = 0;
// //  //    }
// //  // }
// // var inner = function(board, coords, row) {
// //     counter++;
// // // for(var j = 0; j < coords.length; j++) {
// // //   for(var k = 0; k < coords.length; k++) {
// // //     if(coords[j][k] === 1) {
// // //       board.get(j)[k] === "*"
// // //     }
// // //   }
// // // }
// // // for (var i = 0; i < solution.rows().length; i++) {
// // //     solution.togglePiece(i, i);
// // //     if (solution.get(i)[i] !== "*" && !solution.hasAnyRooksConflicts()) {
// // //       solution.get(i)[i] = 1;
// // //       coords[i][i] = ;
// // //   }
// // //  }
// // //  if(row === board.rows().length-1) {
// // //   return counter;
// // //  }
// // //  console.log(counter)
// // //  console.log(coords)
// // //  inner(board, coords, row+1)
// // // }
// var inner = function(board, col, rows) {
//   if(rows === n-1) {
//     return;
//   }
// }
// console.log(coords)
  // console.log(coords);
}


  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;;

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
//pass column and row to function arguments
  //none are given assign zero for each
//  row === undefined ? row = 0 : row = row;
//  col === undefined ? col = 0 : col = col;
//  board === undefined ? board = new Board({n:n}) : board = board;
 
//  for (var i = row; i < board.rows().length; i++) {
//     for(var j = col; j < board.rows().length; j++) {
//       board.togglePiece(i, j);
//       if (!board.hasAnyQueensConflicts() ) {
//         board.get(i)[j] = 1;
//       } else {
//         board.togglePiece(i, j);
//       }
//    }
// }
// var y = _.reduce(board.rows(), function(a,b) {return a.concat(b)}, [])
// console.log(y)
// var x = _.reduce(y,function(a,b){return a + b})
// console.log(y)
// //at the end call reduce on the array of arrays (solution)
//   //if reduce === n weve got out solution so return board
//       //if not reset board and call function again, starting one square off from where we were before
// console.log('Single solution for ' + n + ' queens:', JSON.stringify(board.rows()));
//  return board.rows()
var board = new Board({n:n});
var haveSolution = undefined;


  var innerFunc = function(row){
    //doesn't need to check last row as will always be able to contain a 1 if no column conflicts
    if(row === n){
      haveSolution = board.rows()
      return;
    }

    //starts a loop through the columns 
      //after we check all the rows in one column, we move back up the call stack and check the next column
      //because we call innerFunc inside a for loop, it's like having nested for loops


    for(var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if(!board.hasAnyQueensConflicts(row, i)) {
        //only need to check col conflict at said column as if there is no conflict we immediately change the row
        innerFunc(row+1);
        if(haveSolution) {
          return;
        }
      }
      board.togglePiece(row, i);
    }
  }
   innerFunc(0);
   if(haveSolution === undefined) {
    solution = new Board({n:n}).rows();
   }

     // console.log('Number of solutions for ' + n + ' queens:', count);
 return haveSolution;


};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = new Board({n:n});

  var count = 0;

  var innerFunc = function(row){
    //doesn't need to check last row as will always be able to contain a 1 if no column conflicts
    if(row === n){
      count++
      return;
    }

    //starts a loop through the columns 
      //after we check all the rows in one column, we move back up the call stack and check the next column
      //because we call innerFunc inside a for loop, it's like having nested for loops


    for(var i = 0; i < n; i++) {
      solution.togglePiece(row, i);
      if(!solution.hasAnyQueensConflicts()) {
        //only need to check col conflict at said column as if there is no conflict we immediately change the row
        innerFunc(row+1)
      }
      solution.togglePiece(row, i);
    }
  }
   innerFunc(0);
     console.log('Number of solutions for ' + n + ' queens:', count);
 return count;
};
