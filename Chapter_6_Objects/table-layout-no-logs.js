/*
A walk-through / think-through of building the table layout from Chapter 6.
Also intermediate tests and the use of a novel data set CARS to help clarify
my understanding of control flow, especially in the higher order functions.
There is a version with verbose commenting and console.log() calls: table-layout.js
*/

function TextCell( text ) {
	this.text = text.split('\n');
}
TextCell.prototype.minWidth = function() {
	return this.text.reduce(function( width, line ) {
		return Math.max( width, line.length );
	}, 0);
};
TextCell.prototype.minHeight = function() {
	return this.text.length;
};
TextCell.prototype.draw = function( width, height ) {
	var result = [];
	for (var i=0; i<height; i++) {
		var line = this.text[i] || "";
		result.push( line + repeat( " ", width - line.length ));
	}
	return result;
};

function repeat( string, times ) {
	var result = "";
	for ( var i = 0; i < times; i++ ) {
		result += string;
	}
	return result;
}

function rowHeights( rows ) {
	return rows.map( function( row ) {
	  // .reduce() transform: objects in row reduced to a value by .minHeight()
		return row.reduce( function( maxHeight, cell ) {
			return Math.max( maxHeight, cell.minHeight() ); // returns an array length
		}, 0);
	});
}

function colWidths( rows ) {
	return rows[0].map( function( _, i ) { // ignore 1st arg, use index of current element
	  // transform: reduce() is on entire rows array, but only for current element i for each pass
		return rows.reduce( function( maxWidth, row ) {
			return Math.max( maxWidth, row[i].minWidth() );
		}, 0); // 2nd arg to .map() is initial value, 0
	});
}

function drawTable(rows) {
	var heights = rowHeights(rows);
	var widths = colWidths(rows);

	function drawLine(blocks, lineNo) {
		return blocks.map(function(block){
			return block[lineNo];
		}).join(" ");
	}

	function drawRow( row, rowNum ) {
		var blocks = row.map( function(cell, colNum) {
			return cell.draw( widths[colNum], heights[rowNum]);
		});
		return blocks[0].map( function( _, lineNo ) {
			return drawLine( blocks, lineNo );
		}).join("\n");

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

function UnderlinedCell( inner ) {
	this.inner = inner;
}
UnderlinedCell.prototype.minHeight = function() {
	return this.inner.minHeight() +1;
};
UnderlinedCell.prototype.minWidth = function() {
	return this.inner.minWidth();
};
UnderlinedCell.prototype.draw = function( width, height ) {
	return this.inner.draw( width, height - 1 ).concat([ repeat("-", width) ]);
};

function RTextCell( text ) {
	TextCell.call( this, text );
}
RTextCell.prototype = Object.create(
  TextCell.prototype
);
RTextCell.prototype.draw = function(width, height) {
	var result = [];
	for ( var i = 0; i < height; i++ ) {
		var line = this.text[i] || "";
		result.push( repeat( " ", width - line.length ) + line );
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

function dataTable(data) {
	var keys = Object.keys( data[0] );
	var headers = keys.map(function(name) {
		return new UnderlinedCell( new TextCell(name) );
	});
	var body = data.map(function(row) {
		return keys.map(function(name) {
			return new TextCell( String(row[name]) );
		});
	});
	return [headers].concat(body);
}

function dataTableNew(data) {
	var keys = Object.keys( data[0] );
	var headers = keys.map(function(name) {
		return new UnderlinedCell( new TextCell(name) );
	});
	var body = data.map(function(row) {
		return keys.map(function(name) {
			var value = row[name];
			if ( isNaN(value) ) {
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
