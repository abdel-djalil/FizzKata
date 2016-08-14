var Program  = require('../lib/fizzBuzz');

describe("Test fizzBuzz", function() {
	beforeEach(function() {
          fizzBuzz = new Program();
      });
	//test helper function isMultiple 
	it("should return true if number is multiples of 3", function(){
		expect(fizzBuzz.isMultiple(3,3)).toEqual(true)	;
	});
	  
	it("should return false if number is not multiples of 3", function(){
		expect(fizzBuzz.isMultiple(8,3)).toEqual(false)	;
	});

	it(" -- test versions 1 -- should return 100 numbers", function(){
		expect(fizzBuzz.run(1 , 3, 5).length).toEqual(100);
	});

	it(" -- test version 1 -- should return Fizz", function(){
		expect(fizzBuzz.run(1, 3, 5)[2]).toEqual('Fizz');
		expect(fizzBuzz.run(1, 3, 5)[5]).toEqual('Fizz');
		expect(fizzBuzz.run(1, 3, 5)[8]).toEqual('Fizz');
		expect(fizzBuzz.run(1, 3, 5)[11]).toEqual('Fizz');
	});

	it("-- test versions 1 -- should return Buzz", function(){
		expect(fizzBuzz.run(1, 3, 5)[4]).toEqual('Buzz');
	});

	//Test first version
	it("-- test versions 1 -- should return table [1..15] with Fizz instead of 3 and Buzz instead of multipales if 5" , function(){
		expect(fizzBuzz.run(1, 3, 5).slice(0,15)).toEqual([  1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz']);
	});

	//Test seconde version
	it(" -- test versions 2 -- should return 100 numbers", function(){
		expect(fizzBuzz.run(2, 3, 5).length).toEqual(100);
	});
	 
	it("-- test versions 2 --should return table [1..15] with fizzBuzz  instead if multiples of 3&5 ", function(){
		expect(fizzBuzz.run(2, 3, 5).slice(0,15)).toEqual([  1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
	});	

	it("-- test versions 3 -- should return Fizz instead of multiples of 2 ", function(){
		expect(fizzBuzz.run(3, 2, 5)[1]).toEqual('Fizz');
		expect(fizzBuzz.run(3, 2, 5)[3]).toEqual('Fizz');
		expect(fizzBuzz.run(3, 2, 5)[5]).toEqual('Fizz');
	});

	it("-- test versions 3 -- should return Buzz instead of multiples of 6 ", function(){
		expect(fizzBuzz.run(3, 5, 6)[5]).toEqual('Buzz');
		expect(fizzBuzz.run(3, 5, 6)[11]).toEqual('Buzz');
		expect(fizzBuzz.run(3, 5, 6)[17]).toEqual('Buzz');
	});	

	it("-- test versions 3 -- should return FizzBuzz instead of multiples of 2&6 ", function(){
		expect(fizzBuzz.run(3, 3, 5)[14]).toEqual('FizzBuzz');
		expect(fizzBuzz.run(3, 3, 5)[29]).toEqual('FizzBuzz');
		expect(fizzBuzz.run(3, 3, 5)[74]).toEqual('FizzBuzz');
	});	
	
});