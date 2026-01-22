/** Chunk was on 21738 **/
/** chunk id: 598384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let s = "UPDATE_NOT_AVAILABLE";

function o(e) {
  s = e.type
}
class c extends(i = Chunk311907.Ay.Store) {
  getState() {
    return s
  }
}(r = "displayName") in c ? Object.defineProperty(c, r, {
  value: "AutoUpdateStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[r] = "AutoUpdateStore";
let u = new c(Chunk73153.h, {
  CHECKING_FOR_UPDATES: o,
  UPDATE_NOT_AVAILABLE: o,
  UPDATE_AVAILABLE: o,
  UPDATE_MANUALLY: o,
  UPDATE_ERROR: o,
  UPDATE_DOWNLOADED: o
})