/** Chunk was on 54628 **/
/** chunk id: 706852, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => n
});
var Chunk815995 = require("./815995.js");

function n(e, t) {
  if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(e, "prototype", {
    writable: false
  }), t && (0, a.Z)(e, t)
}