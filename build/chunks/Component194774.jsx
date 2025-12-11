/** Chunk was on 9536 **/
/** chunk id: 194774, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  h: () => h
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
  Chunk823847 = require("./823847.js");

function h(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e, h = t.features.has(g.GuildFeatures.INVITE_SPLASH), x = n && h, {
    analyticsLocations: j
  } = (0, a.ZP)(), v = i.useCallback(e => {
    d.Z.updateGuild({
      splash: e
    })
  }, []), O = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, u.E6)({
      guild: t,
      analyticsLocations: j,
      analyticsSection: g.jXE.GUILD_INVITE_BACKGROUND,
      analyticsObject: g.qAy.UPLOAD_IMAGE,
      perks: (0, m.o9)()
    })
  }, [j, t]), C = (0, r.jsx)(o.Z, {
    image: t.splash,
    makeURL: e => null != e ? c.ZP.getGuildSplashURL({
      id: t.id,
      splash: e
    }) : null,
    disabled: !x,
    onChange: v,
    hint: p.intl.string(p.t.uPvxqJ),
    enabled: x,
    maxFileSizeBytes: f.B,
    onFileSizeError: () => (0, s.Z)(f.B)
  });
  return h ? C : (0, r.jsx)(l.P3F, {
    "aria-hidden": true,
    tabIndex: false,
    className: b.upsell,
    onClick: O,
    children: C
  })
}