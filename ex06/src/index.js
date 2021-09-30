const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    "use strict";
    // Only change code below this line
    const [, , ...array2] = list;
    // Only change code above this line
    return array2;
}

console.log(removeFirstTwo(array1));
module.exports = removeFirstTwo;