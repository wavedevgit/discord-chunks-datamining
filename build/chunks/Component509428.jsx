/** Chunk was on 77198 **/
/** chunk id: 509428, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk350327 = require("./350327.js"),
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
let k = t => {
  let {
    transitionState: e,
    product: s,
    onClose: k,
    analyticsLocations: O,
    overrideTitle: m,
    overrideDescription: y,
    itemConsumed: S = true,
    purchaseType: N = I.o8.ORB
  } = t, B = (0, l.o)(s), P = (0, _.W)(s, B), {
    analyticsLocations: R
  } = (0, u.ZP)([...O, c.Z.COLLECTIBLES_COLLECTED_MODAL]);
  o.useEffect(() => {
    I.Vt.ORB_PROFILE_BADGE === P.skuId && (0, d.Ls)([(0, v.X)()], 600)
  }, [P.skuId]);
  let {
    isLoading: T,
    isFractionalPremiumActive: b,
    expiresAt: g
  } = (0, C.Kd)(), {
    environment: w,
    modalRef: G,
    confettiCanvas: $,
    setConfettiCanvas: A,
    customConfettiDisplayOptions: D
  } = (0, x.$0)(P, N);
  (0, x.f1)(P, R);
  let V = (0, h.kd)(P),
    {
      handleUseNow: W,
      isApplying: X
    } = (0, p.W)({
      product: P,
      onSuccess: k,
      onError: k
    });
  if (T) return (0, n.jsx)(r.$jN, {
    type: r.$jN.Type.SPINNING_CIRCLE
  });
  let Z = (0, x.Xw)({
      product: P,
      overrideTitle: m,
      isVariantsGroupEnabled: false,
      shouldShowPromotionalExperience: false,
      productName: V,
      itemConsumed: S
    }),
    K = (0, x.ys)({
      product: P,
      overrideDescription: y,
      productName: V,
      itemConsumed: S,
      isFractionalPremiumActive: b,
      expiresAt: g
    }),
    M = (0, x.cf)({
      product: P,
      onClose: k,
      analyticsLocations: R,
      handleUseNow: W,
      isApplying: X,
      itemConsumed: S
    });
  return (0, n.jsx)(u.Gt, {
    value: R,
    children: (0, n.jsxs)("div", {
      ref: G,
      children: [(0, n.jsx)(i.O_, {
        ref: A,
        className: j.confettiCanvas,
        environment: w
      }), (0, n.jsx)(a.ExpressiveModal, {
        graphic: {
          type: "dynamic",
          component: r.AX$.COLLECTIBLES_PREVIEW,
          props: {
            product: P,
            itemConsumed: S
          }
        },
        title: Z,
        subtitle: null != K ? K : true,
        onClose: k,
        transitionState: e,
        actions: M
      }), null != D ? (0, n.jsx)(L.i, {
        options: D
      }) : (0, n.jsx)(E.Z, {
        confettiTarget: G.current,
        confettiCanvas: $,
        sprites: (0, f.vK)(P.categorySkuId)
      })]
    })
  })
}