/** Chunk was on 87916 **/
/** chunk id: 719335, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
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

function N(e) {
  let {
    analyticsSection: t,
    type: n
  } = e, N = (0, l.bG)([u.default], () => u.default.getCurrentUser()), b = A.Ay.canUseAnimatedAvatar(N), h = A.Ay.canUsePremiumProfileCustomization(N), y = n === g.HL.BANNER && h || n === g.HL.AVATAR && b, {
    sourceAnalyticsLocations: E
  } = (0, o.Ay)(s.A.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (i.useEffect(() => {
      y || _.default.track(f.HAw.PREMIUM_UPSELL_VIEWED, {
        type: t,
        location_stack: E
      })
    }, [y, t, E]), y) return null;
  let R = (0, a.jsx)(c.A, {
    className: x.__invalid_getNitroLink,
    size: r.$n.Sizes.SMALL,
    look: r.$n.Looks.LINK,
    color: r.$n.Colors.LINK,
    subscriptionTier: m.pe.TIER_2,
    textOptions: {
      textOverride: p.intl.format(p.t["944tDv"], {})
    },
    showIcon: false,
    premiumModalAnalyticsLocation: {
      section: t,
      object: f.ZSU.BUTTON_CTA
    },
    disableShine: true
  });
  return (0, a.jsx)(d.A, {
    reducedRightPadding: true,
    className: x.C,
    text: p.intl.format(p.t.Og803x, {}),
    button: R
  })
}