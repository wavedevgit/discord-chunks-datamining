/** Chunk was on 72891 **/
/** chunk id: 321867, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  Chunk637285 = require("./637285.js");

function h(e) {
  let {
    analyticsSection: t,
    type: n
  } = e, h = (0, o.e7)([u.default], () => u.default.getCurrentUser()), A = g.ZP.canUseAnimatedAvatar(h), P = g.ZP.canUsePremiumProfileCustomization(h), b = n === p.pC.BANNER && P || n === p.pC.AVATAR && A, {
    sourceAnalyticsLocations: v
  } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (a.useEffect(() => {
      b || f.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
        type: t,
        location_stack: v
      })
    }, [b, t, v]), b) return null;
  let E = (0, i.jsx)(s.Z, {
    className: m.__invalid_getNitroLink,
    size: r.zx.Sizes.SMALL,
    look: r.zx.Looks.LINK,
    color: r.zx.Colors.LINK,
    subscriptionTier: x.Si.TIER_2,
    textOptions: {
      textOverride: N.intl.format(N.t["944tDv"], {})
    },
    showIcon: false,
    premiumModalAnalyticsLocation: {
      section: t,
      object: _.qAy.BUTTON_CTA
    },
    disableShine: true
  });
  return (0, i.jsx)(d.Z, {
    reducedRightPadding: true,
    className: m.nitroPreviewUpsell,
    text: N.intl.format(N.t.Og803x, {}),
    button: E
  })
}