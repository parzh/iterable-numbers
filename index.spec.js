const cases = [
	[ "positive integer", 5, [ 0, 1, 2, 3, 4 ] ],
	[ "positive non-integer", 3.5, [ 0, 1, 2, 3 ] ],
	[ "negative integer", -5, [] ],
	[ "negative non-integer", 0, [] ],
	[ "zero", 0, [] ],
];

beforeEach(() => {
	require(".");
});

describe("for..of loop: for (const number of 42)", () => {
	test.each(cases)("should iterate over %s", (
		/** @type {string} */ name,
		/** @type {number} */ number,
		/** @type {number[]} */ expected,
	) => {
		/** @type {number[]} */
		const actual = [];

		for (const i of
			// @ts-ignore
			number
		)
			actual.push(i);

		expect(actual).toStrictEqual(expected);
	});
});

describe("Array.from function: Array.from(42)", () => {
	test.each(cases)("should create array from %s", (
		/** @type {string} */ name,
		/** @type {number} */ number,
		/** @type {number[]} */ expected,
	) => {
		expect(Array.from(
			// @ts-ignore
			number,
		)).toStrictEqual(expected);
	});
});

describe("Spread operator: [ ...42 ]", () => {
	test.each(cases)("should create array from %s", (
		/** @type {string} */ name,
		/** @type {number} */ number,
		/** @type {number[]} */ expected,
	) => {
		expect([...
			// @ts-ignore
			number,
		]).toStrictEqual(expected);
	});
});
