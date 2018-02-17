/* Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array. */

function findLongest(array){
  var num = '0';
  for(var i = 0; i < array.length; i++) {
    //converts each array item to a string
    var string = array[i].toString();
    if(string.length > num.length) { //compares the length with the num variable
      num = string;
    }
  }
  return parseInt(num);
}
