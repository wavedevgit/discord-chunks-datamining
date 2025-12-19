/** Chunk was on 23706 **/
/** chunk id: 856706, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk947704 = require("./947704.js");

function a(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || false, a.configurable = true, "value" in a && (a.writable = true), Object.defineProperty(e, (0, n.Z)(a.key), a)
  }
}

function o(e, t, r) {
  return t && a(e.prototype, t), r && a(e, r), Object.defineProperty(e, "prototype", {
    writable: false
  }), e
}