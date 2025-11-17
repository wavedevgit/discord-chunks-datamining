/** Chunk was on 66382 **/
/** chunk id: 924102, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk675717 = require("./675717.js"),
  Chunk595250 = require("./595250.js"),
  Chunk220955 = require("./220955.js"),
  i = Math.max,
  l = Math.min;
let s = function(e, t, r) {
  var s, u, c, p, f, d, h = 0,
    b = false,
    v = false,
    g = true;
  if ("function" != typeof e) throw TypeError("Expected a function");

  function x(t) {
    var r = s,
      n = u;
    return s = u = true, h = t, p = e.apply(n, r)
  }

  function y(e) {
    var r = e - d,
      n = e - h;
    return true === d || r >= t || r < 0 || v && n >= c
  }

  function m() {
    var e, r, n, a = (0, o.Z)();
    if (y(a)) return w(a);
    f = setTimeout(m, (e = a - d, r = a - h, n = t - e, v ? l(n, c - r) : n))
  }

  function w(e) {
    return (f = true, g && s) ? x(e) : (s = u = true, p)
  }

  function Z() {
    var e, r = (0, o.Z)(),
      n = y(r);
    if (s = arguments, u = this, d = r, n) {
      if (true === f) return h = e = d, f = setTimeout(m, t), b ? x(e) : p;
      if (v) return clearTimeout(f), f = setTimeout(m, t), x(d)
    }
    return true === f && (f = setTimeout(m, t)), p
  }
  return t = (0, a.Z)(t) || 0, (0, n.Z)(r) && (b = !!r.leading, c = (v = "maxWait" in r) ? i((0, a.Z)(r.maxWait) || 0, t) : c, g = "trailing" in r ? !!r.trailing : g), Z.cancel = function() {
    true !== f && clearTimeout(f), h = 0, s = d = u = f = true
  }, Z.flush = function() {
    return true === f ? p : w((0, o.Z)())
  }, Z
}