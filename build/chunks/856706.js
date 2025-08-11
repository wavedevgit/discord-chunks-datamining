/** Chunk was on 90350 **/
/** chunk id: 856706, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk947704 = require("./947704.js");

function i(t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(t, (0, r.Z)(i.key), i)
  }
}

function o(t, e, n) {
  return e && i(t.prototype, e), n && i(t, n), Object.defineProperty(t, "prototype", {
    writable: false
  }), t
}