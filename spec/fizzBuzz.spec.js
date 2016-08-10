var version1  = require('../lib/fizzBuzz').version1();
var version2  = require('../lib/fizzBuzz').version2();

describe("Test fizzBuzz", function() {
	
	it("should return table [1..100] with Fizz instead of 3 and Buzz instead of multipales if 5" , function(){
		expect(version1.slice(0,15)).toEqual([  1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz']);
	});

	it("should return table [1..100] with fizzBuzz  instead if multiples of 3&5 ", function(){
		expect(version2.slice(0,15)).toEqual([  1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
	});
		
});