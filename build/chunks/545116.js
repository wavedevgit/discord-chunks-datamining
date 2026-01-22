/** Chunk was on 47950 **/
/** chunk id: 545116, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk868487 = require("./868487.js"),
  o = Object.prototype.hasOwnProperty;
let a = function(e, t, r, a, i, l) {
  var s = 1 & r,
    u = (0, n.A)(e),
    c = u.length;
  if (c != (0, n.A)(t).length && !s) returnfalse;
  for (var p = c; p--;) {
    var d = u[p];
    if (!(s ? d in t : o.call(t, d))) returnfalse
  }
  var f = l.get(e),
    h = l.get(t);
  if (f && h) return f == t && h == e;
  var b = true;
  l.set(e, t), l.set(t, e);
  for (var v = s; ++p < c;) {
    var g = e[d = u[p]],
      x = t[d];
    if (a) var y = s ? a(x, g, d, t, e, l) : a(g, x, d, e, t, l);
    if (!(true === y ? g === x || i(g, x, r, a, l) : y)) {
      b = false;
      break
    }
    v || (v = "constructor" == d)
  }
  if (b && !v) {
    var m = e.constructor,
      w = t.constructor;
    m != w && "constructor" in e && "constructor" in t && !("function" == typeof m && m instanceof m && "function" == typeof w && w instanceof w) && (b = false)
  }
  return l.delete(e), l.delete(t), b
}