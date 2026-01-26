/** Chunk was on 39048 **/
/** chunk id: 249202, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => p
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

function p(e) {
  let {
    guild: t,
    canManageGuild: n,
    buttonClassName: p
  } = e, {
    analyticsLocations: f
  } = (0, s.Ay)(), h = t.features.has(c.GuildFeatures.BANNER), b = i.useCallback(e => {
    let {
      imageUri: n,
      file: r
    } = e;
    (0, o.fI)(t, f, n, r)
  }, [f, t]), x = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, o.p_)({
      guild: t,
      analyticsLocations: f,
      analyticsSection: c.JJy.GUILD_BANNER,
      analyticsObject: c.ZSU.BUTTON_CTA,
      perks: (0, d.QR)()
    })
  }, [f, t]), j = i.useCallback(() => {
    (0, o.Nn)({
      uploadType: u.HL.GUILD_BANNER,
      maxFileSizeBytes: g.j,
      onComplete: b,
      analyticsLocation: {
        page: c.liQ.GUILD_SETTINGS,
        section: c.JJy.GUILD_BANNER
      },
      analyticsLocations: f
    })
  }, [f, b]);
  return h ? (0, r.jsx)("div", {
    className: p,
    children: (0, r.jsx)(l.$nd, {
      disabled: !(h && n),
      variant: "primary",
      text: m.intl.string(m.t.yG2pUi),
      onClick: j
    })
  }) : (0, r.jsx)("div", {
    className: p,
    children: (0, r.jsx)(a.u, {
      onClick: x
    })
  })
}