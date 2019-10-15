/*In a seminal paper, the Church-Turing Thesis proves that any iterative function 
can be reproduced with a recursive one, and vice versa. Sometimes, a recursive 
approach is cleaner, clearer, and more elegant.
*/
const factorial = number => number < 2 ? 1: number * factorial(number -1)

const factorialise = (number) => {
    let factorial = 1
    for(let i = 2; i <= number; i++){        
        factorial *= i
    }
    return factorial
}
mocha.setup("bdd");
const { assert } = chai;

describe("Factorial", () => {
	it("Should implement factorial", () => {
		assert.equal(factorial(0), 1);
		assert.equal(factorial(1), 1);
		assert.equal(factorial(2), 2);
		assert.equal(factorial(3), 6);
		assert.equal(factorial(4), 24);
		assert.equal(factorial(5), factorialise(5));
	});
});

mocha.run();