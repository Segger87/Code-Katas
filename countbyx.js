/* Create a function with two arguments that will return a list of length (n) with multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0. */


function countBy(x, n) {
  var z = [];
  n = x * n;
  for (var i = x; i <= n; i += x){
    z.push(i); //counts i up in increments of x and pushes the results into the array z
  }
return z;
}

countBy(2, 5);
