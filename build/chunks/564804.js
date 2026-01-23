/** Chunk was on web.js **/
/** chunk id: 564804, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk29583 = require("./29583.js"),
  Chunk618027 = require("./618027.js"),
  Chunk327922 = require("./327922.js"),
  Chunk998280 = require("./998280.js"),
  Chunk98430 = require("./98430.js");

function l(e, t) {
  (0, i.A)(1, arguments);
  var n, l, c, u, d, f, p, _, h = (0, r.default)(e),
    m = h.getUTCFullYear(),
    g = (0, o.q)(),
    E = (0, s.A)(null != (n = null != (l = null != (c = null != (u = null == t ? true : t.firstWeekContainsDate) ? u : null == t || null == (d = t.locale) || null == (f = d.options) ? true : f.firstWeekContainsDate) ? c : g.firstWeekContainsDate) ? l : null == (p = g.locale) || null == (_ = p.options) ? true : _.firstWeekContainsDate) ? n : 1);
  if (!(E >= 1 && E <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var y = new Date(0);
  y.setUTCFullYear(m + 1, 0, E), y.setUTCHours(0, 0, 0, 0);
  var b = (0, a.A)(y, t),
    O = new Date(0);
  O.setUTCFullYear(m, 0, E), O.setUTCHours(0, 0, 0, 0);
  var v = (0, a.A)(O, t);
  return h.getTime() >= b.getTime() ? m + 1 : h.getTime() >= v.getTime() ? m : m - 1
}