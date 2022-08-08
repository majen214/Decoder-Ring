// Write your tests here!
const substitutionModule = require('../src/substitution.js');
const expect = require('chai').expect;

describe("Substitution", () => {
  it("Encode with no spaces", () => {
    const actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.eql(expected);
});
  
    it("should return 'elp xhm xf mbymwwmfj dne'", () => {
    const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.eql(expected);
});
  
it("should return 'thinkful'", () => {
    const actual = substitutionModule.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = "thinkful";
    expect(actual).to.eql(expected);
});
  
  it("should return 'y&ii$r&'", () => {
    const actual = substitutionModule.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&ii$r&";
    expect(actual).to.eql(expected);
});
 /* 
  it("should return 'elp xhm xf mbymwwmfj dne'", () => {
    const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.eql(expected);
});
  
  it("should return 'elp xhm xf mbymwwmfj dne'", () => {
    const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.eql(expected);
});
  
  it("should return 'elp xhm xf mbymwwmfj dne'", () => {
    const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.eql(expected);
});
*/
});
