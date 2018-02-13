//sum up whole numbers from 1 through to a given number n. It's your duty to verify that n is a valid positive integer number. If not, please, return false

function f(n){
  var count = 0;
  for(var i = 1; i <= n; i++){
    count += i;
  } if (Number.isInteger(n) && n > 0) { //checks that n is a valid integer and greater than 0
    return count;
  } else {
    return false;
  }
}
f(100);
