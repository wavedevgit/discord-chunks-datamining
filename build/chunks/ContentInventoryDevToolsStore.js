/** Chunk was on 52390 **/
/** chunk id: 603047, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var r, l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk868068 = require("./868068.js");
let s = "None";
class u extends(l = Chunk311907.Ay.Store) {
  getFakeGameToShow() {
    return s
  }
  getFakeGameData() {
    return o.O[s]
  }
}(r = "displayName") in u ? Object.defineProperty(u, r, {
  value: "ContentInventoryDevToolsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = "ContentInventoryDevToolsStore";
let c = new u(Chunk73153.h, {
  CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function(e) {
    let {
      gameToShow: t
    } = e;
    s = t
  }
})