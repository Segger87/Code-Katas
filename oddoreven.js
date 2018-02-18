/* Given an array of numbers, determine whether the sum of all of the numbers is odd or even.

Give your answer in string format as 'odd' or 'even'.

If the input array is empty consider it as: [0] (array with a zero).*/

function oddOrEven(array) {
  var count = 0;
  //loops through array and adds up the values
  for (var i = 0; i < array.length; i++) {
    count += array[i];
  }
  //remainder operator is used to check for even numbers
  if (count % 2 == 0) return "even";
  else {
    return "odd";
  }
}
