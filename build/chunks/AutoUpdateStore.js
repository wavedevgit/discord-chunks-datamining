/** Chunk was on 1272 **/
/** chunk id: 91372, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let s = "UPDATE_NOT_AVAILABLE";

function c(e) {
  s = e.type
}
class u extends(l = Chunk442837.ZP.Store) {
  getState() {
    return s
  }
}
i = "AutoUpdateStore", (r = "displayName") in u ? Object.defineProperty(u, r, {
  value: i,
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = i;
let d = new u(Chunk570140.Z, {
  CHECKING_FOR_UPDATES: c,
  UPDATE_NOT_AVAILABLE: c,
  UPDATE_AVAILABLE: c,
  UPDATE_MANUALLY: c,
  UPDATE_ERROR: c,
  UPDATE_DOWNLOADED: c
})