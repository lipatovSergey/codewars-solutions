function isVowel(symbol) {
	return /^[aeiou$]/i.test(symbol);
}

function countVowel(string) {
	let counter = 0;
	for (let symbol of string) {
		if (isVowel(symbol)) {
			counter++;
		}
	}
	return counter;
}
