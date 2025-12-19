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
  Chunk583434 = require("./583434.js"),
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
    reward: t,
    purchase: n,
    onClose: S
  } = e, x = (0, a.e7)([j.default], () => j.default.getCurrentUser()), P = (0, a.e7)([u.Z], () => u.Z.useReducedMotion), {
    analyticsLocations: E
  } = (0, c.ZP)(), w = o.EFr.SIZE_32, I = (0, d.Z)(t.assetId, w, !P), T = (0, y.Z)(), k = null == T ? true : T.giftPurchaseConfirmation, {
    product: C,
    isFetching: N
  } = (0, p.T)(n.skuId), M = t.type === i.Z.NAMEPLATE, [_, A] = l.useState(false), R = l.useMemo(() => {
    var e, n;
    return M && null != t.assetId ? {
      src: t.assetId,
      palette: (0, f.t1)(null != (n = t.palette) ? n : "sky"),
      imgAlt: null == (e = t.a11yLabel) ? true : e.call(t)
    } : null
  }, [M, t]);
  return null == k ? null : (0, r.jsx)(v.O3, {
    children: (0, r.jsx)(o.mzw, {
      align: h.Z.Align.CENTER,
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: O.promotionalFooter,
        children: [M && null != R ? (0, r.jsx)("div", {
          className: O.nameplatePreviewContainer,
          onMouseEnter: () => A(true),
          onMouseLeave: () => A(false),
          children: (0, r.jsx)(g.R, {
            user: x,
            nameplate: null,
            nameplateData: R,
            showPlaceholderUser: true,
            nameplatePreviewSize: "xsmall",
            isHighlighted: _
          })
        }) : (0, r.jsx)(o.Xo$, {
          "aria-label": null == x ? true : x.username,
          size: w,
          src: null == x ? true : x.getAvatarURL(true, (0, o.dcp)(w), !P),
          avatarDecoration: I
        }), (0, r.jsx)(s.zxk, {
          variant: "primary",
          text: k.collectRewardButtonText(),
          loading: N,
          onClick: () => {
            null != C && (S(), (0, m.Z)({
              product: C,
              shouldShowPromotionalExperience: true,
              analyticsLocations: E,
              purchaseType: b.o8.PROMOTIONAL
            }))
          }
        })]
      })
    })
  })
}