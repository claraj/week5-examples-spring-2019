//An object with properties table, chair, couch; values are the color of each.
var furniture = { table : "red" , chair : "blue", couch : "green"};

//Looping over all of the properties
for (var f in furniture) {
  console.log(f);   //f is table, chair, couch - the property names
  console.log(furniture[f]);  //this is the value for property f
}

//What about nested objects? How would you access those?
var room = { floor: 1,
  dimensions : { length : 10, width : 12, height : 8},
  contains : furniture      //Our furniture object
};

for (var item in room ) {
  console.log("Property: " + item + " value: "+ room[item]);
}

//This is a different use of "in", which checks if a
// property exists in an object.
if ("table" in furniture) {
  console.log("Property \"table\" is in furniture object");
}
else {
  console.log("table is not in furniture object");
}



//can create arrays of objects, objects of arrays, etc...
var phones = [
  { os : "Android", manufacturer : "samsung" },
  { os: "iOS", manufacturer : "apple"}
];

//Can use the for .. in loop to loop over a list too.
// p takes on the indexes of the list elements
for (var p in phones ) {
  console.log(phones[p]);
}

var simplelist = [ 100, 200, 300];
for (var n in simplelist) {
  console.log("The list item is " + simplelist[n]);
  console.log("The list index is " + n)
}
