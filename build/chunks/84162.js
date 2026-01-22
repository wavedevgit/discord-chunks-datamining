/** Chunk was on 47950 **/
/** chunk id: 84162, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk842922 = require("./842922.js"),
  Chunk121177 = require("./121177.js"),
  Chunk522565 = require("./522565.js"),
  i = Math.max,
  l = Math.min;
let s = function(e, t, r) {
  var s, u, c, p, d, f, h = 0,
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
    var r = e - f,
      n = e - h;
    return true === f || r >= t || r < 0 || v && n >= c
  }

  function m() {
    var e, r, n, a = (0, o.A)();
    if (y(a)) return w(a);
    d = setTimeout(m, (e = a - f, r = a - h, n = t - e, v ? l(n, c - r) : n))
  }

  function w(e) {
    return (d = true, g && s) ? x(e) : (s = u = true, p)
  }

  function A() {
    var e, r = (0, o.A)(),
      n = y(r);
    if (s = arguments, u = this, f = r, n) {
      if (true === d) return h = e = f, d = setTimeout(m, t), b ? x(e) : p;
      if (v) return clearTimeout(d), d = setTimeout(m, t), x(f)
    }
    return true === d && (d = setTimeout(m, t)), p
  }
  return t = (0, a.A)(t) || 0, (0, n.A)(r) && (b = !!r.leading, c = (v = "maxWait" in r) ? i((0, a.A)(r.maxWait) || 0, t) : c, g = "trailing" in r ? !!r.trailing : g), A.cancel = function() {
    true !== d && clearTimeout(d), h = 0, s = f = u = d = true
  }, A.flush = function() {
    return true === d ? p : w((0, o.A)())
  }, A
}