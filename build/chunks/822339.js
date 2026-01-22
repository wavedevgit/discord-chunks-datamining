/** Chunk was on web.js **/
/** chunk id: 822339, original params: e,t,n (module,exports,re quire) **/
var Chunk127375 = require("./127375.js"),
  Chunk382708 = require("./382708.js"),
  Chunk360087 = require("./360087.js"),
  s = 1,
  o = 2;
module.exports = function(e, t, n, l, c, u) {
  var d = n & s,
    f = e.length,
    p = t.length;
  if (f != p && !(d && p > f)) returnfalse;
  var _ = u.get(e),
    h = u.get(t);
  if (_ && h) return _ == t && h == e;
  var m = false,
    g = true,
    E = n & o ? new r : true;
  for (u.set(e, t), u.set(t, e); ++m < f;) {
    var b = e[m],
      y = t[m];
    if (l) var O = d ? l(y, b, m, t, e, u) : l(b, y, m, e, t, u);
    if (true !== O) {
      if (O) continue;
      g = false;
      break
    }
    if (E) {
      if (!i(t, function(e, t) {
          if (!a(E, t) && (b === e || c(b, e, n, l, u))) return E.push(t)
        })) {
        g = false;
        break
      }
    } else if (!(b === y || c(b, y, n, l, u))) {
      g = false;
      break
    }
  }
  return u.delete(e), u.delete(t), g
}