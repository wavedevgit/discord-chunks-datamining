/** Chunk was on 54433 **/
/** chunk id: 400981, original params: e,n,t (module,exports,require) **/
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
    onClose: n,
    selectedPromotionalDecoPurchaseRecord: t,
    selectedGiftingPromotionReward: f
  } = e, m = (0, r.e7)([p.default], () => p.default.getCurrentUser()), _ = (0, r.e7)([a.Z], () => a.Z.useReducedMotion), {
    analyticsLocations: L
  } = (0, o.ZP)(), g = s.EFr.SIZE_32, y = (0, C.Z)(null == f ? true : f.assetId, g, !_), E = (0, u.Z)(), S = null == E ? true : E.giftPurchaseConfirmation;
  return null == t || null == S ? null : (0, i.jsx)(x.O3, {
    children: (0, i.jsx)(s.mzw, {
      align: c.Z.Align.CENTER,
      "data-migration-pending": true,
      children: (0, i.jsxs)("div", {
        className: j.promotionalFooter,
        children: [(0, i.jsx)(s.Xo$, {
          "aria-label": null == m ? true : m.username,
          size: g,
          src: null == m ? true : m.getAvatarURL(true, (0, s.pxk)(g), !_),
          avatarDecoration: y
        }), (0, i.jsx)(l.zx, {
          variant: "primary",
          text: S.collectRewardButtonText(),
          onClick: () => {
            n(), (0, d.Z)({
              product: t,
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