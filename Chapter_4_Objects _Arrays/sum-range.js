// return a range as an array of numbers, handle cases where start > step,
// handle negative step values
function range( start, stop, step ) {
	var arr = [];
	if ( !step ) { step = 1; } // handle no step passed in
	if ( start <= stop ) { //
		for ( var i = start; i <= stop; i += step ) {
			arr.push( i );
		}
	} else {
		for (var j = start; j >= stop; j += step ) {
			arr.push( j );
		}
	}
	return arr;
}
// range(1, 10, 2);
// range(5, 2, -1);

// sum a range array
function sum( array ) {
	var total = 0;
	for (var i = 0; i < array.length; i++ ) {
		total += array[i];
	}
	return total;
}
sum( range(1, 10) );
