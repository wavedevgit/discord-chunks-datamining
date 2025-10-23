/** Chunk was on 1272 **/
/** chunk id: 91372, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let s = "UPDATE_NOT_AVAILABLE";

function o(e) {
  s = e.type
}
class c extends(i = Chunk442837.ZP.Store) {
  getState() {
    return s
  }
}(r = "displayName") in c ? Object.defineProperty(c, r, {
  value: "AutoUpdateStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[r] = "AutoUpdateStore";
let u = new c(Chunk570140.Z, {
  CHECKING_FOR_UPDATES: o,
  UPDATE_NOT_AVAILABLE: o,
  UPDATE_AVAILABLE: o,
  UPDATE_MANUALLY: o,
  UPDATE_ERROR: o,
  UPDATE_DOWNLOADED: o
})