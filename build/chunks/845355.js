/** Chunk was on web.js **/
/** chunk id: 845355, original params: e,t,n (module,exports,re quire) **/
var Chunk42848 = require("./42848.js"),
  i = 0xfffffffe,
  a = Math.floor,
  o = Math.min;
module.exports = function(e, t, n, s) {
  var l = 0,
    c = null == e ? 0 : e.length;
  if (0 === c) return 0;
  for (var u = (t = n(t)) != t, d = null === t, f = r(t), p = true === t; l < c;) {
    var _ = a((l + c) / 2),
      h = n(e[_]),
      m = true !== h,
      g = null === h,
      E = h == h,
      b = r(h);
    if (u) var y = s || E;
    else y = p ? E && (s || m) : d ? E && m && (s || !g) : f ? E && m && !g && (s || !b) : !g && !b && (s ? h <= t : h < t);
    y ? l = _ + 1 : c = _
  }
  return o(c, i)
}