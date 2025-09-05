/** Chunk was on 54052 **/
/** chunk id: 594980, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk884858 = require("./884858.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk70086 = require("./70086.jsx"),
  Chunk949640 = require("./949640.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk200299 = require("./200299.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let {
    guild: t,
    canManageGuild: n,
    buttonClassName: h
  } = e, {
    analyticsLocations: b
  } = (0, a.ZP)(), x = t.features.has(m.oNc.INVITE_SPLASH), j = n && x, _ = i.useCallback(e => {
    c.Z.updateGuild({
      splash: e
    })
  }, []), v = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, u.E6)({
      guild: t,
      analyticsLocations: b,
      analyticsSection: m.jXE.GUILD_INVITE_BACKGROUND,
      analyticsObject: m.qAy.BUTTON_CTA,
      perks: (0, g.o9)()
    })
  }, [b, t]);
  return x ? (0, r.jsxs)(l.zx, {
    disabled: !j,
    color: l.Tt.BRAND,
    className: h,
    children: [f.intl.string(f.t.yG2pUl), (0, r.jsx)(o.ZP, {
      disabled: !j,
      onChange: _,
      maxFileSizeBytes: p.B,
      onFileSizeError: () => (0, s.Z)(p.B)
    })]
  }) : (0, r.jsx)(d.P, {
    className: h,
    onClick: v
  })
}