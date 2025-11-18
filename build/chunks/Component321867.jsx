/** Chunk was on 96033 **/
/** chunk id: 321867, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function v(t) {
  let {
    analyticsSection: e,
    type: i
  } = t, v = (0, r.e7)([u.default], () => u.default.getCurrentUser()), N = h.ZP.canUseAnimatedAvatar(v), b = h.ZP.canUsePremiumProfileCustomization(v), y = i === m.pC.BANNER && b || i === m.pC.AVATAR && N, {
    sourceAnalyticsLocations: A
  } = (0, s.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (a.useEffect(() => {
      y || _.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
        type: e,
        location_stack: A
      })
    }, [y, e, A]), y) return null;
  let I = (0, n.jsx)(d.Z, {
    className: p.__invalid_getNitroLink,
    size: o.zx.Sizes.SMALL,
    look: o.zx.Looks.LINK,
    color: o.zx.Colors.LINK,
    subscriptionTier: x.Si.TIER_2,
    textOptions: {
      textOverride: f.intl.format(f.t["944tDv"], {})
    },
    showIcon: false,
    premiumModalAnalyticsLocation: {
      section: e,
      object: g.qAy.BUTTON_CTA
    },
    disableShine: true
  });
  return (0, n.jsx)(c.Z, {
    reducedRightPadding: true,
    className: p.nitroPreviewUpsell,
    text: f.intl.format(f.t.Og803x, {}),
    button: I
  })
}