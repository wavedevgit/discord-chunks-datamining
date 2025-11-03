/** Chunk was on 64982 **/
/** chunk id: 937222, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  F: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk159691 = require("./159691.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk892803 = require("./892803.js"),
  Chunk465682 = require("./465682.jsx"),
  Chunk821458 = require("./821458.jsx"),
  Chunk585961 = require("./585961.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk486324 = require("./486324.js"),
  Chunk200299 = require("./200299.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let {
    guild: t,
    canManageGuild: n,
    buttonClassName: h
  } = e, {
    analyticsLocations: b
  } = (0, a.ZP)(), x = t.features.has(u.GuildFeatures.BANNER), {
    enabled: j
  } = s.Z.useConfig({
    location: "GuildSettingsBannerUploadButton"
  }), v = i.useCallback(e => {
    let {
      imageUri: n,
      file: r
    } = e;
    (0, c.f4)(t, b, n, r)
  }, [b, t]), _ = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, c.E6)({
      guild: t,
      analyticsLocations: b,
      analyticsSection: u.jXE.GUILD_BANNER,
      analyticsObject: u.qAy.BUTTON_CTA,
      perks: (0, g.XO)()
    })
  }, [b, t]), O = i.useCallback(() => {
    (0, c.mw)({
      uploadType: m.pC.GUILD_BANNER,
      maxFileSizeBytes: p.B,
      onComplete: v,
      analyticsLocation: {
        page: u.ZY5.GUILD_SETTINGS,
        section: u.jXE.GUILD_BANNER
      },
      analyticsLocations: b
    })
  }, [b, v]);
  return x ? (0, r.jsx)("div", {
    className: h,
    children: (0, r.jsx)(l.zxk, {
      disabled: !(x && n),
      variant: "primary",
      text: f.intl.string(f.t.yG2pUi),
      onClick: O
    })
  }) : j ? (0, r.jsx)("div", {
    className: h,
    children: (0, r.jsx)(o.v, {
      onClick: _
    })
  }) : (0, r.jsx)(d.P, {
    className: h,
    onClick: _
  })
}