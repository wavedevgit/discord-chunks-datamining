/** Chunk was on web.js **/
var r = n(42848),
  i = 0xfffffffe,
  o = Math.floor,
  a = Math.min;

function s(e, t, n, s) {
  var l = 0,
    c = null == e ? 0 : e.length;
  if (0 === c) return 0;
  for (var u = (t = n(t)) != t, d = null === t, f = r(t), _ = void 0 === t; l < c;) {
    var p = o((l + c) / 2),
      h = n(e[p]),
      m = void 0 !== h,
      g = null === h,
      E = h == h,
      v = r(h);
    if (u) var b = s || E;
    else b = _ ? E && (s || m) : d ? E && m && (s || !g) : f ? E && m && !g && (s || !v) : !g && !v && (s ? h <= t : h < t);
    b ? l = p + 1 : c = p
  }
  return a(c, i)
}
e.exports = s