/** Chunk was on 51333 **/
/** chunk id: 550532, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk780106 = require("./780106.js");
let s = "None";
class u extends(i = Chunk442837.ZP.Store) {
  getFakeGameToShow() {
    return s
  }
  getFakeGameData() {
    return Chunk780106.O[s]
  }
}(r = "displayName") in u ? Object.defineProperty(u, r, {
  value: "ContentInventoryDevToolsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = "ContentInventoryDevToolsStore";
let c = new u(Chunk570140.Z, {
  CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function(e) {
    let {
      gameToShow: t
    } = e;
    s = t
  }
})