/** Chunk was on 47950 **/
/** chunk id: 548345, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk403396 = require("./403396.js");

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
  return r.cache = new(o.Cache || n.A), r
}
o.Cache = Chunk403396.A;
let a = o