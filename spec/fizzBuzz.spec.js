var fizzBuzz  = require('../lib/fizzBuzz').Program;

describe("Test fizzBuzz", function() {

	//test helper function isMultipleOf3 
	it("should return true if number is multiples of 3", function(){
		expect(fizzBuzz.isMultipleOf3(3)).toEqual(true)	;
	});
	//test helper function isMultipleOf3 
	it("should return false if number is not multiples of 3", function(){
		expect(fizzBuzz.isMultipleOf3(8)).toEqual(false)	;
	});
	//test helper function isMultipleOf5 
	it("should return true if number is multiples of 5", function(){
		expect(fizzBuzz.isMultipleOf5(5)).toEqual(true)	;
	});
	//test helper function isMultipleOf5 
	it("should return false if number is not a multiples of 5", function(){
		expect(fizzBuzz.isMultipleOf5(8)).toEqual(false);	;
	});

	it("should return Fizz", function(){
		expect(fizzBuzz.version1()[2]).toEqual('Fizz');
	});
	it("should return Buzz", function(){
		expect(fizzBuzz.version1()[4]).toEqual('Buzz');
	});
	//Test first version
	it("should return table [1..15] with Fizz instead of 3 and Buzz instead of multipales if 5" , function(){
		expect(fizzBuzz.version1().slice(0,15)).toEqual([  1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz']);
	});
	//Test seconde version 
	it("should return table [1..15] with fizzBuzz  instead if multiples of 3&5 ", function(){
		expect(fizzBuzz.version2().slice(0,15)).toEqual([  1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
	});
		
});