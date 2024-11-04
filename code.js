function algorithm(sentence){
    let length=0;
    let wordCount=0;
    let vowelCount=0;
    const vowels="aeiouAEIOU";
    let previousChar=" ";
    for (let char of sentence ){
        length++;
        if (previousChar === " " && char !== " " && char !== ".") {
            wordCount++;
        }
        if (vowels.includes(char)) {
            vowelCount++;
        }
        previousChar = char;
    
    }
    return {
        length: length,
        words: wordCount,
        vowels: vowelCount
    };
}
const sentence = "This is a sample sentence.";
const result = analyzeSentence(sentence);
console.log(`Length: ${result.length}`);
console.log(`Words: ${result.words}`);
console.log(`Vowels: ${result.vowels}`);