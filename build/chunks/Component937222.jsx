/** Chunk was on 9536 **/
/** chunk id: 937222, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  F: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk465682 = require("./465682.jsx"),
  Chunk821458 = require("./821458.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk486324 = require("./486324.js"),
  Chunk200299 = require("./200299.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    guild: t,
    canManageGuild: n,
    buttonClassName: f
  } = e, {
    analyticsLocations: b
  } = (0, a.ZP)(), p = t.features.has(c.GuildFeatures.BANNER), h = i.useCallback(e => {
    let {
      imageUri: n,
      file: r
    } = e;
    (0, o.f4)(t, b, n, r)
  }, [b, t]), x = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, o.E6)({
      guild: t,
      analyticsLocations: b,
      analyticsSection: c.jXE.GUILD_BANNER,
      analyticsObject: c.qAy.BUTTON_CTA,
      perks: (0, d.XO)()
    })
  }, [b, t]), j = i.useCallback(() => {
    (0, o.mw)({
      uploadType: u.pC.GUILD_BANNER,
      maxFileSizeBytes: g.B,
      onComplete: h,
      analyticsLocation: {
        page: c.ZY5.GUILD_SETTINGS,
        section: c.jXE.GUILD_BANNER
      },
      analyticsLocations: b
    })
  }, [b, h]);
  return p ? (0, r.jsx)("div", {
    className: f,
    children: (0, r.jsx)(l.zxk, {
      disabled: !(p && n),
      variant: "primary",
      text: m.intl.string(m.t.yG2pUi),
      onClick: j
    })
  }) : (0, r.jsx)("div", {
    className: f,
    children: (0, r.jsx)(s.v, {
      onClick: x
    })
  })
}