var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // unit test for starting at zero
  it('should start with zero for the previous total', function () {
    const actual = calculator.previousTotal;
    assert.strictEqual(actual, 0);
  });

  it('should start with zero for the running total', function () {
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add to the previous total', function () {
    calculator.previousTotal = 4;
    calculator.add(1);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5);
  });

  it('should be able to subtract from the previous total', function () {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  });

  it('should be able to multiply the previous total', function () {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 15);
  });

  it('should be able to divide the previous total', function () {
    calculator.previousTotal = 21;
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  });

});
