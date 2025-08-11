/** Chunk was on 50448 **/
/** chunk id: 978198, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk324474 = require("./324474.js"),
  Chunk517522 = require("./517522.js"),
  Chunk475424 = require("./475424.js"),
  Chunk703046 = require("./703046.js"),
  Chunk65976 = require("./65976.js"),
  Chunk468790 = require("./468790.js"),
  Chunk174344 = require("./174344.js"),
  Chunk641623 = require("./641623.js"),
  Chunk318341 = require("./318341.js"),
  Chunk242958 = require("./242958.js"),
  v = Array;
module.exports = function(t) {
  var r, n, y, h, x, d, g = i(t),
    b = c(this),
    m = arguments.length,
    S = m > 1 ? arguments[1] : true,
    w = true !== S;
  w && (S = e(S, m > 2 ? arguments[2] : true));
  var O = l(g),
    j = 0;
  if (O && !(this === v && s(O)))
    for (n = b ? new this : [], x = (h = p(g, O)).next; !(y = o(x, h)).done; j++) d = w ? u(h, S, [y.value, j], true) : y.value, a(n, j, d);
  else
    for (r = f(g), n = b ? new this(r) : v(r); r > j; j++) d = w ? S(g[j], j) : g[j], a(n, j, d);
  return n.length = j, n
}