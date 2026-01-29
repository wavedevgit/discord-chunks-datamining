/** Chunk was on 87916 **/
/** chunk id: 719335, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk465794 = require("./465794.jsx"),
  Chunk721127 = require("./721127.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk339984 = require("./339984.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk560207 = require("./560207.js");

function x(e) {
  let {
    analyticsSection: t,
    type: a
  } = e, x = (0, c.bG)([u.default], () => u.default.getCurrentUser()), b = _.Ay.canUseAnimatedAvatar(x), N = _.Ay.canUsePremiumProfileCustomization(x), y = a === A.HL.BANNER && N || a === A.HL.AVATAR && b, {
    sourceAnalyticsLocations: E
  } = (0, s.Ay)(r.A.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (i.useEffect(() => {
      y || p.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, {
        type: t,
        location_stack: E
      })
    }, [y, t, E]), y) return null;
  let j = (0, n.jsx)(l.A, {
    className: h.__invalid_getNitroLink,
    size: o.$n.Sizes.SMALL,
    look: o.$n.Looks.LINK,
    color: o.$n.Colors.LINK,
    subscriptionTier: f.pe.TIER_2,
    textOptions: {
      textOverride: g.intl.format(g.t["944tDv"], {})
    },
    showIcon: false,
    premiumModalAnalyticsLocation: {
      section: t,
      object: m.ZSU.BUTTON_CTA
    },
    disableShine: true
  });
  return (0, n.jsx)(d.A, {
    reducedRightPadding: true,
    className: h.C,
    text: g.intl.format(g.t.Og803x, {}),
    button: j
  })
}