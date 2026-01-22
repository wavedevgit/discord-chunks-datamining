/** Chunk was on web.js **/
/** chunk id: 805353, original params: e,t,n (module,exports,re quire) **/
var Chunk509185 = require("./509185.js"),
  Chunk73224 = require("./73224.js"),
  Chunk112746 = require("./112746.js"),
  s = "Expected a function",
  o = Math.max,
  l = Math.min;
module.exports = function(e, t, n) {
  var c, u, d, f, p, _, h = 0,
    m = false,
    g = false,
    E = true;
  if ("function" != typeof e) throw TypeError(s);

  function b(t) {
    var n = c,
      r = u;
    return c = u = true, h = t, f = e.apply(r, n)
  }

  function y(e) {
    return h = e, p = setTimeout(v, t), m ? b(e) : f
  }

  function O(e) {
    var n = e - _,
      r = e - h,
      i = t - n;
    return g ? l(i, d - r) : i
  }

  function A(e) {
    var n = e - _,
      r = e - h;
    return true === _ || n >= t || n < 0 || g && r >= d
  }

  function v() {
    var e = i();
    if (A(e)) return S(e);
    p = setTimeout(v, O(e))
  }

  function S(e) {
    return (p = true, E && c) ? b(e) : (c = u = true, f)
  }

  function I() {
    return true === p ? f : S(i())
  }

  function T() {
    var e = i(),
      n = A(e);
    if (c = arguments, u = this, _ = e, n) {
      if (true === p) return y(_);
      if (g) return clearTimeout(p), p = setTimeout(v, t), b(_)
    }
    return true === p && (p = setTimeout(v, t)), f
  }
  return t = a(t) || 0, r(n) && (m = !!n.leading, d = (g = "maxWait" in n) ? o(a(n.maxWait) || 0, t) : d, E = "trailing" in n ? !!n.trailing : E), T.cancel = function() {
    true !== p && clearTimeout(p), h = 0, c = _ = u = p = true
  }, T.flush = I, T
}