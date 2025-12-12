/** Chunk was on 384 **/
/** chunk id: 158992, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk479531 = require("./479531.js"),
  Chunk53365 = require("./53365.js"),
  Chunk581050 = require("./581050.js");

function a(e) {
  let [t, n] = r.useState(null != e), [a, o] = r.useState(), [c, u] = r.useState(), d = r.useCallback(async e => {
    n(true), o(true);
    try {
      var t, r, a, c, d;
      let n = await l.yk(e);
      u({
        isEligibleForMonetization: n.sufficient,
        hasSufficientMembers: n.size,
        hasEnabled2FA: n.mfa,
        meetsServerAgeRequirement: n.age,
        meetsOwnerAgeRequirement: n.owner_age,
        noRecentViolations: n.safe_environment,
        weeklyCommunicators: n.engagement_healthy,
        hasMemberRetention: n.retention_healthy,
        notNSFW: 0 === Object.keys(n.nsfw_properties).length,
        canApply: n.can_apply,
        isApplicationPending: (null == (t = n.latest_request) ? true : t.state) === s.X.OPEN,
        actionRequired: (null == (r = n.latest_request) ? true : r.state) === s.X.ACTION_REQUIRED,
        minimumAgeInDays: n.minimum_age_in_days,
        minimumOwnerAgeInYears: n.minimum_owner_age_in_years,
        minimumSize: n.minimum_size,
        latestRequest: n.latest_request,
        rejection: n.rejection,
        guildMemberCount: null == (a = n.health_score) ? true : a.guild_size,
        communicatorCount: null == (c = n.health_score) ? true : c.communicators,
        retentionScore: null == (d = n.health_score) ? true : d.perc_ret_w1
      })
    } catch (e) {
      o(new i.Z(e))
    } finally {
      n(false)
    }
  }, []);
  return {
    error: a,
    loading: t,
    eligibility: c,
    refresh: r.useCallback(() => {
      null != e && d(e)
    }, [e, d])
  }
}