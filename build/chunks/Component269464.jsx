/** Chunk was on 9536 **/
/** chunk id: 269464, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  O: () => p
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
  Chunk676157 = require("./676157.js");

function p(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e, p = t.features.has(d.GuildFeatures.BANNER), h = t.features.has(d.GuildFeatures.ANIMATED_BANNER), x = p && n, {
    analyticsLocations: j
  } = (0, a.ZP)(), v = i.useCallback((e, n) => {
    (0, c.f4)(t, j, e, n)
  }, [j, t]), O = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, c.E6)({
      guild: t,
      analyticsLocations: j,
      analyticsSection: d.jXE.GUILD_BANNER,
      analyticsObject: d.qAy.UPLOAD_IMAGE,
      perks: (0, u.XO)()
    })
  }, [j, t]), y = (0, r.jsx)(s.Z, {
    image: t.banner,
    makeURL: e => null != e ? o.ZP.getGuildBannerURL({
      id: t.id,
      banner: e
    }, h) : null,
    disabled: !x,
    onChange: v,
    hint: f.intl.string(f.t.uPvxqJ),
    onOpenImageSelectModal: () => (0, c.mw)({
      uploadType: g.pC.GUILD_BANNER,
      maxFileSizeBytes: m.B,
      onComplete: e => {
        let {
          imageUri: t,
          file: n
        } = e;
        return v(t, n)
      },
      analyticsLocation: {
        page: d.ZY5.GUILD_SETTINGS,
        section: d.jXE.GUILD_BANNER
      },
      analyticsLocations: j
    }),
    enabled: x
  });
  return p ? y : (0, r.jsx)(l.P3F, {
    "aria-hidden": true,
    tabIndex: false,
    className: b.upsell,
    onClick: O,
    children: y
  })
}