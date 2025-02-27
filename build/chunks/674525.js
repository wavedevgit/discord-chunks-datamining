/** Chunk was on 49750 **/
n.d(t, {
  Z: () => u
});
var r, i, l, o = n(442837),
  s = n(570140);
let a = [];
class c extends(l = o.ZP.Store) {
  getEligibleGuildsForNagActivate() {
    return a
  }
}
i = "CreatorMonetizationMarketingStore", (r = "displayName") in c ? Object.defineProperty(c, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : c[r] = i;
let u = new c(s.Z, {
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(e) {
    let {
      eligibleGuilds: t
    } = e;
    a = t
  }
})