/** Chunk was on 27978 **/
/** chunk id: 899370, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var r, i, Chunk973361 = require("./973361.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk358085 = require("./358085.js"),
  Chunk723359 = require("./723359.js");
let u = null,
  d = "underage";
class h extends(i = Chunk442837.ZP.Store) {
  isUnderageAnonymous() {
    if (Chunk358085.isPlatformEmbedded && 1) {
      if (null != u && u + Chunk723359.k0 > Date.now()) returntrue
    } else if (1) return null != Chunk973361.parse(document.cookie)[d];
    returnfalse
  }
}(r = "displayName") in h ? Object.defineProperty(h, r, {
  value: "AgeGateStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[r] = "AgeGateStore";
let f = new h(Chunk570140.Z, {
  AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function() {
    u = Date.now(), document.cookie = "".concat(d, "=1;path=/")
  },
  LOGIN_SUCCESS: function() {
    u = null, document.cookie = "".concat(d, "=1;path=/;max-age=0")
  }
})