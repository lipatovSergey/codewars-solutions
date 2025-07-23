function highAndLow(numbers) {
	const splited = numbers.split(" ");
	return `${Math.max(...splited)} ${Math.min(...splited)}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
