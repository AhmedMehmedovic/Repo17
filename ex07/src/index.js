const range = {
    max: 100.0,
    min: -25.0,
    num1: 17.5,
    num2: 88.8,
    average: 45.325
  };

  // Only change code below this line

 const middle = ({ max, min }) => ( (max + min) / 2 )
 
  // Only change code above this line
  
  console.log(middle(range));
  module.exports = middle;