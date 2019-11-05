// Finding the Most Recurring Character

const maxRecurringChar = charater => {
    let maxCount = 0
    let charaterObj = {}
    let maxValue = ''

    for (let char of charater) {        
        charaterObj[char] = charaterObj[char] + 1 || 1
    }
    for (let char in charaterObj) {
        
        if(charaterObj[char] > maxCount) {
            maxCount = charaterObj[char]
            maxValue = char
        }
    }
    return maxValue
}

const useArrayMethods = charater => {
    let maxCount = 0
    let charaterObj = {}
    let maxValue = ''
    let charKeysArray = []
    let charValueArray = []
    for (let char of charater) {
        charaterObj[char] = charaterObj[char]+1 || 1
    }
    charKeysArray = Object.keys(charaterObj)
    charValueArray = Object.values(charaterObj)
    maxCount = Math.max(...charValueArray)
    maxValue = charKeysArray[charValueArray.indexOf(maxCount)]
    return maxValue
   
}

mocha.setup("bdd");
const { assert } = chai;

describe("Max Character", () => {
	it("Should return max character", () => {
		assert.equal(maxRecurringChar("Hello World!"), "l");
		assert.equal(useArrayMethods("Hello World!"), "l");
	});
});

mocha.run();