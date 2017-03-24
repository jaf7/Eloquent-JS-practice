// Constructor & methods which comprise our interface
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
		console.log("draw method result: ", result);
	}
	return result;
};

/*
rowHeights() helper function:
.map() returns a new array of values representing row heights
(the longest array in a row will yeild the height for that row)
*/
function rowHeights( rows ) {
	return rows.map( function( row ) {
	  // Transformation: reduce each row to a greatest array length value using helper minHeight()
		return row.reduce( function( maxHeight, cell ) {
			return Math.max( maxHeight, cell.minHeight() ); // minHeight() returns the length of the text property's array
		}, 0);
	});
}

/*
colWidths() helper function:
.map() returns a new array of values representing column widths
Each pass that reduce() makes over the outer array (rows), it processes the next
index position i (next column position) for each inner array (row)
Each element's width of the first inner array (row) is compared to the corresponding widths
in all the subsequent inner arrays.
The callback function passed to .map() takes 3 arguments. We are ignoring the 1st
argument (by conventioning naming it with the underscore), and only utilizing
the 2nd argument: the index of the current element
*/
function colWidths( rows ) {
  // mapping to the 1st inner array (1st row), and utilizing only the index of the current element,
  // allows us to perform a forEach-like operation on a 2-dimensional array (?)
	return rows[0].map( function( _, i ) { // .map() callback: 1st arg null, 2nd arg is
	  // Transformation: we are *repeatedly* reducing the outer array by processing values for each inner array
		return rows.reduce( function( maxWidth, row ) {
			return Math.max( maxWidth, row[i].minWidth() );
		}, 0); // 0 is second argument to reduce, sets initial value
	});
}

// repeat() helper function: return a length-specific white-space string for padding cells
function repeat( string, times ) {
	var result = "";
	for ( var i = 0; i < times; i++ ) {
		result += string;
	}
	return result;
}

// A rows array, each row containing TextCell objects, would look like:
var rowsExample = [
  [ {text: ["##"]},
    {text: ["  "]},
    {text: ["##"]},
    {text: ["  "]},
    {text: ["##"]}
    ],

  [
    {text: ["  "]},
    {text: ["##"]},
    {text: ["  "]},
    {text: ["##"]},
    {text: ["##"]}
  ]
];
