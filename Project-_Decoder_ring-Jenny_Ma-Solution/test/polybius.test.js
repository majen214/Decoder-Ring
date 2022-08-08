// Write your tests here!
const polybiusModule = require('../src/polybius.js');
const expect = require('chai').expect

describe("Polybius", () => {
  it("should return the decoded message '4432423352125413'", () => {
    const actual = polybiusModule.polybius("thinkful");
    const expected = "4432423352125413";
    expect(actual).to.eql(expected);
});

    it("should return the decoded message '3251131343 2543241341'", () => {
    const actual = polybiusModule.polybius("Hello world");
    const expected = "3251131343 2543241341";
    expect(actual).to.eql(expected);
});
  
  it("should return hello world", () => {
  const actual = polybiusModule.polybius("3251131343 2543241341", false);
  const expected = "hello world";
  expect(actual).to.eql(expected);
  });

  it("should return th(i/j)nkful", () => {
    let actual = polybiusModule.polybius("4432423352125413", false);
    let expected = "th(i/j)nkful";
    expect(actual).to.equal(expected);
});

   it("should return false", () => {
    let actual = polybiusModule.polybius("44324233521254134", false);
    expect(actual).to.be.false;
});


});