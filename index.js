Number.prototype[Symbol.iterator] = function numberIterator() {
	let current = 0
	const last = this.valueOf();

	return {
		[Symbol.iterator]() {
			return this;
		},
		next() {
			const done = current >= last;
			const value = done ? undefined : current;

			current++;

			return { value, done };
		},
	};
};
