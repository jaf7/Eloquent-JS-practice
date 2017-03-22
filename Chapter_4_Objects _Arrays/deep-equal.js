// Given two values, return true only if values are the same. Or
// if objects, they must have the same properties whose values are also equal
// Compare objects using a recursive call

function deepEqual( a, b ) {
	// base case (end of nested objects), testing value identity
	if ( a === b ) return true;

	if ( typeof a != "object" || typeof b != "object" ) { return false; }
	//typeof null returns Object, avoid returning true
	if ( a === null || b === null ) { return false; }

	//use counters to compare number of properties in a & b
	var propertyCountA = 0, propertyCountB = 0;
	for ( var aProperties in a ) {
		propertyCountA ++;
	}
	for ( var bProperties in b ) {
		propertyCountB ++;
	}
	if ( propertyCountA != propertyCountB ) { return false; }

	// check for same properties & value equivalence (recurse & descend to base values)
	for ( var property in a ) {
		if ( !(property in b) ) { return false; }
		// recursive case, descend & compare
		if ( !( deepEqual(a[property], b[property]) ) ) { return false; }
	}
	return true;
}
// could have been more concise, only looping over a & b once each, study book solution

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(1,1));
