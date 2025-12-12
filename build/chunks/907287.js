/** Chunk was on web.js **/
/** chunk id: 907287, original params: e,t,n (module,exports,re quire) **/
var Chunk990393 = require("./990393.js"),
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
  var _ = l.get(e),
    m = l.get(t);
  if (_ && m) return _ == t && m == e;
  var h = true;
  l.set(e, t), l.set(t, e);
  for (var g = c; ++f < d;) {
    var E = e[p = u[f]],
      b = t[p];
    if (o) var y = c ? o(b, E, p, t, e, l) : o(E, b, p, e, t, l);
    if (!(true === y ? E === b || s(E, b, n, o, l) : y)) {
      h = false;
      break
    }
    g || (g = "constructor" == p)
  }
  if (h && !g) {
    var O = e.constructor,
      v = t.constructor;
    O != v && "constructor" in e && "constructor" in t && !("function" == typeof O && O instanceof O && "function" == typeof v && v instanceof v) && (h = false)
  }
  return l.delete(e), l.delete(t), h
}