/** Chunk was on web.js **/
/** chunk id: 961154, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk526162 = require("./526162.js"),
  Chunk848971 = require("./848971.jsx"),
  Chunk793943 = require("./793943.js"),
  Chunk792656 = require("./792656.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk358776 = require("./358776.js"),
  Chunk12901 = require("./12901.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk567856 = require("./567856.js");
let b = () => {
    (0, d.nf)(d.HP.APP_ICON), (0, h.default)()
  },
  O = () => {
    let {
      analyticsLocations: e
    } = (0, l.Ay)(o.A.USER_SETTINGS), t = (0, i.bG)([c.A], () => c.A.isUpsellPreview), n = (0, _.dk)("UserSettingsAppearanceInAppIcon");
    (0, s.Ay)(() => {
      t && p.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, {
        type: g.e.APP_ICON_UPSELL,
        location_stack: e
      })
    });
    let d = () => (0, r.jsxs)("div", {
      className: y.gY,
      children: [(0, r.jsx)(a.Button, {
        variant: t ? "secondary" : "primary",
        text: E.intl.string(E.t["hb/wE0"]),
        onClick: () => b()
      }), t ? (0, r.jsx)(f.A, {
        subscriptionTier: g.pe.TIER_2,
        defaultTextOverride: E.intl.string(E.t.mr4K7D),
        premiumModalAnalyticsLocation: {
          object: m.ZSU.BUTTON_CTA,
          objectType: m.AnalyticsObjectTypes.BUY
        },
        fullWidth: true
      }) : null]
    });
    return (0, r.jsxs)("div", {
      className: y.Gg,
      children: [(0, r.jsx)(u.A, {
        disabled: t,
        renderCTAButtons: d
      }), !n && (0, r.jsx)(a.cGx, {
        className: y.yF
      })]
    })
  }