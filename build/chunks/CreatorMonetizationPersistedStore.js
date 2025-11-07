/** Chunk was on 64982 **/
/** chunk id: 709246, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {
  canSeeEnableMonetizationForGuilds: new Set
};
class o extends(r = Chunk442837.ZP.PersistedStore) {
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
a(o, "displayName", "CreatorMonetizationPersistedStore"), a(o, "persistKey", "CreatorMonetizationPersistedStore"), a(o, "migrations", []);
let c = new o(Chunk570140.Z, {
  CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD: function(e) {
    s.canSeeEnableMonetizationForGuilds.has(e.guildId) || (s.canSeeEnableMonetizationForGuilds = new Set(s.canSeeEnableMonetizationForGuilds).add(e.guildId))
  }
})