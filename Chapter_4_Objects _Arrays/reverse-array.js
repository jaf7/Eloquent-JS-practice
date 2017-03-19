// return new array reversed, using .pop() method
function reverseArray( array ) {
	var reversed = [];
	var arrayLength = array.length;
	for ( var i = 0; i < arrayLength; i++ ) {
		reversed.push( array.pop() );
	}
	return reversed;
}

// return new array reversed, not using .pop()
function reverseArrayNoPop( array ) {
	var reversed = [],
	    lastElem = array.length - 1;
	for ( var i = lastElem; i >= 0; i-- ) {
		reversed.push( array[i] );
	}
	return reversed;
}
// reverseArray( [1, 2, 3, 4, 5] );
// reverseArrayNoPop( [1, 2, 3, 4, 5] );

// reverse array in place
function reverseArrayInPlace( array ) {
	var arrLen = array.length;
	// loop until everything swapped: two overwrites each pass, so loop = half of length
	for ( var i = 0; i < Math.floor(arrLen / 2); i++ ) {
		var oldValue = array[i]; // store current element to be overwritten
		array[i] = array[ arrLen - 1 - i ]; // overwrite current element with last unswapped element (subtract i to find it)
		array[ arrLen -1 -i ] = oldValue; // overwrite last unswapped element with stored element
	}
	return array;
}
reverseArrayInPlace( [1, 2, 3, 4, 5] );
