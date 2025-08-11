/** Chunk was on 22988 **/
/** chunk id: 515025, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk884858 = require("./884858.js"),
  Chunk516129 = require("./516129.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk434404 = require("./434404.js"),
  Chunk949640 = require("./949640.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk200299 = require("./200299.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk322847 = require("./322847.js");

function b(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e, b = t.features.has(m.oNc.INVITE_SPLASH), x = n && b, {
    analyticsLocations: j
  } = (0, a.ZP)(), v = i.useCallback(e => {
    d.Z.updateGuild({
      splash: e
    })
  }, []), _ = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, u.E6)({
      guild: t,
      analyticsLocations: j,
      analyticsSection: m.jXE.GUILD_INVITE_BACKGROUND,
      analyticsObject: m.qAy.UPLOAD_IMAGE,
      perks: (0, g.o9)()
    })
  }, [j, t]), O = (0, r.jsx)(o.Z, {
    image: t.splash,
    makeURL: e => null != e ? c.ZP.getGuildSplashURL({
      id: t.id,
      splash: e
    }) : null,
    disabled: !x,
    onChange: v,
    hint: h.intl.string(h.t.uPvxqK),
    enabled: x,
    maxFileSizeBytes: p.B,
    onFileSizeError: () => (0, s.Z)(p.B)
  });
  return b ? O : (0, r.jsx)(l.P3F, {
    "aria-hidden": true,
    tabIndex: false,
    className: f.upsell,
    onClick: _,
    children: O
  })
}