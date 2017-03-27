/*
First attempt
"Design an interface that abstracts iteration over a collection of values"
But with this solution builds an array to store the entirety of any range,
which can presumably be inefficient as the size of the range grows.
*/

// Constructor for object type that wraps an array
function ArraySeq( collection ) {
	this.sequence = collection;
}
// Interface to abstract iteration over a collection of values
ArraySeq.prototype.iter = function( start, end, func ) {
  // last value in collection or end value passed in, whichever is less
	var last = Math.min( (this.sequence.length - 1), end );
	for ( var i = start; i <= last; i++ ) {
		func( this.sequence[i] );
	}
};

// Constructor for object type that takes a range
function RangeSeq( from, to ) {
	var arr = [];
	for ( var i = from; i <= to; i++ ) {
		arr.push(i);
	}
  /*
  Since below we set the Rangeseq prototype to derive from the ArraSeq prototype,
  here we override the sequence property and make the context that of the RangeSeq instance.
  */
 	this.sequence =  arr;
}
// Derive Rangeseq prototype from ArraySeq prototype. RangeSeq now shares the interface .iter()
RangeSeq.prototype = Object.create( ArraySeq.prototype );

/*
function to take a sequence object & call console.log on its first five elements
*/
function logFive( seq ) {
	return seq.iter( 0, 4, console.log );
}

logFive(new ArraySeq([7,8,9,10,11,12]));
// → 7
// → 8
// → 9
// → 10
// → 11
logFive(new RangeSeq(5, 20));
// → 5
// → 6
// → 7
// → 8
// → 9
