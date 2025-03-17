/** Chunk was on 27978 **/
n.d(t, {
  Z: () => p
});
var r, i, o, a = n(442837),
  s = n(570140),
  l = n(981631);
let c = null,
  u = {};
class d extends(o = a.ZP.Store) {
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
let p = new d(s.Z, {
  NATIVE_APP_MODAL_OPENING: function(e) {
    let {
      code: t
    } = e;
    u[t] = l.kEZ.OPENING, null === c && (c = l.kEZ.OPENING)
  },
  NATIVE_APP_MODAL_OPENED: function(e) {
    let {
      code: t
    } = e;
    u[t] = l.kEZ.OPEN, c = l.kEZ.OPEN
  },
  NATIVE_APP_MODAL_OPEN_FAILED: function(e) {
    let {
      code: t
    } = e;
    u[t] = l.kEZ.OPEN_FAIL, (null === c || c === l.kEZ.OPENING) && (c = l.kEZ.OPEN_FAIL)
  }
})