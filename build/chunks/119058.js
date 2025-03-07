/** Chunk was on web.js **/
"use strict";
n.r(t), n.d(t, {
  default: () => v
});
var r = n(310644),
  i = n(465735),
  o = n(528734),
  a = n(570289),
  s = n(128961),
  l = n(424421),
  c = n(198050),
  u = n(217224),
  d = n(951516),
  f = n(633605),
  _ = n(393655),
  p = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  h = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  m = /^'([^]*?)'?$/,
  g = /''/g,
  E = /[a-zA-Z]/;

function v(e, t, n) {
  (0, d.Z)(2, arguments);
  var m, g, v, y, O, I, S, T, N, A, C, R, P, w, D, L, x, M, k = String(t),
    j = (0, f.j)(),
    U = null !== (m = null !== (g = null == n ? void 0 : n.locale) && void 0 !== g ? g : j.locale) && void 0 !== m ? m : _.Z,
    G = (0, u.Z)(null !== (v = null !== (y = null !== (O = null !== (I = null == n ? void 0 : n.firstWeekContainsDate) && void 0 !== I ? I : null == n ? void 0 : null === (S = n.locale) || void 0 === S ? void 0 : null === (T = S.options) || void 0 === T ? void 0 : T.firstWeekContainsDate) && void 0 !== O ? O : j.firstWeekContainsDate) && void 0 !== y ? y : null === (N = j.locale) || void 0 === N ? void 0 : null === (A = N.options) || void 0 === A ? void 0 : A.firstWeekContainsDate) && void 0 !== v ? v : 1);
  if (!(G >= 1 && G <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var B = (0, u.Z)(null !== (C = null !== (R = null !== (P = null !== (w = null == n ? void 0 : n.weekStartsOn) && void 0 !== w ? w : null == n ? void 0 : null === (D = n.locale) || void 0 === D ? void 0 : null === (L = D.options) || void 0 === L ? void 0 : L.weekStartsOn) && void 0 !== P ? P : j.weekStartsOn) && void 0 !== R ? R : null === (x = j.locale) || void 0 === x ? void 0 : null === (M = x.options) || void 0 === M ? void 0 : M.weekStartsOn) && void 0 !== C ? C : 0);
  if (!(B >= 0 && B <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!U.localize) throw RangeError("locale must contain localize property");
  if (!U.formatLong) throw RangeError("locale must contain formatLong property");
  var V = (0, o.default)(e);
  if (!(0, r.default)(V)) throw RangeError("Invalid time value");
  var F = (0, l.Z)(V),
    Z = (0, i.Z)(V, F),
    H = {
      firstWeekContainsDate: G,
      weekStartsOn: B,
      locale: U,
      _originalDate: V
    };
  return k.match(h).map(function(e) {
    var t = e[0];
    return "p" === t || "P" === t ? (0, s.Z[t])(e, U.formatLong) : e
  }).join("").match(p).map(function(r) {
    if ("''" === r) return "'";
    var i = r[0];
    if ("'" === i) return b(r);
    var o = a.Z[i];
    if (o) return !(null != n && n.useAdditionalWeekYearTokens) && (0, c.Do)(r) && (0, c.qp)(r, t, String(e)), !(null != n && n.useAdditionalDayOfYearTokens) && (0, c.Iu)(r) && (0, c.qp)(r, t, String(e)), o(Z, r, U.localize, H);
    if (i.match(E)) throw RangeError("Format string contains an unescaped latin alphabet character `" + i + "`");
    return r
  }).join("")
}

function b(e) {
  var t = e.match(m);
  return t ? t[1].replace(g, "'") : e
}