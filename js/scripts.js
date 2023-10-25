function pigLatin(phrase) {
    const vowels = ["a", "e", "i", "o", "u"];
    const phraseArray = phrase.split(" ");
    let vowelResults = [];

    phraseArray.forEach((word) => {
        if (vowels.includes(word.charAt(0))) {
            vowelResults.push(word + "way");
            console.log(vowelResults)
        }
        if (word.substring(0, 2) === "qu") {
            let newWord = word.slice(2);
            vowelResults.push(newWord + "quay");
            console.log(vowelResults);
        }
    });
}