/** Chunk was on 21738 **/
/** chunk id: 571616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk64983 = require("./64983.jsx"),
  Chunk631305 = require("./631305.jsx"),
  Chunk473145 = require("./473145.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk874864 = require("./874864.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk664795 = require("./664795.js");

function g(e) {
  let {
    guild: t,
    markAsDismissed: n
  } = e, g = (0, o.Os)(t, c.TVA.TIER_2), {
    analyticsLocations: f
  } = (0, l.Ay)(i.A.GUILD_BANNER_NOTICE);
  return (0, r.jsx)(a.A, {
    guild: t,
    onDismissed: () => n(u.i.UNKNOWN),
    cta: p.intl.string(p.t.oPAx73),
    message: p.intl.format(p.t.AcaNYw, {
      boostsNeeded: g
    }),
    type: c.n5X.GUILD_BANNER,
    image: h,
    onClick: () => (0, s.A)({
      analyticsLocations: f,
      analyticsSourceLocation: {
        section: c.JJy.CHANNEL_NOTICE,
        object: c.ZSU.SERVER_BANNER_TOOLTIP
      },
      guild: t,
      perks: (0, d.QR)()
    }),
    imageMarginTop: 15,
    imageMarginX: 22
  })
}