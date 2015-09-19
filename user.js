function User (name) {
	this.name = name;
}

User.prototype.sayHello = function(who) {
	console.log("hello " + who.name);
};
