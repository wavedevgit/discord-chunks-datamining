/** Chunk was on 37786 **/
/** chunk id: 400981, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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

function x(e) {
  let {
    onClose: t,
    selectedPromotionalDecoPurchaseRecord: n,
    selectedGiftingPromotionReward: x
  } = e, m = (0, i.e7)([p.default], () => p.default.getCurrentUser()), j = (0, i.e7)([l.Z], () => l.Z.useReducedMotion), {
    analyticsLocations: b
  } = (0, s.ZP)(), g = a.EFr.SIZE_32, L = (0, C.Z)(null == x ? true : x.assetId, g, !j), y = (0, u.Z)(), v = null == y ? true : y.giftPurchaseConfirmation;
  return null == n || null == v ? null : (0, r.jsx)(_.O3, {
    children: (0, r.jsx)(a.mzw, {
      align: c.Z.Align.CENTER,
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: h.promotionalFooter,
        children: [(0, r.jsx)(a.Xo$, {
          "aria-label": null == m ? true : m.username,
          size: g,
          src: null == m ? true : m.getAvatarURL(true, (0, a.pxk)(g), !j),
          avatarDecoration: L
        }), (0, r.jsx)(o.zxk, {
          variant: "primary",
          text: v.collectRewardButtonText(),
          onClick: () => {
            t(), (0, d.Z)({
              product: n,
              shouldShowPromotionalExperience: true,
              analyticsLocations: b,
              purchaseType: f.o8.PROMOTIONAL
            })
          }
        })]
      })
    })
  })
}