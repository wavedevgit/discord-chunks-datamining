/** Chunk was on 92777 **/
/** chunk id: 552932, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => n
});
var Chunk149859 = require("./149859.js");

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
  }), t && (0, a.A)(e, t)
}