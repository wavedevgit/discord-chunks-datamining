/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  ZP: () => m,
  vE: () => f
}), n(653041);
var r = n(223892),
  i = n(738774),
  s = n(676317),
  a = n(923726),
  l = n(144507),
  o = n(823379),
  A = n(146305),
  c = n(981631),
  d = n(388032);
let {
  getSectionDefinition: u
} = A.Z, g = {
  HEADER: "HEADER",
  DIVIDER: "DIVIDER"
};

function f(e) {
  var t, n;
  let {
    guild: A,
    canManageGuild: f,
    canViewAuditLog: m,
    canManageRoles: p,
    canManageWebhooks: h,
    canUnlinkChannels: C,
    canManageBans: b,
    canAccessMembersPage: v,
    canViewGuildAnalytics: x,
    isOwner: N,
    isOwnerWithRequiredMfaLevel: j,
    canAccessClanSettings: E,
    isGuildSettingsFoundationEnabled: I,
    isGuildAdmin: O,
    canManageGuildExpressions: y
  } = e, w = () => (0, l.X$)({
    guild: A,
    isOwner: N,
    canManageGuildRoleSubscriptions: (0, l.H2)(A),
    isMonetizationWaitlistEnabledForGuild: (0, r.mG)(A.id),
    isGuildEligibleForRoleSubscriptions: (0, a.kT)(A.id),
    isExpeditedMonetizationOnboardingGuild: (0, r.Rw)(A),
    isUserInCreatorMonetizationEligibleCountry: (0, r.DB)(),
    shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.cu)(A.id)
  }), P = (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r
      })
    }
    return e
  }({}, e), n = n = {
    monetizationPredicate: w
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t);
  if (I) {
    let e = [];
    e.push(u(c.pNK.PROFILE, P)), e.push(u(c.pNK.TAG, P)), e.push(u(c.pNK.ENGAGEMENT, P)), e.push(u(c.pNK.BOOST_PERKS, P)), y && (e.push({
      section: g.DIVIDER
    }), e.push({
      section: g.HEADER,
      label: d.NW.string(d.t.m6lkGx)
    }), e.push(u(c.pNK.EMOJI, P)), e.push(u(c.pNK.STICKERS, P)), e.push(u(c.pNK.SOUNDBOARD, P))), (f || p || v || O) && (e.push({
      section: g.DIVIDER
    }), e.push({
      section: g.HEADER,
      label: d.NW.string(d.t.bMAKMD)
    }), e.push(u(c.pNK.MEMBERS, P)), e.push(u(c.pNK.ROLES, P)), e.push(u(c.pNK.INVITES, P)), e.push(u(c.pNK.ACCESS, P))), e.push({
      section: g.DIVIDER
    }), e.push({
      section: g.HEADER,
      label: d.NW.string(d.t.wF3KJy)
    }), e.push(u(c.pNK.INTEGRATIONS, P)), e.push(u(c.pNK.APP_DIRECTORY, P));
    let t = !A.hasFeature(c.oNc.COMMUNITY) && ((0, s.Nb)(A.id) || (0, s.ze)(A.id));
    (f || m || b || t) && (e.push({
      section: g.DIVIDER
    }), e.push({
      section: g.HEADER,
      label: d.NW.string(d.t["5tbTdX"])
    }), e.push(u(c.pNK.SAFETY, P)), e.push(u(c.pNK.MODERATION, P)), e.push(u(c.pNK.AUDIT_LOG, P)), e.push(u(c.pNK.BANS, P)), e.push(u(c.pNK.GUILD_AUTOMOD, P)));
    let n = A.hasFeature(c.oNc.COMMUNITY) && x,
      r = w();
    return (f || n || r) && (e.push({
      section: g.DIVIDER
    }), e.push(u(c.pNK.COMMUNITY, P)), e.push(u(c.pNK.ONBOARDING, P)), e.push(u(c.pNK.ANALYTICS, P)), e.push(u(c.pNK.COMMUNITY_WELCOME, P)), e.push(u(c.pNK.DISCOVERY_LANDING_PAGE, P)), e.push(u(c.pNK.ROLE_SUBSCRIPTIONS, P)), e.push(u(c.pNK.GUILD_PRODUCTS, P)), e.push(u(c.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, P))), e.push({
      section: g.DIVIDER
    }), e.push(u(c.pNK.GUILD_PREMIUM, P)), e.push(u(c.pNK.GUILD_TEMPLATES, P)), e.push(u(c.pNK.DELETE, P)), e.filter(o.lm)
  }
  return [{
    section: g.HEADER,
    label: "" !== A.toString() ? A.toString() : d.NW.string(d.t["154/bG"])
  }, u(c.pNK.OVERVIEW, P), u(c.pNK.ROLES, P), u(c.pNK.EMOJI, P), u(c.pNK.STICKERS, P), u(c.pNK.SOUNDBOARD, P), u(c.pNK.WIDGET, P), u(c.pNK.GUILD_TEMPLATES, P), u(c.pNK.VANITY_URL, P), u(c.pNK.ACCESS, P), {
    section: g.DIVIDER,
    predicate: () => f || h || C
  }, {
    section: g.HEADER,
    label: d.NW.string(d.t.PHjkRE),
    predicate: () => f || h || C
  }, u(c.pNK.INTEGRATIONS, P), u(c.pNK.APP_DIRECTORY, P), {
    section: g.DIVIDER,
    predicate: () => f
  }, {
    section: g.HEADER,
    label: d.NW.string(d.t["5tbTdX"]),
    predicate: () => f
  }, u(c.pNK.SAFETY, P), u(c.pNK.MODERATION, P), u(c.pNK.GUILD_AUTOMOD, P), u(c.pNK.AUDIT_LOG, P), u(c.pNK.BANS, P), {
    section: g.DIVIDER,
    predicate: () => f || x
  }, {
    section: g.HEADER,
    label: d.NW.string(d.t["1g9A/f"]),
    predicate: () => !E && (f || x)
  }, u(c.pNK.CLAN, P), u(c.pNK.COMMUNITY, P), u(c.pNK.ONBOARDING, P), u(c.pNK.ANALYTICS, P), u(c.pNK.DISCOVERY, P), u(c.pNK.DISCOVERY_LANDING_PAGE, P), u(c.pNK.COMMUNITY_WELCOME, P), {
    section: g.DIVIDER,
    predicate: w
  }, {
    section: g.HEADER,
    label: d.NW.string(d.t.mbn3bW),
    predicate: w
  }, u(c.pNK.ROLE_SUBSCRIPTIONS, P), u(c.pNK.GUILD_PRODUCTS, P), u(c.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, P), {
    section: g.DIVIDER
  }, u(c.pNK.GUILD_PREMIUM, P), {
    section: g.DIVIDER
  }, {
    section: g.HEADER,
    label: d.NW.string(d.t["+OecxM"])
  }, u(c.pNK.MEMBERS, P), u(c.pNK.INSTANT_INVITES, P), {
    section: g.DIVIDER,
    predicate: () => j
  }, u(c.pNK.DELETE, P)].filter(o.lm)
}
let m = {
  generateSections: f
}