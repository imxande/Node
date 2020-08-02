console.log("Welcome to app");

const tutorial = require("./tutorial");
const number = 4;

const adult = new tutorial.Person("Alex", 22);

// sanity check
console.log("Tutorial:", tutorial);
console.log("Sum:", tutorial.sum(1, 1));
console.log("PI:", tutorial.PI);
console.log("Adult:", adult);
console.log(`The factorial of ${number} is: ${tutorial.factorial(number)}`);
