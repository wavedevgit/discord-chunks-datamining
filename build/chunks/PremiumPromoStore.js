/** Chunk was on 92917 **/
/** chunk id: 362790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk961350 = require("./961350.js"),
  Chunk994500 = require("./994500.js");
let d = 180 * Chunk927813.A.Millis.DAY,
  p = false;
class m extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.A, c.default)
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
let f = new m(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    return p !== (p = u.A.getFriendIDs().length >= 10 && o.default.extractTimestamp(c.default.getId()) < Date.now() - d)
  }
})