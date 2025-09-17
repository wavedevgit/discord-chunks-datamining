/** Chunk was on 77198 **/
/** chunk id: 509428, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
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
let R = t => {
  let {
    transitionState: e,
    product: n,
    onClose: R,
    analyticsLocations: y,
    overrideTitle: b,
    overrideDescription: P,
    itemConsumed: S = true,
    purchaseType: v = k.o8.ORB
  } = t, N = (0, a.e7)([f.Z], () => f.Z.purchases), B = (0, E.o)(n, N), x = (0, m.W)(n, B), {
    analyticsLocations: M
  } = (0, o.ZP)([...y, u.Z.COLLECTIBLES_COLLECTED_MODAL]);
  r.useEffect(() => {
    k.Vt.ORB_PROFILE_BADGE === x.skuId && (0, p.Ls)([(0, _.X)()], 600)
  }, [x.skuId]);
  let {
    isLoading: U,
    isFractionalPremiumActive: D,
    expiresAt: F
  } = (() => {
    let t = (0, c.Z)({
        forceFetch: true
      }),
      e = (0, h.vc)(t.endsAt, "L");
    return {
      isLoading: !t.fetched,
      isFractionalPremiumActive: t.isFractionalPremiumActive,
      expiresAt: e
    }
  })(), {
    environment: Z,
    modalRef: j,
    confettiCanvas: G,
    setConfettiCanvas: w,
    customConfettiDisplayOptions: V
  } = (0, g.$0)(x, v);
  (0, g.f1)(x, M);
  let H = (0, L.kd)(x),
    {
      handleUseNow: W,
      isApplying: X
    } = (0, A.W)({
      product: x,
      onSuccess: R,
      onError: R
    });
  if (U) return (0, i.jsx)(d.$jN, {
    type: d.$jN.Type.SPINNING_CIRCLE
  });
  let $ = (0, g.Xw)({
      product: x,
      pairedProduct: true,
      overrideTitle: b,
      isVariantsGroupEnabled: false,
      shouldShowPromotionalExperience: false,
      productName: H,
      pairedProductName: true,
      itemConsumed: S
    }),
    Q = (0, g.ys)({
      product: x,
      overrideDescription: P,
      productName: H,
      itemConsumed: S,
      isFractionalPremiumActive: D,
      expiresAt: F
    }),
    Y = (0, g.cf)({
      product: x,
      onClose: R,
      analyticsLocations: M,
      handleUseNow: W,
      isApplying: X,
      itemConsumed: S
    });
  return (0, i.jsx)(o.Gt, {
    value: M,
    children: (0, i.jsxs)("div", {
      ref: j,
      children: [(0, i.jsx)(s.O_, {
        ref: w,
        className: T.confettiCanvas,
        environment: Z
      }), (0, i.jsx)(l.I, {
        graphic: {
          type: "dynamic",
          component: d.AX$.COLLECTIBLES_PREVIEW,
          props: {
            product: x,
            itemConsumed: S
          }
        },
        title: $,
        subtitle: null != Q ? Q : true,
        onClose: R,
        transitionState: e,
        actions: Y
      }), null != V ? (0, i.jsx)(I.i, {
        options: V
      }) : (0, i.jsx)(C.Z, {
        confettiTarget: j.current,
        confettiCanvas: G,
        sprites: (0, O.vK)(x.categorySkuId)
      })]
    })
  })
}