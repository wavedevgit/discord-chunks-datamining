/** Chunk was on web.js **/
/** chunk id: 333859, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk526665 = require("./526665.js"),
  Chunk342386 = require("./342386.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk813671 = require("./813671.js");
let y = () => {
    (0, d.XO)(d.wh.APP_ICON), (0, m.default)()
  },
  O = () => {
    let {
      analyticsLocations: e
    } = (0, l.ZP)(s.Z.USER_SETTINGS), t = (0, i.e7)([c.Z], () => c.Z.isUpsellPreview), n = (0, _.gN)("UserSettingsAppearanceInAppIcon");
    (0, o.ZP)(() => {
      t && p.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
        type: g.cd.APP_ICON_UPSELL,
        location_stack: e
      })
    });
    let d = () => (0, r.jsxs)("div", {
      className: b.tryItOutButtons,
      children: [(0, r.jsx)(a.Button, {
        variant: t ? "secondary" : "primary",
        text: E.intl.string(E.t["hb/wE0"]),
        onClick: () => y()
      }), t ? (0, r.jsx)(f.Z, {
        subscriptionTier: g.Si.TIER_2,
        defaultTextOverride: E.intl.string(E.t.mr4K7D),
        premiumModalAnalyticsLocation: {
          object: h.qAy.BUTTON_CTA,
          objectType: h.AnalyticsObjectTypes.BUY
        },
        fullWidth: true
      }) : null]
    });
    return (0, r.jsxs)("div", {
      className: b.selectionGroup,
      children: [(0, r.jsx)(u.Z, {
        disabled: t,
        renderCTAButtons: d
      }), !n && (0, r.jsx)(a.izJ, {
        className: b.divider
      })]
    })
  }