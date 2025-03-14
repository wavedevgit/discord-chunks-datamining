/** Chunk was on 27978 **/
n.d(t, {
  Z: () => g
});
var r, i, o, a = n(973361),
  s = n(442837),
  l = n(570140),
  c = n(358085),
  u = n(723359);
let d = null,
  h = "underage";
class p extends(o = s.ZP.Store) {
  isUnderageAnonymous() {
    return c.isPlatformEmbedded ? !!(null != d && d + u.k0 > Date.now()) : null != a.parse(document.cookie)[h]
  }
}
i = "AgeGateStore", (r = "displayName") in p ? Object.defineProperty(p, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : p[r] = i;
let g = new p(l.Z, {
  AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function() {
    d = Date.now(), document.cookie = "".concat(h, "=1;path=/")
  },
  LOGIN_SUCCESS: function() {
    d = null, document.cookie = "".concat(h, "=1;path=/;max-age=0")
  }
})