/** Chunk was on 64982 **/
/** chunk id: 651711, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./539854.js"), require("./642613.js");
var Chunk647438 = require("./647438.js"),
  Chunk782568 = require("./782568.js"),
  Chunk635142 = require("./635142.js"),
  Chunk63063 = require("./63063.js"),
  Chunk500047 = require("./500047.jsx"),
  Chunk431516 = require("./431516.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    onEligibilityBecameStale: t,
    actions: n,
    sortedByIneligible: u
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, {
    isUserMFAEnabled: g,
    isModerationMFAEnabled: m
  } = (0, o.N)(), p = r.useCallback(async () => {
    var e, r;
    g ? m || await (null == n || null == (r = n.onRequireModeratorMFAClick) ? true : r.call(n)) : await (null == n || null == (e = n.onEnableMFAClick) ? true : e.call(n)), null == t || t()
  }, [g, m, t, n]), f = (0, s.R)({
    onEnableMFAClick: p
  });
  return r.useMemo(() => {
    if (null == e) return null;
    let {
      minimumOwnerAgeInYears: t,
      minimumSize: r
    } = e, s = !e.noRecentViolations, o = [{
      key: "no_violations_requirement",
      checkedLabel: d.intl.string(d.t["1lGNPZ"]),
      uncheckedLabel: d.intl.string(d.t["D+gTJt"]),
      description: d.intl.format(d.t.HFY0m6, {
        communityGuidelinesUrl: a.Z.getArticleURL(c.BhN.PUBLIC_GUILD_GUILDLINES)
      }),
      checked: e.noRecentViolations,
      actionLabel: s ? d.intl.string(d.t["xU2fl+"]) : true,
      actionHandler: s ? () => (0, i.Z)(a.Z.getSubmitRequestURL()) : true
    }];
    if (null != t && null != e.meetsOwnerAgeRequirement && o.push({
        key: "owner_age_requirement",
        checkedLabel: d.intl.string(d.t["+F8haD"]),
        uncheckedLabel: d.intl.string(d.t["5BwC/O"]),
        description: d.intl.formatToPlainString(d.t.DW1Vae, {
          minimumOwnerAgeInYears: t
        }),
        checked: e.meetsOwnerAgeRequirement
      }), null != r && null != e.hasSufficientMembers && o.push({
        key: "member_count_requirement",
        checkedLabel: d.intl.string(d.t.j7wXWo),
        uncheckedLabel: d.intl.string(d.t.W0suNz),
        description: d.intl.formatToPlainString(d.t.up53zR, {
          minimumSize: r
        }),
        checked: e.hasSufficientMembers
      }), null != e.minimumAgeInDays && null != e.meetsServerAgeRequirement && o.push({
        key: "server_age_requirement",
        checkedLabel: d.intl.string(d.t.mjbvWw),
        uncheckedLabel: d.intl.string(d.t["9BV6L6"]),
        description: d.intl.formatToPlainString(d.t.Zwv84O, {
          minimumAge: (0, l.Z)(e.minimumAgeInDays)
        }),
        checked: e.meetsServerAgeRequirement
      }), null != e.weeklyCommunicators && o.push({
        key: "weekly_communicator_count_requirement",
        checkedLabel: d.intl.string(d.t.Qw7qv4),
        uncheckedLabel: d.intl.string(d.t.b45kGG),
        description: d.intl.string(d.t.NbtjEC),
        checked: e.weeklyCommunicators
      }), null != e.hasMemberRetention && o.push({
        key: "member_retention_requirement",
        checkedLabel: d.intl.string(d.t.Qvq39M),
        uncheckedLabel: d.intl.string(d.t.azHboI),
        description: d.intl.string(d.t.u4rCYO),
        checked: e.hasMemberRetention
      }), o.push({
        key: "nsfw_requirement",
        checkedLabel: d.intl.string(d.t.bymfTb),
        uncheckedLabel: d.intl.string(d.t["718pRA"]),
        description: d.intl.string(d.t["5ZqX+j"]),
        checked: e.notNSFW
      }), null != e.hasEnabled2FA) {
      let t = !e.hasEnabled2FA && !g && (null == n ? true : n.onEnableMFAClick) != null,
        r = !e.hasEnabled2FA && !m && (null == n ? true : n.onRequireModeratorMFAClick) != null,
        i = t || r;
      o.push({
        key: "2fa_requirement",
        checkedLabel: d.intl.string(d.t.NqVyFk),
        uncheckedLabel: d.intl.string(d.t.VcDNIV),
        description: d.intl.format(d.t["7NzkfV"], {
          enableMFAHook: f
        }),
        checked: e.hasEnabled2FA,
        actionLabel: i ? d.intl.string(d.t.BU4Diu) : true,
        actionHandler: i ? p : true
      })
    }
    returntrue === u && o.sort(e => e.checked ? 0 : false), o
  }, [e, u, g, n, m, f, p])
}