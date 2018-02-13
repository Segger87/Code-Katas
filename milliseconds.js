/*Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to miliseconds. */

function past(h,m,s){
  var hour = h * 3.6e+6; //e+n is the amount of zeroes to add on (in this case it adds 6)
  var min = m * 6e+4;
  var sec = s * 1000;
  return hour + min + sec;
}
