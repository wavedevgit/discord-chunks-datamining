/** Chunk was on 66382 **/
/** chunk id: 583738, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk421896 = require("./421896.js"),
  Chunk533778 = require("./533778.js");
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
      f = u[1];
    if (s && u[2]) {
      if (true === p && !(c in e)) returnfalse
    } else {
      var d = new n.Z;
      if (a) var h = a(p, f, c, e, t, d);
      if (!(true === h ? (0, o.Z)(f, p, 3, a, d) : h)) returnfalse
    }
  }
  returntrue
}