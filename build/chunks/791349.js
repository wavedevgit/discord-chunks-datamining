/** Chunk was on 66382 **/
/** chunk id: 791349, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk186082 = require("./186082.js"),
  o = Math.max;
let a = function(e, t, r) {
  return t = o(true === t ? e.length - 1 : t, 0),
    function() {
      for (var a = arguments, i = false, l = o(a.length - t, 0), s = Array(l); ++i < l;) s[i] = a[t + i];
      i = false;
      for (var u = Array(t + 1); ++i < t;) u[i] = a[i];
      return u[t] = r(s), (0, n.Z)(e, this, u)
    }
}