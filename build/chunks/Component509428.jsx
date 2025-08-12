/** Chunk was on 77198 **/
/** chunk id: 509428, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => y
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
  Chunk905357 = require("./905357.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk372654 = require("./372654.js"),
  Chunk197831 = require("./197831.jsx"),
  Chunk755419 = require("./755419.jsx"),
  Chunk58201 = require("./58201.js"),
  Chunk391594 = require("./391594.js"),
  Chunk215023 = require("./215023.js"),
  Chunk629755 = require("./629755.js");
let O = () => {
    let t = (0, Chunk975298.Z)({
        forceFetch: true
      }),
      e = (0, Chunk55935.vc)(module.endsAt, "L");
    return {
      isLoading: !module.fetched,
      isFractionalPremiumActive: module.isFractionalPremiumActive,
      expiresAt: exports
    }
  },
  y = t => {
    let {
      transitionState: e,
      product: i,
      onClose: l,
      analyticsLocations: f,
      overrideTitle: y,
      overrideDescription: N,
      itemConsumed: S = true,
      purchaseType: A = P.o8.ORB
    } = t, Z = (0, r.e7)([C.Z], () => C.Z.purchases), g = (0, L.o)(i, Z), B = (0, j.W)(i, g), {
      analyticsLocations: R
    } = (0, d.ZP)([...f, u.Z.COLLECTIBLES_COLLECTED_MODAL]);
    n.useEffect(() => {
      P.Vt.ORB_PROFILE_BADGE === B.skuId && (0, p.Ls)([(0, _.X)()], 600)
    }, [B.skuId]);
    let {
      isLoading: T,
      isFractionalPremiumActive: b,
      expiresAt: w
    } = O(), {
      environment: F,
      modalRef: G,
      confettiCanvas: $,
      setConfettiCanvas: D,
      customConfettiDisplayOptions: V
    } = (0, x.$0)(B, A);
    (0, x.f1)(B, R);
    let W = (0, E.k)(B),
      {
        handleUseNow: X,
        isApplying: K
      } = (0, v.W)({
        product: B,
        onSuccess: l,
        onError: l
      });
    if (T) return (0, s.jsx)(c.$jN, {
      type: c.$jN.Type.SPINNING_CIRCLE
    });
    let M = (0, x.Xw)({
        product: B,
        pairedProduct: true,
        overrideTitle: y,
        isVariantsGroupEnabled: false,
        shouldShowPromotionalExperience: false,
        productName: W,
        pairedProductName: true,
        itemConsumed: S
      }),
      q = (0, x.ys)({
        product: B,
        overrideDescription: N,
        productName: W,
        itemConsumed: S,
        isFractionalPremiumActive: b,
        expiresAt: w
      }),
      z = (0, x.cf)({
        product: B,
        onClose: l,
        analyticsLocations: R,
        handleUseNow: X,
        isApplying: K,
        itemConsumed: S
      });
    return (0, s.jsx)(d.Gt, {
      value: R,
      children: (0, s.jsxs)("div", {
        ref: G,
        children: [(0, s.jsx)(o.O_, {
          ref: D,
          className: k.confettiCanvas,
          environment: F
        }), (0, s.jsx)(a.I, {
          graphic: {
            type: "dynamic",
            component: c.AX$.COLLECTIBLES_PREVIEW,
            props: {
              product: B,
              itemConsumed: S
            }
          },
          title: M,
          subtitle: null != q ? q : true,
          onClose: l,
          transitionState: e,
          actions: z
        }), null != V ? (0, s.jsx)(I.i, {
          options: V
        }) : (0, s.jsx)(h.Z, {
          confettiTarget: G.current,
          confettiCanvas: $,
          sprites: (0, m.vK)(B.categorySkuId)
        })]
      })
    })
  }