/** Chunk was on 47841 **/
/** chunk id: 445567, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  B: () => p
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

function p(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e, p = t.features.has(d.GuildFeatures.BANNER), x = t.features.has(d.GuildFeatures.ANIMATED_BANNER), h = p && n, {
    analyticsLocations: j
  } = (0, s.Ay)(), O = i.useCallback((e, n) => {
    (0, o.fI)(t, j, e, n)
  }, [j, t]), y = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, o.p_)({
      guild: t,
      analyticsLocations: j,
      analyticsSection: d.JJy.GUILD_BANNER,
      analyticsObject: d.ZSU.UPLOAD_IMAGE,
      perks: (0, u.QR)()
    })
  }, [j, t]), v = (0, r.jsx)(a.A, {
    image: t.banner,
    makeURL: e => null != e ? c.Ay.getGuildBannerURL({
      id: t.id,
      banner: e
    }, x) : null,
    disabled: !h,
    onChange: O,
    hint: b.intl.string(b.t.uPvxqJ),
    onOpenImageSelectModal: () => (0, o.Nn)({
      uploadType: f.HL.GUILD_BANNER,
      maxFileSizeBytes: g.j,
      onComplete: e => {
        let {
          imageUri: t,
          file: n
        } = e;
        return O(t, n)
      },
      analyticsLocation: {
        page: d.liQ.GUILD_SETTINGS,
        section: d.JJy.GUILD_BANNER
      },
      analyticsLocations: j
    }),
    enabled: h
  });
  return p ? v : (0, r.jsx)(l.DUT, {
    "aria-hidden": true,
    tabIndex: false,
    className: m.U,
    onClick: y,
    children: v
  })
}