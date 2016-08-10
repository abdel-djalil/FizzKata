var fizzBuzz = {
	test : function(){
		return "fizzBuzz";
	},
	version1 : function () {
		var fizzTable =  [];
		for(var i=0;i<=100; i++){
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
};

module.exports =  fizzBuzz;