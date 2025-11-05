/** Chunk was on 1272 **/
/** chunk id: 377743, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk82950 = require("./82950.jsx"),
  Chunk26323 = require("./26323.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk30513 = require("./30513.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk420569 = require("./420569.js");

function h(e) {
  let {
    guild: t,
    markAsDismissed: n
  } = e, h = (0, o.KK)(t, c.Eu4.TIER_2), {
    analyticsLocations: g
  } = (0, l.ZP)(i.Z.GUILD_BANNER_NOTICE);
  return (0, r.jsx)(a.Z, {
    guild: t,
    onDismissed: () => n(u.L.UNKNOWN),
    cta: p.intl.string(p.t.oPAx73),
    message: p.intl.format(p.t.AcaNYw, {
      boostsNeeded: h
    }),
    type: c.vID.GUILD_BANNER,
    image: f,
    onClick: () => (0, s.Z)({
      analyticsLocations: g,
      analyticsSourceLocation: {
        section: c.jXE.CHANNEL_NOTICE,
        object: c.qAy.SERVER_BANNER_TOOLTIP
      },
      guild: t,
      perks: (0, d.XO)()
    }),
    imageMarginTop: 15,
    imageMarginX: 22
  })
}