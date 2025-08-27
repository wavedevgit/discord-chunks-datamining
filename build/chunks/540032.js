/** Chunk was on web.js **/
/** chunk id: 540032, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./209800.js")("%Reflect.construct%", true),
  Chunk265518 = require("./265518.js");
try {
  Chunk265518({}, "", {
    "[[Get]]": function() {}
  })
} catch (e) {
  i = null
}
if (Chunk265518 && r) {
  var a = {},
    o = {};
  Chunk265518(o, "length", {
    "[[Get]]": function() {
      throw a
    },
    "[[Enumerable]]": true
  }), module.exports = function(e) {
    try {
      r(e, o)
    } catch (e) {
      return e === a
    }
  }
} else module.exports = function(e) {
  return "function" == typeof e && !!e.prototype
}