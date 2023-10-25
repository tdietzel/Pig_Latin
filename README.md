# Describe: pigLatin()

Test #1: "It will add 'way' to the end of words that begin with a vowel."
Code:
let phrase = "a";
pigLatin(phrase);
Expected Output: "away"

Test #2: "It will add "qu" + "ay" to the end of words that begin with 'qu'."
Code:
let phrase = "quick";
pigLatin(phrase);
Expected Output: "ickquay"

Test #3: "It will move consonant values until it reaches a vowel and then add 'ay'"
Code:
let phrase = "code";
pigLatin(phrase);
Expected Output: "odecay"

Test: "It will move the first consonant to the back and add 'ay' if 'qu' comes second."
Code:
let phrase = "squeal";
pigLatin(phrase);
Expected Output: "quealsay"
