/** Chunk was on 23706 **/
/** chunk id: 706852, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk815995 = require("./815995.js");

function a(e, t) {
  if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(e, "prototype", {
    writable: false
  }), t && (0, n.Z)(e, t)
}