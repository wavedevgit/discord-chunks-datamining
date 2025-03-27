/** Chunk was on 52272 **/
n.d(t, {
  Z: () => u
});
var r, i, a, o = n(442837),
  l = n(570140);
let s = !1;
class c extends(a = o.ZP.Store) {
  get blockedByProxy() {
    return s
  }
}
i = "ProxyBlockStore", (r = "displayName") in c ? Object.defineProperty(c, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : c[r] = i;
let u = new c(l.Z, {
  PROXY_BLOCKED_REQUEST: function(e) {
    s = !0
  }
})