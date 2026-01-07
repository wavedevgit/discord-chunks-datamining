/** Chunk was on 50448 **/
/** chunk id: 877918, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk181794 = require("./181794.js"),
  Chunk884805 = require("./884805.js"),
  i = TypeError,
  u = Object.getOwnPropertyDescriptor;
module.exports = Chunk181794 && ! function() {
  if (true !== this) returntrue;
  try {
    Object.defineProperty([], "length", {
      writable: false
    }).length = 1
  } catch (t) {
    return t instanceof TypeError
  }
}() ? function(t, r) {
  if (o(t) && !u(t, "length").writable) throw new i("Cannot set read only .length");
  return t.length = r
} : function(t, r) {
  return t.length = r
}