# `iterable-numbers`

Allows using plain primitive numbers in iteration.

## Installation

```js
import "iterable-numbers";
// or:
require("iterable-numbers");
```

## Usage

### `for..of` loop:

```js
for (const number of 5) {
	console.log(number); // 0, 1, 2, 3, 4
}
```

### `Array.from`:

```js
const array = Array.from(5);

console.log(array);
// [ 0, 1, 2, 3, 4 ]
```

### Spread operator (`...`):

```js
const array = [ ...5 ];

console.log(array);
// [ 0, 1, 2, 3, 4 ]
```
