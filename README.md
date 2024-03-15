# Random Data Generator

A simple JavaScript package to generate random data for testing purposes.

## Installation

To use this package in your Node.js project, you can install it via npm:

```bash
npm install random-data-generator
```

## Usage

### Generating Random String

```javascript
const randomDataGenerator = require('random-data-generator');

console.log(randomDataGenerator.generateRandomString(10)); // Output: Random string of length 10
```

### Generating Random Number

```javascript
console.log(randomDataGenerator.generateRandomNumber(1, 100)); // Output: Random number between 1 and 100
```

### Generating Random Boolean Value

```javascript
console.log(randomDataGenerator.generateRandomBoolean()); // Output: Random boolean value (true/false)
```

### Generating Random Date

```javascript
console.log(randomDataGenerator.generateRandomDate(new Date(2020, 0, 1), new Date())); // Output: Random date between 2020-01-01 and current date
```