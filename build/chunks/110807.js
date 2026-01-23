/** Chunk was on 47841 **/
/** chunk id: 110807, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => b,
  SB: () => f
}), require("./321073.js");
var Chunk469993 = require("./469993.js"),
  Chunk836039 = require("./836039.js"),
  Chunk979816 = require("./979816.js"),
  Chunk567305 = require("./567305.js"),
  Chunk555325 = require("./555325.js"),
  Chunk403362 = require("./403362.js"),
  Chunk91168 = require("./91168.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let {
  getSectionDefinition: g
} = Chunk91168.A, m = "HEADER", p = "DIVIDER";

function f(e) {
  var t, n;
  let {
    guild: c,
    canManageGuild: f,
    canViewAuditLog: b,
    canManageRoles: h,
    canManageBans: x,
    canAccessMembersPage: j,
    canViewGuildAnalytics: _,
    isOwner: O,
    isGuildAdmin: v,
    canManageGuildExpressions: y
  } = e, A = () => (0, a.V9)({
    guild: c,
    isOwner: O,
    canManageGuildRoleSubscriptions: (0, a.X9)(c),
    isMonetizationWaitlistEnabledForGuild: (0, r.Kw)(c.id),
    isGuildEligibleForRoleSubscriptions: (0, s.OV)(c.id),
    isExpeditedMonetizationOnboardingGuild: (0, r.Sm)(c),
    isUserInCreatorMonetizationEligibleCountry: (0, r.Z1)(),
    shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.mk)(c.id)
  }), E = (t = function(e) {
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
    monetizationPredicate: A
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t), N = [];
  N.push({
    section: m,
    label: "" !== c.name ? c.name : u.intl.string(u.t["154/bL"])
  }), N.push(g(d.BEX.PROFILE, E)), N.push(g(d.BEX.TAG, E)), N.push(g(d.BEX.ENGAGEMENT, E)), N.push(g(d.BEX.BOOST_PERKS, E)), y && (N.push({
    section: p
  }), N.push({
    section: m,
    label: u.intl.string(u.t.m6lkGy)
  }), N.push(g(d.BEX.EMOJI, E)), N.push(g(d.BEX.STICKERS, E)), N.push(g(d.BEX.SOUNDBOARD, E))), (f || h || j || v) && (N.push({
    section: p
  }), N.push({
    section: m,
    label: u.intl.string(u.t.bMAKMK)
  }), N.push(g(d.BEX.MEMBERS, E)), N.push(g(d.BEX.ROLES, E)), N.push(g(d.BEX.INVITES, E)), N.push(g(d.BEX.ACCESS, E))), N.push({
    section: p
  }), N.push({
    section: m,
    label: u.intl.string(u.t.wF3KJy)
  }), N.push(g(d.BEX.INTEGRATIONS, E)), N.push(g(d.BEX.APP_DIRECTORY, E));
  let S = !c.features.has(d.GuildFeatures.COMMUNITY) && ((0, l.hX)(c.id) || (0, l.i_)(c.id));
  (f || b || x || S) && (N.push({
    section: p
  }), N.push({
    section: m,
    label: u.intl.string(u.t["5tbTdV"])
  }), N.push(g(d.BEX.SAFETY, E)), N.push(g(d.BEX.MODERATION, E)), N.push(g(d.BEX.AUDIT_LOG, E)), N.push(g(d.BEX.BANS, E)), N.push(g(d.BEX.GUILD_AUTOMOD, E)));
  let I = c.features.has(d.GuildFeatures.COMMUNITY) && _,
    T = A();
  return (f || I || T) && (N.push({
    section: p
  }), N.push(g(d.BEX.COMMUNITY, E)), N.push(g(d.BEX.ONBOARDING, E)), N.push(g(d.BEX.ANALYTICS, E)), N.push(g(d.BEX.COMMUNITY_WELCOME, E)), N.push(g(d.BEX.DISCOVERY_LANDING_PAGE, E)), N.push(g(d.BEX.ROLE_SUBSCRIPTIONS, E)), N.push(g(d.BEX.GUILD_PRODUCTS, E)), N.push(g(d.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE, E))), N.push({
    section: p
  }), N.push(g(d.BEX.GUILD_TEMPLATES, E)), N.push(g(d.BEX.DELETE, E)), N.filter(o.Vq)
}
let b = {
  generateSections: f
}