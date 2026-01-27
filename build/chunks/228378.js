/** Chunk was on web.js **/
/** chunk id: 228378, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => o
});
var Chunk998280 = require("./998280.js"),
  Chunk29583 = require("./29583.js"),
  Chunk618027 = require("./618027.js");

function o(e, t) {
  (0, a.A)(2, arguments);
  var n = (0, i.default)(e),
    o = (0, r.A)(t);
  if (isNaN(o)) return new Date(NaN);
  if (!o) return n;
  var s = n.getDate(),
    l = new Date(n.getTime());
  return (l.setMonth(n.getMonth() + o + 1, 0), s >= l.getDate()) ? l : (n.setFullYear(l.getFullYear(), l.getMonth(), s), n)
}