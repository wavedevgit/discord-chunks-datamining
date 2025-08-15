/** Chunk was on 30202 **/
/** chunk id: 333859, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => C
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk737604 = require("./737604.js"),
  Chunk539873 = require("./539873.jsx"),
  Chunk803038 = require("./803038.js"),
  Chunk550385 = require("./550385.js"),
  Chunk638212 = require("./638212.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk980676 = require("./980676.js");
let C = () => {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.USER_SETTINGS), t = (0, Chunk442837.e7)([Chunk737604.Z], () => Chunk737604.Z.isUpsellPreview);
  (0, Chunk493773.ZP)(() => {
    exports && Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UPSELL_VIEWED, {
      type: Chunk474936.cd.APP_ICON_UPSELL,
      location_stack: module
    })
  });
  let {
    v2EditorEnabled: n
  } = Chunk803038.Mc.useExperiment({
    location: "UserSettingsAppearanceInAppIcon"
  });
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk980676.selectionGroup,
    children: [(0, Chunk255367.jsx)(Chunk539873.Z, {
      disabled: exports,
      renderCTAButtons: () => {
        let e = require ? Chunk980676.tryItOutButtonsV2 : Chunk980676.tryItOutButtons;
        return (0, Chunk255367.jsxs)("div", {
          className: module,
          children: [(0, Chunk255367.jsx)(Chunk755721.zx, {
            size: Chunk755721.zx.Sizes.MEDIUM,
            color: exports ? Chunk755721.zx.Colors.PRIMARY : Chunk755721.zx.Colors.BRAND,
            onClick: () => void((0, Chunk550385.XO)(Chunk550385.wh.APP_ICON), (0, Chunk37234.xf)()),
            children: Chunk388032.intl.string(Chunk388032.t["hb/wEx"])
          }), exports ? require ? (0, Chunk255367.jsx)(Chunk638212.Z, {
            subscriptionTier: Chunk474936.Si.TIER_2,
            defaultTextOverride: Chunk388032.intl.string(Chunk388032.t.mr4K7O),
            premiumModalAnalyticsLocation: {
              object: Chunk981631.qAy.BUTTON_CTA,
              objectType: Chunk981631.Qqv.BUY
            },
            fullWidth: true
          }) : (0, Chunk255367.jsx)(Chunk767714.Z, {
            className: Chunk980676.tryItOutButton,
            showGradient: false,
            subscriptionTier: Chunk474936.Si.TIER_2,
            textOptions: {
              textOverride: Chunk388032.intl.string(Chunk388032.t.mr4K7O)
            }
          }) : null]
        })
      }
    }), (0, Chunk255367.jsx)(Chunk481060.$i$, {
      className: Chunk980676.divider
    })]
  })
}