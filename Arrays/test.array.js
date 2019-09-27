class Arr {
	constructor(...items) {
		this.arr = new Array(...items);
	}

	sort(compareFunction) {
        return this.arr.sort(compareFunction)
	}

	reverse() {
        return this.arr.reverse()
	}

	slice(start, end) {        
        return this.arr.slice(start, end)
	}

	splice(start, ...params) {
        // params = deleteCount, ...items
        return this.arr.splice(start, ...params)
	}
}

class Str {
	constructor(str) {
		this.str = new String(str);
	}
	
	split(separator, limit) {
        return this.str.split(separator, limit)
    }
	
	replace(regex_or_substr, substr_or_function) {
        return this.str.replace(regex_or_substr, substr_or_function)
    }
}

mocha.setup(
    {
        ui: "bdd",
        ignoreLeaks: true,
        globals: ['__VUE_DEVTOOLS_TOAST__']
    });
const { assert } = chai;

describe("Arrays", () => {
	it("Should implement sort", () => {
		const arr = new Arr(1, 4, 3, 2, 5);
		assert.deepEqual(arr.sort(), [1, 2, 3, 4, 5]);
		assert.deepEqual(arr.sort((a, b) => b - a), [5, 4, 3, 2, 1]);
		assert.deepEqual(arr.sort((a, b) => a - b), [1, 2, 3, 4, 5]);

		const words = new Arr(
			{ word: "apple" },
			{ word: "orange" },
			{ word: "banana" }
		);
		assert.deepEqual(
			words.sort((a, b) => {
				if (a.word < b.word) return -1;
				if (a.word > b.word) return 1;
				return 0;
			}),
			[{ word: "apple" }, { word: "banana" }, { word: "orange" }]
		);
	});

	it("Should implement reverse", () => {
		const arr = new Arr(1, 2, 3, 4, 5);
		assert.deepEqual(arr.reverse(), [5, 4, 3, 2, 1]);
	});

	it("Should implement slice", () => {
        const arr = new Arr(1, 2, 3, 4, 5);
        const arrObj = new Arr(
            { word: "apple" },
			{ word: "orange" },
			{ word: "banana" }
        )
		assert.deepEqual(arr.slice(), [1, 2, 3, 4, 5]);
		assert.deepEqual(arr.slice(1), [2, 3, 4, 5]);
		assert.deepEqual(arr.slice(2, 4), [3, 4]);
		assert.deepEqual(arrObj.slice(1, 2), [{ word: "orange" }]);
	});

	it("Should implement splice", () => {
        const arr = new Arr(1, 2, 3, 4, 5);
        
		assert.deepEqual(arr.splice(2, 0, 6), []);
		assert.deepEqual(arr.arr, [1, 2, 6, 3, 4, 5]);
		assert.deepEqual(arr.splice(3, 1), [3]);
		assert.deepEqual(arr.arr, [1, 2, 6, 4, 5]);
		assert.deepEqual(arr.splice(2, 1, 3), [6]);
		assert.deepEqual(arr.arr, [1, 2, 3, 4, 5]);
		assert.deepEqual(arr.splice(0, 2, 6, 7, 8), [1, 2]);
		assert.deepEqual(arr.arr, [6, 7, 8, 3, 4, 5]);
		assert.deepEqual(arr.splice(arr.arr.length - 3, 2), [3, 4]);
		assert.deepEqual(arr.arr, [6, 7, 8, 5]);
		assert.deepEqual(arr.splice(-2, 1), [8]);
		assert.deepEqual(arr.arr, [6, 7, 5]);
		assert.deepEqual(arr.splice(1), [7, 5]);
		assert.deepEqual(arr.arr, [6]);
	});
});

describe("Strings", () => {
	it("Should implement split", () => {
        const str = new Str('This is Andela')

        assert.deepEqual(str.split(' '), ["This", "is", "Andela"])
        assert.deepEqual(str.split(' ', 2), ["This", "is"])
    })
	
	it("Should implement replace", () => {
        const str = new Str('John_Doe')
        assert.deepEqual(str.replace('_', ' '), 'John Doe')
    })
});
mocha.checkLeaks();
mocha.run();
