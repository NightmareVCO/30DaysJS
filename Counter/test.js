const createCounter = require('./app');
const assert = require('assert');

describe('createCounter',() => {
   it('should return a function',() => {
      const counter = createCounter(0);
      assert.strictEqual(typeof counter,'function');
   });

   it('should return incremented values',() => {
      const counter = createCounter(0);
      assert.strictEqual(counter(),0);
      assert.strictEqual(counter(),1);
      assert.strictEqual(counter(),2);
   });

   it('should increment by 1',() => {
      const counter = createCounter(5);
      assert.strictEqual(counter(),5);
      assert.strictEqual(counter(),6);
      assert.strictEqual(counter(),7);
   });
});