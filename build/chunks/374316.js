/** Chunk was on web.js **/
/** chunk id: 374316, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk446474 = require("./446474.js"),
  Chunk598349 = require("./598349.js"),
  Chunk837082 = require("./837082.js"),
  Chunk95959 = require("./95959.js"),
  Chunk863781 = require("./863781.js"),
  Chunk380744 = require("./380744.js"),
  c = TypeError,
  u = Chunk380744("toPrimitive");
module.exports = function(e, t) {
  if (!i(e) || a(e)) return e;
  var n, l = o(e, u);
  if (l) {
    if (true === t && (t = "default"), !i(n = r(l, e, t)) || a(n)) return n;
    throw new c("Can't convert object to primitive value")
  }
  return true === t && (t = "number"), s(e, t)
}