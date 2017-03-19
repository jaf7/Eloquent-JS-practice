var listObj = {
	value: 1,
	reference: {
		value: 2,
		reference: {
			value: 3,
			reference: null
		}
	}
};

// Helper:add the given element to the front of the given list
function prepend( element, list ) {
	return { value: element, reference: list };
}

// Build a list data structure like above, given an array
function arrayToList( array ) {
	var list = { value: array[array.length-1], reference: null }; // set 1st value in this new list == last value in array
	for ( var i = array.length-2; i >= 0; i-- ) { // start iterating downwards starting at end of array remainder
		list = prepend( array[i], list ); // call prepend() to add each new element to top of the list
	}
	return list;
}

// Produce an array from a list recursively,
// using pattern learned at MakerSquare meetups (see Chapter 3, rock-paper-scissors.js)
function listToArray( list ) {
	var arr = [];
	var recurse = function( list ) {
		if ( !list ) { return; }
		else {
			arr.push( list.value );
			recurse( list.reference );
		}
	};
	recurse( list );
	return arr;
}

// Helper: given a list & number, return element at that position or
// undefined if no such element (also recursive version)
function nth( list, index ) {
	var arr = listToArray( list );
	return arr[index];
}

function nthRecursive( list, n ) {
	if ( !list ) { return undefined; }
	if ( n === 0 ) { return list.value; }
	else { return nthRecursive( list.reference, n-1 ) }
	//when control reaches the nth level it will return list.value
}


console.log( arrayToList([10, 20] ));
// → {value: 10, reference: {value: 20, reference: null}}
console.log("\n");

console.log( listToArray(arrayToList([10, 20, 30]) ));
// → [10, 20, 30]
console.log( listToArray( { value: 10, reference: { value: 20, reference: {value: 30, reference: {value: 40, reference: null } } } } ));
// → [10, 20, 30, 40]
console.log("\n");

console.log( prepend(10, prepend(20, null) ));
// → {value: 10, reference: {value: 20, reference: null}}
console.log( prepend(10, { value: 20, reference: {value: 30, reference: {value: 40, reference: null } } }));
// → {value: 10, reference: {value: 20, reference: {value: 30, reference: {value: 40, reference: null}}}}
console.log("\n");

console.log( nth(arrayToList([10, 20, 30]), 1) );
// → 20
console.log( nthRecursive(arrayToList([10, 20, 30, 40, 50, 60]), 4) );
// → 50
