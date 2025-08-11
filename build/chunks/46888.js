/** Chunk was on 23357 **/
/** chunk id: 46888, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk655214 = require("./655214.js"),
  Chunk582230 = require("./582230.js");

function a(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || false, a.configurable = true, "value" in a && (a.writable = true), r(e, (0, o.Z)(a.key), a)
  }
}

function i(e, t, n) {
  return t && a(e.prototype, t), n && a(e, n), r(e, "prototype", {
    writable: false
  }), e
}