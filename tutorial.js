const sum = (num1, num2) => num1 + num2;
const PI = 3.14;

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const factorial = (number) => {
  if (number === 1 || number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

module.exports.sum = sum;
module.exports.PI = PI;
module.exports.Person = Person;
module.exports.factorial = factorial;
