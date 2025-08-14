/** Chunk was on 77198 **/
/** chunk id: 509428, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk505266 = require("./505266.js"),
  Chunk399606 = require("./399606.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk350327 = require("./350327.js"),
  Chunk55935 = require("./55935.js"),
  Chunk1870 = require("./1870.js"),
  Chunk429368 = require("./429368.js"),
  Chunk635552 = require("./635552.js"),
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
    product: i,
    onClose: O,
    analyticsLocations: y,
    overrideTitle: N,
    overrideDescription: S,
    itemConsumed: A = true,
    purchaseType: Z = P.o8.ORB
  } = t, g = (0, r.e7)([C.Z], () => C.Z.purchases), B = (0, L.o)(i, g), R = (0, _.W)(i, B), {
    analyticsLocations: T
  } = (0, u.ZP)([...y, d.Z.COLLECTIBLES_COLLECTED_MODAL]);
  n.useEffect(() => {
    P.Vt.ORB_PROFILE_BADGE === R.skuId && (0, p.Ls)([(0, I.X)()], 600)
  }, [R.skuId]);
  let {
    isLoading: b,
    isFractionalPremiumActive: w,
    expiresAt: F
  } = (() => {
    let t = (0, l.Z)({
        forceFetch: true
      }),
      e = (0, f.vc)(t.endsAt, "L");
    return {
      isLoading: !t.fetched,
      isFractionalPremiumActive: t.isFractionalPremiumActive,
      expiresAt: e
    }
  })(), {
    environment: G,
    modalRef: $,
    confettiCanvas: D,
    setConfettiCanvas: V,
    customConfettiDisplayOptions: W
  } = (0, x.$0)(R, Z);
  (0, x.f1)(R, T);
  let X = (0, j.kd)(R),
    {
      handleUseNow: K,
      isApplying: M
    } = (0, v.W)({
      product: R,
      onSuccess: O,
      onError: O
    });
  if (b) return (0, s.jsx)(c.$jN, {
    type: c.$jN.Type.SPINNING_CIRCLE
  });
  let q = (0, x.Xw)({
      product: R,
      pairedProduct: true,
      overrideTitle: N,
      isVariantsGroupEnabled: false,
      shouldShowPromotionalExperience: false,
      productName: X,
      pairedProductName: true,
      itemConsumed: A
    }),
    z = (0, x.ys)({
      product: R,
      overrideDescription: S,
      productName: X,
      itemConsumed: A,
      isFractionalPremiumActive: w,
      expiresAt: F
    }),
    H = (0, x.cf)({
      product: R,
      onClose: O,
      analyticsLocations: T,
      handleUseNow: K,
      isApplying: M,
      itemConsumed: A
    });
  return (0, s.jsx)(u.Gt, {
    value: T,
    children: (0, s.jsxs)("div", {
      ref: $,
      children: [(0, s.jsx)(o.O_, {
        ref: V,
        className: k.confettiCanvas,
        environment: G
      }), (0, s.jsx)(a.I, {
        graphic: {
          type: "dynamic",
          component: c.AX$.COLLECTIBLES_PREVIEW,
          props: {
            product: R,
            itemConsumed: A
          }
        },
        title: q,
        subtitle: null != z ? z : true,
        onClose: O,
        transitionState: e,
        actions: H
      }), null != W ? (0, s.jsx)(m.i, {
        options: W
      }) : (0, s.jsx)(E.Z, {
        confettiTarget: $.current,
        confettiCanvas: D,
        sprites: (0, h.vK)(R.categorySkuId)
      })]
    })
  })
}