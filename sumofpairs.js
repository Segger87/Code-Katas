//Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

function sum(ints, s) {
  var arr = [];
  //loops through the array twice, second time being the index number after i
  for (var i = 0; i < ints.length; i++) {
    for (var j = i + 1; j < ints.length; j++) {
      //checks if the the second loop is equal to s - the number in the first loop
      //if it is, it pushes the numbers into the empty array variable
      if (ints[j] === s - ints[i]) {
        arr.push([ints[i], ints[j]]);
      }
    }
  }
  return arr;
}

sum([10, 5, 2, 3, 7, 5], 10);
