/** Chunk was on 37786 **/
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
  Chunk614277 = require("./614277.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk365112 = require("./365112.js");

function f(e) {
  let {
    onClose: t,
    selectedPromotionalDecoPurchaseRecord: n,
    selectedGiftingPromotionReward: f
  } = e, x = (0, i.e7)([p.default], () => p.default.getCurrentUser()), g = (0, i.e7)([s.Z], () => s.Z.useReducedMotion), {
    analyticsLocations: j
  } = (0, o.ZP)(), b = l.EFr.SIZE_32, v = (0, d.Z)(null == f ? true : f.assetId, b, !g), S = (0, u.Z)(), L = null == S ? true : S.giftPurchaseConfirmation;
  return null == n || null == L ? null : (0, r.jsx)(h.O3, {
    children: (0, r.jsx)(l.mzw, {
      align: C.Z.Align.CENTER,
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: m.promotionalFooter,
        children: [(0, r.jsx)(l.Xo$, {
          "aria-label": null == x ? true : x.username,
          size: b,
          src: null == x ? true : x.getAvatarURL(true, (0, l.pxk)(b), !g),
          avatarDecoration: v
        }), (0, r.jsx)(a.zxk, {
          variant: "primary",
          text: L.collectRewardButtonText(),
          onClick: () => {
            t(), (0, c.Z)({
              product: n,
              shouldShowPromotionalExperience: true,
              analyticsLocations: j,
              purchaseType: _.o8.PROMOTIONAL
            })
          }
        })]
      })
    })
  })
}