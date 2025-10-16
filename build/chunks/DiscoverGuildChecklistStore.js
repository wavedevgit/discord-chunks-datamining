/** Chunk was on 44686 **/
/** chunk id: 733895, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  ZP: () => d
});
var n, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let u = {},
  a = false;
class o extends(l = Chunk442837.ZP.Store) {
  isLoading() {
    return a
  }
  passesChecklist(e) {
    var i;
    return !a && (null == (i = u[e]) ? true : i.sufficient)
  }
  isPendingSuccess(e) {
    let i = u[e];
    return null != i && !a && i.healthScorePending && i.safeEnvironment && 0 === Object.keys(i.nsfwProperties).length && i.size && i.protected
  }
  getDiscoveryChecklist(e) {
    return u[e]
  }
}(n = "displayName") in o ? Object.defineProperty(o, n, {
  value: "DiscoverGuildChecklistStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : o[n] = "DiscoverGuildChecklistStore";
let d = new o(Chunk570140.Z, {
  DISCOVER_CHECKLIST_FETCH_START: function(e) {
    a = true
  },
  DISCOVER_CHECKLIST_FETCH_FAILURE: function(e) {
    a = false
  },
  DISCOVER_CHECKLIST_FETCH_SUCCESS: function(e) {
    var i;
    let {
      checklist: t,
      guildId: n
    } = e;
    a = false, u[n] = {
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