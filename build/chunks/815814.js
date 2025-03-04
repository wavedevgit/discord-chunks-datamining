/** Chunk was on web.js **/
"use strict";
var r = n(640767),
  i = n(393020),
  o = n(493883),
  a = n(755228),
  s = n(383718),
  l = n(713720),
  c = n(1213),
  u = n(124084),
  d = n(581527),
  f = n(192853),
  _ = n(163494),
  p = Object("a"),
  h = "a" !== p[0] || !(0 in p),
  g = f("String.prototype.split");
e.exports = function(e) {
  var t, n = u(this),
    f = c((h && _(n) ? g(n, "") : n).length);
  if (!l(e)) throw TypeError("Array.prototype.map callback must be a function");
  arguments.length > 1 && (t = arguments[1]);
  for (var p = r(n, f), m = 0; m < f;) {
    var E = d(m);
    if (s(n, E)) {
      var v = i(e, t, [a(n, E), m, n]);
      o(p, E, v)
    }
    m += 1
  }
  return p
}