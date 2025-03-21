/** Chunk was on 8473 **/
n.d(t, {
  Z: () => p
});
var r, i, a, o = n(442837),
  l = n(570140);
let s = !1,
  c = !1,
  u = !1;
class d extends(a = o.ZP.Store) {
  getIsTargeted() {
    return u
  }
  shouldFetchCheckoutRecovery() {
    return !s && !c
  }
}
i = "CheckoutRecoveryStore", (r = "displayName") in d ? Object.defineProperty(d, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[r] = i;
let p = new d(l.Z, {
  CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function(e) {
    c = !0, s = !1, u = e.isTargeted
  },
  CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function() {
    c = !0, s = !1
  },
  CHECKOUT_RECOVERY_STATUS_FETCH: function() {
    s = !0
  },
  LOGOUT: function() {
    s = !1, c = !1, u = !1
  }
})