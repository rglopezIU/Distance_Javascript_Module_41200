//Internal helper function for feet to meters not exported
feetToMeters = (x, y = 0.3048) => x * y;

//Internal helper function for meters to feet not exported
metersToFeet = (x, y = 3.28084) => x * y;

//Internal helper function for miles to kilometers not exported
milesToKM = (x, y = 1.60934) => x * y;

//Internal helper function for kilometers to miles not exported
kmToMiles = (x, y = 0.621371) => x * y;

//export calculate function for the output/conversion
exports.calculate = function (method, x) {

    console.log(method);
    console.log(x);
    //declaring variable for the result, easier to display
    let result;

    //take in distance if statement
    if (method == 'feet') {
        result = feetToMeters(x);
        return result;
    }
    else if (method == 'meters') {
        result = metersToFeet(x);
        return result;
    }
    else if (method == 'miles') {
        result = milesToKM(x);
        return result;
    }
    else if (method == 'kilometers') {
        result = kmToMiles(x);
        return result;
    }
    else {
        return 'Error. Please enter a valid distance measurement.';
    }
}

