/* Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together. */

function squareSum(numbers){
  var squared = numbers.map(function(num) {
    return num * num; //uses map to multiple array values by themselves
 });
 var squaredAnswer = squared.reduce(function (a, b) {
  return a + b; // uses reduce to accumulate the array values
});
return squaredAnswer;
}

squareSum([1, 2, 4]);
