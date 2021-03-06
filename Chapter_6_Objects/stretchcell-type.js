/*
Implement cell type StretchCell that conforms to TextCell interface
StretchCell should wrap another cell object
Minimum width & height should be the values passed to StretchCell constructor
*/

// TextCell constructor & methods
function TextCell( text ) {
	this.text = text.split('\n');
}
TextCell.prototype.minWidth = function() {
	return this.text.reduce(function( width, line ) {
		return Math.max( width, line.length );
	}, 0);
};
TextCell.prototype.minHeight = function() {
	return this.text.length; // returns an array length
};
TextCell.prototype.draw = function( width, height ) { // width: # paddings, height: # iterations
	var result = [];
	for (var i=0; i<height; i++) {
		var line = this.text[i] || "";
		result.push( line + repeat( " ", width - line.length ));
	}
	return result;
};

// helper function "repeat"
function repeat( string, times ) {
	var result = "";
	for ( var i = 0; i < times; i++ ) {
		result += string;
	}
	return result;
}

/*
new type StretchCell
TextCell objects are passed in (as 'inner'), so our methods on
StretchCell can call through to the TextCell methods:
this.inner.minWidth, this.inner.minHeight, this.inner.draw
(Composition)
*/
function StretchCell( inner, width, height ) {
	this.inner = inner;
	this.width = width;
	this.height = height;
}
StretchCell.prototype.minWidth = function() {
	return Math.max( this.inner.minWidth(), this.width );
};
StretchCell.prototype.minHeight = function() {
	return Math.max( this.inner.minHeight(), this.height );
};
StretchCell.prototype.draw = function( width, height ) {
	return this.inner.draw( width, height );
};

// test
var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]
