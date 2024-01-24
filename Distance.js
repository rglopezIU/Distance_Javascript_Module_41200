//Internal helper function for feet to meters not exported
const feetToMeters = (x, y = 0.3048) => x * y;

//Internal helper function for meters to feet not exported
const metersToFeet = (x, y = 3.28084) => x * y;

//Internal helper function for miles to kilometers not exported
const milesToKM = (x, y = 1.60934) => x * y;

//Internal helper function for kilometers to miles not exported
const kmToMiles = (x, y = 0.621371) => x * y;

//export calculate function for the output/conversion
exports.calculate = function (method, x) {

    //declaring variable for the result, easier to display
    let result;

    //take in distance if statement
    if (method == 'feet') {
        result = feetToMeters(x);
        return `${x} ${method} is equal to ${result} meters!`;
    }
    else if (method == 'meters') {
        result = metersToFeet(x);
        return `${x} ${method} is equal to ${result} feet!`;
    }
    else if (method == 'miles') {
        result = milesToKM(x);
        return `${x} ${method} is equal to ${result} km!`;
    }
    else if (method == 'km') {
        result = kmToMiles(x);
        return `${x} ${method} is equal to ${result} miles!`;
    }
    else {
        return 'Error. Please enter a valid distance measurement.';
    }
}