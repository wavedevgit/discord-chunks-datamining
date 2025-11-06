/** Chunk was on 11798 **/
/** chunk id: 987350, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var l, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = null,
  c = null,
  s = false;
class d extends(i = Chunk442837.ZP.Store) {
  getAllowedApplicationIds(e) {
    return a === e ? c : null
  }
  isFetching(e) {
    return a === e && s
  }
  hasCachedData(e) {
    return a === e && null !== c
  }
}(l = "displayName") in d ? Object.defineProperty(d, l, {
  value: "GuildSettingsOnboardingAllowedApplicationsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[l] = "GuildSettingsOnboardingAllowedApplicationsStore";
let u = new d(Chunk570140.Z, {
  GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_START: function(e) {
    let {
      guildId: t
    } = e;
    a = t, s = true, c = []
  },
  GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      applicationIds: n
    } = e;
    a === t && (c = n, s = false)
  },
  GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    a === t && (c = [], s = false)
  },
  GUILD_SETTINGS_CLOSE: function() {
    a = null, c = null, s = false
  }
})