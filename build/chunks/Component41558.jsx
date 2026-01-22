/** Chunk was on 47841 **/
/** chunk id: 41558, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  S: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk2553 = require("./2553.js"),
  Chunk664007 = require("./664007.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk997509 = require("./997509.js"),
  Chunk695800 = require("./695800.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk874864 = require("./874864.js"),
  Chunk478644 = require("./478644.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk340736 = require("./340736.js");

function x(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e, x = t.features.has(f.GuildFeatures.INVITE_SPLASH), h = n && x, {
    analyticsLocations: j
  } = (0, s.Ay)(), O = i.useCallback(e => {
    d.A.updateGuild({
      splash: e
    })
  }, []), y = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, u.p_)({
      guild: t,
      analyticsLocations: j,
      analyticsSection: f.JJy.GUILD_INVITE_BACKGROUND,
      analyticsObject: f.ZSU.UPLOAD_IMAGE,
      perks: (0, g.Lp)()
    })
  }, [j, t]), v = (0, r.jsx)(c.A, {
    image: t.splash,
    makeURL: e => null != e ? o.Ay.getGuildSplashURL({
      id: t.id,
      splash: e
    }) : null,
    disabled: !h,
    onChange: O,
    hint: m.intl.string(m.t.uPvxqJ),
    enabled: h,
    maxFileSizeBytes: b.j,
    onFileSizeError: () => (0, a.A)(b.j)
  });
  return x ? v : (0, r.jsx)(l.DUT, {
    "aria-hidden": true,
    tabIndex: false,
    className: p.U,
    onClick: y,
    children: v
  })
}