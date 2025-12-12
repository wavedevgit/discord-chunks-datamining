/** Chunk was on 50614 **/
/** chunk id: 292263, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = null,
  s = false;
class c extends(l = Chunk442837.ZP.Store) {
  get loading() {
    return s
  }
  get methods() {
    return o
  }
}(i = "displayName") in c ? Object.defineProperty(c, i, {
  value: "AgeVerificationStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[i] = "AgeVerificationStore";
let u = new c(Chunk570140.Z, {
  AGE_VERIFICATION_METHODS_LOAD_START: function() {
    s = true
  },
  AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function(t) {
    let {
      methods: e
    } = t;
    o = e, s = false
  },
  AGE_VERIFICATION_METHODS_LOAD_FAILURE: function() {
    s = false
  }
})