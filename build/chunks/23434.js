/** Chunk was on 59787 **/
"use strict";
r.d(t, {
  Z: () => u
});
var n, o, i, a = r(442837),
  s = r(570140);
let c = null;
class l extends(i = a.ZP.Store) {
  hasAction() {
    return null != c
  }
  getAction() {
    return c
  }
}

function d(e) {
  c = e.requiredAction
}
o = "UserRequiredActionStore", (n = "displayName") in l ? Object.defineProperty(l, n, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[n] = o;
let u = new l(s.Z, {
  CONNECTION_OPEN: d,
  USER_REQUIRED_ACTION_UPDATE: d
})