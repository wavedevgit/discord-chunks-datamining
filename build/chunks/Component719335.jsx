/** Chunk was on 94073 **/
/** chunk id: 719335, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e) {
  let {
    analyticsSection: t,
    type: n
  } = e, g = (0, o.bG)([_.default], () => _.default.getCurrentUser()), x = f.Ay.canUseAnimatedAvatar(g), v = f.Ay.canUsePremiumProfileCustomization(g), E = n === b.HL.BANNER && v || n === b.HL.AVATAR && x, {
    sourceAnalyticsLocations: L
  } = (0, s.Ay)(l.A.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (a.useEffect(() => {
      E || d.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
        type: t,
        location_stack: L
      })
    }, [E, t, L]), E) return null;
  let N = (0, r.jsx)(c.A, {
    className: y.__invalid_getNitroLink,
    size: i.$n.Sizes.SMALL,
    look: i.$n.Looks.LINK,
    color: i.$n.Colors.LINK,
    subscriptionTier: m.pe.TIER_2,
    textOptions: {
      textOverride: p.intl.format(p.t["944tDv"], {})
    },
    showIcon: false,
    premiumModalAnalyticsLocation: {
      section: t,
      object: A.ZSU.BUTTON_CTA
    },
    disableShine: true
  });
  return (0, r.jsx)(u.A, {
    reducedRightPadding: true,
    className: y.C,
    text: p.intl.format(p.t.Og803x, {}),
    button: N
  })
}