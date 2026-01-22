/** Chunk was on web.js **/
/** chunk id: 464831, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => o
});
var Chunk29583 = require("./29583.js"),
  Chunk998280 = require("./998280.js"),
  Chunk618027 = require("./618027.js"),
  Chunk98430 = require("./98430.js");

function o(e, t) {
  (0, a.A)(1, arguments);
  var n, o, l, c, u, d, f, p, _ = (0, s.q)(),
    h = (0, i.A)(null != (n = null != (o = null != (l = null != (c = null == t ? true : t.weekStartsOn) ? c : null == t || null == (u = t.locale) || null == (d = u.options) ? true : d.weekStartsOn) ? l : _.weekStartsOn) ? o : null == (f = _.locale) || null == (p = f.options) ? true : p.weekStartsOn) ? n : 0);
  if (!(h >= 0 && h <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var m = (0, r.default)(e),
    g = m.getDay(),
    E = 7 * (g < h) + g - h;
  return m.setDate(m.getDate() - E), m.setHours(0, 0, 0, 0), m
}