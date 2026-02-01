/** Chunk was on 9753 **/
/** chunk id: 286805, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let s = {
  matureAgree: false
};
class o extends(i = Chunk311907.Ay.Store) {
  get didMatureAgree() {
    return s.matureAgree
  }
}(r = "displayName") in o ? Object.defineProperty(o, r, {
  value: "ApplicationStoreSettingsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : o[r] = "ApplicationStoreSettingsStore";
let c = new o(Chunk73153.h, {
  APPLICATION_STORE_MATURE_AGREE: function() {
    s.matureAgree = true
  }
})