/** Chunk was on web.js **/
/** chunk id: 496538, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk257943 = require("./257943.js"),
  Chunk703441 = require("./703441.js"),
  a = TypeError,
  s = Object.getOwnPropertyDescriptor;
module.exports = Chunk257943 && ! function() {
  if (true !== this) returntrue;
  try {
    Object.defineProperty([], "length", {
      writable: false
    }).length = 1
  } catch (e) {
    return e instanceof TypeError
  }
}() ? function(e, t) {
  if (i(e) && !s(e, "length").writable) throw new a("Cannot set read only .length");
  return e.length = t
} : function(e, t) {
  return e.length = t
}