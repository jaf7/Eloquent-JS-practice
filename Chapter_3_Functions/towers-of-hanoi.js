/*
Practicing recursion:
This is a recursive function to print the steps to solve an arbitrary Towers of Hanoi problem
(With helper function logMove())

This is a re-write and study of a function written during the MITx course
6.00.1x Introduction to Computer Science and Programming Using Python
https://courses.edx.org/courses/course-v1:MITx+6.00.1x_8+1T2016/info
https://courses.edx.org/certificates/be5594d409634b2fb9bbf9b668939c47
*/

function logMove( from, to ) {
  console.log( 'Move top disc: from ', from, ' to ', to );
}

function towerSolve( stackSize, fromPosition, toPosition, sparePosition ) {
  if ( stackSize === 1 ) { logMove( fromPosition, toPosition ); }

  else {
    // first recursive call inverts the target & auxillary stack positions
    // (auxillary position becomes target)
    // and moves all but the last bottom disc (n-1 discs where stacksize=n)
    towerSolve( stackSize-1, fromPosition, sparePosition, toPosition );
    // the actual move that gets printed by logMove():
    // move the last disc (nth disc, stacksize=n) from source to target
    towerSolve( 1, fromPosition, toPosition, sparePosition );
    // second recursive call inverts the source and auxillary stack positions
    // (auxillary position becomes source)
    // and moves all but the last bottom disc (n-1 discs where stacksize=n)
    towerSolve( stackSize-1, sparePosition, toPosition, fromPosition );
  }
}

towerSolve( 5, 'one', 'two', 'three' );

/*
  Wikipedia:
  https://en.wikipedia.org/wiki/Tower_of_Hanoi
*/
