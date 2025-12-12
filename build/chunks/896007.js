/** Chunk was on 384 **/
/** chunk id: 896007, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => h,
  vE: () => f
}), require("./539854.js");
var Chunk223892 = require("./223892.js"),
  Chunk738774 = require("./738774.js"),
  Chunk676317 = require("./676317.js"),
  Chunk923726 = require("./923726.js"),
  Chunk144507 = require("./144507.js"),
  Chunk823379 = require("./823379.js"),
  Chunk146305 = require("./146305.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let {
  getSectionDefinition: g
} = Chunk146305.Z, m = "HEADER", p = "DIVIDER";

function f(e) {
  var t, n;
  let {
    guild: c,
    canManageGuild: f,
    canViewAuditLog: h,
    canManageRoles: x,
    canManageBans: b,
    canAccessMembersPage: j,
    canViewGuildAnalytics: _,
    isOwner: v,
    isGuildAdmin: O,
    canManageGuildExpressions: C
  } = e, y = () => (0, a.X$)({
    guild: c,
    isOwner: v,
    canManageGuildRoleSubscriptions: (0, a.H2)(c),
    isMonetizationWaitlistEnabledForGuild: (0, r.mG)(c.id),
    isGuildEligibleForRoleSubscriptions: (0, s.kT)(c.id),
    isExpeditedMonetizationOnboardingGuild: (0, r.Rw)(c),
    isUserInCreatorMonetizationEligibleCountry: (0, r.DB)(),
    shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.cu)(c.id)
  }), N = (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, e), n = n = {
    monetizationPredicate: y
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t), E = [];
  E.push({
    section: m,
    label: "" !== c.name ? c.name : d.intl.string(d.t["154/bL"])
  }), E.push(g(u.pNK.PROFILE, N)), E.push(g(u.pNK.TAG, N)), E.push(g(u.pNK.ENGAGEMENT, N)), E.push(g(u.pNK.BOOST_PERKS, N)), C && (E.push({
    section: p
  }), E.push({
    section: m,
    label: d.intl.string(d.t.m6lkGy)
  }), E.push(g(u.pNK.EMOJI, N)), E.push(g(u.pNK.STICKERS, N)), E.push(g(u.pNK.SOUNDBOARD, N))), (f || x || j || O) && (E.push({
    section: p
  }), E.push({
    section: m,
    label: d.intl.string(d.t.bMAKMK)
  }), E.push(g(u.pNK.MEMBERS, N)), E.push(g(u.pNK.ROLES, N)), E.push(g(u.pNK.INVITES, N)), E.push(g(u.pNK.ACCESS, N))), E.push({
    section: p
  }), E.push({
    section: m,
    label: d.intl.string(d.t.wF3KJy)
  }), E.push(g(u.pNK.INTEGRATIONS, N)), E.push(g(u.pNK.APP_DIRECTORY, N));
  let I = !c.features.has(u.GuildFeatures.COMMUNITY) && ((0, l.Nb)(c.id) || (0, l.ze)(c.id));
  (f || h || b || I) && (E.push({
    section: p
  }), E.push({
    section: m,
    label: d.intl.string(d.t["5tbTdV"])
  }), E.push(g(u.pNK.SAFETY, N)), E.push(g(u.pNK.MODERATION, N)), E.push(g(u.pNK.AUDIT_LOG, N)), E.push(g(u.pNK.BANS, N)), E.push(g(u.pNK.GUILD_AUTOMOD, N)));
  let S = c.features.has(u.GuildFeatures.COMMUNITY) && _,
    T = y();
  return (f || S || T) && (E.push({
    section: p
  }), E.push(g(u.pNK.COMMUNITY, N)), E.push(g(u.pNK.ONBOARDING, N)), E.push(g(u.pNK.ANALYTICS, N)), E.push(g(u.pNK.COMMUNITY_WELCOME, N)), E.push(g(u.pNK.DISCOVERY_LANDING_PAGE, N)), E.push(g(u.pNK.ROLE_SUBSCRIPTIONS, N)), E.push(g(u.pNK.GUILD_PRODUCTS, N)), E.push(g(u.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, N))), E.push({
    section: p
  }), E.push(g(u.pNK.GUILD_PREMIUM, N)), E.push(g(u.pNK.GUILD_TEMPLATES, N)), E.push(g(u.pNK.DELETE, N)), E.filter(o.lm)
}
let h = {
  generateSections: f
}