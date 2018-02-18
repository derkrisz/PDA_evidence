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

  it('should multiply 3x5 and get 15', function(){
    calculator.numberClick(3);
    assert.equal(calculator.runningTotal, 3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 15);
  })

  it('should divide 21/7 and get 3', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 7);
  })

  it('should add 1+4 and get 5', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+')
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 5);
  })

  it('should subtract 7-4 and get 3', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-')
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 3);
  })

  it('should concatenate multiple number button clicks', function(){
    calculator.numberClick(7);
    calculator.numberClick(5);
    calculator.numberClick(1);
    assert.equal(calculator.runningTotal, 751);
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*')
    calculator.numberClick(3);
    calculator.operatorClick('+');
    assert.equal(calculator.runningTotal, 9);
    calculator.numberClick(5);
    calculator.operatorClick('-');
    assert.equal(calculator.runningTotal, 14);
    calculator.numberClick('4');
    assert.equal(calculator.runningTotal, 4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 10);
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(4);
    calculator.operatorClick('*')
    calculator.numberClick(4);
    calculator.operatorClick('+');
    assert.equal(calculator.runningTotal, 16);
    calculator.numberClick(5);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 16);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.clearClick();
    calculator.clearClick();
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 0);
  })

});
