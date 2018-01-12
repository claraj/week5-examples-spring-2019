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

var phoneData = phones[0];   // { os : "Android", manufacturer : "samsung" },
for (var prop in phoneData){
  console.log(prop + ":" + phoneData[prop]);
}

// More complex JSON. Adapted  from the World Bank API http://api.worldbank.org/v2/countries/?format=json
var countries_a = [
    {
      "id":"ABW",
      "iso2Code":"AW",
      "name":"Aruba",
      "region":{
        "id":"LCN",
        "iso2code":"ZJ",
        "value":"Latin America & Caribbean "
      },
      "adminregion":{
        "id":"",
        "iso2code":"",
        "value":""
      },
      "capitalCity":"Oranjestad",
      "longitude":"-70.0167",
      "latitude":"12.5167"
    },
    {
      "id":"AFG",
      "iso2Code":"AF",
      "name":"Afghanistan",
      "region":{
        "id":"SAS",
        "iso2code":"8S",
        "value":"South Asia"
      },
      "adminregion":{
        "id":"SAS",
        "iso2code":"8S",
        "value":"South Asia"
      },
      "capitalCity":"Kabul",
      "longitude":"69.1761",
      "latitude":"34.5228"
    },
    {
      "id":"AFR",
      "iso2Code":"A9",
      "name":"Africa",
      "region":{
        "id":"NA",
        "iso2code":"NA",
        "value":"Aggregates"
      },
      "adminregion":{
        "id":"",
        "iso2code":"",
        "value":""
      },
      "capitalCity":"",
      "longitude":"",
      "latitude":""
    },
    {
      "id":"AGO",
      "iso2Code":"AO",
      "name":"Angola",
      "region":{
        "id":"SSF",
        "iso2code":"ZG",
        "value":"Sub-Saharan Africa "
      },
      "adminregion":{
        "id":"SSA",
        "iso2code":"ZF",
        "value":"Sub-Saharan Africa (excluding high income)"
      },
      "capitalCity":"Luanda",
      "longitude":"13.242",
      "latitude":"-8.81155"
    },
    {
      "id":"ALB",
      "iso2Code":"AL",
      "name":"Albania",
      "region":{
        "id":"ECS",
        "iso2code":"Z7",
        "value":"Europe & Central Asia"
      },
      "adminregion":{
        "id":"ECA",
        "iso2code":"7E",
        "value":"Europe & Central Asia (excluding high income)"
      },
      "capitalCity":"Tirane",
      "longitude":"19.8172",
      "latitude":"41.3317"
    },
    {
      "id":"AND",
      "iso2Code":"AD",
      "name":"Andorra",
      "region":{
        "id":"ECS",
        "iso2code":"Z7",
        "value":"Europe & Central Asia"
      },
      "adminregion":{
        "id":"",
        "iso2code":"",
        "value":""
      },
      "capitalCity":"Andorra la Vella",
      "longitude":"1.5218",
      "latitude":"42.5075"
    },
    {
      "id":"ANR",
      "iso2Code":"L5",
      "name":"Andean Region",
      "region":{
        "id":"NA",
        "iso2code":"NA",
        "value":"Aggregates"
      },
      "adminregion":{
        "id":"",
        "iso2code":"",
        "value":""
      },
      "capitalCity":"",
      "longitude":"",
      "latitude":""
    },
    {
      "id":"ARB",
      "iso2Code":"1A",
      "name":"Arab World",
      "region":{
        "id":"NA",
        "iso2code":"NA",
        "value":"Aggregates"
      },
      "adminregion":{
        "id":"",
        "iso2code":"",
        "value":""
      },
      "capitalCity":"",
      "longitude":"",
      "latitude":""
    },
    {
      "id":"ARE",
      "iso2Code":"AE",
      "name":"United Arab Emirates",
      "region":{
        "id":"MEA",
        "iso2code":"ZQ",
        "value":"Middle East & North Africa"
      },
      "adminregion":{
        "id":"",
        "iso2code":"",
        "value":""
      },
      "capitalCity":"Abu Dhabi",
      "longitude":"54.3705",
      "latitude":"24.4764"
    },
    {
      "id":"ARG",
      "iso2Code":"AR",
      "name":"Argentina",
      "region":{
        "id":"LCN",
        "iso2code":"ZJ",
        "value":"Latin America & Caribbean "
      },
      "adminregion":{
        "id":"LAC",
        "iso2code":"XJ",
        "value":"Latin America & Caribbean (excluding high income)"
      },
      "capitalCity":"Buenos Aires",
      "longitude":"-58.4173",
      "latitude":"-34.6118"
    },
    {
      "id":"ARM",
      "iso2Code":"AM",
      "name":"Armenia",
      "region":{
        "id":"ECS",
        "iso2code":"Z7",
        "value":"Europe & Central Asia"
      },
      "adminregion":{
        "id":"ECA",
        "iso2code":"7E",
        "value":"Europe & Central Asia (excluding high income)"
      },
      "capitalCity":"Yerevan",
      "longitude":"44.509",
      "latitude":"40.1596"
    },
    {
      "id":"ASM",
      "iso2Code":"AS",
      "name":"American Samoa",
      "region":{
        "id":"EAS",
        "iso2code":"Z4",
        "value":"East Asia & Pacific"
      },
      "adminregion":{
        "id":"EAP",
        "iso2code":"4E",
        "value":"East Asia & Pacific (excluding high income)"
      },
      "capitalCity":"Pago Pago",
      "longitude":"-170.691",
      "latitude":"-14.2846"
    },
    {
      "id":"ATG",
      "iso2Code":"AG",
      "name":"Antigua and Barbuda",
      "region":{
        "id":"LCN",
        "iso2code":"ZJ",
        "value":"Latin America & Caribbean "
      },
      "adminregion":{
        "id":"",
        "iso2code":"",
        "value":""
      },
      "capitalCity":"Saint John's",
      "longitude":"-61.8456",
      "latitude":"17.1175"
    },
    {
      "id":"AUS",
      "iso2Code":"AU",
      "name":"Australia",
      "region":{
        "id":"EAS",
        "iso2code":"Z4",
        "value":"East Asia & Pacific"
      },
      "adminregion":{
        "id":"",
        "iso2code":"",
        "value":""
      },
      "capitalCity":"Canberra",
      "longitude":"149.129",
      "latitude":"-35.282"
    },
    {
      "id":"AUT",
      "iso2Code":"AT",
      "name":"Austria",
      "region":{
        "id":"ECS",
        "iso2code":"Z7",
        "value":"Europe & Central Asia"
      },
      "adminregion":{
        "id":"",
        "iso2code":"",
        "value":""
      },
      "capitalCity":"Vienna",
      "longitude":"16.3798",
      "latitude":"48.2201"
    },
    {
      "id":"AZE",
      "iso2Code":"AZ",
      "name":"Azerbaijan",
      "region":{
        "id":"ECS",
        "iso2code":"Z7",
        "value":"Europe & Central Asia"
      },
      "adminregion":{
        "id":"ECA",
        "iso2code":"7E",
        "value":"Europe & Central Asia (excluding high income)"
      },
      "capitalCity":"Baku",
      "longitude":"49.8932",
      "latitude":"40.3834"
    }
  
];

