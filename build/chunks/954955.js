/** Chunk was on web.js **/
var r = n(661233),
  i = n(586769),
  o = n(675769),
  a = "Expected a function",
  s = Math.max,
  l = Math.min;

function c(e, t, n) {
  var c, u, d, f, _, p, h = 0,
    g = !1,
    m = !1,
    E = !0;
  if ("function" != typeof e) throw TypeError(a);

  function v(t) {
    var n = c,
      r = u;
    return c = u = void 0, h = t, f = e.apply(r, n)
  }

  function b(e) {
    return h = e, _ = setTimeout(S, t), g ? v(e) : f
  }

  function y(e) {
    var n = e - p,
      r = e - h,
      i = t - n;
    return m ? l(i, d - r) : i
  }

  function O(e) {
    var n = e - p,
      r = e - h;
    return void 0 === p || n >= t || n < 0 || m && r >= d
  }

  function S() {
    var e = i();
    if (O(e)) return I(e);
    _ = setTimeout(S, y(e))
  }

  function I(e) {
    return (_ = void 0, E && c) ? v(e) : (c = u = void 0, f)
  }

  function T() {
    void 0 !== _ && clearTimeout(_), h = 0, c = p = u = _ = void 0
  }

  function N() {
    return void 0 === _ ? f : I(i())
  }

  function A() {
    var e = i(),
      n = O(e);
    if (c = arguments, u = this, p = e, n) {
      if (void 0 === _) return b(p);
      if (m) return clearTimeout(_), _ = setTimeout(S, t), v(p)
    }
    return void 0 === _ && (_ = setTimeout(S, t)), f
  }
  return t = o(t) || 0, r(n) && (g = !!n.leading, d = (m = "maxWait" in n) ? s(o(n.maxWait) || 0, t) : d, E = "trailing" in n ? !!n.trailing : E), A.cancel = T, A.flush = N, A
}
e.exports = c