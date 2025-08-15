/** Chunk was on 31253 **/
/** chunk id: 674525, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = [];
class c extends(i = Chunk442837.ZP.Store) {
  getEligibleGuildsForNagActivate() {
    return a
  }
}(r = "displayName") in c ? Object.defineProperty(c, r, {
  value: "CreatorMonetizationMarketingStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[r] = "CreatorMonetizationMarketingStore";
let s = new c(Chunk570140.Z, {
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(e) {
    let {
      eligibleGuilds: t
    } = e;
    a = t
  }
})