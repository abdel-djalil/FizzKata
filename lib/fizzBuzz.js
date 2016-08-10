

var version1 = function () {
		var fizzTable =  [];
		for(var i=1;i<=100; i++){
			if(i%3==0){
				fizzTable.push("Fizz");
			} else if(i%5==0){
				fizzTable.push("Buzz");
			} else {
				fizzTable.push(i)
			}	
		}
		return fizzTable;
	};

var version2 = function(){
	var fizzBuzzTable = [];
	for(var i=1; i<=100; i++){
		if(i%3==0 || i%5==0){
		var multiples = '';
			if(i%3==0){
				multiples += 'Fizz';	
			} 
			if(i%5==0){
				multiples += 'Buzz';
			}
			fizzBuzzTable.push(multiples);
		} else{
			fizzBuzzTable.push(i);
		}
		
	}
	return fizzBuzzTable;
}
module.exports =  { version1, version2};