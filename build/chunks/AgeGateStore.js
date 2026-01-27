/** Chunk was on 86142 **/
/** chunk id: 17841, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
});
var r, i, Chunk664294 = require("./664294.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk723702 = require("./723702.js"),
  Chunk204925 = require("./204925.js");
let u = null,
  d = "underage";
class h extends(i = Chunk311907.Ay.Store) {
  isUnderageAnonymous() {
    if (o.isPlatformEmbedded && 1) {
      if (null != u && u + c.bm > Date.now()) returntrue
    } else if (1) return null != s.parse(document.cookie)[d];
    returnfalse
  }
}(r = "displayName") in h ? Object.defineProperty(h, r, {
  value: "AgeGateStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[r] = "AgeGateStore";
let p = new h(Chunk73153.h, {
  AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function() {
    u = Date.now(), document.cookie = "".concat(d, "=1;path=/")
  },
  LOGIN_SUCCESS: function() {
    u = null, document.cookie = "".concat(d, "=1;path=/;max-age=0")
  }
})