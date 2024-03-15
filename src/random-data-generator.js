// Function to generate a random string of specified length
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Function to generate a random number within a specified range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random boolean value
function generateRandomBoolean() {
    return Math.random() < 0.5;
}

// Function to generate a random date within a specified range
function generateRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Exporting functions
module.exports = {
    generateRandomString,
    generateRandomNumber,
    generateRandomBoolean,
    generateRandomDate
};