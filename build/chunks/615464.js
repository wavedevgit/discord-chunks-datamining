/** Chunk was on 47950 **/
/** chunk id: 615464, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk722242 = require("./722242.js"),
  Chunk826479 = require("./826479.js"),
  Chunk656446 = require("./656446.js");
let i = function(e, t, r, i, l, s) {
  var u = 1 & r,
    c = e.length,
    p = t.length;
  if (c != p && !(u && p > c)) returnfalse;
  var d = s.get(e),
    f = s.get(t);
  if (d && f) return d == t && f == e;
  var h = false,
    b = true,
    v = 2 & r ? new n.A : true;
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
      if (!(0, o.A)(t, function(e, t) {
          if (!(0, a.A)(v, t) && (g === e || l(g, e, r, i, s))) return v.push(t)
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