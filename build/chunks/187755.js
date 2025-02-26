/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => l
});
var r = n(193603),
  i = n(951516),
  o = n(780603),
  a = n(217224),
  s = n(633605);

function l(e, t) {
  (0, i.Z)(1, arguments);
  var n, l, c, u, d, f, _, p, h = (0, s.j)(),
    g = (0, a.Z)(null !== (n = null !== (l = null !== (c = null !== (u = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== u ? u : null == t ? void 0 : null === (d = t.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.firstWeekContainsDate) && void 0 !== c ? c : h.firstWeekContainsDate) && void 0 !== l ? l : null === (_ = h.locale) || void 0 === _ ? void 0 : null === (p = _.options) || void 0 === p ? void 0 : p.firstWeekContainsDate) && void 0 !== n ? n : 1),
    m = (0, r.Z)(e, t),
    E = new Date(0);
  return E.setUTCFullYear(m, 0, g), E.setUTCHours(0, 0, 0, 0), (0, o.Z)(E, t)
}