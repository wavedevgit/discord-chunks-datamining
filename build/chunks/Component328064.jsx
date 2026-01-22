/** Chunk was on 95481 **/
/** chunk id: 328064, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  default: () => O
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
  Chunk181774 = require("./181774.js"),
  Chunk524246 = require("./524246.jsx"),
  Chunk14368 = require("./14368.js"),
  Chunk213530 = require("./213530.jsx"),
  Chunk132198 = require("./132198.jsx"),
  Chunk767503 = require("./767503.js"),
  Chunk764999 = require("./764999.js"),
  Chunk961883 = require("./961883.js"),
  Chunk758836 = require("./758836.js"),
  Chunk290964 = require("./290964.js");
let O = e => {
  let {
    transitionState: t,
    product: s,
    onClose: O,
    analyticsLocations: m,
    overrideTitle: v,
    overrideDescription: j,
    itemConsumed: S = true,
    purchaseType: A = _.gs.ORB
  } = e, b = (0, l.Q)(s), g = (0, h.r)(s, b), {
    analyticsLocations: B
  } = (0, p.Ay)([...m, c.A.COLLECTIBLES_COLLECTED_MODAL]);
  o.useEffect(() => {
    _.Dp.ORB_PROFILE_BADGE === g.skuId && (0, d.Gr)([(0, y._)()], 600)
  }, [g.skuId]);
  let {
    isLoading: G,
    isFractionalPremiumActive: R,
    expiresAt: T
  } = (0, E.EZ)(), {
    environment: D,
    modalRef: N,
    confettiCanvas: P,
    setConfettiCanvas: $,
    customConfettiDisplayOptions: w
  } = (0, I.mO)(g, A);
  (0, I.$V)(g, B);
  let V = (0, x.o7)(g),
    {
      handleUseNow: F,
      isApplying: M
    } = (0, u.p)({
      product: g,
      onSuccess: O,
      onError: O
    });
  if (G) return (0, r.jsx)(a.y$y, {
    type: a.y$y.Type.SPINNING_CIRCLE
  });
  let z = (0, I.$k)({
      product: g,
      overrideTitle: v,
      isVariantsGroupEnabled: false,
      shouldShowPromotionalExperience: false,
      productName: V,
      itemConsumed: S
    }),
    K = (0, I.v8)({
      product: g,
      overrideDescription: j,
      productName: V,
      itemConsumed: S,
      isFractionalPremiumActive: R,
      expiresAt: T
    }),
    Q = (0, I.aG)({
      product: g,
      onClose: O,
      analyticsLocations: B,
      handleUseNow: F,
      isApplying: M,
      itemConsumed: S
    });
  return (0, r.jsx)(p.f5, {
    value: B,
    children: (0, r.jsxs)("div", {
      ref: N,
      children: [(0, r.jsx)(n.Fk, {
        ref: $,
        className: k.L,
        environment: D
      }), (0, r.jsx)(i.ExpressiveModal, {
        graphic: {
          type: "dynamic",
          component: a.Oz7.COLLECTIBLES_PREVIEW,
          props: {
            product: g,
            itemConsumed: S
          }
        },
        title: z,
        subtitle: null != K ? K : true,
        onClose: O,
        transitionState: t,
        actions: Q
      }), null != w ? (0, r.jsx)(f.K, {
        options: w
      }) : (0, r.jsx)(L.A, {
        confettiTarget: N.current,
        confettiCanvas: P,
        sprites: (0, C.rA)(g.categorySkuId)
      })]
    })
  })
}