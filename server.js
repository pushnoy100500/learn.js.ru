var user = require('./user');

function run() {
var vasya = new user.User("vasya");
var petya = new user.User("petya");
vasya.sayHello(petya);
}

if(module.parent) {
	module.exports.run = run;
} else {
 run();
}
// console.log(module);
