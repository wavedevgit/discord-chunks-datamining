/** Chunk was on 1272 **/
/** chunk id: 659971, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var r, i, l, Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let c = false;
class u extends(l = Chunk442837.ZP.Store) {
  getIsOpen() {
    return !Chunk873546.tq || c
  }
}
i = "MobileWebSidebarStore", (r = "displayName") in u ? Object.defineProperty(u, r, {
  value: i,
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = i;
let d = new u(Chunk570140.Z, {
  MOBILE_WEB_SIDEBAR_OPEN: function() {
    c = true
  },
  MOBILE_WEB_SIDEBAR_CLOSE: function() {
    c = false
  }
})