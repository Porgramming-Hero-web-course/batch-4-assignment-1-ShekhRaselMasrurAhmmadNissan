{
	// ===================================

	const countWordOccurrences = (sentence: string, word: string): number => {
		const lowerCaseSentence = sentence.toLowerCase();
		const lowercaseWord = word.toLowerCase();

		const wordsOfSentence = lowerCaseSentence.split(' ');
		const matchedWords = wordsOfSentence.filter(
			(word: string) => word === lowercaseWord
		);
		return matchedWords.length;
	};

	console.log(countWordOccurrences('I love typescript', 'typescript'));

	// ===================================
}
