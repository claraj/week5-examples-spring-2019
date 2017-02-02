
//Create an object. Use JSON to specify variables and their values
var user = { username : "clara ", password : "kittens"};

//Read data
console.log(user.username);

//Read data from object
console.log(user.password);

//Change data
user.password = "zebras";

console.log("New password is " + user.password);

//Add another attribute - even though it's not defined in our object
user.email = "clara@clara.com";

console.log(user.email);

//Display all of the data in our object, as JSON
console.log(user);


