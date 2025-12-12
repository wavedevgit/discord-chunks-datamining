/** Chunk was on web.js **/
/** chunk id: 707104, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk580983 = require("./580983.js"),
  Chunk434431 = require("./434431.js"),
  Chunk661970 = require("./661970.js"),
  Chunk3831 = require("./3831.js"),
  Chunk6819 = require("./6819.js"),
  Chunk751736 = require("./751736.js"),
  c = TypeError,
  u = Chunk751736("toPrimitive");
module.exports = function(e, t) {
  if (!i(e) || a(e)) return e;
  var n, l = o(e, u);
  if (l) {
    if (true === t && (t = "default"), !i(n = r(l, e, t)) || a(n)) return n;
    throw new c("Can't convert object to primitive value")
  }
  return true === t && (t = "number"), s(e, t)
}