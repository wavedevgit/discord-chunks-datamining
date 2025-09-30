/** Chunk was on 84071 **/
/** chunk id: 400981, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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

function m(e) {
  let {
    onClose: t,
    selectedPromotionalDecoPurchaseRecord: n,
    selectedGiftingPromotionReward: m
  } = e, x = (0, i.e7)([p.default], () => p.default.getCurrentUser()), g = (0, i.e7)([l.Z], () => l.Z.useReducedMotion), {
    analyticsLocations: j
  } = (0, s.ZP)(), b = o.EFr.SIZE_32, L = (0, d.Z)(null == m ? true : m.assetId, b, !g), y = (0, u.Z)(), v = null == y ? true : y.giftPurchaseConfirmation;
  return null == n || null == v ? null : (0, r.jsx)(_.O3, {
    children: (0, r.jsx)(o.mzw, {
      align: c.Z.Align.CENTER,
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: h.promotionalFooter,
        children: [(0, r.jsx)(o.Xo$, {
          "aria-label": null == x ? true : x.username,
          size: b,
          src: null == x ? true : x.getAvatarURL(true, (0, o.pxk)(b), !g),
          avatarDecoration: L
        }), (0, r.jsx)(a.zxk, {
          variant: "primary",
          text: v.collectRewardButtonText(),
          onClick: () => {
            t(), (0, C.Z)({
              product: n,
              shouldShowPromotionalExperience: true,
              analyticsLocations: j,
              purchaseType: f.o8.PROMOTIONAL
            })
          }
        })]
      })
    })
  })
}