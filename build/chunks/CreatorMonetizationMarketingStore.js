/** Chunk was on 61222 **/
/** chunk id: 662427, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let a = [];
class s extends(i = Chunk311907.Ay.Store) {
  getEligibleGuildsForNagActivate() {
    return a
  }
}(r = "displayName") in s ? Object.defineProperty(s, r, {
  value: "CreatorMonetizationMarketingStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : s[r] = "CreatorMonetizationMarketingStore";
let c = new s(Chunk73153.h, {
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(e) {
    let {
      eligibleGuilds: t
    } = e;
    a = t
  }
})