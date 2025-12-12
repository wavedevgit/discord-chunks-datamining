/** Chunk was on web.js **/
/** chunk id: 491257, original params: e (module,exports,re quire) **/
"use strict";

function t(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t)
}
module.exports = function(e, n, r, i) {
  n = n || "&", r = r || "=";
  var o = {};
  if ("string" != typeof e || 0 === e.length) return o;
  var a = /\+/g;
  e = e.split(n);
  var s = 1e3;
  i && "number" == typeof i.maxKeys && (s = i.maxKeys);
  var l = e.length;
  s > 0 && l > s && (l = s);
  for (var c = 0; c < l; ++c) {
    var u, d, f, p, _ = e[c].replace(a, "%20"),
      m = _.indexOf(r);
    m >= 0 ? (u = _.substr(0, m), d = _.substr(m + 1)) : (u = _, d = ""), f = decodeURIComponent(u), p = decodeURIComponent(d), t(o, f) ? Array.isArray(o[f]) ? o[f].push(p) : o[f] = [o[f], p] : o[f] = p
  }
  return o
}