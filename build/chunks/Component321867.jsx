/** Chunk was on 77942 **/
/** chunk id: 321867, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk886563 = require("./886563.js");

function C(t) {
  let {
    analyticsSection: e,
    type: n
  } = t, C = (0, i.e7)([_.default], () => _.default.getCurrentUser()), x = f.ZP.canUseAnimatedAvatar(C), y = f.ZP.canUsePremiumProfileCustomization(C), N = n === p.pC.BANNER && y || n === p.pC.AVATAR && x, {
    sourceAnalyticsLocations: h
  } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (r.useEffect(() => {
      N || d.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
        type: e,
        location_stack: h
      })
    }, [N, e, h]), N) return null;
  let A = (0, o.jsx)(s.Z, {
    className: v.__invalid_getNitroLink,
    size: a.zx.Sizes.SMALL,
    look: a.zx.Looks.LINK,
    color: a.zx.Colors.LINK,
    subscriptionTier: b.Si.TIER_2,
    textOptions: {
      textOverride: g.intl.format(g.t["944tDg"], {})
    },
    showIcon: false,
    premiumModalAnalyticsLocation: {
      section: e,
      object: m.qAy.BUTTON_CTA
    },
    disableShine: true
  });
  return (0, o.jsx)(u.Z, {
    reducedRightPadding: true,
    className: v.nitroPreviewUpsell,
    text: g.intl.format(g.t.Og8039, {}),
    button: A
  })
}