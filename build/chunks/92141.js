/** Chunk was on web.js **/
/** chunk id: 92141, original params: e,t,n (module,exports,re quire) **/
var Chunk821164 = require("./821164.js"),
  i = 1,
  a = Object.prototype.hasOwnProperty;
module.exports = function(e, t, n, o, s, l) {
  var c = n & i,
    u = r(e),
    d = u.length;
  if (d != r(t).length && !c) returnfalse;
  for (var f = d; f--;) {
    var p = u[f];
    if (!(c ? p in t : a.call(t, p))) returnfalse
  }
  var _ = l.get(e);
  if (_ && l.get(t)) return _ == t;
  var h = true;
  l.set(e, t), l.set(t, e);
  for (var m = c; ++f < d;) {
    var g = e[p = u[f]],
      E = t[p];
    if (o) var b = c ? o(E, g, p, t, e, l) : o(g, E, p, e, t, l);
    if (!(true === b ? g === E || s(g, E, n, o, l) : b)) {
      h = false;
      break
    }
    m || (m = "constructor" == p)
  }
  if (h && !m) {
    var y = e.constructor,
      O = t.constructor;
    y != O && "constructor" in e && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof O && O instanceof O) && (h = false)
  }
  return l.delete(e), l.delete(t), h
}