/** Chunk was on 21738 **/
/** chunk id: 813160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var r, i, Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let o = false;
class c extends(i = Chunk311907.Ay.Store) {
  getIsOpen() {
    return !l.Fr || o
  }
}(r = "displayName") in c ? Object.defineProperty(c, r, {
  value: "MobileWebSidebarStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[r] = "MobileWebSidebarStore";
let u = new c(Chunk73153.h, {
  MOBILE_WEB_SIDEBAR_OPEN: function() {
    o = true
  },
  MOBILE_WEB_SIDEBAR_CLOSE: function() {
    o = false
  }
})