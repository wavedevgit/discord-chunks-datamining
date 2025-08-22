/** Chunk was on 54400 **/
/** chunk id: 400981, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk821982 = require("./821982.js"),
  Chunk832149 = require("./832149.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk347896 = require("./347896.js"),
  Chunk594174 = require("./594174.js"),
  Chunk27034 = require("./27034.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk473936 = require("./473936.js");

function f(e) {
  let {
    onClose: t,
    selectedPromotionalDecoPurchaseRecord: n,
    selectedGiftingPromotionReward: f
  } = e, j = (0, i.e7)([u.default], () => u.default.getCurrentUser()), m = (0, i.e7)([a.Z], () => a.Z.useReducedMotion), {
    analyticsLocations: L
  } = (0, o.ZP)(), g = s.EFr.SIZE_32, b = (0, C.Z)(null == f ? true : f.assetId, g, !m), y = (0, c.Z)(), S = null == y ? true : y.giftPurchaseConfirmation;
  return null == n || null == S ? null : (0, r.jsx)(x.O3, {
    children: (0, r.jsx)(s.mzw, {
      align: p.Z.Align.CENTER,
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: _.promotionalFooter,
        children: [(0, r.jsx)(s.Xo$, {
          "aria-label": null == j ? true : j.username,
          size: g,
          src: null == j ? true : j.getAvatarURL(true, (0, s.pxk)(g), !m),
          avatarDecoration: b
        }), (0, r.jsx)(l.zx, {
          variant: "primary",
          text: S.collectRewardButtonText(),
          onClick: () => {
            t(), (0, d.Z)({
              product: n,
              shouldShowPromotionalExperience: true,
              analyticsLocations: L,
              purchaseType: h.o8.PROMOTIONAL
            })
          }
        })]
      })
    })
  })
}