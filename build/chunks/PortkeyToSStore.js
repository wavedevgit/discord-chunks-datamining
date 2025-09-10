/** Chunk was on 85683 **/
/** chunk id: 29168, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = false;
class c extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (o = e)
  }
  getState() {
    return o
  }
}
a(c, "displayName", "PortkeyToSStore"), a(c, "persistKey", "PortkeyToSStore");
let l = new c(Chunk570140.Z, {
  PORTKEY_ACCEPT_TOS: function(e) {
    let {
      acceptedToS: t
    } = e;
    o = t
  }
})