/** Chunk was on 50448 **/
/** chunk id: 907158, original params: t,r,n (module,exports,require) **/
"use strict";
var e = require("./998659.js").charAt,
  Chunk565130 = require("./565130.js"),
  Chunk89416 = require("./89416.js"),
  Chunk689591 = require("./689591.js"),
  Chunk787899 = require("./787899.js"),
  c = "String Iterator",
  f = Chunk89416.set,
  a = Chunk89416.getterFor(c);
Chunk689591(String, "String", function(t) {
  f(this, {
    type: c,
    string: o(t),
    index: 0
  })
}, function() {
  var t, r = a(this),
    n = exports.string,
    o = exports.index;
  return Chunk565130 >= require.length ? Chunk787899(true, true) : (t = e(require, Chunk565130), exports.index += module.length, Chunk787899(module, false))
})