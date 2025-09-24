/** Chunk was on 77198 **/
/** chunk id: 509428, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk399606 = require("./399606.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk350327 = require("./350327.js"),
  Chunk1870 = require("./1870.js"),
  Chunk429368 = require("./429368.js"),
  Chunk635552 = require("./635552.js"),
  Chunk578976 = require("./578976.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk372654 = require("./372654.js"),
  Chunk197831 = require("./197831.jsx"),
  Chunk755419 = require("./755419.jsx"),
  Chunk58201 = require("./58201.js"),
  Chunk29121 = require("./29121.js"),
  Chunk391594 = require("./391594.js"),
  Chunk215023 = require("./215023.js"),
  Chunk222311 = require("./222311.js");
let O = t => {
  let {
    transitionState: e,
    product: s,
    onClose: O,
    analyticsLocations: y,
    overrideTitle: N,
    overrideDescription: P,
    itemConsumed: S = true,
    purchaseType: B = k.o8.ORB
  } = t, R = (0, a.e7)([l.Z], () => l.Z.purchases), T = (0, C.o)(s, R), Z = (0, _.W)(s, T), {
    analyticsLocations: b
  } = (0, u.ZP)([...y, d.Z.COLLECTIBLES_COLLECTED_MODAL]);
  o.useEffect(() => {
    k.Vt.ORB_PROFILE_BADGE === Z.skuId && (0, p.Ls)([(0, I.X)()], 600)
  }, [Z.skuId]);
  let {
    isLoading: g,
    isFractionalPremiumActive: w,
    expiresAt: G
  } = (0, E.Kd)(), {
    environment: $,
    modalRef: A,
    confettiCanvas: D,
    setConfettiCanvas: V,
    customConfettiDisplayOptions: W
  } = (0, x.$0)(Z, B);
  (0, x.f1)(Z, b);
  let X = (0, j.kd)(Z),
    {
      handleUseNow: K,
      isApplying: F
    } = (0, f.W)({
      product: Z,
      onSuccess: O,
      onError: O
    });
  if (g) return (0, n.jsx)(c.$jN, {
    type: c.$jN.Type.SPINNING_CIRCLE
  });
  let M = (0, x.Xw)({
      product: Z,
      pairedProduct: true,
      overrideTitle: N,
      isVariantsGroupEnabled: false,
      shouldShowPromotionalExperience: false,
      productName: X,
      pairedProductName: true,
      itemConsumed: S
    }),
    q = (0, x.ys)({
      product: Z,
      overrideDescription: P,
      productName: X,
      itemConsumed: S,
      isFractionalPremiumActive: w,
      expiresAt: G
    }),
    z = (0, x.cf)({
      product: Z,
      onClose: O,
      analyticsLocations: b,
      handleUseNow: K,
      isApplying: F,
      itemConsumed: S
    });
  return (0, n.jsx)(u.Gt, {
    value: b,
    children: (0, n.jsxs)("div", {
      ref: A,
      children: [(0, n.jsx)(i.O_, {
        ref: V,
        className: m.confettiCanvas,
        environment: $
      }), (0, n.jsx)(r.I, {
        graphic: {
          type: "dynamic",
          component: c.AX$.COLLECTIBLES_PREVIEW,
          props: {
            product: Z,
            itemConsumed: S
          }
        },
        title: M,
        subtitle: null != q ? q : true,
        onClose: O,
        transitionState: e,
        actions: z
      }), null != W ? (0, n.jsx)(h.i, {
        options: W
      }) : (0, n.jsx)(L.Z, {
        confettiTarget: A.current,
        confettiCanvas: D,
        sprites: (0, v.vK)(Z.categorySkuId)
      })]
    })
  })
}