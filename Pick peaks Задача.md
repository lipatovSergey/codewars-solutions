#JavaScript/solution 
https://www.codewars.com/kata/5279f6fe5ab7f447890006a7

Вот моё решение
```js
function pickPeaks(arr) {
  let position = [];
  let peak = [];
  let current = false;

  for (let i = 1; i < arr.length - 1; i++) {
    if (current) {
      if (arr[i] > arr[i + 1]) {
        position.push(current.pos);
        peak.push(current.num);
      }
      if (arr[i] === arr[i + 1]) continue;
    }

    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      position.push(i);
      peak.push(arr[i]);
    }

    if (arr[i] > arr[i - 1] && arr[i] === arr[i + 1]) {
      current = { num: arr[i], pos: i };
      continue;
    }

    current = false;
  }
  return { pos: position, peaks: peak };
}
```

А вот решение с сайта
```js
function pickPeaks(arr){
  var result = {pos: [], peaks: []};
  if(arr.length > 2) {
    var pos = -1;
    for(var i=1; i<arr.length;i++){
      if(arr[i] > arr[i-1]) {
        pos = i;
      } else if(arr[i] < arr[i-1] && pos != -1) {
        result.pos.push(pos);
        result.peaks.push(arr[pos]);
        pos = -1;
      }
    }
  }
  return result;
}
```

И решение это отличное. 
В цикле мы проверяем больше ли число, предыдущего. Если да. То сохраняем его позицию. Тем самы мы регистрируем начало пика. 
На следующей итерации со следующим числом мы проверяем больше ли новое число предыдущего (того чью позицию мы сохранили). Если чиссло больще то пик продолжается и мы записываем новую позицию. Если меньше то значит значение предыдущей итерации было пиковым, мы добавляем позицию и значение числа из предыдущей итерации в результат и сбрасываем позицию. 
Даже если встречается плато, то вс работает корректно. Позиция сохраняется пока не закончиться плато