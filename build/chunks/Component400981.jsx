/** Chunk was on 54400 **/
/** chunk id: 400981, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function h(e) {
  let {
    onClose: n,
    selectedPromotionalDecoPurchaseRecord: t,
    selectedGiftingPromotionReward: h
  } = e, j = (0, i.e7)([u.default], () => u.default.getCurrentUser()), L = (0, i.e7)([a.Z], () => a.Z.useReducedMotion), {
    analyticsLocations: m
  } = (0, o.ZP)(), g = s.EFr.SIZE_32, S = (0, C.Z)(null == h ? true : h.assetId, g, !L), y = (0, c.Z)(), E = null == y ? true : y.giftPurchaseConfirmation;
  return null == t || null == E ? null : (0, r.jsx)(x.O3, {
    children: (0, r.jsx)(s.mzw, {
      align: p.Z.Align.CENTER,
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: f.promotionalFooter,
        children: [(0, r.jsx)(s.Xo$, {
          "aria-label": null == j ? true : j.username,
          size: g,
          src: null == j ? true : j.getAvatarURL(true, (0, s.pxk)(g), !L),
          avatarDecoration: S
        }), (0, r.jsx)(l.zx, {
          variant: "primary",
          text: E.collectRewardButtonText(),
          onClick: () => {
            n(), (0, d.Z)({
              product: t,
              shouldShowPromotionalExperience: true,
              analyticsLocations: m,
              purchaseType: _.o8.PROMOTIONAL
            })
          }
        })]
      })
    })
  })
}