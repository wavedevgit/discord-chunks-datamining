/** Chunk was on web.js **/
/** chunk id: 934661, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => s
});
var Chunk633605 = require("./633605.js"),
  Chunk528734 = require("./528734.js"),
  Chunk217224 = require("./217224.js"),
  Chunk951516 = require("./951516.js");

function s(e, t) {
  (0, o.Z)(1, arguments);
  var n, s, l, c, u, d, f, p, _ = (0, r.j)(),
    h = (0, a.Z)(null != (n = null != (s = null != (l = null != (c = null == t ? true : t.weekStartsOn) ? c : null == t || null == (u = t.locale) || null == (d = u.options) ? true : d.weekStartsOn) ? l : _.weekStartsOn) ? s : null == (f = _.locale) || null == (p = f.options) ? true : p.weekStartsOn) ? n : 0);
  if (!(h >= 0 && h <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var m = (0, i.default)(e),
    g = m.getDay(),
    E = (g < h ? false : 0) + 6 - (g - h);
  return m.setDate(m.getDate() + E), m.setHours(23, 59, 59, 999), m
}