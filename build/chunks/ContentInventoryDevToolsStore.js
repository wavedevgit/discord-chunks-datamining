/** Chunk was on 88295 **/
/** chunk id: 550532, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var r, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk780106 = require("./780106.js");
let s = "None";
class c extends(l = Chunk442837.ZP.Store) {
  getFakeGameToShow() {
    return s
  }
  getFakeGameData() {
    return Chunk780106.O[s]
  }
}(r = "displayName") in c ? Object.defineProperty(c, r, {
  value: "ContentInventoryDevToolsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[r] = "ContentInventoryDevToolsStore";
let u = new c(Chunk570140.Z, {
  CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function(e) {
    let {
      gameToShow: t
    } = e;
    s = t
  }
})