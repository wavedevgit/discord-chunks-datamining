/** Chunk was on 95481 **/
/** chunk id: 328064, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  default: () => v
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
let v = e => {
  let {
    transitionState: t,
    product: s,
    onClose: v,
    analyticsLocations: O,
    overrideTitle: m,
    overrideDescription: j,
    itemConsumed: S = true,
    purchaseType: A = I.gs.ORB
  } = e, b = (0, u.Q)(s), g = (0, L.rb)(s, b), {
    analyticsLocations: B
  } = (0, p.Ay)([...O, c.A.COLLECTIBLES_COLLECTED_MODAL]);
  o.useEffect(() => {
    I.Dp.ORB_PROFILE_BADGE === g.skuId && (0, l.Gr)([(0, h._)()], 600)
  }, [g.skuId]);
  let {
    isLoading: G,
    isFractionalPremiumActive: R,
    expiresAt: T
  } = (0, C.EZ)(), {
    environment: D,
    modalRef: N,
    confettiCanvas: P,
    setConfettiCanvas: $,
    customConfettiDisplayOptions: w
  } = (0, x.mO)(g, A);
  (0, x.$V)(g, B);
  let V = (0, E.o7)(g),
    {
      handleUseNow: F,
      isApplying: M
    } = (0, d.p)({
      product: g,
      onSuccess: v,
      onError: v
    });
  if (G) return (0, n.jsx)(a.y$y, {
    type: a.y$y.Type.SPINNING_CIRCLE
  });
  let z = (0, x.$k)({
      product: g,
      overrideTitle: m,
      isVariantsGroupEnabled: false,
      shouldShowPromotionalExperience: false,
      productName: V,
      itemConsumed: S
    }),
    K = (0, x.v8)({
      product: g,
      overrideDescription: j,
      productName: V,
      itemConsumed: S,
      isFractionalPremiumActive: R,
      expiresAt: T
    }),
    Q = (0, x.aG)({
      product: g,
      onClose: v,
      analyticsLocations: B,
      handleUseNow: F,
      isApplying: M,
      itemConsumed: S
    });
  return (0, n.jsx)(p.f5, {
    value: B,
    children: (0, n.jsxs)("div", {
      ref: N,
      children: [(0, n.jsx)(r.Fk, {
        ref: $,
        className: k.L,
        environment: D
      }), (0, n.jsx)(i.ExpressiveModal, {
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
        onClose: v,
        transitionState: t,
        actions: Q
      }), null != w ? (0, n.jsx)(f.K, {
        options: w
      }) : (0, n.jsx)(y.A, {
        confettiTarget: N.current,
        confettiCanvas: P,
        sprites: (0, _.rA)(g.categorySkuId)
      })]
    })
  })
}