/** Chunk was on web.js **/
/** chunk id: 111956, original params: e,t,n (module,exports,re quire) **/
var Chunk646344 = require("./646344.js"),
  Chunk714163 = require("./714163.js"),
  Chunk681447 = require("./681447.js"),
  o = "Expected a function",
  s = Math.max,
  l = Math.min;
module.exports = function(e, t, n) {
  var c, u, d, f, p, _, h = 0,
    m = false,
    g = false,
    E = true;
  if ("function" != typeof e) throw TypeError(o);

  function y(t) {
    var n = c,
      r = u;
    return c = u = true, h = t, f = e.apply(r, n)
  }

  function b(e) {
    return h = e, p = setTimeout(A, t), m ? y(e) : f
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

  function A() {
    var e = i();
    if (v(e)) return I(e);
    p = setTimeout(A, O(e))
  }

  function I(e) {
    return (p = true, E && c) ? y(e) : (c = u = true, f)
  }

  function S() {
    return true === p ? f : I(i())
  }

  function T() {
    var e = i(),
      n = v(e);
    if (c = arguments, u = this, _ = e, n) {
      if (true === p) return b(_);
      if (g) return clearTimeout(p), p = setTimeout(A, t), y(_)
    }
    return true === p && (p = setTimeout(A, t)), f
  }
  return t = a(t) || 0, r(n) && (m = !!n.leading, d = (g = "maxWait" in n) ? s(a(n.maxWait) || 0, t) : d, E = "trailing" in n ? !!n.trailing : E), T.cancel = function() {
    true !== p && clearTimeout(p), h = 0, c = _ = u = p = true
  }, T.flush = S, T
}