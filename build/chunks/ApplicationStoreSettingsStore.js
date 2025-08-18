/** Chunk was on 91173 **/
/** chunk id: 558314, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = {
  matureAgree: false
};
class s extends(i = Chunk442837.ZP.Store) {
  get didMatureAgree() {
    return a.matureAgree
  }
}(r = "displayName") in s ? Object.defineProperty(s, r, {
  value: "ApplicationStoreSettingsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : s[r] = "ApplicationStoreSettingsStore";
let c = new s(Chunk570140.Z, {
  APPLICATION_STORE_MATURE_AGREE: function() {
    a.matureAgree = true
  }
})