/*
--------
Recursive rock-paper-scissor permutations generator
versions written before & at MakerSquare meetups
--------
*/

/*
First version: call with an empty string, build up a results array by
concatenating each permutation. The concatenating work
gets done when the argument passed to recurse() is evaluated.
The base case returns control out of recurse() each time that
our string length matches the number of rounds chosen (a complete
permutation)
*/
function rockPaperPermutation(rounds) {
  var results = [];
  var choices = ['r', 'p', 's'];

  var recurse = function(string) {
    if (string.length === rounds) {
      results.push(string);
      return;
    } else {
      for (var i = 0; i < choices.length; i++) {
        recurse(string + choices[i]);
      }
    }
  };
  recurse('');
  return results;
}
// rockPaperPermutation(3);


/*
A version where the value of currentRound operates like a stack (LIFO):
push() to stack happens immediately preceding descent into a new recursive call
pop() from stack happens immediately following return from a completed recursive call

It's interesting to note that the value of currentRound must be available in the
enclosing outer function scope (not only within the enclosed recursive function's scope).
In order for its value to persist & not be overwritten by an empty array.

Use of variables currentRound & recurCallDepth is an attempt to more easily visualize
the tree of recursive calls
*/
var rockPaperScissors = function(rounds) {
  rounds = rounds || 3; // handle no args passed in
  var resultList = [],
      currentRound = [],
      choices = ['r', 'p', 's'],
      recurCallDepth = 0;

  var recurse = function(roundsRemaining, recurCallDepth) {
    if (roundsRemaining === 0) {
      resultList.push(currentRound.toString());
      return;
    }
    for (var i = 0; i < choices.length; i++) {
     currentRound.push(choices[i]);

     console.log( 'current round: ', currentRound );
     console.log( 'recurCallDepth: ', recurCallDepth );

     recurse(roundsRemaining - 1, recurCallDepth + 1);
     currentRound.pop();
     }
  };

  recurse(rounds, recurCallDepth);
  return resultList;
};
rockPaperScissors(3);


// A recursive function with two base cases
function isEven( number ) {
  if ( number === 0 ) {
    return true;
  }
  else if ( number === 1 ) {
    return false;
  }
  else if ( number > 1 ) {
    return isEven( number - 2 );
  }
  else { return isEven( number + 2 ); }
}
// isEven(-2);


/* A pattern for recursive functions learned at meetups:
//Outer Function
  //Establish answer variable
  //Establish inner recursive Function
    //base case
    //recursive case
  //call inner recursive Function
  // return answer;
//close outer Function
*/
