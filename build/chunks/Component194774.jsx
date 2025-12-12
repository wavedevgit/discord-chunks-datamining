/** Chunk was on 384 **/
/** chunk id: 194774, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  h: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk884858 = require("./884858.js"),
  Chunk516129 = require("./516129.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk434404 = require("./434404.js"),
  Chunk821458 = require("./821458.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk200299 = require("./200299.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk308212 = require("./308212.js");

function x(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e, x = t.features.has(g.GuildFeatures.INVITE_SPLASH), b = n && x, {
    analyticsLocations: j
  } = (0, s.ZP)(), _ = i.useCallback(e => {
    u.Z.updateGuild({
      splash: e
    })
  }, []), v = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, d.E6)({
      guild: t,
      analyticsLocations: j,
      analyticsSection: g.jXE.GUILD_INVITE_BACKGROUND,
      analyticsObject: g.qAy.UPLOAD_IMAGE,
      perks: (0, m.o9)()
    })
  }, [j, t]), O = (0, r.jsx)(o.Z, {
    image: t.splash,
    makeURL: e => null != e ? c.ZP.getGuildSplashURL({
      id: t.id,
      splash: e
    }) : null,
    disabled: !b,
    onChange: _,
    hint: f.intl.string(f.t.uPvxqJ),
    enabled: b,
    maxFileSizeBytes: p.B,
    onFileSizeError: () => (0, a.Z)(p.B)
  });
  return x ? O : (0, r.jsx)(l.P3F, {
    "aria-hidden": true,
    tabIndex: false,
    className: h.upsell,
    onClick: v,
    children: O
  })
}