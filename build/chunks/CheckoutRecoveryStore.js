/** Chunk was on 26434 **/
/** chunk id: 30684, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = false,
  s = false,
  c = false;
class u extends(i = Chunk442837.ZP.Store) {
  getIsTargeted() {
    return c
  }
  shouldFetchCheckoutRecovery() {
    return !a && !s
  }
}(r = "displayName") in u ? Object.defineProperty(u, r, {
  value: "CheckoutRecoveryStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = "CheckoutRecoveryStore";
let d = new u(Chunk570140.Z, {
  CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function(e) {
    s = true, a = false, c = e.isTargeted
  },
  CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function() {
    s = true, a = false
  },
  CHECKOUT_RECOVERY_STATUS_FETCH: function() {
    a = true
  },
  LOGOUT: function() {
    a = false, s = false, c = false
  }
})