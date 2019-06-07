var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."

  it('should be able to add', () => {
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    expect(calculator.runningTotal).toBe(5)
  })

  it('should be able to subtract', () => {
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    expect(calculator.runningTotal).toBe(3)
  })

  it('should be able to multiply', () => {
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    expect(calculator.runningTotal).toBe(15)
  })

  it('should be able to divide', () => {
    calculator.numberClick(2)
    calculator.numberClick(1)
    calculator.operatorClick('/')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    expect(calculator.runningTotal).toBe(3)
  })

});
