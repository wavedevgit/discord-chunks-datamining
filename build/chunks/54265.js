/** Chunk was on web.js **/
/** chunk id: 54265, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk29583 = require("./29583.js"),
  Chunk618027 = require("./618027.js"),
  Chunk998280 = require("./998280.js"),
  Chunk98430 = require("./98430.js");

function s(e, t, n) {
  (0, i.A)(2, arguments);
  var s, l, c, u, d, f, p, _, h = (0, o.q)(),
    m = (0, a.A)(null != (s = null != (l = null != (c = null != (u = null == n ? true : n.weekStartsOn) ? u : null == n || null == (d = n.locale) || null == (f = d.options) ? true : f.weekStartsOn) ? c : h.weekStartsOn) ? l : null == (p = h.locale) || null == (_ = p.options) ? true : _.weekStartsOn) ? s : 0);
  if (!(m >= 0 && m <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var g = (0, r.default)(e),
    E = (0, a.A)(t),
    y = 7 * ((E % 7 + 7) % 7 < m) + E - g.getUTCDay();
  return g.setUTCDate(g.getUTCDate() + y), g
}