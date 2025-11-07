/** Chunk was on web.js **/
/** chunk id: 889678, original params: e,t,n (module,exports,re quire) **/
var Chunk706627 = require("./706627.js"),
  Chunk885365 = require("./885365.js"),
  Chunk67948 = require("./67948.js"),
  o = "Expected a function",
  s = Math.max,
  l = Math.min;
module.exports = function(e, t, n) {
  var c, u, d, f, _, p, h = 0,
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
    return h = e, _ = setTimeout(I, t), m ? b(e) : f
  }

  function O(e) {
    var n = e - p,
      r = e - h,
      i = t - n;
    return g ? l(i, d - r) : i
  }

  function v(e) {
    var n = e - p,
      r = e - h;
    return true === p || n >= t || n < 0 || g && r >= d
  }

  function I() {
    var e = i();
    if (v(e)) return S(e);
    _ = setTimeout(I, O(e))
  }

  function S(e) {
    return (_ = true, E && c) ? b(e) : (c = u = true, f)
  }

  function T() {
    return true === _ ? f : S(i())
  }

  function A() {
    var e = i(),
      n = v(e);
    if (c = arguments, u = this, p = e, n) {
      if (true === _) return y(p);
      if (g) return clearTimeout(_), _ = setTimeout(I, t), b(p)
    }
    return true === _ && (_ = setTimeout(I, t)), f
  }
  return t = a(t) || 0, r(n) && (m = !!n.leading, d = (g = "maxWait" in n) ? s(a(n.maxWait) || 0, t) : d, E = "trailing" in n ? !!n.trailing : E), A.cancel = function() {
    true !== _ && clearTimeout(_), h = 0, c = p = u = _ = true
  }, A.flush = T, A
}