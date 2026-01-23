/** Chunk was on web.js **/
/** chunk id: 431250, original params: e,t,n (module,exports,re quire) **/
var Chunk765405 = require("./765405.js"),
  i = 1,
  a = Object.prototype.hasOwnProperty;
module.exports = function(e, t, n, s, o, l) {
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
    if (s) var y = c ? s(E, g, p, t, e, l) : s(g, E, p, e, t, l);
    if (!(true === y ? g === E || o(g, E, n, s, l) : y)) {
      h = false;
      break
    }
    m || (m = "constructor" == p)
  }
  if (h && !m) {
    var b = e.constructor,
      O = t.constructor;
    b != O && "constructor" in e && "constructor" in t && !("function" == typeof b && b instanceof b && "function" == typeof O && O instanceof O) && (h = false)
  }
  return l.delete(e), l.delete(t), h
}