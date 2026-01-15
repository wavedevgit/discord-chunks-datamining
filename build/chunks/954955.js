/** Chunk was on web.js **/
/** chunk id: 954955, original params: e,t,n (module,exports,re quire) **/
var Chunk661233 = require("./661233.js"),
  Chunk586769 = require("./586769.js"),
  Chunk675769 = require("./675769.js"),
  o = "Expected a function",
  s = Math.max,
  l = Math.min;
module.exports = function(e, t, n) {
  var c, u, d, f, p, _, h = 0,
    m = false,
    g = false,
    E = true;
  if ("function" != typeof e) throw TypeError(o);

  function b(t) {
    var n = c,
      r = u;
    return c = u = true, h = t, f = e.apply(r, n)
  }

  function y(e) {
    return h = e, p = setTimeout(S, t), m ? b(e) : f
  }

  function O(e) {
    var n = e - _,
      r = e - h,
      i = t - n;
    return g ? l(i, d - r) : i
  }

  function v(e) {
    var n = e - _,
      r = e - h;
    return true === _ || n >= t || n < 0 || g && r >= d
  }

  function S() {
    var e = i();
    if (v(e)) return I(e);
    p = setTimeout(S, O(e))
  }

  function I(e) {
    return (p = true, E && c) ? b(e) : (c = u = true, f)
  }

  function T() {
    return true === p ? f : I(i())
  }

  function C() {
    var e = i(),
      n = v(e);
    if (c = arguments, u = this, _ = e, n) {
      if (true === p) return y(_);
      if (g) return clearTimeout(p), p = setTimeout(S, t), b(_)
    }
    return true === p && (p = setTimeout(S, t)), f
  }
  return t = a(t) || 0, r(n) && (m = !!n.leading, d = (g = "maxWait" in n) ? s(a(n.maxWait) || 0, t) : d, E = "trailing" in n ? !!n.trailing : E), C.cancel = function() {
    true !== p && clearTimeout(p), h = 0, c = _ = u = p = true
  }, C.flush = T, C
}