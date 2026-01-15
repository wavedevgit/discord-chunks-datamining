/** Chunk was on web.js **/
/** chunk id: 144507, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $D: () => m,
  H2: () => g,
  MO: () => h,
  X$: () => _,
  d5: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk223892 = require("./223892.js"),
  Chunk674180 = require("./674180.js"),
  Chunk601964 = require("./601964.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk923726 = require("./923726.js"),
  Chunk981631 = require("./981631.js"),
  d = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.WAITLIST_ONLY = 1] = "WAITLIST_ONLY", e[e.NEEDS_COMMUNITY = 2] = "NEEDS_COMMUNITY", e[e.VISIBLE = 3] = "VISIBLE", e
  }({});

function f(e) {
  let {
    guild: t,
    isOwner: n,
    canManageGuildRoleSubscriptions: r,
    isGuildEligibleForRoleSubscriptions: i,
    isExpeditedMonetizationOnboardingGuild: a,
    isUserInCreatorMonetizationEligibleCountry: o,
    shouldRestrictUpdatingRoleSubscriptionSettings: s
  } = e;
  return !!r && (!s || !!n) && (!!(t.features.has(u.GuildFeatures.CREATOR_MONETIZABLE) || t.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || !!t.features.has(u.GuildFeatures.COMMUNITY) && (!!i || !!a) && n && o)
}

function p(e) {
  if (e.guild.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) return 0;
  if (f(e)) return 3;
  let {
    guild: t,
    isOwner: n,
    isUserInCreatorMonetizationEligibleCountry: r,
    isMonetizationWaitlistEnabledForGuild: i,
    isGuildEligibleForRoleSubscriptions: a,
    isExpeditedMonetizationOnboardingGuild: o
  } = e;
  return n && !r && i ? 1 : n && i && (a || o) && !t.features.has(u.GuildFeatures.COMMUNITY) ? 2 : 0
}

function _(e) {
  return 0 !== p(e)
}

function h(e) {
  let t = (0, c.Bt)(null == e ? true : e.id),
    n = (0, i.Ob)(e),
    s = (0, i.gS)(null == e ? true : e.id),
    u = m(e),
    d = (0, r.e7)([l.default], () => {
      let t = l.default.getCurrentUser();
      return null != e && (0, o.eM)(e, t)
    }),
    f = (0, i.Sd)(),
    {
      shouldRestrictUpdatingCreatorMonetizationSettings: _
    } = (0, a.gX)(null == e ? true : e.id);
  return null == e ? 0 : p({
    guild: e,
    isOwner: d,
    canManageGuildRoleSubscriptions: u,
    isGuildEligibleForRoleSubscriptions: t,
    isMonetizationWaitlistEnabledForGuild: s,
    isExpeditedMonetizationOnboardingGuild: n,
    isUserInCreatorMonetizationEligibleCountry: f,
    shouldRestrictUpdatingRoleSubscriptionSettings: _
  })
}

function m(e) {
  return (0, r.e7)([s.Z], () => g(e), [e])
}

function g(e) {
  return null != e && s.Z.can(u.Plq.ADMINISTRATOR, e)
}