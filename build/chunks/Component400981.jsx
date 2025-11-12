/** Chunk was on 54400 **/
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
  Chunk473936 = require("./473936.js");

function x(e) {
  let {
    onClose: t,
    selectedPromotionalDecoPurchaseRecord: n,
    selectedGiftingPromotionReward: x
  } = e, _ = (0, i.e7)([p.default], () => p.default.getCurrentUser()), j = (0, i.e7)([s.Z], () => s.Z.useReducedMotion), {
    analyticsLocations: g
  } = (0, o.ZP)(), b = a.EFr.SIZE_32, y = (0, d.Z)(null == x ? true : x.assetId, b, !j), v = (0, u.Z)(), L = null == v ? true : v.giftPurchaseConfirmation;
  return null == n || null == L ? null : (0, r.jsx)(h.O3, {
    children: (0, r.jsx)(a.mzw, {
      align: c.Z.Align.CENTER,
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: f.promotionalFooter,
        children: [(0, r.jsx)(a.Xo$, {
          "aria-label": null == _ ? true : _.username,
          size: b,
          src: null == _ ? true : _.getAvatarURL(true, (0, a.pxk)(b), !j),
          avatarDecoration: y
        }), (0, r.jsx)(l.zxk, {
          variant: "primary",
          text: L.collectRewardButtonText(),
          onClick: () => {
            t(), (0, C.Z)({
              product: n,
              shouldShowPromotionalExperience: true,
              analyticsLocations: g,
              purchaseType: m.o8.PROMOTIONAL
            })
          }
        })]
      })
    })
  })
}