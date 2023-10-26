window.addEventListener("load", () => {
    const form = document.querySelector("#pigLatin");
    form.addEventListener("submit", pigLatin);

});

// UI Logic
function displayAnswer(answer, p) {
    answer.innerText = p;
}

// Business Logic
function pigLatin(e) {
    e.preventDefault();
    const phrase = document.getElementById("word").value;
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelResults = [];
    let letterArray = [];
    let consonantArray = [];
    let finalArray = [];
    let finishedWordArray = [];
    let counter = 0;
    let p ="";
    let displayResults = document.getElementById("results");
    const phraseArray = phrase.split(" ");

    phraseArray.forEach((word) => {
        finalArray = [];
        consonantArray = [];
        letterArray = [];
        p = "";
        counter = 0;
        if (vowels.includes(word.charAt(0))) {
            vowelResults.push(word + "way");
            p = vowelResults.toString();
            finishedWordArray.push(p);
            vowelResults = vowelResults.slice(1);
        } else if (word.substring(0, 2) === "qu") {
            let newWord = word.slice(2);
            vowelResults.push(newWord + "quay");
            p = vowelResults.toString();
            finishedWordArray.push(p);
            vowelResults = vowelResults.slice(1);
        } else if (word.substring(1, 3) === "qu") {
            let newWord = word.slice(1);
            vowelResults.push(newWord + word[0] + "ay");
            p = vowelResults.toString();
            finishedWordArray.push(p);
            vowelResults = vowelResults.slice(1);
        } else {
            letterArray = word.split('')
            letterArray.forEach((letter) => {
                if (vowels.includes(letter) && counter === 0) {
                    counter++;
                    finalArray.push(letter);
                    // letterArray = letterArray.slice(1);
                } else if (!vowels.includes(letter) && counter === 1) {
                    finalArray.push(letter);
                    // letterArray = letterArray.slice(1);
                } else if (vowels.includes(letter) && counter === 1){
                    finalArray.push(letter);
                    // letterArray = letterArray.slice(1);
                } else if (!vowels.includes(letter) && counter === 0){
                    consonantArray.push(letter);
                    // letterArray = letterArray.slice(1);
                }
            });
            const finalArray2 = finalArray.concat(consonantArray);
            let result = finalArray2.join('');
            p = (result + "ay");
            finishedWordArray.push(p);
        }
    });
    p = finishedWordArray.join(" ");
    displayAnswer(displayResults, p);
}