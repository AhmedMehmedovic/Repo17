// Lodash
const _ = require("lodash");

// Only change code below this line
// users nested array with four objects starts here
var users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 24,
    gender: "male"
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 5,
    gender: "female"
  },
  {
    id: 3,
    firstName: "Jim",
    lastName: "Carrey",
    age: 54,
    gender: "male"
  },
  {
    id: 4,
    firstName: "Kate",
    lastName: "Winslet",
    age: 40,
    gender: "female"
  }
];
// users nested array with four objects ends here

// getUser function - list of users starts here
function getUsers() {
  var output = "";
  for (let i = 0; i < users.length; i++) {
    output += `${users[i].id} - ${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}\n`;
  }
  console.log(output);
  return output;
}
// getUser function - list of users ends here

// findUserById(id) function starts here
function findUserById(id) {
  try {
    // add appropriate code here
    var user = _.find(users, { id: id });
    var iFindUser = `${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;

    console.log(iFindUser);
    return iFindUser;
  } catch (error) {
    console.log("Cannot read property 'id'"); // Change this line
    return "Cannot read property 'id'"; // Change this line
  }
}
// findUserById(id) function ends here
// Only change code above this line
getUsers();
findUserById(); // Change this line

module.exports = findUserById;