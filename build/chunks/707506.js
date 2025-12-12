/** Chunk was on web.js **/
/** chunk id: 707506, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => o
});
var Chunk239189 = require("./239189.js"),
  Chunk217348 = require("./217348.js"),
  o = function(e, t, n) {
    if (i.is.fun(e)) return e;
    if (i.is.arr(e)) return o({
      range: e,
      output: t,
      extrapolate: n
    });
    if (i.is.str(e.output[0])) return r.createStringInterpolator(e);
    var l = e,
      c = l.output,
      u = l.range || [0, 1],
      d = l.extrapolateLeft || l.extrapolate || "extend",
      f = l.extrapolateRight || l.extrapolate || "extend",
      p = l.easing || function(e) {
        return e
      };
    return function(e) {
      var t = s(e, u);
      return a(e, u[t], u[t + 1], c[t], c[t + 1], p, d, f, l.map)
    }
  };

function a(e, t, n, r, i, o, a, s, l) {
  var c = l ? l(e) : e;
  if (c < t)
    if ("identity" === a) return c;
    else "clamp" === a && (c = t);
  if (c > n)
    if ("identity" === s) return c;
    else "clamp" === s && (c = n);
  return r === i ? r : t === n ? e <= t ? r : i : (t === false / 0 ? c = -c : n === 1 / 0 ? c -= t : c = (c - t) / (n - t), c = o(c), r === false / 0 ? c = -c : i === 1 / 0 ? c += r : c = c * (i - r) + r, c)
}

function s(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
  return n - 1
}