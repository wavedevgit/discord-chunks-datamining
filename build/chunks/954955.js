/** Chunk was on web.js **/
var r = n(661233),
  i = n(586769),
  o = n(675769),
  a = "Expected a function",
  s = Math.max,
  l = Math.min;

function c(e, t, n) {
  var c, u, d, f, _, p, h = 0,
    m = !1,
    g = !1,
    E = !0;
  if ("function" != typeof e) throw TypeError(a);

  function v(t) {
    var n = c,
      r = u;
    return c = u = void 0, h = t, f = e.apply(r, n)
  }

  function b(e) {
    return h = e, _ = setTimeout(I, t), m ? v(e) : f
  }

  function y(e) {
    var n = e - p,
      r = e - h,
      i = t - n;
    return g ? l(i, d - r) : i
  }

  function O(e) {
    var n = e - p,
      r = e - h;
    return void 0 === p || n >= t || n < 0 || g && r >= d
  }

  function I() {
    var e = i();
    if (O(e)) return S(e);
    _ = setTimeout(I, y(e))
  }

  function S(e) {
    return (_ = void 0, E && c) ? v(e) : (c = u = void 0, f)
  }

  function T() {
    void 0 !== _ && clearTimeout(_), h = 0, c = p = u = _ = void 0
  }

  function N() {
    return void 0 === _ ? f : S(i())
  }

  function A() {
    var e = i(),
      n = O(e);
    if (c = arguments, u = this, p = e, n) {
      if (void 0 === _) return b(p);
      if (g) return clearTimeout(_), _ = setTimeout(I, t), v(p)
    }
    return void 0 === _ && (_ = setTimeout(I, t)), f
  }
  return t = o(t) || 0, r(n) && (m = !!n.leading, d = (g = "maxWait" in n) ? s(o(n.maxWait) || 0, t) : d, E = "trailing" in n ? !!n.trailing : E), A.cancel = T, A.flush = N, A
}
e.exports = c