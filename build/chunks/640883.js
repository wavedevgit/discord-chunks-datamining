/** Chunk was on web.js **/
/** chunk id: 640883, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk507604 = require("./507604.js"),
  Chunk88996 = require("./88996.js"),
  o = TypeError,
  a = Object.getOwnPropertyDescriptor;
module.exports = Chunk507604 && ! function() {
  if (true !== this) returntrue;
  try {
    Object.defineProperty([], "length", {
      writable: false
    }).length = 1
  } catch (e) {
    return module instanceof TypeError
  }
}() ? function(e, t) {
  if (i(e) && !a(e, "length").writable) throw new o("Cannot set read only .length");
  return e.length = t
} : function(e, t) {
  return e.length = t
}