'use strict';
class Program{
	
	/**
 	* function to generate an array of numbers between 1-100 
 	* with Fizz instead of multiples of 3 & Buzz instead of multiples of 5
 	* <depend on version in args> with FizzBuzz instead of multiples of 3 and 5 
 	* @param  {number} version<1 , 2 or 3>  of program 
 	* @param  {number} fizz which multiple will stand for "Fizz" 
 	* @param  {number} buzz which multiple will stand for "Buzz" 
	* @return {Array} numbers
 	*/
	run(version, fizz, buzz){
		var fizzBuzzTable = [];
		for(var i=1; i<=100; i++){
			if(this.isMultiple(i ,fizz) && this.isMultiple(i,buzz)){
				if(version >= 2){
					fizzBuzzTable.push('FizzBuzz');	
				} else {
					fizzBuzzTable.push('Fizz');
				}
				
			} else {
				if(this.isMultiple(i ,fizz)){
					fizzBuzzTable.push('Fizz');	
				} else if(this.isMultiple(i,buzz)){
					fizzBuzzTable.push('Buzz');
				} else{
					fizzBuzzTable.push(i);	
				}
			}
		}
		return fizzBuzzTable;		
	}

	 
	/**
 	* Test if is number multiple of passed in arg
 	* @param {Number} number to test  
 	* @param {Number} multiple to compare with
	* @return {Boolean} true if is multiple 
 	*/
	isMultiple(number, mult){
		if(number%mult==0){
			return true;
		}
		return false;
	}
}
module.exports =  Program ;