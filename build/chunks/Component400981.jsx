/** Chunk was on 23242 **/
/** chunk id: 400981, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk821982 = require("./821982.js"),
  Chunk832149 = require("./832149.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk4242 = require("./4242.js"),
  Chunk566697 = require("./566697.jsx"),
  Chunk347896 = require("./347896.js"),
  Chunk594174 = require("./594174.js"),
  Chunk614277 = require("./614277.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk350928 = require("./350928.js");

function O(e) {
  let {
    onClose: t,
    selectedPromotionalDecoPurchaseRecord: n,
    selectedGiftingPromotionReward: O
  } = e, P = (0, a.e7)([j.default], () => j.default.getCurrentUser()), S = (0, a.e7)([u.Z], () => u.Z.useReducedMotion), {
    analyticsLocations: x
  } = (0, c.ZP)(), E = o.EFr.SIZE_32, w = (0, d.Z)(null == O ? true : O.assetId, E, !S), I = (0, g.Z)(), T = null == I ? true : I.giftPurchaseConfirmation, k = (null == O ? true : O.type) === i.Z.NAMEPLATE, [C, N] = l.useState(false), M = l.useMemo(() => {
    var e, t;
    return k && (null == O ? true : O.assetId) != null ? {
      src: O.assetId,
      palette: (0, h.t1)(null != (t = O.palette) ? t : "sky"),
      imgAlt: null == (e = O.a11yLabel) ? true : e.call(O)
    } : null
  }, [k, O]);
  return null == n || null == T ? null : (0, r.jsx)(y.O3, {
    children: (0, r.jsx)(o.mzw, {
      align: m.Z.Align.CENTER,
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: b.promotionalFooter,
        children: [k && null != M ? (0, r.jsx)("div", {
          className: b.nameplatePreviewContainer,
          onMouseEnter: () => N(true),
          onMouseLeave: () => N(false),
          children: (0, r.jsx)(f.R, {
            user: P,
            nameplate: null,
            nameplateData: M,
            showPlaceholderUser: true,
            nameplatePreviewSize: "xsmall",
            isHighlighted: C
          })
        }) : (0, r.jsx)(o.Xo$, {
          "aria-label": null == P ? true : P.username,
          size: E,
          src: null == P ? true : P.getAvatarURL(true, (0, o.dcp)(E), !S),
          avatarDecoration: w
        }), (0, r.jsx)(s.zxk, {
          variant: "primary",
          text: T.collectRewardButtonText(),
          onClick: () => {
            t(), (0, p.Z)({
              product: n,
              shouldShowPromotionalExperience: true,
              analyticsLocations: x,
              purchaseType: v.o8.PROMOTIONAL
            })
          }
        })]
      })
    })
  })
}