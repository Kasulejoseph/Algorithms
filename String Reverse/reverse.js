
const reverse = string => string.split("").reverse().join('')

const useArrayReduce = string => string.split("").reduce((result, character) => character + result)

const _reverse = string => {
    let result = "";
    for (let character of string) result = character + result;
    return result;
};

mocha.setup("bdd");
const { assert } = chai;

describe("String Reversal", () => {
    it("Should reverse string", () => {
        assert.equal(reverse("Hello World and yes!"), "!sey dna dlroW olleH");
        assert.equal(useArrayReduce("Hello World and yes!"), "!sey dna dlroW olleH");
        assert.equal(_reverse("Hello World!"), "!dlroW olleH");
    });
});

mocha.run();
