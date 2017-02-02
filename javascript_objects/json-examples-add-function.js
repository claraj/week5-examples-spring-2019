
//Create an object.
var user = {
  username : "clara ",
  password : "kittens",
  userid : 1,
  roles : [ "user" , "admin" ],
  contact : {
    phone:"123-456-7890",
    office:"T306"
  }
};

console.log(user);

//Can add a function to the user object.
//Function's name is "capitalize"
user.capitalize = function() {
  user.username = user.username.toUpperCase();
};

console.log("Username is " + user.username);

user.capitalize();
console.log("Username is now " + user.username);

//Add another function, this one takes an argument
//Change userid to provided value, but only if it is positive
user.changeUserId = function(newId) {
  if (newId > 0) {
    user.userid = newId;
  } else {
    console.log("User ID must be positive.");
  }
};

user.changeUserId(5);
console.log("userid is " + user.userid);

user.changeUserId(-20);
console.log("userid is " + user.userid);



