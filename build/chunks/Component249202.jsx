/** Chunk was on 47841 **/
/** chunk id: 249202, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk342490 = require("./342490.jsx"),
  Chunk695800 = require("./695800.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk874864 = require("./874864.js"),
  Chunk339984 = require("./339984.js"),
  Chunk478644 = require("./478644.js"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
  let {
    guild: t,
    canManageGuild: n,
    buttonClassName: b
  } = e, {
    analyticsLocations: m
  } = (0, s.Ay)(), p = t.features.has(o.GuildFeatures.BANNER), x = i.useCallback(e => {
    let {
      imageUri: n,
      file: r
    } = e;
    (0, c.fI)(t, m, n, r)
  }, [m, t]), h = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, c.p_)({
      guild: t,
      analyticsLocations: m,
      analyticsSection: o.JJy.GUILD_BANNER,
      analyticsObject: o.ZSU.BUTTON_CTA,
      perks: (0, d.QR)()
    })
  }, [m, t]), j = i.useCallback(() => {
    (0, c.Nn)({
      uploadType: u.HL.GUILD_BANNER,
      maxFileSizeBytes: f.j,
      onComplete: x,
      analyticsLocation: {
        page: o.liQ.GUILD_SETTINGS,
        section: o.JJy.GUILD_BANNER
      },
      analyticsLocations: m
    })
  }, [m, x]);
  return p ? (0, r.jsx)("div", {
    className: b,
    children: (0, r.jsx)(l.$nd, {
      disabled: !(p && n),
      variant: "primary",
      text: g.intl.string(g.t.yG2pUi),
      onClick: j
    })
  }) : (0, r.jsx)("div", {
    className: b,
    children: (0, r.jsx)(a.u, {
      onClick: h
    })
  })
}