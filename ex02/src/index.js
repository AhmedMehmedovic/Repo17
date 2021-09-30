const MY_CAR = {
    wheels: 4,
    cylinders: 4,
    size: 2.2
};

function main(myCar) {
    // Only change code below this line

    const { cylinders } = myCar;
    const { size } = myCar;
    return {cylinders, size};

    // Only change code above this line
}

console.log(main(MY_CAR));
module.exports = main;