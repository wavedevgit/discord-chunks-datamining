/** Chunk was on 29679 **/
/** chunk id: 269464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk903102 = require("./903102.js");

function h(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e, h = t.features.has(d.GuildFeatures.BANNER), b = t.features.has(d.GuildFeatures.ANIMATED_BANNER), x = h && n, {
    analyticsLocations: j
  } = (0, a.ZP)(), _ = i.useCallback((e, n) => {
    (0, c.f4)(t, j, e, n)
  }, [j, t]), v = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, c.E6)({
      guild: t,
      analyticsLocations: j,
      analyticsSection: d.jXE.GUILD_BANNER,
      analyticsObject: d.qAy.UPLOAD_IMAGE,
      perks: (0, u.XO)()
    })
  }, [j, t]), O = (0, r.jsx)(s.Z, {
    image: t.banner,
    makeURL: e => null != e ? o.ZP.getGuildBannerURL({
      id: t.id,
      banner: e
    }, b) : null,
    disabled: !x,
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
        page: d.ZY5.GUILD_SETTINGS,
        section: d.jXE.GUILD_BANNER
      },
      analyticsLocations: j
    }),
    enabled: x
  });
  return h ? O : (0, r.jsx)(l.P3F, {
    "aria-hidden": true,
    tabIndex: false,
    className: f.upsell,
    onClick: v,
    children: O
  })
}