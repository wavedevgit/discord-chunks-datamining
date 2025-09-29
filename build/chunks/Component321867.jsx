/** Chunk was on 96033 **/
/** chunk id: 321867, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk411477 = require("./411477.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk486324 = require("./486324.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk869497 = require("./869497.js");

function N(t) {
  let {
    analyticsSection: e,
    type: i
  } = t, N = (0, o.e7)([u.default], () => u.default.getCurrentUser()), v = h.ZP.canUseAnimatedAvatar(N), b = h.ZP.canUsePremiumProfileCustomization(N), y = i === m.pC.BANNER && b || i === m.pC.AVATAR && v, {
    sourceAnalyticsLocations: I
  } = (0, s.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (a.useEffect(() => {
      y || _.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
        type: e,
        location_stack: I
      })
    }, [y, e, I]), y) return null;
  let A = (0, n.jsx)(c.Z, {
    className: p.__invalid_getNitroLink,
    size: r.zx.Sizes.SMALL,
    look: r.zx.Looks.LINK,
    color: r.zx.Colors.LINK,
    subscriptionTier: f.Si.TIER_2,
    textOptions: {
      textOverride: x.intl.format(x.t["944tDg"], {})
    },
    showIcon: false,
    premiumModalAnalyticsLocation: {
      section: e,
      object: g.qAy.BUTTON_CTA
    },
    disableShine: true
  });
  return (0, n.jsx)(d.Z, {
    reducedRightPadding: true,
    className: p.nitroPreviewUpsell,
    text: x.intl.format(x.t.Og8039, {}),
    button: A
  })
}