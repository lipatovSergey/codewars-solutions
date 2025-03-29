#JavaScript/solution 

```JS
function dirReduc(arr) {
  const oposites = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };
  return arr.reduce(
    (acc, el) => (oposites[acc.at(-1)] !== el ? [...acc, el] : ''),
    []
  );
}
```