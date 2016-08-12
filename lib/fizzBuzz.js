var Program = {
	/**
 	* function to generate an array of numbers between 1-100 
 	* with Fizz instead of multiples of 3 & Buzz instead of multiples of 5  	 
	* @return {Array} numbers
 	*/
	version1 : function(){
		var fizzTable = [];
		for(var i=1;i<=100; i++){
			if(this.isMultiple(i,3)){
				fizzTable.push("Fizz");
			} else if(this.isMultiple(i,5)){
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
			if(this.isMultiple(i,3) || this.isMultiple(i,5)){
				var multiples = '';
				if(this.isMultiple(i,3)){
					multiples += 'Fizz';	
				} 
				if(this.isMultiple(i,5)){
					multiples += 'Buzz';
				}
				fizzBuzzTable.push(multiples);
			} else{
				fizzBuzzTable.push(i);
			}
		}
		return fizzBuzzTable;		
	},
	
	isMultiple: 
	/**
 	* Test if is number multiple of passed in arg
 	* @param {Number} number to test  
 	* @param {Number} multiple to compare with
	* @return {Boolean} true if is multiple 
 	*/
	function Multiple(number, mult){
		if(number%mult==0){
			return true;
		}
		return false;
	}
}
module.exports =  {  Program };