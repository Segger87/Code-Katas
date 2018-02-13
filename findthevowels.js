/* We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4]. */

var r = new RegExp(/[aeiou]/);

function getIndicies(word) {
    var indicies = [];
    var words = word.toLowerCase();
    for (var i = 0; i < words.length; i++) {
        if (r.test(words[i])) { //returns a boolean if the word contains a vowel
            indicies.push(i+1); //pushes the index value and adds one (as per the challenges parameters)
        }
    }
    return indicies;
}

getIndicies("Hello").join(", ");
