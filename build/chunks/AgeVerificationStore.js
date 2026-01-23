/** Chunk was on 65599 **/
/** chunk id: 787301, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var a, l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let s = null,
  o = false;
class c extends(l = Chunk311907.Ay.Store) {
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
let d = new c(Chunk73153.h, {
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