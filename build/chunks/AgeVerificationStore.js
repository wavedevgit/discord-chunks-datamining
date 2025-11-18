/** Chunk was on 65347 **/
/** chunk id: 292263, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var a, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let s = null,
  o = false;
class c extends(l = Chunk442837.ZP.Store) {
  get loading() {
    return o
  }
  get methods() {
    return s
  }
}(a = "displayName") in c ? Object.defineProperty(c, a, {
  value: "AgeVerificationStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[a] = "AgeVerificationStore";
let d = new c(Chunk570140.Z, {
  AGE_VERIFICATION_METHODS_LOAD_START: function() {
    o = true
  },
  AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function(e) {
    let {
      methods: t
    } = e;
    s = t, o = false
  },
  AGE_VERIFICATION_METHODS_LOAD_FAILURE: function() {
    o = false
  }
})