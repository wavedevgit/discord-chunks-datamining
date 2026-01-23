/** Chunk was on 95481 **/
/** chunk id: 328064, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => L
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk106778 = require("./106778.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk207803 = require("./207803.js"),
  Chunk298072 = require("./298072.js"),
  Chunk450481 = require("./450481.js"),
  Chunk645178 = require("./645178.js"),
  Chunk623373 = require("./623373.js"),
  Chunk181774 = require("./181774.js"),
  Chunk524246 = require("./524246.jsx"),
  Chunk14368 = require("./14368.js"),
  Chunk213530 = require("./213530.jsx"),
  Chunk132198 = require("./132198.jsx"),
  Chunk961883 = require("./961883.js"),
  Chunk758836 = require("./758836.js"),
  Chunk290964 = require("./290964.js");
let L = t => {
  let {
    transitionState: e,
    product: n,
    onClose: L,
    analyticsLocations: m,
    overrideTitle: T,
    overrideDescription: b,
    itemConsumed: k = true,
    purchaseType: g = C.gs.ORB
  } = t, S = (0, o.Q)(n), N = (0, E.rb)(n, S), {
    analyticsLocations: P
  } = (0, u.Ay)([...m, d.A.COLLECTIBLES_COLLECTED_MODAL]);
  r.useEffect(() => {
    C.Dp.ORB_PROFILE_BADGE === N.skuId && (0, p.Gr)([(0, I._)()], 600)
  }, [N.skuId]);
  let {
    isLoading: B,
    isFractionalPremiumActive: v,
    expiresAt: D
  } = (0, O.EZ)(), {
    environment: M,
    modalRef: x,
    confettiCanvas: U,
    setConfettiCanvas: F,
    customConfettiDisplayOptions: j
  } = (0, R.mO)(N, g);
  (0, R.$V)(N, P);
  let G = (0, h.o7)(N),
    {
      handleUseNow: H,
      isApplying: V
    } = (0, c.p)({
      product: N,
      onSuccess: L,
      onError: L
    });
  if (B) return (0, i.jsx)(a.y$y, {
    type: a.y$y.Type.SPINNING_CIRCLE
  });
  let w = (0, R.$k)({
      product: N,
      overrideTitle: T,
      isVariantsGroupEnabled: false,
      shouldShowPromotionalExperience: false,
      productName: G,
      itemConsumed: k
    }),
    z = (0, R.v8)({
      product: N,
      overrideDescription: b,
      productName: G,
      itemConsumed: k,
      isFractionalPremiumActive: v,
      expiresAt: D
    }),
    Q = (0, R.aG)({
      product: N,
      onClose: L,
      analyticsLocations: P,
      handleUseNow: H,
      isApplying: V,
      itemConsumed: k
    });
  return (0, i.jsx)(u.f5, {
    value: P,
    children: (0, i.jsxs)("div", {
      ref: x,
      children: [(0, i.jsx)(l.Fk, {
        ref: F,
        className: y.L,
        environment: M
      }), (0, i.jsx)(s.ExpressiveModal, {
        graphic: {
          type: "dynamic",
          component: a.Oz7.COLLECTIBLES_PREVIEW,
          props: {
            product: N,
            itemConsumed: k
          }
        },
        title: w,
        subtitle: null != z ? z : true,
        onClose: L,
        transitionState: e,
        actions: Q
      }), null != j ? (0, i.jsx)(_.K, {
        options: j
      }) : (0, i.jsx)(A.A, {
        confettiTarget: x.current,
        confettiCanvas: U,
        sprites: (0, f.rA)(N.categorySkuId)
      })]
    })
  })
}