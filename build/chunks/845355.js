/** Chunk was on web.js **/
/** chunk id: 845355, original params: e,t,n (module,exports,re quire) **/
var Chunk42848 = require("./42848.js"),
  i = 0xfffffffe,
  o = Math.floor,
  a = Math.min;
module.exports = function(e, t, n, s) {
  var l = 0,
    c = null == e ? 0 : e.length;
  if (0 === c) return 0;
  for (var u = (t = n(t)) != t, d = null === t, f = r(t), _ = true === t; l < c;) {
    var p = o((l + c) / 2),
      h = n(e[p]),
      m = true !== h,
      g = null === h,
      E = h == h,
      b = r(h);
    if (u) var y = s || E;
    else y = _ ? E && (s || m) : d ? E && m && (s || !g) : f ? E && m && !g && (s || !b) : !g && !b && (s ? h <= t : h < t);
    y ? l = p + 1 : c = p
  }
  return a(c, i)
}