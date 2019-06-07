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

});
