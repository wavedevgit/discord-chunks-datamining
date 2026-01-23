/** Chunk was on 47841 **/
/** chunk id: 445567, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  B: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk664007 = require("./664007.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk695800 = require("./695800.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk874864 = require("./874864.js"),
  Chunk339984 = require("./339984.js"),
  Chunk478644 = require("./478644.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk664991 = require("./664991.js");

function b(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e, b = t.features.has(d.GuildFeatures.BANNER), h = t.features.has(d.GuildFeatures.ANIMATED_BANNER), x = b && n, {
    analyticsLocations: j
  } = (0, s.Ay)(), _ = i.useCallback((e, n) => {
    (0, c.fI)(t, j, e, n)
  }, [j, t]), O = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, c.p_)({
      guild: t,
      analyticsLocations: j,
      analyticsSection: d.JJy.GUILD_BANNER,
      analyticsObject: d.ZSU.UPLOAD_IMAGE,
      perks: (0, u.QR)()
    })
  }, [j, t]), v = (0, r.jsx)(a.A, {
    image: t.banner,
    makeURL: e => null != e ? o.Ay.getGuildBannerURL({
      id: t.id,
      banner: e
    }, h) : null,
    disabled: !x,
    onChange: _,
    hint: p.intl.string(p.t.uPvxqJ),
    onOpenImageSelectModal: () => (0, c.Nn)({
      uploadType: g.HL.GUILD_BANNER,
      maxFileSizeBytes: m.j,
      onComplete: e => {
        let {
          imageUri: t,
          file: n
        } = e;
        return _(t, n)
      },
      analyticsLocation: {
        page: d.liQ.GUILD_SETTINGS,
        section: d.JJy.GUILD_BANNER
      },
      analyticsLocations: j
    }),
    enabled: x
  });
  return b ? v : (0, r.jsx)(l.DUT, {
    "aria-hidden": true,
    tabIndex: false,
    className: f.U,
    onClick: O,
    children: v
  })
}