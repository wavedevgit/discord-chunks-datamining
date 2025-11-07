/** Chunk was on 64982 **/
/** chunk id: 158992, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk479531 = require("./479531.js"),
  Chunk53365 = require("./53365.js"),
  Chunk581050 = require("./581050.js");

function s(e) {
  let [t, n] = r.useState(null != e), [s, o] = r.useState(), [c, d] = r.useState(), u = r.useCallback(async e => {
    n(true), o(true);
    try {
      var t, r, s, c, u;
      let n = await l.yk(e);
      d({
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
        isApplicationPending: (null == (t = n.latest_request) ? true : t.state) === a.X.OPEN,
        actionRequired: (null == (r = n.latest_request) ? true : r.state) === a.X.ACTION_REQUIRED,
        minimumAgeInDays: n.minimum_age_in_days,
        minimumOwnerAgeInYears: n.minimum_owner_age_in_years,
        minimumSize: n.minimum_size,
        latestRequest: n.latest_request,
        rejection: n.rejection,
        guildMemberCount: null == (s = n.health_score) ? true : s.guild_size,
        communicatorCount: null == (c = n.health_score) ? true : c.communicators,
        retentionScore: null == (u = n.health_score) ? true : u.perc_ret_w1
      })
    } catch (e) {
      o(new i.Z(e))
    } finally {
      n(false)
    }
  }, []);
  return {
    error: s,
    loading: t,
    eligibility: c,
    refresh: r.useCallback(() => {
      null != e && u(e)
    }, [e, u])
  }
}