var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."

  it('should be able to add', () => {
    calculator.previousTotal = 1
    calculator.add(4)
    expect(calculator.runningTotal).toBe(5)
  })

  it('should be able to subtract', () => {
    calculator.previousTotal = 7
    calculator.subtract(4)
    expect(calculator.runningTotal).toBe(3)
  })

  it('should be able to multiply', () => {
    calculator.previousTotal = 3
    calculator.multiply(5)
    expect(calculator.runningTotal).toBe(15)
  })

  it('should be able to divide', () => {
    calculator.previousTotal = 21
    calculator.divide(7)
    expect(calculator.runningTotal).toBe(3)
  })

  it('concatenate multiple number button clicks', () => {
    calculator.numberClick(2)
    calculator.numberClick(1)
    expect(calculator.runningTotal).toBe(21)
  })

  it('chain multiple operations together', () => {
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    expect(calculator.runningTotal).toBe(8)
  })

  it('clear the running total without affecting the calculation', () => {
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.clearClick()
    expect(calculator.runningTotal).toBe(0)
  })

});
