/** Chunk was on 66382 **/
/** chunk id: 318670, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk243748 = require("./243748.js"),
  Chunk806159 = require("./806159.js"),
  Chunk738562 = require("./738562.js");
let i = function(e, t, r, i, l, s) {
  var u = 1 & r,
    c = e.length,
    p = t.length;
  if (c != p && !(u && p > c)) returnfalse;
  var f = s.get(e),
    d = s.get(t);
  if (f && d) return f == t && d == e;
  var h = false,
    b = true,
    v = 2 & r ? new n.Z : true;
  for (s.set(e, t), s.set(t, e); ++h < c;) {
    var g = e[h],
      x = t[h];
    if (i) var y = u ? i(x, g, h, t, e, s) : i(g, x, h, e, t, s);
    if (true !== y) {
      if (y) continue;
      b = false;
      break
    }
    if (v) {
      if (!(0, o.Z)(t, function(e, t) {
          if (!(0, a.Z)(v, t) && (g === e || l(g, e, r, i, s))) return v.push(t)
        })) {
        b = false;
        break
      }
    } else if (!(g === x || l(g, x, r, i, s))) {
      b = false;
      break
    }
  }
  return s.delete(e), s.delete(t), b
}