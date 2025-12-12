/** Chunk was on web.js **/
/** chunk id: 92141, original params: e,t,n (module,exports,re quire) **/
var Chunk821164 = require("./821164.js"),
  i = 1,
  o = Object.prototype.hasOwnProperty;
module.exports = function(e, t, n, a, s, l) {
  var c = n & i,
    u = r(e),
    d = u.length;
  if (d != r(t).length && !c) returnfalse;
  for (var f = d; f--;) {
    var p = u[f];
    if (!(c ? p in t : o.call(t, p))) returnfalse
  }
  var _ = l.get(e);
  if (_ && l.get(t)) return _ == t;
  var m = true;
  l.set(e, t), l.set(t, e);
  for (var h = c; ++f < d;) {
    var g = e[p = u[f]],
      E = t[p];
    if (a) var b = c ? a(E, g, p, t, e, l) : a(g, E, p, e, t, l);
    if (!(true === b ? g === E || s(g, E, n, a, l) : b)) {
      m = false;
      break
    }
    h || (h = "constructor" == p)
  }
  if (m && !h) {
    var y = e.constructor,
      O = t.constructor;
    y != O && "constructor" in e && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof O && O instanceof O) && (m = false)
  }
  return l.delete(e), l.delete(t), m
}