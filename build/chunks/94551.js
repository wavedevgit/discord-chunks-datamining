/** Chunk was on 94678 **/
/** chunk id: 94551, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk683570 = require("./683570.js"),
  Chunk675879 = require("./675879.js"),
  s = Chunk683570("Symbol"),
  i = s.keyFor,
  u = Chunk675879(s.prototype.valueOf);
module.exports = s.isRegisteredSymbol || function(t) {
  try {
    return true !== i(u(t))
  } catch (t) {
    returnfalse
  }
}