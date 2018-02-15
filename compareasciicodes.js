/* Compare two strings by comparing the sum of their values (ASCII character code).
For comparing treat all letters as UpperCase.

Null-Strings should be treated as if they are empty strings.
If the string contains other characters than letters, treat the whole string as it would be empty.

Examples:

"AD","BC" -> equal

"AD","DD" -> not equal

"gf","FG" -> equal

"zz1","" -> equal

"ZzZz", "ffPFF" -> equal

"kl", "lz" -> not equal

null, "" -> equal

Your method should return true, if the strings are equal and false if they are not equal.
*/

//function to determine whether input is a valid letter
function isLetter(charcode) {
  return charcode >= 65 && charcode <= 90;
}

function compare(s1, s2) {
  var a = 0;
  var b = 0;

  if (s1 !== null) {
    for (var i = 0; i < s1.length; i++) {
      var charcode = s1.toUpperCase().charCodeAt(i);
      //if the argument is not a valid letter it returns the value as 0
      if (!isLetter(charcode)) {
        a = 0;
        break;
      }
      a += charcode;
    }
  }
  if (s2 !== null) {
    for (var j = 0; j < s2.length; j++) {
      var charcode2 = s2.toUpperCase().charCodeAt(j);
      if (!isLetter(charcode2)) {
        b = 0;
        break;
      }
      b += charcode2;
    }
  }
  if (a === 0 || b === 0) {
    return true;
  } else if (a === b) {
    return true;
  } else {
    return false;
  }
}
