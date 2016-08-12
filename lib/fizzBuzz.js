var Program = {
	/**
 	* function to generate an array of numbers between 1-100 
 	* with Fizz instead of multiples of 3 & Buzz instead of multiples of 5  	 
	* @return {Array} numbers
 	*/
	version1 : function(){
		var fizzTable = [];
		for(var i=1;i<=100; i++){
			if(this.isMultipleOf3(i)){
				fizzTable.push("Fizz");
			} else if(this.isMultipleOf5(i)){
				fizzTable.push("Buzz");
			} else {
				fizzTable.push(i);
			}	
		}
		return fizzTable;
	},
	version2 : 
	/**
 	* function to generate an array of numbers between 1-100 
 	* with Fizz instead of multiples of 3 & Buzz instead of multiples of 5
 	* with FizzBuzz instead of multiples of 3 and 5  	 
	* @return {Array} numbers
 	*/
	function(){
		var fizzBuzzTable = [];
		for(var i=1; i<=100; i++){
			if(this.isMultipleOf3(i) || this.isMultipleOf5(i)){
				var multiples = '';
				if(this.isMultipleOf3(i)){
					multiples += 'Fizz';	
				} 
				if(this.isMultipleOf5(i)){
					multiples += 'Buzz';
				}
				fizzBuzzTable.push(multiples);
			} else{
				fizzBuzzTable.push(i);
			}
		}
		return fizzBuzzTable;		
	},
	
	isMultipleOf3 : 
	/**
 	* Test if is multiple of 3
 	* @param {Number} number 
	* @return {Boolean} Multiple of 3
 	*/
	function MultipleOf3(number){
		if(number%3==0){
			return true;
		}
		return false;
	},
	
	isMultipleOf5 : 
	/**
 	* Test if is multiple of 5
 	* @param {Number} number 
	* @return {Boolean} Multiple of 5
 	*/
	function multipleOf5(number){
		if(number%5==0){
			return true; 
		}
		return false;	
	}
}

module.exports =  {  Program };