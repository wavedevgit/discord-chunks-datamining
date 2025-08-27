/** Chunk was on 88479 **/
/** chunk id: 896007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => f,
  vE: () => h
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
  getSectionDefinition: m
} = Chunk146305.Z, g = "HEADER", p = "DIVIDER";

function h(e) {
  var t, n;
  let {
    guild: c,
    canManageGuild: h,
    canViewAuditLog: f,
    canManageRoles: b,
    canManageBans: x,
    canAccessMembersPage: j,
    canViewGuildAnalytics: _,
    isOwner: v,
    isGuildAdmin: O,
    canManageGuildExpressions: y
  } = e, C = () => (0, s.X$)({
    guild: c,
    isOwner: v,
    canManageGuildRoleSubscriptions: (0, s.H2)(c),
    isMonetizationWaitlistEnabledForGuild: (0, r.mG)(c.id),
    isGuildEligibleForRoleSubscriptions: (0, a.kT)(c.id),
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
    monetizationPredicate: C
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
    section: g,
    label: "" !== c.name ? c.name : u.intl.string(u.t["154/bG"])
  }), E.push(m(d.pNK.PROFILE, N)), E.push(m(d.pNK.TAG, N)), E.push(m(d.pNK.ENGAGEMENT, N)), E.push(m(d.pNK.BOOST_PERKS, N)), y && (E.push({
    section: p
  }), E.push({
    section: g,
    label: u.intl.string(u.t.m6lkGx)
  }), E.push(m(d.pNK.EMOJI, N)), E.push(m(d.pNK.STICKERS, N)), E.push(m(d.pNK.SOUNDBOARD, N))), (h || b || j || O) && (E.push({
    section: p
  }), E.push({
    section: g,
    label: u.intl.string(u.t.bMAKMD)
  }), E.push(m(d.pNK.MEMBERS, N)), E.push(m(d.pNK.ROLES, N)), E.push(m(d.pNK.INVITES, N)), E.push(m(d.pNK.ACCESS, N))), E.push({
    section: p
  }), E.push({
    section: g,
    label: u.intl.string(u.t.wF3KJy)
  }), E.push(m(d.pNK.INTEGRATIONS, N)), E.push(m(d.pNK.APP_DIRECTORY, N));
  let I = !c.features.has(d.oNc.COMMUNITY) && ((0, l.Nb)(c.id) || (0, l.ze)(c.id));
  (h || f || x || I) && (E.push({
    section: p
  }), E.push({
    section: g,
    label: u.intl.string(u.t["5tbTdX"])
  }), E.push(m(d.pNK.SAFETY, N)), E.push(m(d.pNK.MODERATION, N)), E.push(m(d.pNK.AUDIT_LOG, N)), E.push(m(d.pNK.BANS, N)), E.push(m(d.pNK.GUILD_AUTOMOD, N)));
  let S = c.features.has(d.oNc.COMMUNITY) && _,
    T = C();
  return (h || S || T) && (E.push({
    section: p
  }), E.push(m(d.pNK.COMMUNITY, N)), E.push(m(d.pNK.ONBOARDING, N)), E.push(m(d.pNK.ANALYTICS, N)), E.push(m(d.pNK.COMMUNITY_WELCOME, N)), E.push(m(d.pNK.DISCOVERY_LANDING_PAGE, N)), E.push(m(d.pNK.ROLE_SUBSCRIPTIONS, N)), E.push(m(d.pNK.GUILD_PRODUCTS, N)), E.push(m(d.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, N))), E.push({
    section: p
  }), E.push(m(d.pNK.GUILD_PREMIUM, N)), E.push(m(d.pNK.GUILD_TEMPLATES, N)), E.push(m(d.pNK.DELETE, N)), E.filter(o.lm)
}
let f = {
  generateSections: h
}