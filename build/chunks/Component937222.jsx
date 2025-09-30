/** Chunk was on 64982 **/
/** chunk id: 937222, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  F: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk821458 = require("./821458.jsx"),
  Chunk585961 = require("./585961.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk486324 = require("./486324.js"),
  Chunk200299 = require("./200299.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    guild: t,
    canManageGuild: n,
    buttonClassName: p
  } = e, {
    analyticsLocations: f
  } = (0, s.ZP)(), h = t.features.has(c.oNc.BANNER), x = i.useCallback(e => {
    let {
      imageUri: n,
      file: r
    } = e;
    (0, a.f4)(t, f, n, r)
  }, [f, t]), b = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, a.E6)({
      guild: t,
      analyticsLocations: f,
      analyticsSection: c.jXE.GUILD_BANNER,
      analyticsObject: c.qAy.BUTTON_CTA,
      perks: (0, d.XO)()
    })
  }, [f, t]);
  return h ? (0, r.jsx)(l.zx, {
    disabled: !(h && n),
    color: l.zx.Colors.BRAND,
    className: p,
    onClick: () => (0, a.mw)({
      uploadType: u.pC.GUILD_BANNER,
      maxFileSizeBytes: m.B,
      onComplete: x,
      analyticsLocation: {
        page: c.ZY5.GUILD_SETTINGS,
        section: c.jXE.GUILD_BANNER
      },
      analyticsLocations: f
    }),
    children: g.intl.string(g.t.yG2pUl)
  }) : (0, r.jsx)(o.P, {
    className: p,
    onClick: b
  })
}