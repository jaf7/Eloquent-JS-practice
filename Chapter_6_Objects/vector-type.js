// Constructor
function Vector( x, y ) {
	this.x = x;
	this.y = y;
}

// Add two methods on the prototype
Vector.prototype.plus = function( otherVector ) {
	return new Vector( this.x + otherVector.x, this.y + otherVector.y );
};
Vector.prototype.minus = function( otherVector ) {
	return new Vector( this.x - otherVector.x, this.y - otherVector.y );
};

// Add getter property 'length'
Object.defineProperty( Vector.prototype, 'length', {
	get: function() {
		return Math.hypot( this.x, this.y );
	}
});

var vector1 = new Vector( 2, 8 );
console.info(vector1);
console.log(vector1.plus(new Vector( 3, 5 )));
console.log(vector1.minus(new Vector( 0, 7 )));
console.log(vector1.length);
/*
Make sure to define the accessor on the prototype property itself.
Some MDN examples are different where they use object literals.

You can include a defineProperty method within a constructor function body:
for the first argument (object to define the property on), use *this*

It seems that within object literals, if you define a specific named
get or set method, the notation does not use a colon ( get height() {... ),
as if "get" is taking the place of "function". But if you define an
un-named (anonymous?) get or set on the object, a colon is used ( get: function() {... ).
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Custom_Setters_and_Getters
*/
