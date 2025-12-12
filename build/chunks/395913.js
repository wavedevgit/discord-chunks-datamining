/** Chunk was on web.js **/
/** chunk id: 395913, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk528734 = require("./528734.js"),
  Chunk951516 = require("./951516.js"),
  Chunk217224 = require("./217224.js"),
  Chunk633605 = require("./633605.js");

function s(e, t, n) {
  (0, i.Z)(2, arguments);
  var s, l, c, u, d, f, p, _, m = (0, a.j)(),
    h = (0, o.Z)(null != (s = null != (l = null != (c = null != (u = null == n ? true : n.weekStartsOn) ? u : null == n || null == (d = n.locale) || null == (f = d.options) ? true : f.weekStartsOn) ? c : m.weekStartsOn) ? l : null == (p = m.locale) || null == (_ = p.options) ? true : _.weekStartsOn) ? s : 0);
  if (!(h >= 0 && h <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var g = (0, r.default)(e),
    E = (0, o.Z)(t),
    b = 7 * ((E % 7 + 7) % 7 < h) + E - g.getUTCDay();
  return g.setUTCDate(g.getUTCDate() + b), g
}