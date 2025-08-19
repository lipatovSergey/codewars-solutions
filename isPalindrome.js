// Check polindrome ignoring case and spaces
function isPolindrome(s) {
	// regex for all lower case letters in unicode
	const regex = /^[\p{L}]+$/u;
	let arr = [];
	let polindrome = true;
	for (symbol of s.toLowerCase()) {
		if (regex.test(symbol)) arr.push(symbol);
	}

	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		if (arr[left] !== arr[right]) polindrome = false;
		left++;
		right--;
	}
	return polindrome;
}

console.log(isPolindrome("А роза упала на лапу Азора"));
console.log(isPolindrome("No lemon, no melon"));
console.log(isPolindrome("No lemon, no melop"));
