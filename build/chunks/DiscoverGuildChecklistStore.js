/** Chunk was on 44686 **/
/** chunk id: 733895, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  ZP: () => c
});
var n, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = {},
  u = false;
class o extends(l = Chunk442837.ZP.Store) {
  isLoading() {
    return u
  }
  passesChecklist(e) {
    var i;
    return !u && (null == (i = a[e]) ? true : i.sufficient)
  }
  isPendingSuccess(e) {
    let i = a[e];
    return null != i && !u && i.healthScorePending && i.safeEnvironment && 0 === Object.keys(i.nsfwProperties).length && i.size && i.protected
  }
  getDiscoveryChecklist(e) {
    return a[e]
  }
}(n = "displayName") in o ? Object.defineProperty(o, n, {
  value: "DiscoverGuildChecklistStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : o[n] = "DiscoverGuildChecklistStore";
let c = new o(Chunk570140.Z, {
  DISCOVER_CHECKLIST_FETCH_START: function(e) {
    u = true
  },
  DISCOVER_CHECKLIST_FETCH_FAILURE: function(e) {
    u = false
  },
  DISCOVER_CHECKLIST_FETCH_SUCCESS: function(e) {
    var i;
    let {
      checklist: t,
      guildId: n
    } = e;
    u = false, a[n] = {
      guildId: t.guild_id,
      safeEnvironment: t.safe_environment,
      healthy: t.healthy,
      healthScorePending: t.health_score_pending,
      nsfwProperties: t.nsfw_properties,
      size: t.size,
      protected: t.protected,
      sufficient: t.sufficient,
      sufficientWithoutGracePeriod: t.sufficient_without_grace_period,
      gracePeriodEndDate: null != t.grace_period_end_date ? new Date(t.grace_period_end_date) : null,
      retentionHealthy: t.retention_healthy,
      engagementHealthy: t.engagement_healthy,
      minimumGuildSize: null != t.minimum_size ? t.minimum_size : 1e3,
      healthScore: t.health_score,
      minimumGuildAge: null != (i = t.minimum_age) ? i : 0,
      age: t.age
    }
  }
})