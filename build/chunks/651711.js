/** Chunk was on 384 **/
/** chunk id: 651711, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./539854.js"), require("./642613.js");
var Chunk473749 = require("./473749.js"),
  Chunk782568 = require("./782568.js"),
  Chunk635142 = require("./635142.js"),
  Chunk63063 = require("./63063.js"),
  Chunk500047 = require("./500047.jsx"),
  Chunk431516 = require("./431516.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    onEligibilityBecameStale: t,
    actions: n,
    sortedByIneligible: d
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, {
    isUserMFAEnabled: g,
    isModerationMFAEnabled: m
  } = (0, o.N)(), p = r.useCallback(async () => {
    var e, r;
    g ? m || await (null == n || null == (r = n.onRequireModeratorMFAClick) ? true : r.call(n)) : await (null == n || null == (e = n.onEnableMFAClick) ? true : e.call(n)), null == t || t()
  }, [g, m, t, n]), f = (0, a.R)({
    onEnableMFAClick: p
  });
  return r.useMemo(() => {
    if (null == e) return null;
    let {
      minimumOwnerAgeInYears: t,
      minimumSize: r
    } = e, a = !e.noRecentViolations, o = [{
      key: "no_violations_requirement",
      checkedLabel: u.intl.string(u.t["1lGNPZ"]),
      uncheckedLabel: u.intl.string(u.t["D+gTJt"]),
      description: u.intl.format(u.t.HFY0m6, {
        communityGuidelinesUrl: s.Z.getArticleURL(c.BhN.PUBLIC_GUILD_GUILDLINES)
      }),
      checked: e.noRecentViolations,
      actionLabel: a ? u.intl.string(u.t["xU2fl+"]) : true,
      actionHandler: a ? () => (0, i.Z)(s.Z.getSubmitRequestURL()) : true
    }];
    if (null != t && null != e.meetsOwnerAgeRequirement && o.push({
        key: "owner_age_requirement",
        checkedLabel: u.intl.string(u.t["+F8haD"]),
        uncheckedLabel: u.intl.string(u.t["5BwC/O"]),
        description: u.intl.formatToPlainString(u.t.DW1Vae, {
          minimumOwnerAgeInYears: t
        }),
        checked: e.meetsOwnerAgeRequirement
      }), null != r && null != e.hasSufficientMembers && o.push({
        key: "member_count_requirement",
        checkedLabel: u.intl.string(u.t.j7wXWo),
        uncheckedLabel: u.intl.string(u.t.W0suNz),
        description: u.intl.formatToPlainString(u.t.up53zR, {
          minimumSize: r
        }),
        checked: e.hasSufficientMembers
      }), null != e.minimumAgeInDays && null != e.meetsServerAgeRequirement && o.push({
        key: "server_age_requirement",
        checkedLabel: u.intl.string(u.t.mjbvWw),
        uncheckedLabel: u.intl.string(u.t["9BV6L6"]),
        description: u.intl.formatToPlainString(u.t.Zwv84O, {
          minimumAge: (0, l.Z)(e.minimumAgeInDays)
        }),
        checked: e.meetsServerAgeRequirement
      }), null != e.weeklyCommunicators && o.push({
        key: "weekly_communicator_count_requirement",
        checkedLabel: u.intl.string(u.t.Qw7qv4),
        uncheckedLabel: u.intl.string(u.t.b45kGG),
        description: u.intl.string(u.t.NbtjEC),
        checked: e.weeklyCommunicators
      }), null != e.hasMemberRetention && o.push({
        key: "member_retention_requirement",
        checkedLabel: u.intl.string(u.t.Qvq39M),
        uncheckedLabel: u.intl.string(u.t.azHboI),
        description: u.intl.string(u.t.u4rCYO),
        checked: e.hasMemberRetention
      }), o.push({
        key: "nsfw_requirement",
        checkedLabel: u.intl.string(u.t.bymfTb),
        uncheckedLabel: u.intl.string(u.t["718pRA"]),
        description: u.intl.string(u.t["5ZqX+j"]),
        checked: e.notNSFW
      }), null != e.hasEnabled2FA) {
      let t = !e.hasEnabled2FA && !g && (null == n ? true : n.onEnableMFAClick) != null,
        r = !e.hasEnabled2FA && !m && (null == n ? true : n.onRequireModeratorMFAClick) != null,
        i = t || r;
      o.push({
        key: "2fa_requirement",
        checkedLabel: u.intl.string(u.t.NqVyFk),
        uncheckedLabel: u.intl.string(u.t.VcDNIV),
        description: u.intl.format(u.t["7NzkfV"], {
          enableMFAHook: f
        }),
        checked: e.hasEnabled2FA,
        actionLabel: i ? u.intl.string(u.t.BU4Diu) : true,
        actionHandler: i ? p : true
      })
    }
    returntrue === d && o.sort(e => e.checked ? 0 : false), o
  }, [e, d, g, n, m, f, p])
}