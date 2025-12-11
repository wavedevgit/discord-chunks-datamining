/** Chunk was on 23242 **/
/** chunk id: 400981, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
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

function S(e) {
  let {
    onClose: t,
    selectedPromotionalDecoPurchaseRecord: n,
    selectedGiftingPromotionReward: S
  } = e, x = (0, a.e7)([v.default], () => v.default.getCurrentUser()), P = (0, a.e7)([u.Z], () => u.Z.useReducedMotion), {
    analyticsLocations: O
  } = (0, c.ZP)(), E = o.EFr.SIZE_32, I = (0, d.Z)(null == S ? true : S.assetId, E, !P), w = (0, g.Z)(), T = null == w ? true : w.giftPurchaseConfirmation, k = (null == S ? true : S.type) === i.Z.NAMEPLATE, [C, N] = r.useState(false), M = r.useMemo(() => {
    var e, t;
    return k && (null == S ? true : S.assetId) != null ? {
      src: S.assetId,
      palette: (0, h.t1)(null != (t = S.palette) ? t : "sky"),
      imgAlt: null == (e = S.a11yLabel) ? true : e.call(S)
    } : null
  }, [k, S]);
  return null == n || null == T ? null : (0, l.jsx)(j.O3, {
    children: (0, l.jsx)(o.mzw, {
      align: p.Z.Align.CENTER,
      "data-migration-pending": true,
      children: (0, l.jsxs)("div", {
        className: b.promotionalFooter,
        children: [k && null != M ? (0, l.jsx)("div", {
          className: b.nameplatePreviewContainer,
          onMouseEnter: () => N(true),
          onMouseLeave: () => N(false),
          children: (0, l.jsx)(f.R, {
            user: x,
            nameplate: null,
            nameplateData: M,
            showPlaceholderUser: true,
            nameplatePreviewSize: "xsmall",
            isHighlighted: C
          })
        }) : (0, l.jsx)(o.Xo$, {
          "aria-label": null == x ? true : x.username,
          size: E,
          src: null == x ? true : x.getAvatarURL(true, (0, o.dcp)(E), !P),
          avatarDecoration: I
        }), (0, l.jsx)(s.zxk, {
          variant: "primary",
          text: T.collectRewardButtonText(),
          onClick: () => {
            t(), (0, m.Z)({
              product: n,
              shouldShowPromotionalExperience: true,
              analyticsLocations: O,
              purchaseType: y.o8.PROMOTIONAL
            })
          }
        })]
      })
    })
  })
}