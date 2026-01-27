/** Chunk was on 92917 **/
/** chunk id: 869968, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let s = false,
  o = false,
  c = false;
class u extends(i = Chunk311907.Ay.Store) {
  getIsTargeted() {
    return c
  }
  shouldFetchCheckoutRecovery() {
    return !s && !o
  }
}(r = "displayName") in u ? Object.defineProperty(u, r, {
  value: "CheckoutRecoveryStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = "CheckoutRecoveryStore";
let d = new u(Chunk73153.h, {
  CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function(e) {
    o = true, s = false, c = e.isTargeted
  },
  CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function() {
    o = true, s = false
  },
  CHECKOUT_RECOVERY_STATUS_FETCH: function() {
    s = true
  },
  LOGOUT: function() {
    s = false, o = false, c = false
  }
})