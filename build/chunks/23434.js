/** Chunk was on 56898 **/
t.d(n, {
  Z: () => p
});
var o, r, i, a = t(442837),
  c = t(570140);
let u = null;
class d extends(i = a.ZP.Store) {
  hasAction() {
    return null != u
  }
  getAction() {
    return u
  }
}

function _(e) {
  u = e.requiredAction
}
r = "UserRequiredActionStore", (o = "displayName") in d ? Object.defineProperty(d, o, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[o] = r;
let p = new d(c.Z, {
  CONNECTION_OPEN: _,
  USER_REQUIRED_ACTION_UPDATE: _
})