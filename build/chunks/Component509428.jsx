/** Chunk was on 77198 **/
/** chunk id: 509428, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => T
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
  Chunk722982 = require("./722982.js");
let T = t => {
  let {
    transitionState: e,
    product: n,
    onClose: T,
    analyticsLocations: R,
    overrideTitle: y,
    overrideDescription: b,
    itemConsumed: S = true,
    purchaseType: P = g.o8.ORB
  } = t, N = (0, a.e7)([c.Z], () => c.Z.purchases), B = (0, h.o)(n, N), v = (0, A.W)(n, B), {
    analyticsLocations: x
  } = (0, o.ZP)([...R, u.Z.COLLECTIBLES_COLLECTED_MODAL]);
  r.useEffect(() => {
    g.Vt.ORB_PROFILE_BADGE === v.skuId && (0, p.Ls)([(0, _.X)()], 600)
  }, [v.skuId]);
  let {
    isLoading: M,
    isFractionalPremiumActive: U,
    expiresAt: D
  } = (0, E.Kd)(), {
    environment: Z,
    modalRef: F,
    confettiCanvas: j,
    setConfettiCanvas: G,
    customConfettiDisplayOptions: w
  } = (0, L.$0)(v, P);
  (0, L.f1)(v, x);
  let V = (0, m.kd)(v),
    {
      handleUseNow: H,
      isApplying: W
    } = (0, f.W)({
      product: v,
      onSuccess: T,
      onError: T
    });
  if (M) return (0, i.jsx)(d.$jN, {
    type: d.$jN.Type.SPINNING_CIRCLE
  });
  let X = (0, L.Xw)({
      product: v,
      pairedProduct: true,
      overrideTitle: y,
      isVariantsGroupEnabled: false,
      shouldShowPromotionalExperience: false,
      productName: V,
      pairedProductName: true,
      itemConsumed: S
    }),
    $ = (0, L.ys)({
      product: v,
      overrideDescription: b,
      productName: V,
      itemConsumed: S,
      isFractionalPremiumActive: U,
      expiresAt: D
    }),
    Q = (0, L.cf)({
      product: v,
      onClose: T,
      analyticsLocations: x,
      handleUseNow: H,
      isApplying: W,
      itemConsumed: S
    });
  return (0, i.jsx)(o.Gt, {
    value: x,
    children: (0, i.jsxs)("div", {
      ref: F,
      children: [(0, i.jsx)(s.O_, {
        ref: G,
        className: k.confettiCanvas,
        environment: Z
      }), (0, i.jsx)(l.I, {
        graphic: {
          type: "dynamic",
          component: d.AX$.COLLECTIBLES_PREVIEW,
          props: {
            product: v,
            itemConsumed: S
          }
        },
        title: X,
        subtitle: null != $ ? $ : true,
        onClose: T,
        transitionState: e,
        actions: Q
      }), null != w ? (0, i.jsx)(I.i, {
        options: w
      }) : (0, i.jsx)(C.Z, {
        confettiTarget: F.current,
        confettiCanvas: j,
        sprites: (0, O.vK)(v.categorySkuId)
      })]
    })
  })
}