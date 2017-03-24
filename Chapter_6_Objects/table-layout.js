/*

*/

// helper function "repeat" to generate white-space padding for cell drawing functions
function repeat( string, times ) {
	var result = "";
	for ( var i = 0; i < times; i++ ) {
		result += string;
	}
	return result;
}

// TextCell constructor & methods
function TextCell( text ) {
	this.text = text.split('\n');
}
// return a value for minimum column width
TextCell.prototype.minWidth = function() {
	return this.text.reduce(function( width, line ) {
		return Math.max( width, line.length );
	}, 0);
};
// return an array length, value for minimum line height
TextCell.prototype.minHeight = function() {
	return this.text.length; // returns an array length
};
// return a drawn cell (an array)
// width is number of paddings, height is iterations (number of elements in this TextCell object)
TextCell.prototype.draw = function( width, height ) {
	var result = [];
	for (var i=0; i<height; i++) {
		var line = this.text[i] || "";
		result.push( line + repeat( " ", width - line.length ));
		console.log("draw method result: ", result);
	}
	return result;
};

/*
rowHeights:
Return an array of values representing row heights
(the longest array in a row will yeild the height for that row)
*/
function rowHeights( rows ) {
	return rows.map( function( row ) {
	  // .reduce() transform: objects in row reduced to a value by .minHeight()
		return row.reduce( function( maxHeight, cell ) {
			return Math.max( maxHeight, cell.minHeight() ); // returns an array length
		}, 0);
	});
}

/*
colWidths:
Return an array of values representing column widths
Each pass that reduce() makes over the outer array (rows), it processes the next
index position i (next column position) for each inner array (row)

Each TextCell's minimum width in the first inner array is compared to the
corresponding TextCell minimum width in each subsequent inner array.

Widths here are greatest element lengths for each TextCell, as processed by minWidth().
*/
function colWidths( rows ) {
	return rows[0].map( function( _, i ) { // ignore 1st arg, use index of current element
	  // transform: reduce() is on entire rows array, but only for current element i for each pass
		return rows.reduce( function( maxWidth, row ) {
			return Math.max( maxWidth, row[i].minWidth() );
		}, 0); // 2nd arg to .map() is initial value, 0
	});
}

/*
drawTable, drawRow:
draw all rows & join w/ newlines
takes an array as argument
*/
function drawTable(rows) {
	var heights = rowHeights(rows); // store array of minimum row heights
	var widths = colWidths(rows); // store array of minimum column widths

	// helper function: returns a string (join elements w/ spaces)
	// this will be the transformation mapped to blocks[0]
	function drawLine(blocks, lineNo) {
		return blocks.map(function(block){
			return block[lineNo]; //return the contents for this line number
		}).join(" ");
	}

	// This is the callback passed to .map() in drawTable's return (below)
	// In callbacks passed to .map(), 2nd arguments are current element indexes
	// (rowNum in drawRow & colNum in cell.draw())
	function drawRow( row, rowNum ) {
		console.log("widths: ", widths, "heights: ", heights);

		// here we draw cells (as arrays) using interface method .draw(),
		// & store in 2d array named "blocks"
		// .map() within a .map(): colNum increments to completion for each increment of rowNum
		var blocks = row.map( function(cell, colNum) {
			return cell.draw( widths[colNum], heights[rowNum]);
		});
		console.log( 'blocks: ', blocks );

		// transform: drawline operates on entire blocks array,
		// but only for current element lineNo for each pass
		return blocks[0].map( function( _, lineNo ) {
			return drawLine( blocks, lineNo );
		}).join("\n"); // join lines w/ newlines (for line line heights > 1)

	}
	return rows.map( drawRow ).join("\n");
}

// test what we have so far
// var rows = [];
// for ( var i = 0; i < 5; i++ ) {
// 	var row = [];
// 	for ( var j = 0; j < 5; j++ ) {
// 		if ( (i + j) % 2 === 0 ) {
// 			row.push( new TextCell("##") );
// 		}
// 		else {
// 			row.push( new TextCell("  ") );
// 		}
// 	}
// 	rows.push(row);
// 	console.log("row " + i + ": ", row);
// }

// console.log( drawTable( rows ) );

/*
Use the defined interface in the TextCell constructor to add an underlined cell style.
A TextCell object is passed in to this constructor.  This is extending types through
"Composition": UnderlinedCell builds on the TextCell object by storing it in a property
and forwarding method calls to it ("calling through" to its methods)
*/
function UnderlinedCell( inner ) {
	this.inner = inner;
}
UnderlinedCell.prototype.minHeight = function() {
	return this.inner.minHeight() +1;
	// add 1 to the array length returned, to account for underline
};
UnderlinedCell.prototype.minWidth = function() {
	return this.inner.minWidth();
};
UnderlinedCell.prototype.draw = function( width, height ) {
  // concat the line of dashes to the returned array
	return this.inner.draw( width, height - 1 ).concat([ repeat("-", width) ]);
};


