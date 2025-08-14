/** Chunk was on 75816 **/
/** chunk id: 856706, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk947704 = require("./947704.js");

function o(t, e) {
  for (var r = 0; r < e.length; r++) {
    var o = e[r];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(t, (0, n.Z)(o.key), o)
  }
}

function l(t, e, r) {
  return e && o(t.prototype, e), r && o(t, r), Object.defineProperty(t, "prototype", {
    writable: false
  }), t
}