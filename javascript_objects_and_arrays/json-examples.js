
//Create an object. Values can be strings, numbers, lists, other objects
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

//Display all of the data in our object, as JSON
console.log(user);

//Change userid - increment by
user.userid = user.userid + 1;

//Print roles object
console.log("User's roles are: " + user.roles);

//Element 0 from roles object... Could loop over the user.roles list too if needed
console.log("Users's first role is " + user.roles[0]);

//What does this display?
console.log("Users's first role is " + user.roles[10]);

//Elements from contact object
console.log("User phone number is " + user.contact.phone);

//Change office
user.contact.office = "T-3066";
console.log("New office is " + user.contact.office);

//Add another attribute - even though it's not defined in our object
user.email = "clara@clara.com";

console.log("Full user info\n" + user); //Nested objects many not display correctly

console.log("Full user info\n" + JSON.stringify(user)); //Print all of the data on one line
console.log("Full user info\n" + JSON.stringify(user, null, 2)); //On multiple lines with 2 spaces of indentation


