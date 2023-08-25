// Import any necessary testing libraries
const createHelloWorld = require('./app');
const assert = require('assert');


// Test case 1
assert.strictEqual(createHelloWorld()(),"Hello World");
// Test case 2
assert.strictEqual(createHelloWorld()(1,2,3),"Hello World");

// Add more test cases as needed
console.log("All test cases passed successfully!");