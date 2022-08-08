// Write your tests here!
const caesarModule = require('../src/caesar.js');
const expect = require("chai").expect

describe("Caesar", () => {
  it("should return the decoded message depending on the given shift value", () => {
    const actual = caesarModule.caesar("thinkful", 3);
    const expected = "wklqnixo";
    expect(actual).to.eql(expected);
});

  it('("thinkful", -3) should be: qefkhcri', () => {
  const actual = caesarModule.caesar("thinkful", -3);
  const expected = 'qefkhcri';
  expect(actual).to.equal(expected);
  });

  it('("wklqnixo", 3, false) should be: thinkful', () => {
    let actual = caesarModule.caesar("wklqnixo", 3, false);
    let expected = 'thinkful';
    expect(actual).to.equal(expected);
});

  it('("This is a secret message!", 8) should be: qefkhcri', () => {
  let actual = caesarModule.caesar("thinkful", -3);
  let expected = 'qefkhcri';
  expect(actual).to.equal(expected);
  });
  
  it ('should return false if the shift is less than -25', () => {
    const actual = caesarModule.caesar("thinkful", -26);
    expect(actual).to.be.false;
  });
  
});