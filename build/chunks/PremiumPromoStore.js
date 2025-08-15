/** Chunk was on 66866 **/
/** chunk id: 571474, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk314897 = require("./314897.js"),
  Chunk699516 = require("./699516.js");
let d = 180 * Chunk70956.Z.Millis.DAY,
  p = false;
class m extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk699516.Z, Chunk314897.default)
  }
  isEligible() {
    return p
  }
}(r = "displayName") in m ? Object.defineProperty(m, r, {
  value: "PremiumPromoStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : m[r] = "PremiumPromoStore";
let f = new m(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    return p !== (p = Chunk699516.Z.getFriendIDs().length >= 10 && Chunk709054.default.extractTimestamp(Chunk314897.default.getId()) < Date.now() - d)
  }
})