/** Chunk was on 77198 **/
/** chunk id: 509428, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => m
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
let m = t => {
  let {
    transitionState: e,
    product: s,
    onClose: m,
    analyticsLocations: y,
    overrideTitle: S,
    overrideDescription: N,
    itemConsumed: B = true,
    purchaseType: P = k.o8.ORB
  } = t, R = (0, a.e7)([l.Z], () => l.Z.purchases), T = (0, C.o)(s, R), Z = (0, v.W)(s, T), {
    analyticsLocations: b
  } = (0, d.ZP)([...y, u.Z.COLLECTIBLES_COLLECTED_MODAL]);
  o.useEffect(() => {
    k.Vt.ORB_PROFILE_BADGE === Z.skuId && (0, p.Ls)([(0, _.X)()], 600)
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
  } = (0, x.$0)(Z, P);
  (0, x.f1)(Z, b);
  let X = (0, j.kd)(Z),
    {
      handleUseNow: K,
      isApplying: F
    } = (0, f.W)({
      product: Z,
      onSuccess: m,
      onError: m
    });
  if (g) return (0, n.jsx)(c.$jN, {
    type: c.$jN.Type.SPINNING_CIRCLE
  });
  let M = (0, x.Xw)({
      product: Z,
      overrideTitle: S,
      isVariantsGroupEnabled: false,
      shouldShowPromotionalExperience: false,
      productName: X,
      itemConsumed: B
    }),
    q = (0, x.ys)({
      product: Z,
      overrideDescription: N,
      productName: X,
      itemConsumed: B,
      isFractionalPremiumActive: w,
      expiresAt: G
    }),
    z = (0, x.cf)({
      product: Z,
      onClose: m,
      analyticsLocations: b,
      handleUseNow: K,
      isApplying: F,
      itemConsumed: B
    });
  return (0, n.jsx)(d.Gt, {
    value: b,
    children: (0, n.jsxs)("div", {
      ref: A,
      children: [(0, n.jsx)(i.O_, {
        ref: V,
        className: O.confettiCanvas,
        environment: $
      }), (0, n.jsx)(r.I, {
        graphic: {
          type: "dynamic",
          component: c.AX$.COLLECTIBLES_PREVIEW,
          props: {
            product: Z,
            itemConsumed: B
          }
        },
        title: M,
        subtitle: null != q ? q : true,
        onClose: m,
        transitionState: e,
        actions: z
      }), null != W ? (0, n.jsx)(I.i, {
        options: W
      }) : (0, n.jsx)(L.Z, {
        confettiTarget: A.current,
        confettiCanvas: D,
        sprites: (0, h.vK)(Z.categorySkuId)
      })]
    })
  })
}