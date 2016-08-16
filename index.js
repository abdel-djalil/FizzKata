var Program  = require('./lib/fizzBuzz.js');
var fizzBuzz = new Program();
var params = process.argv;

// if there is 3 params launch the V3
if(params[3]){
	console.log(fizzBuzz.run(3,params[2], params[3]));

}
// if there is only one param with value equal to 1 launch v1
else if (params.length == 3 && params[2] == "1"){
	console.log(fizzBuzz.run(1, 3, 5));

} 
// if there is no params launch V2
else if(!params[2]){
	console.log(fizzBuzz.run(2, 3, 5));
} else{
	console.log("please check documentation on git to launch app!");
}