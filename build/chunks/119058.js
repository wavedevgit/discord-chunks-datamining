/** Chunk was on web.js **/
/** chunk id: 119058, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => b
});
var Chunk310644 = require("./310644.js"),
  Chunk465735 = require("./465735.js"),
  Chunk528734 = require("./528734.js"),
  Chunk570289 = require("./570289.js"),
  Chunk128961 = require("./128961.js"),
  Chunk424421 = require("./424421.js"),
  Chunk198050 = require("./198050.js"),
  Chunk217224 = require("./217224.js"),
  Chunk951516 = require("./951516.js"),
  Chunk633605 = require("./633605.js"),
  Chunk393655 = require("./393655.js"),
  _ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  m = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  h = /^'([^]*?)'?$/,
  g = /''/g,
  E = /[a-zA-Z]/;

function b(e, t, n) {
  (0, d.Z)(2, arguments);
  var h, g, b, O, v, S, I, T, A, C, N, P, R, w, D, x, L, j, M = String(t),
    k = (0, f.j)(),
    U = null != (h = null != (g = null == n ? true : n.locale) ? g : k.locale) ? h : p.Z,
    G = (0, u.Z)(null != (b = null != (O = null != (v = null != (S = null == n ? true : n.firstWeekContainsDate) ? S : null == n || null == (I = n.locale) || null == (T = I.options) ? true : T.firstWeekContainsDate) ? v : k.firstWeekContainsDate) ? O : null == (A = k.locale) || null == (C = A.options) ? true : C.firstWeekContainsDate) ? b : 1);
  if (!(G >= 1 && G <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Z = (0, u.Z)(null != (N = null != (P = null != (R = null != (w = null == n ? true : n.weekStartsOn) ? w : null == n || null == (D = n.locale) || null == (x = D.options) ? true : x.weekStartsOn) ? R : k.weekStartsOn) ? P : null == (L = k.locale) || null == (j = L.options) ? true : j.weekStartsOn) ? N : 0);
  if (!(Z >= 0 && Z <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!U.localize) throw RangeError("locale must contain localize property");
  if (!U.formatLong) throw RangeError("locale must contain formatLong property");
  var B = (0, a.default)(e);
  if (!(0, r.default)(B)) throw RangeError("Invalid time value");
  var F = (0, l.Z)(B),
    V = (0, i.Z)(B, F),
    H = {
      firstWeekContainsDate: G,
      weekStartsOn: Z,
      locale: U,
      _originalDate: B
    };
  return M.match(m).map(function(e) {
    var t = e[0];
    return "p" === t || "P" === t ? (0, s.Z[t])(e, U.formatLong) : e
  }).join("").match(_).map(function(r) {
    if ("''" === r) return "'";
    var i = r[0];
    if ("'" === i) return y(r);
    var a = o.Z[i];
    if (a) return !(null != n && n.useAdditionalWeekYearTokens) && (0, c.Do)(r) && (0, c.qp)(r, t, String(e)), !(null != n && n.useAdditionalDayOfYearTokens) && (0, c.Iu)(r) && (0, c.qp)(r, t, String(e)), a(V, r, U.localize, H);
    if (i.match(E)) throw RangeError("Format string contains an unescaped latin alphabet character `" + i + "`");
    return r
  }).join("")
}

function y(e) {
  var t = e.match(h);
  return t ? t[1].replace(g, "'") : e
}