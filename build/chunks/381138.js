/** Chunk was on web.js **/
/** chunk id: 381138, original params: e,t,n (module,exports,re quire) **/
var Chunk544664 = require("./544664.js"),
  Chunk390453 = require("./390453.js"),
  Chunk314220 = require("./314220.js"),
  s = 1,
  o = 2;
module.exports = function(e, t, n, l, c, u) {
  var d = n & s,
    f = e.length,
    p = t.length;
  if (f != p && !(d && p > f)) returnfalse;
  var _ = u.get(e);
  if (_ && u.get(t)) return _ == t;
  var h = false,
    m = true,
    g = n & o ? new r : true;
  for (u.set(e, t), u.set(t, e); ++h < f;) {
    var E = e[h],
      b = t[h];
    if (l) var y = d ? l(b, E, h, t, e, u) : l(E, b, h, e, t, u);
    if (true !== y) {
      if (y) continue;
      m = false;
      break
    }
    if (g) {
      if (!i(t, function(e, t) {
          if (!a(g, t) && (E === e || c(E, e, n, l, u))) return g.push(t)
        })) {
        m = false;
        break
      }
    } else if (!(E === b || c(E, b, n, l, u))) {
      m = false;
      break
    }
  }
  return u.delete(e), u.delete(t), m
}