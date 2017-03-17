/*
Data is jacques_journal from http://eloquentjavascript.net/code/jacques_journal.js
(code follows data)

Table & correlation notation: http://eloquentjavascript.net/04_data.html
*/
var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

//	--------------------------------
//
//	Begin re-write my own code (closed-book with some peeking) for practice
//
//	--------------------------------

// Does the journal entry contain this event?
// Use Array.prototype.indexOf() to return a Boolean
function hasEvent(event, entry) {
	return entry.events.indexOf(event) != -1;
}
// hasEvent('pizza', JOURNAL[6]);

// Generate a correlation table for a given event in a given journal
// (See Chapter 4 squirrel table, url above)
function tableFor(event, journal) {
  // set up table: index positions (in decimal notation)
  // indicate correlation-type in binary notation
	var table = [0,0,0,0];
	for (var i = 0; i < journal.length; i++) { // iterate over journal
		var entry = journal[i], index = 0; // index starts from 0 for each iteration
		if (hasEvent(event, entry))  { index += 1; } // if true, can't be index 0 (neither variable true)
		if (entry.squirrel) { index += 2; } // if true, increment to index 2 or 3 (true,false or true,true)
		table[index] += 1; // increment value of this correlation-type
	}
	return table;
}
// tableFor('pizza', JOURNAL);

// Compute correlations for a given event table
// --------------------------------
// "The phi coefficient provides a good measure of correlation"
// for binary (Boolean) variables.
// https://en.wikipedia.org/wiki/Phi_coefficient
// phi coefficient: https://wikimedia.org/api/rest_v1/media/math/render/svg/215a1b9c47f5f7114ffb877b7f79f540a38044dc
// --------------------------------
function phi( table ) {
	return ( table[3]*table[0] - table[2]*table[1] ) /
			 Math.sqrt( (table[2]+table[3]) * // sum all measurements where 1st variable is true
			 			(table[0]+table[1]) * // sum all where 1st variable is false
					 	(table[1]+table[3]) * // sum all where 2nd variable is true
					 	(table[0]+table[2]) ); // sum all where 2nd variable is false
}

// Storing correlations simple example
var map = {};
function storePhi(event, phi) {
	map[event] = phi;
}

// Build a correlations Object
function gatherCorrelations( journal ) {
	var phis = {};
	//process each journal entry for its "events" array
	for ( var entry = 0; entry < journal.length; entry++ ) { // for each entry,
		var events = journal[entry].events; // store its events
		// for each event not yet in the phis object,
		// compute the phi coefficient for that event's correlation table
		for ( var i = 0; i < events.length; i++ ) {
			var event = events[i];
			if ( !(event in phis) ) {
				phis[event] = phi( tableFor(event, journal) ); //remember use bracket notation (indirect)
			}
		}
	}
	return phis;
}

// store a correlations object
var correlations1 = gatherCorrelations( JOURNAL );
// and list them
function listCorrelations( correlations ) {
	for ( var event in correlations ) {
		console.log( event + ": " + correlations[event]); // bracket notation (indirect reference through variable)
	}
}
// listCorrelations( correlations1 );

// filter correlations to > 0.1 & < -0.1 (to define hypothesis about data)
function filterCorrelations( correlations, high, low ) {
// 	console.log( "filtered:" );
	var filtered = {};
	var arr = [];
	for ( var event in correlations ) {
		var correlation = correlations[event];
		if ( correlation > high || correlation < low ) {
			filtered[event] = correlation; // populate new object literal
			console.log( event + ": ", correlation);
		}
	}
	//return filtered.toString();
}
// filterCorrelations( correlations1, 0.2, -0.2 );

// test hypothesis: process entries that correlate,
// add "stamp" to their "events" arrays,
// generate a table for the "stamp" event,
// compute a phi coefficient against that table
function testAndNotCorrelation( journal, event1, event2 ) {
	for ( var i = 0; i < journal.length; i++ ) {
		var entry = journal[i];
		if ( hasEvent(event1, entry) &&
			!hasEvent(event2, entry) ) {
				entry.events.push( "stamp" );
			}
	}
	return "phi coefficient for stamped entries (has " + "\"" + event1 + "\"" + " & not " + "\"" + event2 + "\"" + ": " + phi( tableFor("stamp", journal) );
}
testAndNotCorrelation( JOURNAL, "peanuts", "brushed teeth" );

// refactor addEntry to use the arguments object
function addEntry( squirrel ) {
	var entry = { events:[], squirrel:squirrel };
	for ( var i = 1; i < arguments.length; i++ ) {
		entry.events.push( arguments[i] );
	}
	JOURNAL.push( entry );
}
//addEntry( JOURNAL, true, "work", "pizza", "running", "television" );
