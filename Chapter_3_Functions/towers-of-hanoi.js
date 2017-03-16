/*
Practicing recursion:
This is a recursive function to print the steps to solve an arbitrary Towers of Hanoi problem
(With helper function logMove)
*/

function logMove( from, to ) {
  console.log( 'Move top disc: from ', from, ' to ', to );
}

function towerSolve( stackSize, fromPosition, toPosition, sparePosition ) {
  if ( stackSize === 1 ) { logMove( fromPosition, toPosition ); }

  else {
    // first recursive call inverts the target & auxillary stack positions
    // and moves all but the last bottom disc (n-1 discs where stacksize=n)
    towerSolve( stackSize-1, fromPosition, sparePosition, toPosition );
    // move the last disc (nth disc, stacksize=n) from source to target
    towerSolve( 1, fromPosition, toPosition, sparePosition );
    // second recursive call inverts the source and auxillary stack positions
    // and moves all but the last bottom disc (n-1 discs where stacksize=n)
    towerSolve( stackSize-1, sparePosition, toPosition, fromPosition );
  }
}

towerSolve( 5, 'one', 'two', 'three' );

/*
  Wikipedia:
  https://en.wikipedia.org/wiki/Tower_of_Hanoi
*/
