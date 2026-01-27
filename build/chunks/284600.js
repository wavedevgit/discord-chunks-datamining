/** Chunk was on web.js **/
/** chunk id: 284600, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk29583 = require("./29583.js"),
  Chunk618027 = require("./618027.js"),
  Chunk998280 = require("./998280.js");

function o(e, t) {
  (0, i.A)(2, arguments);
  var n = (0, a.A)(t);
  n % 7 == 0 && (n -= 7);
  var o = 1,
    s = (0, r.default)(e),
    l = 7 * ((n % 7 + 7) % 7 < o) + n - s.getUTCDay();
  return s.setUTCDate(s.getUTCDate() + l), s
}