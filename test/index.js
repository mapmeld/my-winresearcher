var assert = require("assert");
var winResearcher = require("../my-winresearcher.js");

describe("Converting", function() {
  it("should return လှည်းကူး when the value is vSnf;ul;", function() {
    var ret = winResearcher("vSnf;ul;");
    assert.equal(ret, "လှည်းကူး");
    assert.equal((typeof ret), "string");
  });

  it("not preserving numbers: should return '၁ဝ၁ ကော့ကရိတ် လှည်းကူး' when the value is 101 aumhu&dwf vSnf;ul;", function() {
    var ret = winResearcher("101 aumhu&dwf vSnf;ul;");
    assert.equal(ret, "၁ဝ၁ ကော့ကရိတ် လှည်းကူး");
    assert.equal((typeof ret), "string");
  });

  it("preserving numbers: should return '101 aumhu&dwf vSnf;ul;' when the value is 101 aumhu&dwf vSnf;ul;", function() {
    var ret = winResearcher("101 aumhu&dwf vSnf;ul;", true);
    assert.equal(ret, "101 ကော့ကရိတ် လှည်းကူး");
    assert.equal((typeof ret), "string");
  });
});
