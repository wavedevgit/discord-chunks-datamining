/** Chunk was on 15076 **/
/** chunk id: 820408, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk2052 = require("./2052.js"),
  Chunk434650 = require("./434650.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk436774 = require("./436774.jsx"),
  Chunk690221 = require("./690221.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk586121 = require("./586121.js");

function N(e) {
  let {
    onClose: t
  } = e, n = (0, o.O)(), {
    analyticsLocations: N
  } = (0, c.ZP)(), [S, f] = s.useState(false), b = s.useCallback(e => {
    !S && e && (g.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
      type: x.cd.CUSTOM_NOTIFICATION_SOUNDS_SETTINGS_UPSELL,
      location: n.location,
      location_stack: N
    }), f(true))
  }, [n.location, N, S]), O = (0, d.O)(b, .8, true);
  return (0, i.jsxs)("div", {
    ref: O,
    className: j.container,
    children: [(0, i.jsx)(r.SrA, {
      size: "md",
      color: u.JX.PREMIUM_TIER_2,
      className: j.nitroWheel
    }), (0, i.jsxs)(r.Text, {
      className: j.text,
      variant: "text-sm/normal",
      children: [p.intl.string(p.t["Pb0O6+"]), " ", (0, i.jsx)(h.Z, {
        onClick: () => {
          t(), a.Z.open(v.oAB.PREMIUM)
        },
        children: p.intl.string(p.t.hvVgAQ)
      })]
    }), (0, i.jsx)("div", {
      className: j.nitroButton,
      children: (0, i.jsx)(m.Z, {
        showGradient: true,
        textOptions: {
          textOverride: p.intl.string(p.t.pj0XBA)
        },
        size: l.zx.Sizes.SMALL,
        shinyButtonClassName: j.nitroButton,
        subscriptionTier: x.Si.TIER_2,
        premiumModalAnalyticsLocation: {
          section: v.jXE.PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL
        }
      })
    })]
  })
}