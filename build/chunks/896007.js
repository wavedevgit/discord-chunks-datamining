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
  c = n(146305),
  A = n(981631),
  d = n(388032);
let {
  getSectionDefinition: u
} = c.Z, g = {
  HEADER: "HEADER",
  DIVIDER: "DIVIDER"
};

function f(e) {
  var t, n;
  let {
    guild: c,
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
    guild: c,
    isOwner: N,
    canManageGuildRoleSubscriptions: (0, l.H2)(c),
    isMonetizationWaitlistEnabledForGuild: (0, r.mG)(c.id),
    isGuildEligibleForRoleSubscriptions: (0, a.kT)(c.id),
    isExpeditedMonetizationOnboardingGuild: (0, r.Rw)(c),
    isUserInCreatorMonetizationEligibleCountry: (0, r.DB)(),
    shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.cu)(c.id)
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
    e.push(u(A.pNK.PROFILE, P)), e.push(u(A.pNK.TAG, P)), e.push(u(A.pNK.ENGAGEMENT, P)), e.push(u(A.pNK.BOOST_PERKS, P)), y && (e.push({
      section: g.DIVIDER
    }), e.push({
      section: g.HEADER,
      label: d.NW.string(d.t.m6lkGx)
    }), e.push(u(A.pNK.EMOJI, P)), e.push(u(A.pNK.STICKERS, P)), e.push(u(A.pNK.SOUNDBOARD, P))), (f || p || v || O) && (e.push({
      section: g.DIVIDER
    }), e.push({
      section: g.HEADER,
      label: d.NW.string(d.t.bMAKMD)
    }), e.push(u(A.pNK.MEMBERS, P)), e.push(u(A.pNK.ROLES, P)), e.push(u(A.pNK.INVITES, P)), e.push(u(A.pNK.ACCESS, P))), e.push({
      section: g.DIVIDER
    }), e.push({
      section: g.HEADER,
      label: d.NW.string(d.t.wF3KJy)
    }), e.push(u(A.pNK.INTEGRATIONS, P)), e.push(u(A.pNK.APP_DIRECTORY, P));
    let t = !c.hasFeature(A.oNc.COMMUNITY) && ((0, s.Nb)(c.id) || (0, s.ze)(c.id));
    (f || m || b || t) && (e.push({
      section: g.DIVIDER
    }), e.push({
      section: g.HEADER,
      label: d.NW.string(d.t["5tbTdX"])
    }), e.push(u(A.pNK.SAFETY, P)), e.push(u(A.pNK.MODERATION, P)), e.push(u(A.pNK.AUDIT_LOG, P)), e.push(u(A.pNK.BANS, P)), e.push(u(A.pNK.GUILD_AUTOMOD, P)));
    let n = c.hasFeature(A.oNc.COMMUNITY) && x,
      r = w();
    return (f || n || r) && (e.push({
      section: g.DIVIDER
    }), e.push(u(A.pNK.COMMUNITY, P)), e.push(u(A.pNK.ONBOARDING, P)), e.push(u(A.pNK.ANALYTICS, P)), e.push(u(A.pNK.COMMUNITY_WELCOME, P)), e.push(u(A.pNK.DISCOVERY_LANDING_PAGE, P)), e.push(u(A.pNK.ROLE_SUBSCRIPTIONS, P)), e.push(u(A.pNK.GUILD_PRODUCTS, P)), e.push(u(A.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, P))), e.push({
      section: g.DIVIDER
    }), e.push(u(A.pNK.GUILD_PREMIUM, P)), e.push(u(A.pNK.GUILD_TEMPLATES, P)), e.push(u(A.pNK.DELETE, P)), e.filter(o.lm)
  }
  return [{
    section: g.HEADER,
    label: "" !== c.toString() ? c.toString() : d.NW.string(d.t["154/bG"])
  }, u(A.pNK.OVERVIEW, P), u(A.pNK.ROLES, P), u(A.pNK.EMOJI, P), u(A.pNK.STICKERS, P), u(A.pNK.SOUNDBOARD, P), u(A.pNK.WIDGET, P), u(A.pNK.GUILD_TEMPLATES, P), u(A.pNK.VANITY_URL, P), u(A.pNK.ACCESS, P), {
    section: g.DIVIDER,
    predicate: () => f || h || C
  }, {
    section: g.HEADER,
    label: d.NW.string(d.t.PHjkRE),
    predicate: () => f || h || C
  }, u(A.pNK.INTEGRATIONS, P), u(A.pNK.APP_DIRECTORY, P), {
    section: g.DIVIDER,
    predicate: () => f
  }, {
    section: g.HEADER,
    label: d.NW.string(d.t["5tbTdX"]),
    predicate: () => f
  }, u(A.pNK.SAFETY, P), u(A.pNK.MODERATION, P), u(A.pNK.GUILD_AUTOMOD, P), u(A.pNK.AUDIT_LOG, P), u(A.pNK.BANS, P), {
    section: g.DIVIDER,
    predicate: () => f || x
  }, {
    section: g.HEADER,
    label: d.NW.string(d.t["1g9A/f"]),
    predicate: () => !E && (f || x)
  }, u(A.pNK.CLAN, P), u(A.pNK.COMMUNITY, P), u(A.pNK.ONBOARDING, P), u(A.pNK.ANALYTICS, P), u(A.pNK.DISCOVERY, P), u(A.pNK.DISCOVERY_LANDING_PAGE, P), u(A.pNK.COMMUNITY_WELCOME, P), {
    section: g.DIVIDER,
    predicate: w
  }, {
    section: g.HEADER,
    label: d.NW.string(d.t.mbn3bW),
    predicate: w
  }, u(A.pNK.ROLE_SUBSCRIPTIONS, P), u(A.pNK.GUILD_PRODUCTS, P), u(A.pNK.ROLE_SUBSCRIPTIONS_STORE_PAGE, P), {
    section: g.DIVIDER
  }, u(A.pNK.GUILD_PREMIUM, P), {
    section: g.DIVIDER
  }, {
    section: g.HEADER,
    label: d.NW.string(d.t["+OecxM"])
  }, u(A.pNK.MEMBERS, P), u(A.pNK.INSTANT_INVITES, P), {
    section: g.DIVIDER,
    predicate: () => j
  }, u(A.pNK.DELETE, P)].filter(o.lm)
}
let m = {
  generateSections: f
}