"use strict";
{
    // ===================================
    const countWordOccurrences = (sentence, word) => {
        const lowerCaseSentence = sentence.toLowerCase();
        const lowercaseWord = word.toLowerCase();
        const wordsOfSentence = lowerCaseSentence.split(' ');
        const matchedWords = wordsOfSentence.filter((word) => word === lowercaseWord);
        return matchedWords.length;
    };
    console.log(countWordOccurrences('I love typescript', 'typescript'));
    // ===================================
}