// Print the names, capital cities of all the countries
// Note that the countries are in an array, so use a counting for loop

console.log("Countries whose ISO 3-letter Country Codes start with A, and their capital cities");

for (var c = 0 ; c < countries_a.length ; c++) {
  var country = countries_a[c];
  console.log('The country of ' + country.name + ' has the 3-letter code ' + country.id + ' and the capital city is ' + country.capitalCity);
}


// What about nested objects? A random taco recipe from http://taco-randomizer.herokuapp.com/random/

var random_taco = {
  "shell":{
    "slug":"fresh_corn_tortillas",
    "recipe":"Fresh Corn Tortillas\n===================\n\nThis is the only way to go. So worth it. Makes roughly 15 tortillas.\n\n* 1 3/4 cups masa harina\n* 1 1/8 cups water\n\n1. In a medium bowl, mix together masa harina and hot water until thoroughly combined. Turn dough onto a clean surface and knead until pliable and smooth. If dough is too sticky, add more masa harina; if it begins to dry out, sprinkle with water. Cover dough tightly with plastic wrap and allow to stand for 30 minutes.\n2. Preheat a cast iron skillet or griddle to medium-high.\n3. Divide dough into 15 equal-size balls. Using a tortilla press (or a rolling pin), press each ball of dough flat between two sheets of wax paper (plastic wrap or a freezer bag cut into halves will also work).\n4. Place tortilla in preheated pan and allow to cook for approximately 30 seconds, or until browned and slightly puffy. Turn tortilla over to brown on second side for approximately 30 seconds more, then transfer to a plate. Repeat process with each ball of dough. Keep tortillas covered with a towel to stay warm and moist (or a low temp oven) until ready to serve.\n\ntags: vegetarian, vegan\n",
    "name":"Fresh Corn Tortillas",
    "url":"https://raw.github.com/sinker/tacofancy/master/shells/Fresh_corn_tortillas.md"
  },
  "seasoning":{
    "slug":"basic_dry_rub",
    "recipe":"Basic Dry Rub\n=================\n\nThis is a great, versatile recipe to use as a taco seasoning or as a dry rub for the protein of your choice. Equally at home in the skillet, oven, stovetop, or smoker.\n\n* 2 Tbs Cumin\n* 2 Tbs Chili Powder\n* 1 Tbs Salt\n* 1 Tbs Garlic Powder\n* 2 tsp Black Pepper\n* 1 tsp Chipotle Powder\n\nStir to combine and apply liberally.\n\ntags: vegetarian, vegan\n",
    "name":"Basic Dry Rub",
    "url":"https://raw.github.com/sinker/tacofancy/master/seasonings/basic_dry_rub.md"
  },
  "mixin":{
    "slug":"cheese_traditional_us",
    "recipe":"Cheese (Traditional; US)\n======================\n\nA major flavor component of a traditional American taco, select a cheese that's firm and sharp.\n\n* Cheddar (shredded)\n* Jack/Pepper Jack (shredded)\n\ntags: vegetarian\n",
    "name":"Cheese (Traditional; US)",
    "url":"https://raw.github.com/sinker/tacofancy/master/mixins/cheese_traditional_us.md"
  },
  "base_layer":{
    "slug":"bulgar_black_bean_filling",
    "recipe":"Bulgar Black Bean Filling\n=========================\n\nThis is a quick and easy vegetarian substitute for a ground beef-like texture without using a soy substitute.\n\n* 1 cup cooked, strained bulgar\n* 1/3 cup cooked black beans (or canned), rinsed and strained.\n\nMix bulgar and black beans together. For better texture, slightly mash the black beans. Add your choice of seasonings to taste and serve.\n\ntags: vegetarian, vegan\n",
    "name":"Bulgar Black Bean Filling",
    "url":"https://raw.github.com/sinker/tacofancy/master/base_layers/bulgar_black_bean_filling.md"
  },
  "condiment":{
    "slug":"baja_white_sauce",
    "recipe":"Baja White Sauce\n================\n\nThis is a traditional white sauce for [Baja fish tacos](../full_tacos/baja_fish_tacos.md).\n\n* 1/4 cup mayo\n* 2 tbsp sour cream\n* 1 tbsp lime juice\n* 1/4 tsp celery salt (or garlic salt, etc)\n\nMix, and refrigerate for an hour if possible.",
    "name":"Baja White Sauce",
    "url":"https://raw.github.com/sinker/tacofancy/master/condiments/baja_white_sauce.md"
  }
};

// Get the URs for each part of the recipe

console.log();
console.log('List of URLs for recipes for the ingredients in a random taco');
urls = [];

for (var component in random_taco) {
  url = random_taco[component].url;
  //url = random_taco[component]['url'];  // This would work too
  urls.push(url);
}

console.log(urls);

