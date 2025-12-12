/** Chunk was on web.js **/
/** chunk id: 873546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Em: () => b,
  bO: () => O,
  eL: () => v,
  tq: () => y
}), require("./388685.js");
var r, i, o, a, s, l, c, u, d, f, p, Chunk264344 = require("./264344.js"),
  m = require.n(Chunk264344);
let h = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]),
  g = new Set(["Android", "iOS", "Windows Phone"]),
  E = (null == (i = window) || null == (r = i.navigator) ? true : r.platform) === "MacIntel" && true !== (null == (a = window) || null == (o = a.navigator) ? true : o.standalone) && (null == (l = window) || null == (s = l.navigator) ? true : s.maxTouchPoints) > 1,
  b = h.has(null != (f = m().product) ? f : "") || E,
  y = !b && g.has(null != (p = null === m() || true === m() || null == (c = m().os) ? true : c.family) ? p : ""),
  O = (null === m() || true === m() || null == (u = m().os) ? true : u.family) === "iOS",
  v = (null === m() || true === m() || null == (d = m().os) ? true : d.family) === "Android"