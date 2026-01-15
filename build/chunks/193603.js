/** Chunk was on web.js **/
/** chunk id: 193603, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk528734 = require("./528734.js"),
  Chunk951516 = require("./951516.js"),
  Chunk780603 = require("./780603.js"),
  Chunk217224 = require("./217224.js"),
  Chunk633605 = require("./633605.js");

function l(e, t) {
  (0, i.Z)(1, arguments);
  var n, l, c, u, d, f, p, _, h = (0, r.default)(e),
    m = h.getUTCFullYear(),
    g = (0, s.j)(),
    E = (0, o.Z)(null != (n = null != (l = null != (c = null != (u = null == t ? true : t.firstWeekContainsDate) ? u : null == t || null == (d = t.locale) || null == (f = d.options) ? true : f.firstWeekContainsDate) ? c : g.firstWeekContainsDate) ? l : null == (p = g.locale) || null == (_ = p.options) ? true : _.firstWeekContainsDate) ? n : 1);
  if (!(E >= 1 && E <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var b = new Date(0);
  b.setUTCFullYear(m + 1, 0, E), b.setUTCHours(0, 0, 0, 0);
  var y = (0, a.Z)(b, t),
    O = new Date(0);
  O.setUTCFullYear(m, 0, E), O.setUTCHours(0, 0, 0, 0);
  var v = (0, a.Z)(O, t);
  return h.getTime() >= y.getTime() ? m + 1 : h.getTime() >= v.getTime() ? m : m - 1
}