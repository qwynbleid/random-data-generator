const randomDataGenerator = require('random-data-generator');

console.log(randomDataGenerator.generateRandomString(10)); // Output: Random string of length 10
console.log(randomDataGenerator.generateRandomNumber(1, 100)); // Output: Random number between 1 and 100
console.log(randomDataGenerator.generateRandomBoolean()); // Output: Random boolean value (true/false)
console.log(randomDataGenerator.generateRandomDate(new Date(2020, 0, 1), new Date())); // Output: Random date between 2020-01-01 and current date