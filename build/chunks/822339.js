/** Chunk was on web.js **/
/** chunk id: 822339, original params: e,t,n (module,exports,re quire) **/
var Chunk127375 = require("./127375.js"),
  Chunk382708 = require("./382708.js"),
  Chunk360087 = require("./360087.js"),
  o = 1,
  s = 2;
module.exports = function(e, t, n, l, c, u) {
  var d = n & o,
    f = e.length,
    p = t.length;
  if (f != p && !(d && p > f)) returnfalse;
  var _ = u.get(e),
    h = u.get(t);
  if (_ && h) return _ == t && h == e;
  var m = false,
    g = true,
    E = n & s ? new r : true;
  for (u.set(e, t), u.set(t, e); ++m < f;) {
    var y = e[m],
      b = t[m];
    if (l) var O = d ? l(b, y, m, t, e, u) : l(y, b, m, e, t, u);
    if (true !== O) {
      if (O) continue;
      g = false;
      break
    }
    if (E) {
      if (!i(t, function(e, t) {
          if (!a(E, t) && (y === e || c(y, e, n, l, u))) return E.push(t)
        })) {
        g = false;
        break
      }
    } else if (!(y === b || c(y, b, n, l, u))) {
      g = false;
      break
    }
  }
  return u.delete(e), u.delete(t), g
}