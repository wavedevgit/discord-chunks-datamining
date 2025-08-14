/** Chunk was on 93886 **/
/** chunk id: 550532, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var n, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk780106 = require("./780106.js");
let o = "None";
class c extends(r = Chunk442837.ZP.Store) {
  getFakeGameToShow() {
    return o
  }
  getFakeGameData() {
    return Chunk780106.O[o]
  }
}(n = "displayName") in c ? Object.defineProperty(c, n, {
  value: "ContentInventoryDevToolsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[n] = "ContentInventoryDevToolsStore";
let d = new c(Chunk570140.Z, {
  CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function(e) {
    let {
      gameToShow: t
    } = e;
    o = t
  }
})