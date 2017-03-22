var arrays = [[1, 2, 3], [4, 5], [6]];

var flatten = function( previous, current ) { return previous.concat( current ); }
arrays.reduce( flatten );

// arrays.reduce( function( pre, cur ) {
// 	return pre.concat( cur );
// });
//
// → [1, 2, 3, 4, 5, 6]
