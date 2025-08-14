/** Chunk was on 1272 **/
/** chunk id: 659971, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var r, i, Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let s = false;
class c extends(i = Chunk442837.ZP.Store) {
  getIsOpen() {
    return !Chunk873546.tq || s
  }
}(r = "displayName") in c ? Object.defineProperty(c, r, {
  value: "MobileWebSidebarStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[r] = "MobileWebSidebarStore";
let u = new c(Chunk570140.Z, {
  MOBILE_WEB_SIDEBAR_OPEN: function() {
    s = true
  },
  MOBILE_WEB_SIDEBAR_CLOSE: function() {
    s = false
  }
})