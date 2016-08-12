var fizzBuzz  = require('../lib/fizzBuzz').Program;

describe("Test fizzBuzz", function() {
	//test helper function isMultiple 
	it("should return true if number is multiples of 3", function(){
		expect(fizzBuzz.isMultiple(3,3)).toEqual(true)	;
	});
	  
	it("should return false if number is not multiples of 3", function(){
		expect(fizzBuzz.isMultiple(8,3)).toEqual(false)	;
	});

	it(" -- test versions 1 -- should return 100 numbers", function(){
		expect(fizzBuzz.version1().length).toEqual(100);
	});

	it(" -- test version 1 -- should return Fizz", function(){
		expect(fizzBuzz.version1()[2]).toEqual('Fizz');
	});

	it("-- test versions 1 -- should return Buzz", function(){
		expect(fizzBuzz.version1()[4]).toEqual('Buzz');
	});

	//Test first version
	it("-- test versions 1 -- should return table [1..15] with Fizz instead of 3 and Buzz instead of multipales if 5" , function(){
		expect(fizzBuzz.version1().slice(0,15)).toEqual([  1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz']);
	});

	//Test seconde version
	it(" -- test versions 2 -- should return 100 numbers", function(){
		expect(fizzBuzz.version2().length).toEqual(100);
	});
	 
	it("-- test versions 2 --should return table [1..15] with fizzBuzz  instead if multiples of 3&5 ", function(){
		expect(fizzBuzz.version2().slice(0,15)).toEqual([  1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
	});	
});