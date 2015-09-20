var db = require("../db");
db.connect();

function User (name) {
	this.name = name;
}

User.prototype.sayHello = function(who) {
	console.log(db.getPhrase("Hello") + ", " + who.name);
};
 
 module.exports.User = User;


