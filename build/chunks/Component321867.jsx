/** Chunk was on 76543 **/
/** chunk id: 321867, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk216246 = require("./216246.js");

function x(e) {
  let {
    analyticsSection: t,
    type: n
  } = e, x = (0, r.e7)([b.default], () => b.default.getCurrentUser()), y = f.ZP.canUseAnimatedAvatar(x), A = f.ZP.canUsePremiumProfileCustomization(x), h = n === p.pC.BANNER && A || n === p.pC.AVATAR && y, {
    sourceAnalyticsLocations: C
  } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (o.useEffect(() => {
      h || d.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
        type: t,
        location_stack: C
      })
    }, [h, t, C]), h) return null;
  let P = (0, i.jsx)(s.Z, {
    className: _.__invalid_getNitroLink,
    size: a.zx.Sizes.SMALL,
    look: a.zx.Looks.LINK,
    color: a.zx.Colors.LINK,
    subscriptionTier: g.Si.TIER_2,
    textOptions: {
      textOverride: v.intl.format(v.t["944tDv"], {})
    },
    showIcon: false,
    premiumModalAnalyticsLocation: {
      section: t,
      object: m.qAy.BUTTON_CTA
    },
    disableShine: true
  });
  return (0, i.jsx)(u.Z, {
    reducedRightPadding: true,
    className: _.nitroPreviewUpsell,
    text: v.intl.format(v.t.Og803x, {}),
    button: P
  })
}