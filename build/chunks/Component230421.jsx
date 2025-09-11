/** Chunk was on 1272 **/
/** chunk id: 230421, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk907862 = require("./907862.js"),
  Chunk26323 = require("./26323.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk626135 = require("./626135.js"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk30513 = require("./30513.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk869305 = require("./869305.js");

function m(e) {
  let {
    elementRef: t,
    guild: n,
    markAsDismissed: m,
    analyticsLocations: b
  } = e, _ = (0, c.f2)(n, u.Eu4.TIER_1) ? h.intl.string(h.t["57kzen"]) : h.intl.formatToPlainString(h.t.pMftkJ, {
    boostCount: (0, c.KK)(n, u.Eu4.TIER_1)
  }), O = (0, c.f2)(n, u.Eu4.TIER_1) ? h.intl.string(h.t.rOFcBg) : h.intl.string(h.t.hvVgAQ);
  return i.useEffect(() => {
    s.default.track(u.rMx.PREMIUM_UPSELL_VIEWED, {
      type: f.cd.INVITE_SPLASH_UPSELL,
      location: {
        page: u.ZY5.GUILD_CHANNEL
      },
      location_stack: b
    })
  }, [b]), (0, r.jsx)(l.J2, {
    targetElementRef: t,
    graphic: {
      type: "image",
      src: g
    },
    size: "lg",
    title: h.intl.string(h.t["36wK8/"]),
    body: _,
    onRequestClose: () => m(d.L.DISMISS),
    caretConfig: {
      align: "center"
    },
    actions: [{
      text: O,
      onClick: () => {
        (0, c.f2)(n, u.Eu4.TIER_1) ? o.Z.open(n.id, u.pNK.BOOST_PERKS, {
          section: u.jXE.PREMIUM_GUILD_INVITE_SPLASH
        }): (0, a.Z)({
          analyticsLocations: b,
          analyticsSourceLocation: u.jXE.PREMIUM_GUILD_INVITE_SPLASH,
          guild: n,
          perks: (0, p.o9)()
        }), m(d.L.PRIMARY)
      }
    }]
  })
}