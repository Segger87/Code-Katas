/* Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Any spaces in the string should be retained.

This challenge differs from the FreeCodeCamp reverse challenge as you have to reverse the words in the order they are written (i.e "Hello my name is Sam" === "olleH ym eman si maS") */

function reverseWords(str) {
  //this splits the str into an array of words, reverses them, joins them back to a string then does the same but for each character
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}
