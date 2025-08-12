/** Chunk was on 63024 **/
/** chunk id: 400981, original params: e,r,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk821982 = require("./821982.js"),
  Chunk832149 = require("./832149.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk286961 = require("./286961.js"),
  Chunk594174 = require("./594174.js"),
  Chunk27034 = require("./27034.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk858892 = require("./858892.js");

function m(e) {
  let {
    onClose: r,
    selectedPromotionalDecoPurchaseRecord: n,
    selectedGiftingPromotionReward: m
  } = e, h = (0, i.e7)([u.default], () => u.default.getCurrentUser()), j = (0, i.e7)([l.Z], () => l.Z.useReducedMotion), {
    analyticsLocations: L
  } = (0, s.ZP)(), g = a.EFr.SIZE_32, b = (0, C.Z)(null == m ? true : m.assetId, g, !j), y = (0, p.Z)(), S = null == y ? true : y.giftPurchaseConfirmation;
  return null == n || null == S ? null : (0, t.jsx)(_.O3, {
    children: (0, t.jsx)(a.mzw, {
      align: c.Z.Align.CENTER,
      "data-migration-pending": true,
      children: (0, t.jsxs)("div", {
        className: f.promotionalFooter,
        children: [(0, t.jsx)(a.Xo$, {
          "aria-label": null == h ? true : h.username,
          size: g,
          src: null == h ? true : h.getAvatarURL(true, (0, a.pxk)(g), !j),
          avatarDecoration: b
        }), (0, t.jsx)(o.zx, {
          variant: "primary",
          text: S.collectRewardButtonText(),
          onClick: () => {
            r(), (0, d.Z)({
              product: n,
              shouldShowPromotionalExperience: true,
              analyticsLocations: L,
              purchaseType: x.o8.PROMOTIONAL
            })
          }
        })]
      })
    })
  })
}