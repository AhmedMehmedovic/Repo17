const MY_CAR = {
    wheels: 4,
    cylinders: 4,
    size: 2.2
};

function main(myCar) {
    // Only change code below this line

    const { cylinders: carCylinders } = myCar ; 
    const { size: carSize } = myCar ;

    return {carCylinders, carSize }
    // Only change code above this line

}

console.log(main(MY_CAR));
module.exports = main;