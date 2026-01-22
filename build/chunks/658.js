/** Chunk was on 92777 **/
/** chunk id: 658, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk684401 = require("./684401.js");

function n(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, (0, a.A)(n.key), n)
  }
}

function s(e, t, r) {
  return t && n(e.prototype, t), r && n(e, r), Object.defineProperty(e, "prototype", {
    writable: false
  }), e
}