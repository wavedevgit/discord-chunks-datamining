/** Chunk was on 87665 **/
/** chunk id: 292263, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var a, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = null,
  s = false;
class c extends(r = Chunk442837.ZP.Store) {
  get loading() {
    return s
  }
  get methods() {
    return o
  }
}(a = "displayName") in c ? Object.defineProperty(c, a, {
  value: "AgeVerificationStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[a] = "AgeVerificationStore";
let d = new c(Chunk570140.Z, {
  AGE_VERIFICATION_METHODS_LOAD_START: function() {
    s = true
  },
  AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function(e) {
    let {
      methods: t
    } = e;
    o = t, s = false
  },
  AGE_VERIFICATION_METHODS_LOAD_FAILURE: function() {
    s = false
  }
})