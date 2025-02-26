/** Chunk was on 68051 **/
n.d(t, {
  Z: () => u
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

function d(e) {
  s = e.requiredAction
}
i = "UserRequiredActionStore", (r = "displayName") in c ? Object.defineProperty(c, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : c[r] = i;
let u = new c(l.Z, {
  CONNECTION_OPEN: d,
  USER_REQUIRED_ACTION_UPDATE: d
})