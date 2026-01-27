/** Chunk was on web.js **/
/** chunk id: 327922, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk29583 = require("./29583.js"),
  Chunk618027 = require("./618027.js"),
  Chunk998280 = require("./998280.js"),
  Chunk98430 = require("./98430.js");

function s(e, t) {
  (0, i.A)(1, arguments);
  var n, s, l, c, u, d, f, p, _ = (0, o.q)(),
    h = (0, a.A)(null != (n = null != (s = null != (l = null != (c = null == t ? true : t.weekStartsOn) ? c : null == t || null == (u = t.locale) || null == (d = u.options) ? true : d.weekStartsOn) ? l : _.weekStartsOn) ? s : null == (f = _.locale) || null == (p = f.options) ? true : p.weekStartsOn) ? n : 0);
  if (!(h >= 0 && h <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var m = (0, r.default)(e),
    g = m.getUTCDay(),
    E = 7 * (g < h) + g - h;
  return m.setUTCDate(m.getUTCDate() - E), m.setUTCHours(0, 0, 0, 0), m
}