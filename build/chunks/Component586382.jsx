/** Chunk was on 22988 **/
/** chunk id: 586382, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  hH: () => g,
  xl: () => p,
  zA: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk807582 = require("./807582.jsx"),
  Chunk949640 = require("./949640.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk187561 = require("./187561.js");

function u(e) {
  let {
    guild: t,
    guildFeature: n,
    analyticsSection: o,
    analyticsObject: c,
    getPerks: u,
    targetPremiumGuildTier: m
  } = e, {
    analyticsLocations: g
  } = (0, l.ZP)(), p = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, s.E6)({
      guild: t,
      analyticsLocations: g,
      analyticsSection: o,
      analyticsObject: c,
      perks: u(),
      targetPremiumGuildTier: m
    })
  }, [g, c, o, t, u, m]);
  return (0, r.jsx)(a.Z, {
    guild: t,
    guildFeature: n,
    className: d.guildFeatureAvailabilityIndicator,
    onClick: p
  })
}

function m(e) {
  let {
    guild: t
  } = e;
  return (0, r.jsx)(u, {
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
  return (0, r.jsx)(u, {
    guild: t,
    guildFeature: o.oNc.INVITE_SPLASH,
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
    guildFeature: o.oNc.VANITY_URL,
    analyticsSection: o.jXE.GUILD_SETTINGS_VANITY_URL,
    analyticsObject: o.qAy.BADGE,
    getPerks: c.WW,
    targetPremiumGuildTier: o.Eu4.TIER_3
  })
}