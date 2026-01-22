/** Chunk was on web.js **/
/** chunk id: 607399, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ct: () => A,
  Fr: () => y,
  KY: () => O,
  v1: () => b
}), require("./896048.js");
var r, i, a, s, o, l, c, u, d, f, p, Chunk214958 = require("./214958.js"),
  h = require.n(Chunk214958);
let m = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]),
  g = new Set(["Android", "iOS", "Windows Phone"]),
  E = (null == (s = window) || null == (a = s.navigator) ? true : a.platform) === "MacIntel" && true !== (null == (l = window) || null == (o = l.navigator) ? true : o.standalone) && (null == (u = window) || null == (c = u.navigator) ? true : c.maxTouchPoints) > 1,
  b = m.has(null != (r = h().product) ? r : "") || E,
  y = !b && g.has(null != (i = null === h() || true === h() || null == (d = h().os) ? true : d.family) ? i : ""),
  O = (null === h() || true === h() || null == (f = h().os) ? true : f.family) === "iOS",
  A = (null === h() || true === h() || null == (p = h().os) ? true : p.family) === "Android"