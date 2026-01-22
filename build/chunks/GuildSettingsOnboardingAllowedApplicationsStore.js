/** Chunk was on 90194 **/
/** chunk id: 549479, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var n, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let a = null,
  s = null,
  c = false;
class d extends(i = Chunk311907.Ay.Store) {
  getAllowedApplicationIds(e) {
    return a === e ? s : null
  }
  isFetching(e) {
    return a === e && c
  }
  hasCachedData(e) {
    return a === e && null !== s
  }
}(n = "displayName") in d ? Object.defineProperty(d, n, {
  value: "GuildSettingsOnboardingAllowedApplicationsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[n] = "GuildSettingsOnboardingAllowedApplicationsStore";
let u = new d(Chunk73153.h, {
  GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_START: function(e) {
    let {
      guildId: t
    } = e;
    a = t, c = true, s = []
  },
  GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      applicationIds: l
    } = e;
    a === t && (s = l, c = false)
  },
  GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    a === t && (s = [], c = false)
  },
  GUILD_SETTINGS_CLOSE: function() {
    a = null, s = null, c = false
  }
})