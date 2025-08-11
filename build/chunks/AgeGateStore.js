/** Chunk was on 27978 **/
/** chunk id: 899370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var r, i, l, Chunk973361 = require("./973361.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk358085 = require("./358085.js"),
  Chunk723359 = require("./723359.js");
let d = null,
  h = "underage";
class p extends(l = Chunk442837.ZP.Store) {
  isUnderageAnonymous() {
    if (Chunk358085.isPlatformEmbedded && 1) {
      if (null != d && d + Chunk723359.k0 > Date.now()) returntrue
    } else if (1) return null != Chunk973361.parse(document.cookie)[h];
    returnfalse
  }
}
i = "AgeGateStore", (r = "displayName") in p ? Object.defineProperty(p, r, {
  value: i,
  enumerable: true,
  configurable: true,
  writable: true
}) : p[r] = i;
let f = new p(Chunk570140.Z, {
  AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function() {
    d = Date.now(), document.cookie = "".concat(h, "=1;path=/")
  },
  LOGIN_SUCCESS: function() {
    d = null, document.cookie = "".concat(h, "=1;path=/;max-age=0")
  }
})