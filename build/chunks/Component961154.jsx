/** Chunk was on 5606 **/
/** chunk id: 961154, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => E
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
let E = () => {
  let {
    analyticsLocations: e
  } = (0, o.Ay)(a.A.USER_SETTINGS), t = (0, i.bG)([c.A], () => c.A.isUpsellPreview), n = (0, m.dk)("UserSettingsAppearanceInAppIcon");
  return (0, s.Ay)(() => {
    t && _.default.track(f.HAw.PREMIUM_UPSELL_VIEWED, {
      type: b.e.APP_ICON_UPSELL,
      location_stack: e
    })
  }), (0, r.jsxs)("div", {
    className: A.Gg,
    children: [(0, r.jsx)(d.A, {
      disabled: t,
      renderCTAButtons: () => (0, r.jsxs)("div", {
        className: A.gY,
        children: [(0, r.jsx)(l.Button, {
          variant: t ? "secondary" : "primary",
          text: h.intl.string(h.t["hb/wE0"]),
          onClick: () => void((0, u.nf)(u.HP.APP_ICON), (0, g.default)())
        }), t ? (0, r.jsx)(p.A, {
          subscriptionTier: b.pe.TIER_2,
          defaultTextOverride: h.intl.string(h.t.mr4K7D),
          premiumModalAnalyticsLocation: {
            object: f.ZSU.BUTTON_CTA,
            objectType: f.AnalyticsObjectTypes.BUY
          },
          fullWidth: true
        }) : null]
      })
    }), !n && (0, r.jsx)(l.cGx, {
      className: A.yF
    })]
  })
}