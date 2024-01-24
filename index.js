//Immport the Distance module
const Distance = require('./Distance.js')

//Execute the exposed functions
//Testing the feet to meters
console.log(Distance.calculate('feet', 30));

//Testing the meters to feet
console.log(Distance.calculate('meters', 30));

//Testing the miles to KM
console.log(Distance.calculate('miles', 30));

//Testing the KM to miles
console.log(Distance.calculate('km', 30));

//Testing an error
console.log(Distance.calculate('kilo', 30));