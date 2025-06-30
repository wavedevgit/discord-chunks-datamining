/** Chunk was on 27978 **/
n.d(t, {
  Z: () => h
});
var r, i, l, s = n(442837),
  a = n(570140),
  o = n(981631);
let c = null,
  u = {};
class d extends(l = s.ZP.Store) {
  getState(e) {
    return u[e]
  }
  getHighestState() {
    return c
  }
}
i = "CodedLinkNativeAppStateStore", (r = "displayName") in d ? Object.defineProperty(d, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[r] = i;
let h = new d(a.Z, {
  NATIVE_APP_MODAL_OPENING: function(e) {
    let {
      code: t
    } = e;
    u[t] = o.kEZ.OPENING, null === c && (c = o.kEZ.OPENING)
  },
  NATIVE_APP_MODAL_OPENED: function(e) {
    let {
      code: t
    } = e;
    u[t] = o.kEZ.OPEN, c = o.kEZ.OPEN
  },
  NATIVE_APP_MODAL_OPEN_FAILED: function(e) {
    let {
      code: t
    } = e;
    u[t] = o.kEZ.OPEN_FAIL, (null === c || c === o.kEZ.OPENING) && (c = o.kEZ.OPEN_FAIL)
  }
})