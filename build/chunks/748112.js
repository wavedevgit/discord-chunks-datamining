/** Chunk was on 47841 **/
/** chunk id: 748112, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./321073.js"), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk975807 = require("./975807.js"),
  Chunk258328 = require("./258328.js"),
  Chunk975571 = require("./975571.js"),
  Chunk354390 = require("./354390.jsx"),
  Chunk192701 = require("./192701.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    onEligibilityBecameStale: t,
    actions: n,
    sortedByIneligible: u
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, {
    isUserMFAEnabled: f,
    isModerationMFAEnabled: g
  } = (0, c.f)(), b = r.useCallback(async () => {
    var e, r;
    f ? g || await (null == n || null == (r = n.onRequireModeratorMFAClick) ? true : r.call(n)) : await (null == n || null == (e = n.onEnableMFAClick) ? true : e.call(n)), null == t || t()
  }, [f, g, t, n]), m = (0, a.S)({
    onEnableMFAClick: b
  });
  return r.useMemo(() => {
    if (null == e) return null;
    let {
      minimumOwnerAgeInYears: t,
      minimumSize: r
    } = e, a = !e.noRecentViolations, c = [{
      key: "no_violations_requirement",
      checkedLabel: d.intl.string(d.t["1lGNPZ"]),
      uncheckedLabel: d.intl.string(d.t["D+gTJt"]),
      description: d.intl.format(d.t.HFY0m6, {
        communityGuidelinesUrl: s.A.getArticleURL(o.MVz.PUBLIC_GUILD_GUILDLINES)
      }),
      checked: e.noRecentViolations,
      actionLabel: a ? d.intl.string(d.t["xU2fl+"]) : true,
      actionHandler: a ? () => (0, i.A)(s.A.getSubmitRequestURL()) : true
    }];
    if (null != t && null != e.meetsOwnerAgeRequirement && c.push({
        key: "owner_age_requirement",
        checkedLabel: d.intl.string(d.t["+F8haD"]),
        uncheckedLabel: d.intl.string(d.t["5BwC/O"]),
        description: d.intl.formatToPlainString(d.t.DW1Vae, {
          minimumOwnerAgeInYears: t
        }),
        checked: e.meetsOwnerAgeRequirement
      }), null != r && null != e.hasSufficientMembers && c.push({
        key: "member_count_requirement",
        checkedLabel: d.intl.string(d.t.j7wXWo),
        uncheckedLabel: d.intl.string(d.t.W0suNz),
        description: d.intl.formatToPlainString(d.t.up53zR, {
          minimumSize: r
        }),
        checked: e.hasSufficientMembers
      }), null != e.minimumAgeInDays && null != e.meetsServerAgeRequirement && c.push({
        key: "server_age_requirement",
        checkedLabel: d.intl.string(d.t.mjbvWw),
        uncheckedLabel: d.intl.string(d.t["9BV6L6"]),
        description: d.intl.formatToPlainString(d.t.Zwv84O, {
          minimumAge: (0, l.A)(e.minimumAgeInDays)
        }),
        checked: e.meetsServerAgeRequirement
      }), null != e.weeklyCommunicators && c.push({
        key: "weekly_communicator_count_requirement",
        checkedLabel: d.intl.string(d.t.Qw7qv4),
        uncheckedLabel: d.intl.string(d.t.b45kGG),
        description: d.intl.string(d.t.NbtjEC),
        checked: e.weeklyCommunicators
      }), null != e.hasMemberRetention && c.push({
        key: "member_retention_requirement",
        checkedLabel: d.intl.string(d.t.Qvq39M),
        uncheckedLabel: d.intl.string(d.t.azHboI),
        description: d.intl.string(d.t.u4rCYO),
        checked: e.hasMemberRetention
      }), c.push({
        key: "nsfw_requirement",
        checkedLabel: d.intl.string(d.t.bymfTb),
        uncheckedLabel: d.intl.string(d.t["718pRA"]),
        description: d.intl.string(d.t["5ZqX+j"]),
        checked: e.notNSFW
      }), null != e.hasEnabled2FA) {
      let t = !e.hasEnabled2FA && !f && (null == n ? true : n.onEnableMFAClick) != null,
        r = !e.hasEnabled2FA && !g && (null == n ? true : n.onRequireModeratorMFAClick) != null,
        i = t || r;
      c.push({
        key: "2fa_requirement",
        checkedLabel: d.intl.string(d.t.NqVyFk),
        uncheckedLabel: d.intl.string(d.t.VcDNIV),
        description: d.intl.format(d.t["7NzkfV"], {
          enableMFAHook: m
        }),
        checked: e.hasEnabled2FA,
        actionLabel: i ? d.intl.string(d.t.BU4Diu) : true,
        actionHandler: i ? b : true
      })
    }
    returntrue === u && c.sort(e => e.checked ? 0 : false), c
  }, [e, u, f, n, g, m, b])
}