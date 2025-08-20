/** Chunk was on 32103 **/
/** chunk id: 23434, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var o, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let c = null;
class u extends(r = Chunk442837.ZP.Store) {
  hasAction() {
    return null != c
  }
  getAction() {
    return c
  }
}

function d(e) {
  c = e.requiredAction
}(o = "displayName") in u ? Object.defineProperty(u, o, {
  value: "UserRequiredActionStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : u[o] = "UserRequiredActionStore";
let _ = new u(Chunk570140.Z, {
  CONNECTION_OPEN: d,
  USER_REQUIRED_ACTION_UPDATE: d
})