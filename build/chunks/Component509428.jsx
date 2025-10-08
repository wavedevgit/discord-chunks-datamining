/** Chunk was on 77198 **/
/** chunk id: 509428, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk793030 = require("./793030.js"),
  Chunk399606 = require("./399606.js"),
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
let _ = t => {
  let {
    transitionState: e,
    product: n,
    onClose: _,
    analyticsLocations: R,
    overrideTitle: L,
    overrideDescription: P,
    itemConsumed: v = true,
    purchaseType: k = C.o8.ORB
  } = t, S = (0, a.e7)([p.Z], () => p.Z.purchases), B = (0, h.o)(n, S), N = (0, I.W)(n, B), {
    analyticsLocations: M
  } = (0, o.ZP)([...R, d.Z.COLLECTIBLES_COLLECTED_MODAL]);
  r.useEffect(() => {
    C.Vt.ORB_PROFILE_BADGE === N.skuId && (0, c.Ls)([(0, T.X)()], 600)
  }, [N.skuId]);
  let {
    isLoading: Z,
    isFractionalPremiumActive: x,
    expiresAt: F
  } = (0, E.Kd)(), {
    environment: D,
    modalRef: U,
    confettiCanvas: j,
    setConfettiCanvas: w,
    customConfettiDisplayOptions: V
  } = (0, m.$0)(N, k);
  (0, m.f1)(N, M);
  let G = (0, g.kd)(N),
    {
      handleUseNow: W,
      isApplying: X
    } = (0, f.W)({
      product: N,
      onSuccess: _,
      onError: _
    });
  if (Z) return (0, i.jsx)(u.$jN, {
    type: u.$jN.Type.SPINNING_CIRCLE
  });
  let H = (0, m.Xw)({
      product: N,
      overrideTitle: L,
      isVariantsGroupEnabled: false,
      shouldShowPromotionalExperience: false,
      productName: G,
      itemConsumed: v
    }),
    $ = (0, m.ys)({
      product: N,
      overrideDescription: P,
      productName: G,
      itemConsumed: v,
      isFractionalPremiumActive: x,
      expiresAt: F
    }),
    z = (0, m.cf)({
      product: N,
      onClose: _,
      analyticsLocations: M,
      handleUseNow: W,
      isApplying: X,
      itemConsumed: v
    });
  return (0, i.jsx)(o.Gt, {
    value: M,
    children: (0, i.jsxs)("div", {
      ref: U,
      children: [(0, i.jsx)(l.O_, {
        ref: w,
        className: b.confettiCanvas,
        environment: D
      }), (0, i.jsx)(s.ExpressiveModal, {
        graphic: {
          type: "dynamic",
          component: u.AX$.COLLECTIBLES_PREVIEW,
          props: {
            product: N,
            itemConsumed: v
          }
        },
        title: H,
        subtitle: null != $ ? $ : true,
        onClose: _,
        transitionState: e,
        actions: z
      }), null != V ? (0, i.jsx)(O.i, {
        options: V
      }) : (0, i.jsx)(y.Z, {
        confettiTarget: U.current,
        confettiCanvas: j,
        sprites: (0, A.vK)(N.categorySkuId)
      })]
    })
  })
}