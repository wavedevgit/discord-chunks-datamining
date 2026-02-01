/** Chunk was on web.js **/
/** chunk id: 961345, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => y
});
var Chunk804552 = require("./804552.js"),
  Chunk128170 = require("./128170.js"),
  Chunk29583 = require("./29583.js"),
  Chunk735394 = require("./735394.js"),
  Chunk291048 = require("./291048.js"),
  Chunk84776 = require("./84776.js"),
  Chunk368617 = require("./368617.js"),
  Chunk998280 = require("./998280.js"),
  Chunk618027 = require("./618027.js"),
  Chunk98430 = require("./98430.js"),
  Chunk728898 = require("./728898.js"),
  _ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  h = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  m = /^'([^]*?)'?$/,
  g = /''/g,
  E = /[a-zA-Z]/;

function y(e, t, n) {
  (0, d.A)(2, arguments);
  var m, g, y, O, v, A, I, S, T, C, N, w, R, P, D, L, x, M, j = String(t),
    k = (0, f.q)(),
    U = null != (m = null != (g = null == n ? true : n.locale) ? g : k.locale) ? m : p.A,
    G = (0, u.A)(null != (y = null != (O = null != (v = null != (A = null == n ? true : n.firstWeekContainsDate) ? A : null == n || null == (I = n.locale) || null == (S = I.options) ? true : S.firstWeekContainsDate) ? v : k.firstWeekContainsDate) ? O : null == (T = k.locale) || null == (C = T.options) ? true : C.firstWeekContainsDate) ? y : 1);
  if (!(G >= 1 && G <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var V = (0, u.A)(null != (N = null != (w = null != (R = null != (P = null == n ? true : n.weekStartsOn) ? P : null == n || null == (D = n.locale) || null == (L = D.options) ? true : L.weekStartsOn) ? R : k.weekStartsOn) ? w : null == (x = k.locale) || null == (M = x.options) ? true : M.weekStartsOn) ? N : 0);
  if (!(V >= 0 && V <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!U.localize) throw RangeError("locale must contain localize property");
  if (!U.formatLong) throw RangeError("locale must contain formatLong property");
  var F = (0, a.default)(e);
  if (!(0, r.default)(F)) throw RangeError("Invalid time value");
  var B = (0, l.A)(F),
    H = (0, i.A)(F, B),
    Y = {
      firstWeekContainsDate: G,
      weekStartsOn: V,
      locale: U,
      _originalDate: F
    };
  return j.match(h).map(function(e) {
    var t = e[0];
    return "p" === t || "P" === t ? (0, s.A[t])(e, U.formatLong) : e
  }).join("").match(_).map(function(r) {
    if ("''" === r) return "'";
    var i = r[0];
    if ("'" === i) return b(r);
    var a = o.A[i];
    if (a) return !(null != n && n.useAdditionalWeekYearTokens) && (0, c.xM)(r) && (0, c.lJ)(r, t, String(e)), !(null != n && n.useAdditionalDayOfYearTokens) && (0, c.ef)(r) && (0, c.lJ)(r, t, String(e)), a(H, r, U.localize, Y);
    if (i.match(E)) throw RangeError("Format string contains an unescaped latin alphabet character `" + i + "`");
    return r
  }).join("")
}

function b(e) {
  var t = e.match(m);
  return t ? t[1].replace(g, "'") : e
}