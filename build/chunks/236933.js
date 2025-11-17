/** Chunk was on 66382 **/
/** chunk id: 236933, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk334389 = require("./334389.js");

function o(e, t) {
  if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
  var r = function() {
    var n = arguments,
      o = t ? t.apply(this, n) : n[0],
      a = r.cache;
    if (a.has(o)) return a.get(o);
    var i = e.apply(this, n);
    return r.cache = a.set(o, i) || a, i
  };
  return r.cache = new(o.Cache || n.Z), r
}
o.Cache = Chunk334389.Z;
let a = o