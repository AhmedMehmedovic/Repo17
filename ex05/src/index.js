let foo = 12, boo = 45;

function main(foo, boo) {
    // Only change code below this line
     var [foo, boo] = [boo, foo];
    // Only change code above this line
    return {foo, boo}
}
 
console.log(main(foo, boo));
module.exports = main;