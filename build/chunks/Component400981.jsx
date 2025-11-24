/** Chunk was on 54400 **/
/** chunk id: 400981, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
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
  Chunk473936 = require("./473936.js");

function y(e) {
  let {
    onClose: t,
    selectedPromotionalDecoPurchaseRecord: n,
    selectedGiftingPromotionReward: y
  } = e, j = (0, i.e7)([g.default], () => g.default.getCurrentUser()), S = (0, i.e7)([d.Z], () => d.Z.useReducedMotion), {
    analyticsLocations: _
  } = (0, c.ZP)(), w = s.EFr.SIZE_32, C = (0, u.Z)(null == y ? true : y.assetId, w, !S), O = (0, b.Z)(), E = null == O ? true : O.giftPurchaseConfirmation, k = (null == y ? true : y.type) === a.Z.NAMEPLATE, [I, T] = l.useState(false), N = l.useMemo(() => {
    var e, t;
    return k && (null == y ? true : y.assetId) != null ? {
      src: y.assetId,
      palette: (0, h.t1)(null != (t = y.palette) ? t : "sky"),
      imgAlt: null == (e = y.a11yLabel) ? true : e.call(y)
    } : null
  }, [k, y]);
  return null == n || null == E ? null : (0, r.jsx)(v.O3, {
    children: (0, r.jsx)(s.mzw, {
      align: m.Z.Align.CENTER,
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: P.promotionalFooter,
        children: [k && null != N ? (0, r.jsx)("div", {
          className: P.nameplatePreviewContainer,
          onMouseEnter: () => T(true),
          onMouseLeave: () => T(false),
          children: (0, r.jsx)(f.R, {
            user: j,
            nameplate: null,
            nameplateData: N,
            showPlaceholderUser: true,
            nameplatePreviewSize: "xsmall",
            isHighlighted: I
          })
        }) : (0, r.jsx)(s.Xo$, {
          "aria-label": null == j ? true : j.username,
          size: w,
          src: null == j ? true : j.getAvatarURL(true, (0, s.pxk)(w), !S),
          avatarDecoration: C
        }), (0, r.jsx)(o.zxk, {
          variant: "primary",
          text: E.collectRewardButtonText(),
          onClick: () => {
            t(), (0, p.Z)({
              product: n,
              shouldShowPromotionalExperience: true,
              analyticsLocations: _,
              purchaseType: x.o8.PROMOTIONAL
            })
          }
        })]
      })
    })
  })
}