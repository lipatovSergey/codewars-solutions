#JavaScript/solution 
Это максимально простое решение
```JavaScript
function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (const digit of arr) {
    if (digit > max) max = digit;
    if (digit < min) min = digit;
  }
  return { min: min, max: max };
}
```

Единственное что можно улучшить это использовать попарное сравнение элементов. Это уменьшит кол-во сравнений примерно на 25%, но не улучшит временную сложность. При этом код становиться гораздо сложнее
```JavaScript
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i += 2) {
        const first = arr[i];
        const second = arr[i + 1] || first; // Если массив нечётной длины
        if (first > second) {
            if (first > max) max = first;
            if (second < min) min = second;
        } else {
            if (second > max) max = second;
            if (first < min) min = first;
        }
    }
    return { min, max };
}
```