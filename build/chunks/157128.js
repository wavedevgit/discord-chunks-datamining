/** Chunk was on 47950 **/
/** chunk id: 157128, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk634502 = require("./634502.js"),
  Chunk329513 = require("./329513.js");
let a = function(e, t, r, a) {
  var i = r.length,
    l = i,
    s = !a;
  if (null == e) return !l;
  for (e = Object(e); i--;) {
    var u = r[i];
    if (s && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) returnfalse
  }
  for (; ++i < l;) {
    var c = (u = r[i])[0],
      p = e[c],
      d = u[1];
    if (s && u[2]) {
      if (true === p && !(c in e)) returnfalse
    } else {
      var f = new n.A;
      if (a) var h = a(p, d, c, e, t, f);
      if (!(true === h ? (0, o.A)(d, p, 3, a, f) : h)) returnfalse
    }
  }
  returntrue
}