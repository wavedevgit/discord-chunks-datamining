/** Chunk was on 83772 **/
/** chunk id: 550532, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var r, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk780106 = require("./780106.js");
let o = "None";
class u extends(l = Chunk442837.ZP.Store) {
  getFakeGameToShow() {
    return o
  }
  getFakeGameData() {
    return a.O[o]
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
    o = t
  }
})