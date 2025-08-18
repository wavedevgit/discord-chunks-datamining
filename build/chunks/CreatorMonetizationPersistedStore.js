/** Chunk was on 55942 **/
/** chunk id: 709246, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[n] = t, e
}
let s = {
  canSeeEnableMonetizationForGuilds: new Set
};
class l extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (s.canSeeEnableMonetizationForGuilds = new Set(e.canSeeEnableMonetizationForGuilds))
  }
  getState() {
    return s
  }
  hasSeenCreatorOnboardingForGuild(e) {
    return s.canSeeEnableMonetizationForGuilds.has(e)
  }
}
a(l, "displayName", "CreatorMonetizationPersistedStore"), a(l, "persistKey", "CreatorMonetizationPersistedStore"), a(l, "migrations", []);
let u = new l(Chunk570140.Z, {
  CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD: function(e) {
    s.canSeeEnableMonetizationForGuilds.has(e.guildId) || (s.canSeeEnableMonetizationForGuilds = new Set(s.canSeeEnableMonetizationForGuilds).add(e.guildId))
  }
})