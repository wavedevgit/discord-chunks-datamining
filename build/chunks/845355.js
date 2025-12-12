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
  for (var u = (t = n(t)) != t, d = null === t, f = r(t), p = true === t; l < c;) {
    var _ = o((l + c) / 2),
      m = n(e[_]),
      h = true !== m,
      g = null === m,
      E = m == m,
      b = r(m);
    if (u) var y = s || E;
    else y = p ? E && (s || h) : d ? E && h && (s || !g) : f ? E && h && !g && (s || !b) : !g && !b && (s ? m <= t : m < t);
    y ? l = _ + 1 : c = _
  }
  return a(c, i)
}