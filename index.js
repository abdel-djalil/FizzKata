var fizzBuzz  = require('./lib/fizzBuzz.js').Program;

var params = process.argv;
// Program launched with  rules 
if(params[3]){
	console.log(fizzBuzz.run(3,params[2], params[3]));
} else {
	console.log(fizzBuzz.run(2, 3, 5));
}