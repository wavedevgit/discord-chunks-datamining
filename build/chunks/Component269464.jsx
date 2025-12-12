/** Chunk was on 384 **/
/** chunk id: 269464, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  O: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk516129 = require("./516129.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk821458 = require("./821458.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk486324 = require("./486324.js"),
  Chunk200299 = require("./200299.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk747530 = require("./747530.js");

function h(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e, h = t.features.has(u.GuildFeatures.BANNER), x = t.features.has(u.GuildFeatures.ANIMATED_BANNER), b = h && n, {
    analyticsLocations: j
  } = (0, s.ZP)(), _ = i.useCallback((e, n) => {
    (0, c.f4)(t, j, e, n)
  }, [j, t]), v = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, c.E6)({
      guild: t,
      analyticsLocations: j,
      analyticsSection: u.jXE.GUILD_BANNER,
      analyticsObject: u.qAy.UPLOAD_IMAGE,
      perks: (0, d.XO)()
    })
  }, [j, t]), O = (0, r.jsx)(a.Z, {
    image: t.banner,
    makeURL: e => null != e ? o.ZP.getGuildBannerURL({
      id: t.id,
      banner: e
    }, x) : null,
    disabled: !b,
    onChange: _,
    hint: p.intl.string(p.t.uPvxqJ),
    onOpenImageSelectModal: () => (0, c.mw)({
      uploadType: g.pC.GUILD_BANNER,
      maxFileSizeBytes: m.B,
      onComplete: e => {
        let {
          imageUri: t,
          file: n
        } = e;
        return _(t, n)
      },
      analyticsLocation: {
        page: u.ZY5.GUILD_SETTINGS,
        section: u.jXE.GUILD_BANNER
      },
      analyticsLocations: j
    }),
    enabled: b
  });
  return h ? O : (0, r.jsx)(l.P3F, {
    "aria-hidden": true,
    tabIndex: false,
    className: f.upsell,
    onClick: v,
    children: O
  })
}