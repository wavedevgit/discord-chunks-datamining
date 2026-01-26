/** Chunk was on 39048 **/
/** chunk id: 963320, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk181658 = require("./181658.js"),
  Chunk493540 = require("./493540.js"),
  Chunk853922 = require("./853922.js");

function a(e) {
  let [t, n] = r.useState(null != e), [a, o] = r.useState(), [c, d] = r.useState(), u = r.useCallback(async e => {
    n(true), o(true);
    try {
      var t, r, a, c, u;
      let n = await l.jh(e);
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
        isApplicationPending: (null == (t = n.latest_request) ? true : t.state) === s.h.OPEN,
        actionRequired: (null == (r = n.latest_request) ? true : r.state) === s.h.ACTION_REQUIRED,
        minimumAgeInDays: n.minimum_age_in_days,
        minimumOwnerAgeInYears: n.minimum_owner_age_in_years,
        minimumSize: n.minimum_size,
        latestRequest: n.latest_request,
        rejection: n.rejection,
        guildMemberCount: null == (a = n.health_score) ? true : a.guild_size,
        communicatorCount: null == (c = n.health_score) ? true : c.communicators,
        retentionScore: null == (u = n.health_score) ? true : u.perc_ret_w1
      })
    } catch (e) {
      o(new i.A(e))
    } finally {
      n(false)
    }
  }, []);
  return {
    error: a,
    loading: t,
    eligibility: c,
    refresh: r.useCallback(() => {
      null != e && u(e)
    }, [e, u])
  }
}