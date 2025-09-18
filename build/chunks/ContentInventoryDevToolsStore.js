/** Chunk was on 93886 **/
/** chunk id: 550532, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk780106 = require("./780106.js");
let c = "None";
class s extends(i = Chunk442837.ZP.Store) {
  getFakeGameToShow() {
    return c
  }
  getFakeGameData() {
    return Chunk780106.O[c]
  }
}(r = "displayName") in s ? Object.defineProperty(s, r, {
  value: "ContentInventoryDevToolsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : s[r] = "ContentInventoryDevToolsStore";
let d = new s(Chunk570140.Z, {
  CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function(e) {
    let {
      gameToShow: n
    } = e;
    c = n
  }
})