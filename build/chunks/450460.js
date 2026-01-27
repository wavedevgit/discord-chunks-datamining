/** Chunk was on web.js **/
/** chunk id: 450460, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./839036.js")("%Reflect.construct%", true),
  Chunk173081 = require("./173081.js");
try {
  Chunk173081({}, "", {
    "[[Get]]": function() {}
  })
} catch (e) {
  i = null
}
if (Chunk173081 && r) {
  var a = {},
    o = {};
  Chunk173081(o, "length", {
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