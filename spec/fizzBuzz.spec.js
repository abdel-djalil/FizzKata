var fizzBuzz = require('../lib/fizzBuzz');
var test = fizzBuzz.test();
var version1  = fizzBuzz.version1();
var version2  = fizzBuzz.version2();
describe("Test fizzBuzz", function() {
	
	it("should print fizzBuzz", function() {
		expect(test).toEqual('fizzBuzz');
	})

	it("should return table [1..100] with Fizz instead of 3 and Buzz instead of multipales if 5" , function(){
		expect(version1.slice(0,15)).toEqual([  1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz']);
	});

	it("should return table [1..100] with fizzBuzz  instead if multiples of 3&5 ", function(){
		expect(version2.slice(0,15)).toEqual([  1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
	});
		
});