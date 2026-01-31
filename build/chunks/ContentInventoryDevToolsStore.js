/** Chunk was on 20725 **/
/** chunk id: 603047, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var l, r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk868068 = require("./868068.js");
let o = "None";
class u extends(r = Chunk311907.Ay.Store) {
  getFakeGameToShow() {
    return o
  }
  getFakeGameData() {
    return a.O[o]
  }
}(l = "displayName") in u ? Object.defineProperty(u, l, {
  value: "ContentInventoryDevToolsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : u[l] = "ContentInventoryDevToolsStore";
let c = new u(Chunk73153.h, {
  CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function(e) {
    let {
      gameToShow: t
    } = e;
    o = t
  }
})