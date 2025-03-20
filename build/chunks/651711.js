/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => d
}), n(653041), n(230036);
var r = n(192379),
  i = n(782568),
  s = n(635142),
  a = n(63063),
  l = n(500047),
  o = n(431516),
  A = n(981631),
  c = n(388032);

function d(e) {
  let {
    onEligibilityBecameStale: t,
    actions: n,
    sortedByIneligible: d
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
    isUserMFAEnabled: u,
    isModerationMFAEnabled: g
  } = (0, o.N)(), f = r.useCallback(async () => {
    var e, r;
    u ? g || await (null == n ? void 0 : null === (r = n.onRequireModeratorMFAClick) || void 0 === r ? void 0 : r.call(n)) : await (null == n ? void 0 : null === (e = n.onEnableMFAClick) || void 0 === e ? void 0 : e.call(n)), null == t || t()
  }, [u, g, t, n]), m = (0, l.R)({
    onEnableMFAClick: f
  });
  return r.useMemo(() => {
    if (null == e) return null;
    let {
      minimumOwnerAgeInYears: t,
      minimumSize: r
    } = e, l = !e.noRecentViolations, o = [{
      key: "no_violations_requirement",
      checkedLabel: c.NW.string(c.t["1lGNPT"]),
      uncheckedLabel: c.NW.string(c.t["D+gTJi"]),
      description: c.NW.format(c.t.HFY0m5, {
        communityGuidelinesUrl: a.Z.getArticleURL(A.BhN.PUBLIC_GUILD_GUILDLINES)
      }),
      checked: e.noRecentViolations,
      actionLabel: l ? c.NW.string(c.t.xU2fl5) : void 0,
      actionHandler: l ? () => (0, i.Z)(a.Z.getSubmitRequestURL()) : void 0
    }];
    if (null != t && null != e.meetsOwnerAgeRequirement && o.push({
        key: "owner_age_requirement",
        checkedLabel: c.NW.string(c.t["+F8haG"]),
        uncheckedLabel: c.NW.string(c.t["5BwC/P"]),
        description: c.NW.formatToPlainString(c.t.DW1VaW, {
          minimumOwnerAgeInYears: t
        }),
        checked: e.meetsOwnerAgeRequirement
      }), null != r && null != e.hasSufficientMembers && o.push({
        key: "member_count_requirement",
        checkedLabel: c.NW.string(c.t.j7wXWl),
        uncheckedLabel: c.NW.string(c.t.W0suNz),
        description: c.NW.formatToPlainString(c.t.up53zc, {
          minimumSize: r
        }),
        checked: e.hasSufficientMembers
      }), null != e.minimumAgeInDays && null != e.meetsServerAgeRequirement && o.push({
        key: "server_age_requirement",
        checkedLabel: c.NW.string(c.t.mjbvW1),
        uncheckedLabel: c.NW.string(c.t["9BV6Ly"]),
        description: c.NW.formatToPlainString(c.t.Zwv84O, {
          minimumAge: (0, s.Z)(e.minimumAgeInDays)
        }),
        checked: e.meetsServerAgeRequirement
      }), null != e.weeklyCommunicators && o.push({
        key: "weekly_communicator_count_requirement",
        checkedLabel: c.NW.string(c.t.Qw7qv7),
        uncheckedLabel: c.NW.string(c.t.b45kGB),
        description: c.NW.string(c.t.NbtjEB),
        checked: e.weeklyCommunicators
      }), null != e.hasMemberRetention && o.push({
        key: "member_retention_requirement",
        checkedLabel: c.NW.string(c.t.Qvq39P),
        uncheckedLabel: c.NW.string(c.t.azHboK),
        description: c.NW.string(c.t.u4rCYG),
        checked: e.hasMemberRetention
      }), o.push({
        key: "nsfw_requirement",
        checkedLabel: c.NW.string(c.t.bymfTU),
        uncheckedLabel: c.NW.string(c.t["718pRE"]),
        description: c.NW.string(c.t["5ZqX+v"]),
        checked: e.notNSFW
      }), null != e.hasEnabled2FA) {
      let t = !e.hasEnabled2FA && !u && (null == n ? void 0 : n.onEnableMFAClick) != null,
        r = !e.hasEnabled2FA && !g && (null == n ? void 0 : n.onRequireModeratorMFAClick) != null,
        i = t || r;
      o.push({
        key: "2fa_requirement",
        checkedLabel: c.NW.string(c.t.NqVyFh),
        uncheckedLabel: c.NW.string(c.t.VcDNIS),
        description: c.NW.format(c.t["7NzkfX"], {
          enableMFAHook: m
        }),
        checked: e.hasEnabled2FA,
        actionLabel: i ? c.NW.string(c.t.BU4Dio) : void 0,
        actionHandler: i ? f : void 0
      })
    }
    return !0 === d && o.sort(e => e.checked ? 0 : -1), o
  }, [e, d, u, n, g, m, f])
}