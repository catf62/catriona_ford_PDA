var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should have working operator buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  })

  it('should be able to chain multiple operators together', function(){
    // running total should be zero
    running_total = element(by.css('#running_total'))
    // change display to 5
    element(by.css('#number5')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number5')).click();
    // change display to 10
    element(by.css('#operator_multiply')).click();
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    // change display to 100
    element(by.css('#operator_divide')).click();
    element(by.css('#number5')).click();
    // change display to 20
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('20')
  })

  it('should handle negative numbers as expected', function(){
    // running total should be zero
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    // change display to 1
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    // change display to 2
    element(by.css('#operator_subtract')).click();
    element(by.css('#number8')).click();
    // change display to -6
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    // change display to -2
    element(by.css('#operator_multiply')).click();
    element(by.css('#number6')).click();
    // change display to -12
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-12')
  })

  it('should handle decimals as expected', function(){
    // running total should be zero
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    // change display to 1
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    // change display to 0.5
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.5')
  })

  it('should handle very large numbers as expected', function(){
    // running total should be zero
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    element(by.css('#number4')).click();
    element(by.css('#number5')).click();
    element(by.css('#number6')).click();
    element(by.css('#number7')).click();
    element(by.css('#number8')).click();
    element(by.css('#number9')).click();
    // change display to 123456789
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#number8')).click();
    element(by.css('#number7')).click();
    element(by.css('#number6')).click();
    element(by.css('#number5')).click();
    element(by.css('#number4')).click();
    element(by.css('#number3')).click();
    element(by.css('#number2')).click();
    element(by.css('#number1')).click();
    // change display to 121932631112635260
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('121932631112635260')
  })

  it('should display Not a Number when a number is divided by zero', function(){
    // running total should be zero
    running_total = element(by.css('#running_total'))
    // change display to 5
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    // change display to Not a Number
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal("Not a Number")
  })

});
