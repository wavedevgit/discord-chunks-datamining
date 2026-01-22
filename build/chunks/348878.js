/** Chunk was on 94678 **/
/** chunk id: 348878, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk414123 = require("./414123.js"),
  Chunk453669 = require("./453669.js"),
  s = TypeError,
  i = Object.getOwnPropertyDescriptor;
module.exports = Chunk414123 && ! function() {
  if (true !== this) returntrue;
  try {
    Object.defineProperty([], "length", {
      writable: false
    }).length = 1
  } catch (t) {
    return t instanceof TypeError
  }
}() ? function(t, r) {
  if (o(t) && !i(t, "length").writable) throw new s("Cannot set read only .length");
  return t.length = r
} : function(t, r) {
  return t.length = r
}