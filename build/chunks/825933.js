/** Chunk was on web.js **/
/** chunk id: 825933, original params: e,t,n (module,exports,re quire) **/
var Chunk220350 = require("./220350.js"),
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
  var _ = l.get(e),
    h = l.get(t);
  if (_ && h) return _ == t && h == e;
  var m = true;
  l.set(e, t), l.set(t, e);
  for (var g = c; ++f < d;) {
    var E = e[p = u[f]],
      b = t[p];
    if (s) var y = c ? s(b, E, p, t, e, l) : s(E, b, p, e, t, l);
    if (!(true === y ? E === b || o(E, b, n, s, l) : y)) {
      m = false;
      break
    }
    g || (g = "constructor" == p)
  }
  if (m && !g) {
    var O = e.constructor,
      A = t.constructor;
    O != A && "constructor" in e && "constructor" in t && !("function" == typeof O && O instanceof O && "function" == typeof A && A instanceof A) && (m = false)
  }
  return l.delete(e), l.delete(t), m
}