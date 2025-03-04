/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => s
});
var r = n(528734),
  i = n(951516),
  o = n(217224),
  a = n(633605);

function s(e, t, n) {
  (0, i.Z)(2, arguments);
  var s, l, c, u, d, f, _, p, h = (0, a.j)(),
    g = (0, o.Z)(null !== (s = null !== (l = null !== (c = null !== (u = null == n ? void 0 : n.weekStartsOn) && void 0 !== u ? u : null == n ? void 0 : null === (d = n.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.weekStartsOn) && void 0 !== c ? c : h.weekStartsOn) && void 0 !== l ? l : null === (_ = h.locale) || void 0 === _ ? void 0 : null === (p = _.options) || void 0 === p ? void 0 : p.weekStartsOn) && void 0 !== s ? s : 0);
  if (!(g >= 0 && g <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var m = (0, r.default)(e),
    E = (0, o.Z)(t),
    v = 7 * ((E % 7 + 7) % 7 < g) + E - m.getUTCDay();
  return m.setUTCDate(m.getUTCDate() + v), m
}