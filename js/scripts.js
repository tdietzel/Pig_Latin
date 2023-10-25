function pigLatin(phrase) {
    const vowels = ["a", "e", "i", "o", "u"];
    const phraseArray = phrase.split(" ");
    let vowelResults = [];

    phraseArray.forEach((word) => {
        if (vowels.includes(word.charAt(0))) {
            vowelResults.push(word + "way");
            console.log(vowelResults)
        }
    });
}