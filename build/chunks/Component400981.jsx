/** Chunk was on 54400 **/
/** chunk id: 400981, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(e) {
  let {
    onClose: t,
    selectedPromotionalDecoPurchaseRecord: n,
    selectedGiftingPromotionReward: g
  } = e, v = (0, a.e7)([m.default], () => m.default.getCurrentUser()), x = (0, a.e7)([o.Z], () => o.Z.useReducedMotion), {
    analyticsLocations: P
  } = (0, s.ZP)(), j = i.EFr.SIZE_32, y = (0, d.Z)(null == g ? true : g.assetId, j, !x), S = (0, p.Z)(), _ = null == S ? true : S.giftPurchaseConfirmation;
  return null == n || null == _ ? null : (0, r.jsx)(h.O3, {
    children: (0, r.jsx)(i.mzw, {
      align: u.Z.Align.CENTER,
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: b.promotionalFooter,
        children: [(0, r.jsx)(i.Xo$, {
          "aria-label": null == v ? true : v.username,
          size: j,
          src: null == v ? true : v.getAvatarURL(true, (0, i.pxk)(j), !x),
          avatarDecoration: y
        }), (0, r.jsx)(l.zxk, {
          variant: "primary",
          text: _.collectRewardButtonText(),
          onClick: () => {
            t(), (0, c.Z)({
              product: n,
              shouldShowPromotionalExperience: true,
              analyticsLocations: P,
              purchaseType: f.o8.PROMOTIONAL
            })
          }
        })]
      })
    })
  })
}