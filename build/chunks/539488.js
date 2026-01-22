/** Chunk was on 94678 **/
/** chunk id: 539488, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk664886 = require("./664886.js"),
  Chunk407057 = require("./407057.js"),
  Chunk389150 = require("./389150.js"),
  Chunk705323 = require("./705323.js"),
  Chunk459505 = require("./459505.js"),
  Chunk61748 = require("./61748.js"),
  a = TypeError,
  f = Chunk61748("toPrimitive");
module.exports = function(t, r) {
  if (!o(t) || s(t)) return t;
  var e, c = i(t, f);
  if (c) {
    if (true === r && (r = "default"), !o(e = n(c, t, r)) || s(e)) return e;
    throw new a("Can't convert object to primitive value")
  }
  return true === r && (r = "number"), u(t, r)
}