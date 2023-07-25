const repeatString = function(str, repetition) {
    let repeatedString = "";
    if(repetition < 0) return "ERROR";

    for(let i = 0; i < repetition; i++) {
        repeatedString += str;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
