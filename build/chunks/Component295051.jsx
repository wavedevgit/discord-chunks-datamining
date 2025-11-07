/** Chunk was on 64982 **/
/** chunk id: 295051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  hH: () => m,
  xl: () => p,
  zA: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk807582 = require("./807582.jsx"),
  Chunk821458 = require("./821458.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk829930 = require("./829930.js");

function u(e) {
  let {
    guild: t,
    guildFeature: n,
    analyticsSection: o,
    analyticsObject: c,
    getPerks: u,
    targetPremiumGuildTier: g
  } = e, {
    analyticsLocations: m
  } = (0, l.ZP)(), p = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, s.E6)({
      guild: t,
      analyticsLocations: m,
      analyticsSection: o,
      analyticsObject: c,
      perks: u(),
      targetPremiumGuildTier: g
    })
  }, [m, c, o, t, u, g]);
  return (0, r.jsx)(a.Z, {
    guild: t,
    guildFeature: n,
    className: d.guildFeatureAvailabilityIndicator,
    onClick: p
  })
}

function g(e) {
  let {
    guild: t
  } = e;
  return (0, r.jsx)(u, {
    guild: t,
    guildFeature: o.GuildFeatures.BANNER,
    analyticsSection: o.jXE.GUILD_BANNER,
    analyticsObject: o.qAy.BADGE,
    getPerks: c.XO
  })
}

function m(e) {
  let {
    guild: t
  } = e;
  return (0, r.jsx)(u, {
    guild: t,
    guildFeature: o.GuildFeatures.INVITE_SPLASH,
    analyticsSection: o.jXE.GUILD_INVITE_BACKGROUND,
    analyticsObject: o.qAy.BADGE,
    getPerks: c.o9
  })
}

function p(e) {
  let {
    guild: t
  } = e;
  return (0, r.jsx)(u, {
    guild: t,
    guildFeature: o.GuildFeatures.VANITY_URL,
    analyticsSection: o.jXE.GUILD_SETTINGS_VANITY_URL,
    analyticsObject: o.qAy.BADGE,
    getPerks: c.WW,
    targetPremiumGuildTier: o.Eu4.TIER_3
  })
}