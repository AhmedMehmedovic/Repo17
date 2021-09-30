const BAKING_TEMPERATURES = {
    cake: {low: 180, high: 250 },
    bread: {low: 150, high: 220 },
    pie: { low: 200, high: 230}
};

function main(baking) {
    // Only change code below this line
    const { bread: {low: lowBread}  } = baking;
    const { bread: {high: highBread} } = baking;
    return { lowBread, highBread };
    // Only change code above this line
}

console.log(main(BAKING_TEMPERATURES ));
module.exports = main;