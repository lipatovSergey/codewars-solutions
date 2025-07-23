function findMissingLetter(array) {
	let answer = [];
	for (let i = 0; i < array.length - 1; i++) {
		const current = array[i].charCodeAt(0);
		const next = array[i + 1].charCodeAt(0);

		for (let code = current + 1; code < next; code++) {
			answer.push(String.fromCharCode(code));
		}
	}
	return answer;
}

console.log(findMissingLetter(["a", "d", "f"]));
