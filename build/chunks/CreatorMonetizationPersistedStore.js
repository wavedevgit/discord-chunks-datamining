/** Chunk was on 47841 **/
/** chunk id: 448564, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = {
  canSeeEnableMonetizationForGuilds: new Set
};
class c extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (a.canSeeEnableMonetizationForGuilds = new Set(e.canSeeEnableMonetizationForGuilds))
  }
  getState() {
    return a
  }
  hasSeenCreatorOnboardingForGuild(e) {
    return a.canSeeEnableMonetizationForGuilds.has(e)
  }
}
s(c, "displayName", "CreatorMonetizationPersistedStore"), s(c, "persistKey", "CreatorMonetizationPersistedStore"), s(c, "migrations", []);
let o = new c(Chunk73153.h, {
  CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD: function(e) {
    a.canSeeEnableMonetizationForGuilds.has(e.guildId) || (a.canSeeEnableMonetizationForGuilds = new Set(a.canSeeEnableMonetizationForGuilds).add(e.guildId))
  }
})