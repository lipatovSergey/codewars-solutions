// return reversed string without split, reverse, join
//Как впринципе работает переворачмвание строки? Если разделить строку условно пополам. То символы должны занять места соответстующие их месту в противоположной половине. 1 2 3  | 3. 2. 1.  ==> 1. 2. 3. | 3 2 1
function reverseString(s) {
	const arr = [];
	for (symbol of s) {
		arr.push(symbol);
	}

	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		console.log("arr[left]: ", arr[left], "arr[right]: ", arr[right]);
		const a = arr[left];
		arr[left] = arr[right];
		arr[right] = a;
		left++;
		right--;
	}
	let answer = "";
	arr.map(symbol => (answer += symbol));
	return answer;
}

console.log(reverseString("hello"));
