/** Chunk was on web.js **/
/** chunk id: 333859, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk737604 = require("./737604.js"),
  Chunk539873 = require("./539873.jsx"),
  Chunk550385 = require("./550385.js"),
  Chunk638212 = require("./638212.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk342386 = require("./342386.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk980676 = require("./980676.js");
let b = () => {
    (0, Chunk550385.XO)(Chunk550385.wh.APP_ICON), (0, Chunk342386.default)()
  },
  y = () => {
    let {
      analyticsLocations: e
    } = (0, Chunk906732.ZP)(Chunk100527.Z.USER_SETTINGS), t = (0, Chunk442837.e7)([Chunk737604.Z], () => Chunk737604.Z.isUpsellPreview);
    (0, Chunk493773.ZP)(() => {
      exports && Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UPSELL_VIEWED, {
        type: Chunk474936.cd.APP_ICON_UPSELL,
        location_stack: module
      })
    });
    let n = () => (0, Chunk951288.jsxs)("div", {
      className: Chunk980676.tryItOutButtons,
      children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: exports ? "secondary" : "primary",
        text: Chunk388032.intl.string(Chunk388032.t["hb/wE0"]),
        onClick: () => b()
      }), exports ? (0, Chunk951288.jsx)(Chunk638212.Z, {
        subscriptionTier: Chunk474936.Si.TIER_2,
        defaultTextOverride: Chunk388032.intl.string(Chunk388032.t.mr4K7D),
        premiumModalAnalyticsLocation: {
          object: Chunk981631.qAy.BUTTON_CTA,
          objectType: Chunk981631.AnalyticsObjectTypes.BUY
        },
        fullWidth: true
      }) : null]
    });
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk980676.selectionGroup,
      children: [(0, Chunk951288.jsx)(Chunk539873.Z, {
        disabled: exports,
        renderCTAButtons: require
      }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
        className: Chunk980676.divider
      })]
    })
  }