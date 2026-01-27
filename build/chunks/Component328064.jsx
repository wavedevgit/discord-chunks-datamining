/** Chunk was on 95481 **/
/** chunk id: 328064, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => I
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
let I = t => {
  let {
    transitionState: e,
    product: n,
    onClose: I,
    analyticsLocations: _,
    overrideTitle: R,
    overrideDescription: C,
    itemConsumed: L = true,
    purchaseType: j = A.gs.ORB
  } = t, S = (0, p.Q)(n), k = (0, f.rb)(n, S), {
    analyticsLocations: v
  } = (0, c.Ay)([..._, o.A.COLLECTIBLES_COLLECTED_MODAL]);
  i.useEffect(() => {
    A.Dp.ORB_PROFILE_BADGE === k.skuId && (0, u.Gr)([(0, m._)()], 600)
  }, [k.skuId]);
  let {
    isLoading: T,
    isFractionalPremiumActive: D,
    expiresAt: N
  } = (0, y.EZ)(), {
    environment: w,
    modalRef: B,
    confettiCanvas: M,
    setConfettiCanvas: x,
    customConfettiDisplayOptions: U
  } = (0, g.mO)(k, j);
  (0, g.$V)(k, v);
  let F = (0, O.o7)(k),
    {
      handleUseNow: G,
      isApplying: H
    } = (0, d.p)({
      product: k,
      onSuccess: I,
      onError: I
    });
  if (T) return (0, r.jsx)(s.y$y, {
    type: s.y$y.Type.SPINNING_CIRCLE
  });
  let V = (0, g.$k)({
      product: k,
      overrideTitle: R,
      isVariantsGroupEnabled: false,
      shouldShowPromotionalExperience: false,
      productName: F,
      itemConsumed: L
    }),
    W = (0, g.v8)({
      product: k,
      overrideDescription: C,
      productName: F,
      itemConsumed: L,
      isFractionalPremiumActive: D,
      expiresAt: N
    }),
    z = (0, g.aG)({
      product: k,
      onClose: I,
      analyticsLocations: v,
      handleUseNow: G,
      isApplying: H,
      itemConsumed: L
    });
  return (0, r.jsx)(c.f5, {
    value: v,
    children: (0, r.jsxs)("div", {
      ref: B,
      children: [(0, r.jsx)(a.Fk, {
        ref: x,
        className: P.L,
        environment: w
      }), (0, r.jsx)(l.ExpressiveModal, {
        graphic: {
          type: "dynamic",
          component: s.Oz7.COLLECTIBLES_PREVIEW,
          props: {
            product: k,
            itemConsumed: L
          }
        },
        title: V,
        subtitle: null != W ? W : true,
        onClose: I,
        transitionState: e,
        actions: z
      }), null != U ? (0, r.jsx)(E.K, {
        options: U
      }) : (0, r.jsx)(b.A, {
        confettiTarget: B.current,
        confettiCanvas: M,
        sprites: (0, h.rA)(k.categorySkuId)
      })]
    })
  })
}