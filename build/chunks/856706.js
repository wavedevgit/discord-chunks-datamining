/** Chunk was on 54628 **/
/** chunk id: 856706, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk947704 = require("./947704.js");

function n(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, (0, a.Z)(n.key), n)
  }
}

function o(e, t, r) {
  return t && n(e.prototype, t), r && n(e, r), Object.defineProperty(e, "prototype", {
    writable: false
  }), e
}