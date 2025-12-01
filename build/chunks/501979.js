/** Chunk was on web.js **/
/** chunk id: 501979, original params: e,t,n (module,exports,re quire) **/
var Chunk425561 = require("./425561.js"),
  Chunk393531 = require("./393531.js"),
  Chunk208529 = require("./208529.js"),
  o = 1,
  s = 2;
module.exports = function(e, t, n, l, c, u) {
  var d = n & o,
    f = e.length,
    p = t.length;
  if (f != p && !(d && p > f)) returnfalse;
  var _ = u.get(e),
    m = u.get(t);
  if (_ && m) return _ == t && m == e;
  var h = false,
    g = true,
    E = n & s ? new r : true;
  for (u.set(e, t), u.set(t, e); ++h < f;) {
    var b = e[h],
      y = t[h];
    if (l) var O = d ? l(y, b, h, t, e, u) : l(b, y, h, e, t, u);
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