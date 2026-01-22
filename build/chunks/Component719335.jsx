/** Chunk was on 94073 **/
/** chunk id: 719335, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => y
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

function y(e) {
  let {
    analyticsSection: t,
    type: r
  } = e, y = (0, c.bG)([b.default], () => b.default.getCurrentUser()), N = f.Ay.canUseAnimatedAvatar(y), E = f.Ay.canUsePremiumProfileCustomization(y), L = r === _.HL.BANNER && E || r === _.HL.AVATAR && N, {
    sourceAnalyticsLocations: g
  } = (0, o.Ay)(s.A.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (n.useEffect(() => {
      L || d.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
        type: t,
        location_stack: g
      })
    }, [L, t, g]), L) return null;
  let j = (0, a.jsx)(i.A, {
    className: x.__invalid_getNitroLink,
    size: l.$n.Sizes.SMALL,
    look: l.$n.Looks.LINK,
    color: l.$n.Colors.LINK,
    subscriptionTier: p.pe.TIER_2,
    textOptions: {
      textOverride: m.intl.format(m.t["944tDv"], {})
    },
    showIcon: false,
    premiumModalAnalyticsLocation: {
      section: t,
      object: A.ZSU.BUTTON_CTA
    },
    disableShine: true
  });
  return (0, a.jsx)(u.A, {
    reducedRightPadding: true,
    className: x.C,
    text: m.intl.format(m.t.Og803x, {}),
    button: j
  })
}