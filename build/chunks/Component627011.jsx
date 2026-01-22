/** Chunk was on 47841 **/
/** chunk id: 627011, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  B6: () => f,
  bX: () => g,
  rV: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk753838 = require("./753838.jsx"),
  Chunk695800 = require("./695800.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk874864 = require("./874864.js"),
  Chunk196647 = require("./196647.js");

function u(e) {
  let {
    guild: t,
    guildFeature: n,
    analyticsSection: c,
    analyticsObject: o,
    getPerks: u,
    targetPremiumGuildTier: f
  } = e, {
    analyticsLocations: g
  } = (0, l.Ay)(), b = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, a.p_)({
      guild: t,
      analyticsLocations: g,
      analyticsSection: c,
      analyticsObject: o,
      perks: u(),
      targetPremiumGuildTier: f
    })
  }, [g, o, c, t, u, f]);
  return (0, r.jsx)(s.A, {
    guild: t,
    guildFeature: n,
    className: d.M,
    onClick: b
  })
}

function f(e) {
  let {
    guild: t
  } = e;
  return (0, r.jsx)(u, {
    guild: t,
    guildFeature: c.GuildFeatures.BANNER,
    analyticsSection: c.JJy.GUILD_BANNER,
    analyticsObject: c.ZSU.BADGE,
    getPerks: o.QR
  })
}

function g(e) {
  let {
    guild: t
  } = e;
  return (0, r.jsx)(u, {
    guild: t,
    guildFeature: c.GuildFeatures.INVITE_SPLASH,
    analyticsSection: c.JJy.GUILD_INVITE_BACKGROUND,
    analyticsObject: c.ZSU.BADGE,
    getPerks: o.Lp
  })
}

function b(e) {
  let {
    guild: t
  } = e;
  return (0, r.jsx)(u, {
    guild: t,
    guildFeature: c.GuildFeatures.VANITY_URL,
    analyticsSection: c.JJy.GUILD_SETTINGS_VANITY_URL,
    analyticsObject: c.ZSU.BADGE,
    getPerks: o.DU,
    targetPremiumGuildTier: c.TVA.TIER_3
  })
}