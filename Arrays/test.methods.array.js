class Obj {
	constructor(obj) {
		this.obj = new Object(obj);
	}

	indexOf(searchElement, fromIndex = 0) {
		for (let i = fromIndex; i < this.obj.length; i++) {
			if (this.obj[i] === searchElement) return i;
		}
		return -1;
	}

	lastIndexOf(searchElement, fromIndex = this.obj.length - 1) {
		for (let i = fromIndex; i >= 0; i--) {
			if (this.obj[i] === searchElement) return i;
		}
		return -1;
	}

	includes(searchElement, fromIndex = 0) {
		let i = fromIndex;
		while (i < this.obj.length) {
			if (this.obj[i++] === searchElement) return true;
		}
		return false;
	}

	//replaces the values in the array
	fill(value, start = 0, end = this.obj.length - 1) {
		let i = start;
		do this.obj[i++] = value;
		while (i <= end);
		return this.obj;
	}

	// generates a string from an array [a, b] => 'a b'
	join(separator = ",") {
		let str = "";
		let i = 0;
		for (const value of this.obj) {
			++i;
			str += value + (i < this.obj.length ? separator : "");
		}
		return str;
	}

	// return the key of value in the object
	findIndex(callback) {
		for (const key in this.obj) {
			if (callback(this.obj[key], key)) return key;
		}
		return null;
	}

	// Returns a value if exists in the object obj.find(value, key) => value === value
	find(callback) {
		for (const key in this.obj) {
			if (callback(this.obj[key], key)) return this.obj[key];
		}
		return undefined;
	}

	// Return the object that passes the defined condition obj.filter(value, key) => value > 2 : > {key: value}
	filter(callback) {
		const obj = {};
		for (const key in this.obj) {
			if (callback(this.obj[key], key)) obj[key] = this.obj[key];
		}
		return obj;
	}

	// manuplate each value in the object 
	forEach(callback) {
		for (const key in this.obj) {
			this.obj[key] = callback(this.obj[key], key);
		}
		return this.obj;
	}

	// same as foreach obj.map(value, key)=> vaule*2
	map(callback) {
		const obj = {};
		for (const key in this.obj) {
			obj[key] = callback(this.obj[key], key);
		}
		return obj;
	}

	// RETURN true if 1 or more values contains in the object o
	some(callback) {
		for (const key in this.obj) {
			if (callback(this.obj[key], key)) return true;
		}
		return false;
	}

	// Return true if all the elements are contained in the object obj.every(value, key) => value>0
	every(callback) {
		for (const key in this.obj) {
			if (callback(this.obj[key], key)) continue;
			return false;
		}
		return true;
	}

	// Interest stuff, read more about it...
	reduce(callback, initialValue) {
		let accumulator = initialValue;
		for (const key in this.obj) {
			accumulator = callback(accumulator, this.obj[key], key);
		}
		return accumulator;
	}
}

mocha.setup("bdd");
const { assert } = chai;

describe("Arrays methods", () => {
	it("Should implement indexOf", () => {
		const arr = new Obj(["a", "b", "c"]);
		assert.equal(arr.indexOf("b"), 1);
		assert.equal(arr.indexOf("e"), -1);
	});

	it("Should implement lastIndexOf", () => {
		const arr = new Obj(["a", "b", "c"]);
		assert.equal(arr.lastIndexOf("a"), 0);
		assert.equal(arr.lastIndexOf("e"), -1);
	});

	it("Should implement includes", () => {
		const arr = new Obj(["a", "b", "c"]);
		assert.equal(arr.includes("c"), true);
		assert.equal(arr.includes("e"), false);
		assert.equal(arr.includes("a"), true)
	});

	it("Should implement fill", () => {
		const arr = new Obj(["a", "b", "c"]);
		const arr2 = new Obj(["a", "b", "c"]);
		assert.deepEqual(arr.fill("e"), ["e", "e", "e"]);
		assert.deepEqual(arr2.fill("kasule", 0, 1), ["kasule", "kasule", "c"])
	});

	it("Should implement join", () => {
		const arr = new Obj(["a", "b", "c"]);
		assert.equal(arr.join(", "), "a, b, c");
		assert.equal(arr.join(" "), "a b c");
		assert.equal(arr.join(""), "abc");
	});
});

describe("Objects methods", () => {
	it("Should implement findIndex", () => {
		const obj = new Obj({ a: 1, b: 2, c: null });
		assert.equal(obj.findIndex((value, key) => value === 2), "b");
		assert.equal(obj.findIndex((value, key) => value === 3), null);
	});

	it("Should implement find", () => {
		const obj = new Obj({ a: 1, b: 2 });
		assert.equal(obj.find((value, key) => value === 2), 2);
		assert.equal(obj.find((value, key) => value === 3), undefined);
	});

	it("Should implement filter", () => {
		const obj = new Obj({ a: 1, b: 2 });
		assert.deepEqual(obj.filter((value, key) => value > 0), { a: 1, b: 2 });
		assert.deepEqual(obj.filter((value, key) => value > 2), {});
		assert.deepEqual(obj.filter((value, key) => key === 'b'), { b: 2 })
	});

	it("Should implement forEach", () => {
		const obj = new Obj({ a: 1, b: 2 });
		assert.deepEqual(obj.forEach((value, key) => value * 2), { a: 2, b: 4 });
		assert.deepEqual(obj.forEach((value, key) => value - 1), { a: 1, b: 3 });
	});

	it("Should implement map", () => {
		const obj = new Obj({ a: 1, b: 2 });
		assert.deepEqual(obj.map((value, key) => value * 3), { a: 3, b: 6 });
	});

	it("Should implement some", () => {
		const obj = new Obj({ a: 1, b: 2 });
		assert.equal(obj.some((value, key) => value > 1), true);
		assert.equal(obj.some((value, key) => value > 2), false);
	});

	it("Should implement every", () => {
		const obj = new Obj({ a: 1, b: 2 });
		assert.equal(obj.every((value, key) => value > 0), true);
		assert.equal(obj.every((value, key) => value > 1), false);
	});

	it("Should implement reduce", () => {
		const obj1 = new Obj({ a: 1, b: 2 });
		assert.equal(obj1.reduce((sum, value, key) => sum + value, 0), 3);

		const obj2 = new Obj({ a1: { b1: 1, b2: 2 }, a2: { b3: 3, b4: 4 } });
		assert.deepEqual(
			obj2.reduce((accumulator, value, key) => ({ ...accumulator, ...value }), {}),
			{ b1: 1, b2: 2, b3: 3, b4: 4 }
		);
	});

	xit("Should flatten objects", () => {
		const flatten = obj => {
			if (obj instanceof Obj) {
				return obj.reduce(
					(accumulator, value, key) =>
						Object.assign({}, accumulator, flatten(new Obj(value))),
					{}
				);
			}
			return obj;
		};
		assert.deepEqual(
			flatten(
				new Obj({
					a1: { b1: 1, b2: { c1: 1, c2: 2 } },
					a2: { b3: 3, b4: { c3: 3, c4: 4 } }
				})
			),
			{ b1: 1, c1: 1, c2: 2, b3: 3, c3: 3, c4: 4 }
		);
	});
});

mocha.run();