/** Chunk was on 72853 **/
/** chunk id: 292263, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = null,
  c = false;
class s extends(i = Chunk442837.ZP.Store) {
  get loading() {
    return c
  }
  get methods() {
    return o
  }
}(r = "displayName") in s ? Object.defineProperty(s, r, {
  value: "AgeVerificationStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : s[r] = "AgeVerificationStore";
let u = new s(Chunk570140.Z, {
  AGE_VERIFICATION_METHODS_LOAD_START: function() {
    c = true
  },
  AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function(e) {
    let {
      methods: t
    } = e;
    o = t, c = false
  },
  AGE_VERIFICATION_METHODS_LOAD_FAILURE: function() {
    c = false
  }
})