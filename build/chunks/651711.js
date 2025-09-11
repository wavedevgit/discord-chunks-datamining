/** Chunk was on 70830 **/
/** chunk id: 651711, original params: e,t,n (module,exports,require) **/
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
    isUserMFAEnabled: m,
    isModerationMFAEnabled: g
  } = (0, o.N)(), p = r.useCallback(async () => {
    var e, r;
    m ? g || await (null == n || null == (r = n.onRequireModeratorMFAClick) ? true : r.call(n)) : await (null == n || null == (e = n.onEnableMFAClick) ? true : e.call(n)), null == t || t()
  }, [m, g, t, n]), f = (0, s.R)({
    onEnableMFAClick: p
  });
  return r.useMemo(() => {
    if (null == e) return null;
    let {
      minimumOwnerAgeInYears: t,
      minimumSize: r
    } = e, s = !e.noRecentViolations, o = [{
      key: "no_violations_requirement",
      checkedLabel: d.intl.string(d.t["1lGNPT"]),
      uncheckedLabel: d.intl.string(d.t["D+gTJi"]),
      description: d.intl.format(d.t.HFY0m5, {
        communityGuidelinesUrl: a.Z.getArticleURL(c.BhN.PUBLIC_GUILD_GUILDLINES)
      }),
      checked: e.noRecentViolations,
      actionLabel: s ? d.intl.string(d.t.xU2fl5) : true,
      actionHandler: s ? () => (0, i.Z)(a.Z.getSubmitRequestURL()) : true
    }];
    if (null != t && null != e.meetsOwnerAgeRequirement && o.push({
        key: "owner_age_requirement",
        checkedLabel: d.intl.string(d.t["+F8haG"]),
        uncheckedLabel: d.intl.string(d.t["5BwC/P"]),
        description: d.intl.formatToPlainString(d.t.DW1VaW, {
          minimumOwnerAgeInYears: t
        }),
        checked: e.meetsOwnerAgeRequirement
      }), null != r && null != e.hasSufficientMembers && o.push({
        key: "member_count_requirement",
        checkedLabel: d.intl.string(d.t.j7wXWl),
        uncheckedLabel: d.intl.string(d.t.W0suNz),
        description: d.intl.formatToPlainString(d.t.up53zc, {
          minimumSize: r
        }),
        checked: e.hasSufficientMembers
      }), null != e.minimumAgeInDays && null != e.meetsServerAgeRequirement && o.push({
        key: "server_age_requirement",
        checkedLabel: d.intl.string(d.t.mjbvW1),
        uncheckedLabel: d.intl.string(d.t["9BV6Ly"]),
        description: d.intl.formatToPlainString(d.t.Zwv84O, {
          minimumAge: (0, l.Z)(e.minimumAgeInDays)
        }),
        checked: e.meetsServerAgeRequirement
      }), null != e.weeklyCommunicators && o.push({
        key: "weekly_communicator_count_requirement",
        checkedLabel: d.intl.string(d.t.Qw7qv7),
        uncheckedLabel: d.intl.string(d.t.b45kGB),
        description: d.intl.string(d.t.NbtjEB),
        checked: e.weeklyCommunicators
      }), null != e.hasMemberRetention && o.push({
        key: "member_retention_requirement",
        checkedLabel: d.intl.string(d.t.Qvq39P),
        uncheckedLabel: d.intl.string(d.t.azHboK),
        description: d.intl.string(d.t.u4rCYG),
        checked: e.hasMemberRetention
      }), o.push({
        key: "nsfw_requirement",
        checkedLabel: d.intl.string(d.t.bymfTU),
        uncheckedLabel: d.intl.string(d.t["718pRE"]),
        description: d.intl.string(d.t["5ZqX+v"]),
        checked: e.notNSFW
      }), null != e.hasEnabled2FA) {
      let t = !e.hasEnabled2FA && !m && (null == n ? true : n.onEnableMFAClick) != null,
        r = !e.hasEnabled2FA && !g && (null == n ? true : n.onRequireModeratorMFAClick) != null,
        i = t || r;
      o.push({
        key: "2fa_requirement",
        checkedLabel: d.intl.string(d.t.NqVyFh),
        uncheckedLabel: d.intl.string(d.t.VcDNIS),
        description: d.intl.format(d.t["7NzkfX"], {
          enableMFAHook: f
        }),
        checked: e.hasEnabled2FA,
        actionLabel: i ? d.intl.string(d.t.BU4Dio) : true,
        actionHandler: i ? p : true
      })
    }
    returntrue === u && o.sort(e => e.checked ? 0 : false), o
  }, [e, u, m, n, g, f, p])
}