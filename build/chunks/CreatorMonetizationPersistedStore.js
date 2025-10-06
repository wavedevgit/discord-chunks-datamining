/** Chunk was on 64982 **/
/** chunk id: 709246, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

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
class o extends(r = Chunk442837.ZP.PersistedStore) {
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
s(o, "displayName", "CreatorMonetizationPersistedStore"), s(o, "persistKey", "CreatorMonetizationPersistedStore"), s(o, "migrations", []);
let c = new o(Chunk570140.Z, {
  CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD: function(e) {
    a.canSeeEnableMonetizationForGuilds.has(e.guildId) || (a.canSeeEnableMonetizationForGuilds = new Set(a.canSeeEnableMonetizationForGuilds).add(e.guildId))
  }
})