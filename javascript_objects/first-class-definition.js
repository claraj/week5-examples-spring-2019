
//Acts as our class definition - define a constructor
var Squirrel = function(n) {
  this.name = n;
  this.nuts = 0;
};

//Add a method to the Squirrel class
Squirrel.prototype.sayHello = function() {
  console.log("Hello!");
};

//Add another method
Squirrel.prototype.faveFood = function(){
  console.log(this.name + " likes nuts");
};

//And another method
Squirrel.prototype.addNutsToStore = function(newNuts) {
  this.nuts += newNuts;
};

var fluffy = new Squirrel("Fluffy");

//Call some squirrel methods for fluffy
fluffy.sayHello();
fluffy.addNutsToStore(10);
fluffy.faveFood();
fluffy.addNutsToStore(15);

console.log(fluffy.nuts);

var squeaky = new Squirrel("Squeaky");

squeaky.faveFood();
squeaky.sayHello();
//Can you call addNutsToStore for this Squirrel?



//Adding properties to one Squirrel only
squeaky.tree = "Oak Tree";

console.log("Squeaky's tree is : "+ squeaky.tree);   // "Oak Tree"
//Fluffy doesn't have a tree
console.log("Fluffy's tree is : "+ fluffy.tree);   // "undefined"

//Add a jump method only for fluffy
fluffy.jump = function() {
  console.log(this.name + " is jumping!");
};

fluffy.jump();   //This works

// squeaky.jump();  //Calling this results in an error - squeaky doesn't have a jump method

