
//Classes are functions
var User = function(firstname, lastname) {   //Like a constructor
  this.firstname = firstname;
  this.lastname = lastname;
};

//To add features - methods - to the User class, add them to the User prototype
User.prototype.setUserId = function(newId) {   //Add a function
  if (newId > 0) {
    this.userid = newId;
  } else {
    console.log(newId + " is invalid, must be positive number");
  }
};

//Add another method - this one returns the user's full name, build from first + last
User.prototype.fullName = function() {
  return this.firstname + " " + this.lastname;
}


User.prototype.organization = "MCTC";   //Add a property - applies to all User objects

var me = new User("Me", "MyLastName");   //Create a User
me.setUserId(4);                          //Call function of the User class prototype

console.log(me.firstname + " " + me.lastname + " " + me.userid + " " + me.organization);

console.log("Your full name: " + me.fullName());


var you = new User("You", "YourLastName");   //Create another user
you.setUserId(10);                          //Set userid ; this does not change the other User(s)

console.log(you.firstname + " " + you.lastname + " " + you.userid + " " + you.organization);

console.log("Your full name: " + you.fullName());


