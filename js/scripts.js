function pigLatin(phrase) {
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelResults = [];
    let letterArray = [];
    let consonantArray = [];
    let finalArray = [];
    let counter = 0;
    const phraseArray = phrase.split(" ");

    phraseArray.forEach((word) => {
        if (vowels.includes(word.charAt(0))) {
            vowelResults.push(word + "way");
            console.log(vowelResults)
        } else if (word.substring(0, 2) === "qu") {
            let newWord = word.slice(2);
            vowelResults.push(newWord + "quay");
            console.log(vowelResults);
        } else {
            letterArray = word.split('')
            //maybe not a forEach loop?
            letterArray.forEach((letter) => {
                if (vowels.includes(letter) && counter === 0) {
                    counter++;
                    finalArray.push(letter);
                    letterArray = letterArray.slice(1);
                    console.log("finalArray: " + finalArray + " consonantArray: " + consonantArray)
                } else if (!vowels.includes(letter) && counter === 1) {
                    finalArray.push(letter);
                    console.log("finalArray: " + finalArray + " consonantArray: " + consonantArray)
                } else if (vowels.includes(letter) && counter === 1){
                    finalArray.push(letter);
                    letterArray = letterArray.slice(1);
                    console.log("finalArray: " + finalArray + " consonantArray: " + consonantArray)
                } else if (!vowels.includes(letter) && counter === 0){
                    consonantArray.push(letter);
                    letterArray = letterArray.slice(1);
                    console.log("finalArray: " + finalArray + " consonantArray: " + consonantArray)
                }
            });
            const finalArray2 = finalArray.concat(consonantArray)
            let result = finalArray2.join('');
            console.log(result + "ay")
        }
    });
}