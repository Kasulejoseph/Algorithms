
/*Given a number as an input, print out every integer from 1 
to that number. However, when the integer is divisible by 3, 
print out “Fizz”; when it’s divisible by 5, print out “Buzz”; 
when it’s divisible by both 3 and 5, print out “Fizz Buzz”.
*/

const fizzBuz = number => {
    const output = []
    let i = 0

    // For loop also work fine
    
    /*
    for(let i =1; i <= number; i++) {
        if(number%6 === 0) output.push("Fizz Buzz")
    }
    */

    // tried a do .. while
    do {
        i++;
        if(i%15 === 0) output.push("Fizz Buzz")        
        else if(i%3 === 0) output.push("Fizz")
        else if(i%5 === 0) output.push("Buzz")
        else (output.push(i))
    } while (i<=number)
    return output
}
mocha.setup("bdd");
const { assert } = chai;
let output;

describe("Fizz Buzz", () => {
	beforeEach(() => (output = fizzBuz(30)));

	it("Should output number", () => {
		assert.equal(output[0], 1);
	});

	it("Should output Fizz", () => {
		assert.equal(output[2], "Fizz");
	});

	it("Should output Buzz", () => {
		assert.equal(output[4], "Buzz");
	});

	it("Should output Fizz Buzz", () => {
		assert.equal(output[14], "Fizz Buzz");
	});
});

mocha.run();