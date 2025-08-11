/** Chunk was on 50448 **/
/** chunk id: 263982, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk764908 = require("./764908.js"),
  Chunk185698 = require("./185698.js"),
  Chunk658971 = require("./658971.js"),
  u = require("./674554.js").indexOf,
  Chunk270498 = require("./270498.js"),
  c = Chunk764908([].push);
module.exports = function(t, r) {
  var n, e = i(t),
    f = 0,
    a = [];
  for (n in e) !o(s, n) && o(e, n) && c(a, n);
  for (; r.length > f;) o(e, n = r[f++]) && (~u(a, n) || c(a, n));
  return a
}