var fizzBuzz  = require('../lib/fizzBuzz');

describe("Test fizzBuzz", function() {
	it("should return Fizz", function(){
		expect(FizzBuzz1.version1[2]).toEqual('Fizz');
	});
	it("should return Buzz", function(){
		expect(fizzBuzz.version1[4]).toEqual('Buzz');
	});
	//Test first version
	it("should return table [1..15] with Fizz instead of 3 and Buzz instead of multipales if 5" , function(){
		expect(fizzBuzz.version1.slice(0,15)).toEqual([  1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz']);
	});
	//Test seconde version 
	it("should return table [1..15] with fizzBuzz  instead if multiples of 3&5 ", function(){
		expect(fizzBuzz.version2.slice(0,15)).toEqual([  1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
	});
		
});