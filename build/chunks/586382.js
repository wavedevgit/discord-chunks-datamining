/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  hH: () => g,
  xl: () => f,
  zA: () => u
});
var r = n(200651),
  i = n(192379),
  s = n(906732),
  a = n(807582),
  l = n(949640),
  o = n(981631),
  c = n(30513),
  A = n(531489);

function d(e) {
  let {
    guild: t,
    guildFeature: n,
    analyticsSection: o,
    analyticsObject: c,
    getPerks: d,
    targetPremiumGuildTier: u
  } = e, {
    analyticsLocations: g
  } = (0, s.ZP)(), f = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, l.E6)({
      guild: t,
      analyticsLocations: g,
      analyticsSection: o,
      analyticsObject: c,
      perks: d(),
      targetPremiumGuildTier: u
    })
  }, [g, c, o, t, d, u]);
  return (0, r.jsx)(a.Z, {
    guild: t,
    guildFeature: n,
    className: A.guildFeatureAvailabilityIndicator,
    onClick: f
  })
}

function u(e) {
  let {
    guild: t
  } = e;
  return (0, r.jsx)(d, {
    guild: t,
    guildFeature: o.oNc.BANNER,
    analyticsSection: o.jXE.GUILD_BANNER,
    analyticsObject: o.qAy.BADGE,
    getPerks: c.XO
  })
}

function g(e) {
  let {
    guild: t
  } = e;
  return (0, r.jsx)(d, {
    guild: t,
    guildFeature: o.oNc.INVITE_SPLASH,
    analyticsSection: o.jXE.GUILD_INVITE_BACKGROUND,
    analyticsObject: o.qAy.BADGE,
    getPerks: c.o9
  })
}

function f(e) {
  let {
    guild: t
  } = e;
  return (0, r.jsx)(d, {
    guild: t,
    guildFeature: o.oNc.VANITY_URL,
    analyticsSection: o.jXE.GUILD_SETTINGS_VANITY_URL,
    analyticsObject: o.qAy.BADGE,
    getPerks: c.WW,
    targetPremiumGuildTier: o.Eu4.TIER_3
  })
}