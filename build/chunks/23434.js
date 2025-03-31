/** Chunk was on 83379 **/
n.d(t, {
  Z: () => d
});
var r, i, a, o = n(442837),
  l = n(570140);
let s = null;
class c extends(a = o.ZP.Store) {
  hasAction() {
    return null != s
  }
  getAction() {
    return s
  }
}

function u(e) {
  s = e.requiredAction
}
i = "UserRequiredActionStore", (r = "displayName") in c ? Object.defineProperty(c, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : c[r] = i;
let d = new c(l.Z, {
  CONNECTION_OPEN: u,
  USER_REQUIRED_ACTION_UPDATE: u
})