/*
Extending types through "Inheritance": a constructor for right-aligned text cells.
MDN: A different this object can be assigned when calling an existing function.
this refers to the current object, the calling object. With call, you can write a
method once and then inherit it in another object, without having to rewrite
the method for the new object.
*/
function RTextCell( text ) {
	TextCell.call( this, text );
}
/*
from MDN: "subclass extends superclass"
When the RTextCell prototype chain is searched for methods & properties,
the search will ascend (if necessary) to the TextCell prototype.
The summary of chapter 6 states: "simply make the prototype of your new type
derive from the prototype of your old type (below),
and have your new constructor call the old one (above)"
*/
RTextCell.prototype = Object.create( TextCell.prototype );
// the only difference between RTextCell and TextCell is the draw method:
RTextCell.prototype.draw = function(width, height) {
	var result = [];
	for ( var i = 0; i < height; i++ ) {
		var line = this.text[i] || "";
		result.push( repeat( " ", width - line.length ) + line ); // reverse the order of white-space & line
	}
	return result;
};


// intermediate test
// var underlinedAtCell = new UnderlinedCell( new TextCell("@@@") );
// console.log( underlinedAtCell );
// console.log( underlinedAtCell.minHeight() );
// console.log( underlinedAtCell.minWidth() );
// var arr1 = ["some text"];
// var arr2 = ["more text"];
// console.log( arr1.concat( repeat("-", arr1[0].length) ) );

// data sets
var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

var CARS = [{"make_id":"aston-martin","make_display":"Aston Martin","make_is_common":"1","make_country":"UK"},{"make_id":"bentley","make_display":"Bentley","make_is_common":"1","make_country":"UK"},{"make_id":"bugatti","make_display":"Bugatti","make_is_common":"1","make_country":"Italy"},{"make_id":"buick","make_display":"Buick","make_is_common":"1","make_country":"USA"},{"make_id":"cadillac","make_display":"Cadillac","make_is_common":"1","make_country":"USA"},{"make_id":"chrysler","make_display":"Chrysler","make_is_common":"1","make_country":"USA"},{"make_id":"ford","make_display":"Ford","make_is_common":"1","make_country":"USA"},{"make_id":"jaguar","make_display":"Jaguar","make_is_common":"1","make_country":"UK"},{"make_id":"lincoln","make_display":"Lincoln","make_is_common":"1","make_country":"USA"},{"make_id":"maserati","make_display":"Maserati","make_is_common":"1","make_country":"Italy"},{"make_id":"maybach","make_display":"Maybach","make_is_common":"1","make_country":"Germany"},{"make_id":"mercedes-benz","make_display":"Mercedes-Benz","make_is_common":"1","make_country":"Germany"},{"make_id":"oldsmobile","make_display":"Oldsmobile","make_is_common":"1","make_country":"USA"},{"make_id":"packard","make_display":"Packard","make_is_common":"1","make_country":"USA"},{"make_id":"volvo","make_display":"Volvo","make_is_common":"1","make_country":"Sweden"},{"make_id":"willys-overland","make_display":"Willys-Overland","make_is_common":"1","make_country":"USA"}];

// Build a grid of cells from a data set
function dataTable(data) {
  //Use Object.keys() function to store array of property names from our object
	var keys = Object.keys( data[0] );
  // Property names become underlined column headers:
  // for each prop name we construct a new UnderlinedCell instance
	var headers = keys.map(function(name) {
		return new UnderlinedCell( new TextCell(name) );
	});
  // for each row in the data set, return the values (as strings) paired with each property (key) name
	var body = data.map(function(row) {
		return keys.map(function(name) {
			return new TextCell( String(row[name]) );
		});
	});
  // wrap our reference in an outer array so that [headers] is an inner array
	return [headers].concat(body);
}
// Build grid: add right-alignment for number value cells in the body
function dataTableNew(data) {
	var keys = Object.keys( data[0] );
	var headers = keys.map(function(name) {
		return new UnderlinedCell( new TextCell(name) );
	});
	var body = data.map(function(row) {
		return keys.map(function(name) {
			var value = row[name];
			// conditional branch to accomodate right-align of number values
			if ( isNaN(value) ) { // changed from using typeof() to accommodate values like "1" (string)
				return new TextCell( String(value) );
			}
			else {
				return new RTextCell( String(value) );
			}
		});
	});
	return [headers].concat(body);
}

console.log("\n", drawTable( dataTableNew(CARS) ));
