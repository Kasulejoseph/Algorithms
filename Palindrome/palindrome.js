/* A palindrome is a word or phrase that reads the same backward as
forward. Write a function that checks for this */

const isPalindrome = string => {
    const removeSpecialCharacters = string.replace(/\W/g, "").toLowerCase();
    return (
        removeSpecialCharacters === removeSpecialCharacters.split("").reverse().join("") 
    )
}

const _isPalindrome = string =>
	string
		.split("")
		.every((character, index) => character === string[string.length - 1 - index]);


mocha.setup("bdd");
const { assert } = chai;

describe("Palindrome", () => {
	it("Should return true", () => {
		assert.equal(isPalindrome("Cigar? Toss it in a can. It is so tragic"), true);
		// assert.equal(
		// 	_isPalindrome("Cigar? Toss it in a can. It is so tragic"),
		// 	true
		// );
	});

	it("Should return false", () => {
		assert.equal(isPalindrome("sit ad est love"), false);
		assert.equal(_isPalindrome("sit ad est love"), false);
	});
});

mocha.run();