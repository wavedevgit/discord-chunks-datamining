/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Em: () => v,
  eL: () => y,
  tq: () => b
}), n(47120);
var r, i, o, a, s, l, c, u, d, f, _, p = n(264344),
  h = n.n(p);
let g = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]),
  m = new Set(["Android", "iOS", "Windows Phone"]),
  E = (null === (i = window) || void 0 === i ? void 0 : null === (r = i.navigator) || void 0 === r ? void 0 : r.platform) === "MacIntel" && void 0 !== (null === (a = window) || void 0 === a ? void 0 : null === (o = a.navigator) || void 0 === o ? void 0 : o.standalone) && (null === (l = window) || void 0 === l ? void 0 : null === (s = l.navigator) || void 0 === s ? void 0 : s.maxTouchPoints) > 1,
  v = g.has(null !== (f = h().product) && void 0 !== f ? f : "") || E,
  b = !v && m.has(null !== (_ = null === h() || void 0 === h() ? void 0 : null === (c = h().os) || void 0 === c ? void 0 : c.family) && void 0 !== _ ? _ : "");
null === h() || void 0 === h() || null === (u = h().os) || void 0 === u || u.family;
let y = (null === h() || void 0 === h() ? void 0 : null === (d = h().os) || void 0 === d ? void 0 : d.family) === "Android"