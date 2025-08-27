/** Chunk was on web.js **/
/** chunk id: 873546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Em: () => b,
  eL: () => O,
  tq: () => y
}), require("./388685.js");
var r, i, a, o, s, l, c, u, d, f, _, Chunk264344 = require("./264344.js"),
  h = require.n(Chunk264344);
let m = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]),
  g = new Set(["Android", "iOS", "Windows Phone"]),
  E = (null == (i = window) || null == (r = i.navigator) ? true : r.platform) === "MacIntel" && true !== (null == (o = window) || null == (a = o.navigator) ? true : a.standalone) && (null == (l = window) || null == (s = l.navigator) ? true : s.maxTouchPoints) > 1,
  b = m.has(null != (f = h().product) ? f : "") || E,
  y = !b && g.has(null != (_ = null === h() || true === h() || null == (c = h().os) ? true : c.family) ? _ : "");
null === h() || true === h() || null == (u = h().os) || u.family;
let O = (null === h() || true === h() || null == (d = h().os) ? true : d.family) === "Android"