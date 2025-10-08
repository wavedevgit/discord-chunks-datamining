/** Chunk was on 77198 **/
/** chunk id: 509428, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => k
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
let k = t => {
  let {
    transitionState: e,
    product: n,
    onClose: k,
    analyticsLocations: m,
    overrideTitle: b,
    overrideDescription: g,
    itemConsumed: S = true,
    purchaseType: P = L.o8.ORB
  } = t, v = (0, s.e7)([p.Z], () => p.Z.purchases), N = (0, h.o)(n, v), B = (0, _.W)(n, N), {
    analyticsLocations: M
  } = (0, o.ZP)([...m, d.Z.COLLECTIBLES_COLLECTED_MODAL]);
  r.useEffect(() => {
    L.Vt.ORB_PROFILE_BADGE === B.skuId && (0, c.Ls)([(0, I.X)()], 600)
  }, [B.skuId]);
  let {
    isLoading: x,
    isFractionalPremiumActive: Z,
    expiresAt: U
  } = (0, f.Kd)(), {
    environment: D,
    modalRef: j,
    confettiCanvas: F,
    setConfettiCanvas: w,
    customConfettiDisplayOptions: V
  } = (0, y.$0)(B, P);
  (0, y.f1)(B, M);
  let G = (0, T.kd)(B),
    {
      handleUseNow: W,
      isApplying: X
    } = (0, E.W)({
      product: B,
      onSuccess: k,
      onError: k
    });
  if (x) return (0, i.jsx)(u.$jN, {
    type: u.$jN.Type.SPINNING_CIRCLE
  });
  let H = (0, y.Xw)({
      product: B,
      overrideTitle: b,
      isVariantsGroupEnabled: false,
      shouldShowPromotionalExperience: false,
      productName: G,
      itemConsumed: S
    }),
    $ = (0, y.ys)({
      product: B,
      overrideDescription: g,
      productName: G,
      itemConsumed: S,
      isFractionalPremiumActive: Z,
      expiresAt: U
    }),
    z = (0, y.cf)({
      product: B,
      onClose: k,
      analyticsLocations: M,
      handleUseNow: W,
      isApplying: X,
      itemConsumed: S
    });
  return (0, i.jsx)(o.Gt, {
    value: M,
    children: (0, i.jsxs)("div", {
      ref: j,
      children: [(0, i.jsx)(l.O_, {
        ref: w,
        className: R.confettiCanvas,
        environment: D
      }), (0, i.jsx)(a.ExpressiveModal, {
        graphic: {
          type: "dynamic",
          component: u.AX$.COLLECTIBLES_PREVIEW,
          props: {
            product: B,
            itemConsumed: S
          }
        },
        title: H,
        subtitle: null != $ ? $ : true,
        onClose: k,
        transitionState: e,
        actions: z
      }), null != V ? (0, i.jsx)(C.i, {
        options: V
      }) : (0, i.jsx)(A.Z, {
        confettiTarget: j.current,
        confettiCanvas: F,
        sprites: (0, O.vK)(B.categorySkuId)
      })]
    })
  })
}