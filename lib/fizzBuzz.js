
var test = function(){
		return "fizzBuzz";
	};
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
	}
module.exports =  {test , version1};