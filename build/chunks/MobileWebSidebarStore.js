/** Chunk was on 1272 **/
/** chunk id: 659971, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var r, i, Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = false;
class c extends(i = Chunk442837.ZP.Store) {
  getIsOpen() {
    return !Chunk873546.tq || o
  }
}(r = "displayName") in c ? Object.defineProperty(c, r, {
  value: "MobileWebSidebarStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[r] = "MobileWebSidebarStore";
let u = new c(Chunk570140.Z, {
  MOBILE_WEB_SIDEBAR_OPEN: function() {
    o = true
  },
  MOBILE_WEB_SIDEBAR_CLOSE: function() {
    o = false
  }
})