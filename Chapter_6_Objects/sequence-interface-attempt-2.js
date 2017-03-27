/*
Second attempt
After reading author solution, closed book
*/

function logFive( seq ) {
  for ( var i = 0; i < 5; i++ ) {
    if ( !seq.next() ) {
      break;
    }
    console.log( seq.current() );
  }
}

// Constructor, object type to wrap an array
function ArraySeq( collection ) {
  this.index = -1;
  this.sequence = collection;
}
// Interface, .next() for array types
ArraySeq.prototype.next = function() {
  if ( this.index >= this.sequence.length - 1 ) {
    return false;
  }
  this.index++;
  return true;
};
// Interface, .current() for array types
ArraySeq.prototype.current = function() {
  return this.sequence[ this.index ];
};

// Constructor, object type to wrap a range
function RangeSeq( from, to ) {
  this.value = from - 1; // .next() is called before logging & .next() will increment this.value
  this.to = to;
}
// Interface, .next() for range types
RangeSeq.prototype.next = function() {
  if ( this.value >= this.to ) {
    return false;
  }
  this.value++;
  return true;
};
// Interface, .current() for range types
RangeSeq.prototype.current = function() {
  return this.value;
};

logFive(new ArraySeq([7,8,9,10,11,12]));
// → 7
// → 8
// → 9
// → 10
// → 11
logFive(new RangeSeq(5, 20));
// → 5
// → 6
// → 7
// → 8
// → 9
logFive(new RangeSeq(5, 7));
// → 5
// → 6
// → 7
