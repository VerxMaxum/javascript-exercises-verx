const removeFromArray = function(arr, ...toRemove) {
    const newArr = [];
    const remove = Array.from(toRemove);

    outer:
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < remove.length; j++) {
            if(arr[i] === toRemove[j]) continue outer;
        }
        newArr.push(arr[i]);
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
