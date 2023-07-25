const sumAll = function(start, end) {
    const typeStart = typeof start;
    const typeEnd = typeof end;
    if(typeStart != "number") return "ERROR";
    if(typeEnd != "number") return "ERROR";
    if(start < 0 || end < 0) return "ERROR";

    let sum = 0;
    if(start < end) {
        for(let i = start; i <= end; i++) {
            sum += i;
        }
    }
    else if(start > end) {
        for(let i = start; i >= end; i--) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
