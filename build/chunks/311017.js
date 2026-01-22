/** Chunk was on 94678 **/
/** chunk id: 311017, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk241091 = require("./241091.js"),
  Chunk664886 = require("./664886.js"),
  Chunk529030 = require("./529030.js"),
  Chunk163446 = require("./163446.js"),
  Chunk577904 = require("./577904.js"),
  Chunk712192 = require("./712192.js"),
  Chunk794779 = require("./794779.js"),
  Chunk287731 = require("./287731.js"),
  Chunk159384 = require("./159384.js"),
  Chunk379180 = require("./379180.js"),
  v = Array;
module.exports = function(t) {
  var r, e, y, h, x, d, g = s(t),
    b = c(this),
    m = arguments.length,
    S = m > 1 ? arguments[1] : true,
    w = true !== S;
  w && (S = n(S, m > 2 ? arguments[2] : true));
  var O = l(g),
    j = 0;
  if (O && !(this === v && u(O)))
    for (e = b ? new this : [], x = (h = p(g, O)).next; !(y = o(x, h)).done; j++) d = w ? i(h, S, [y.value, j], true) : y.value, f(e, j, d);
  else
    for (r = a(g), e = b ? new this(r) : v(r); r > j; j++) d = w ? S(g[j], j) : g[j], f(e, j, d);
  return e.length = j, e
}