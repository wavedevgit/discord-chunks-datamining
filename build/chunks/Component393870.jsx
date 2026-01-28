/** Chunk was on 92643 **/
/** chunk id: 393870, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk106778 = require("./106778.js"),
  Chunk575593 = require("./575593.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk206835 = require("./206835.js"),
  Chunk298072 = require("./298072.js"),
  Chunk993408 = require("./993408.js"),
  Chunk450481 = require("./450481.js"),
  Chunk645178 = require("./645178.js"),
  Chunk442759 = require("./442759.js"),
  Chunk306710 = require("./306710.js"),
  Chunk623373 = require("./623373.js"),
  Chunk660653 = require("./660653.js"),
  Chunk524246 = require("./524246.jsx"),
  Chunk14368 = require("./14368.js"),
  Chunk213530 = require("./213530.jsx"),
  Chunk961883 = require("./961883.js"),
  Chunk758836 = require("./758836.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk290964 = require("./290964.js");
let I = t => {
  let {
    transitionState: e,
    product: n,
    onClose: I,
    analyticsLocations: L,
    overrideTitle: _,
    overrideDescription: T,
    shouldShowPromotionalExperience: j,
    purchaseType: S = P.gs.FIAT,
    overrideGraphic: k,
    rentalDuration: D,
    rentalExpiresAt: N
  } = t, w = (0, p.Q)(n), M = (0, h.rb)(n, w), {
    analyticsLocations: x
  } = (0, u.Ay)([...L, o.A.COLLECTIBLES_COLLECTED_MODAL]), {
    hasRequiredProductItems: B
  } = (t => {
    let {
      firstProfileEffect: e,
      firstAvatarDecoration: n,
      firstNameplate: r
    } = (0, b.f5)(t), i = (0, d.aw)(t);
    return {
      firstAvatarDecoration: n,
      firstProfileEffect: e,
      firstNameplate: r,
      isBundle: i,
      hasRequiredProductItems: i ? (0, E.u)(t) : null != n || null != e || null != r
    }
  })(M), U = (0, c.A)({
    analyticsLocations: x
  }), F = v.intl.string(v.t.eZrmtq), {
    environment: G,
    modalRef: H,
    confettiCanvas: V,
    setConfettiCanvas: W,
    customConfettiDisplayOptions: z
  } = (0, R.mO)(M, S), Q = (0, O.o7)(M);
  (0, R.$V)(M, x);
  let {
    handleUseNow: q,
    isApplying: J
  } = (0, f.p)({
    product: M,
    onSuccess: I,
    onError: I
  }), Y = (0, R.$k)({
    product: M,
    overrideTitle: _,
    isVariantsGroupEnabled: true,
    shouldShowPromotionalExperience: j,
    productName: Q,
    rentalDuration: D
  }), K = (0, R.v8)({
    product: M,
    overrideDescription: T,
    productName: Q,
    shouldShowPromotionalExperience: j,
    promotionalRewardCollectedText: F,
    isRental: null != D,
    expiresAt: N
  }), Z = (0, R.aG)({
    product: M,
    onClose: I,
    analyticsLocations: x,
    hasRequiredProductItems: B,
    handleUseNow: q,
    isApplying: J,
    openProfileSettings: U
  }), $ = "6/4";
  switch (M.type) {
    case l.R.NAMEPLATE:
    case l.R.AVATAR_DECORATION:
      $ = "16/9";
      break;
    case l.R.BUNDLE:
    case l.R.PROFILE_EFFECT:
    default:
      $ = "6/4"
  }
  let {
    confettiColors: X
  } = (0, y.A)(M.styles), tt = null != k ? k : {
    type: "dynamic",
    component: s.Oz7.COLLECTIBLES_PREVIEW,
    aspectRatio: $,
    props: {
      product: M,
      forCollectedModal: true
    }
  };
  return (0, r.jsx)(u.f5, {
    value: x,
    children: (0, r.jsxs)("div", {
      ref: H,
      children: [(0, r.jsx)(i.Fk, {
        ref: W,
        className: C.L,
        environment: G
      }), (0, r.jsx)(a.ExpressiveModal, {
        graphic: tt,
        title: Y,
        subtitle: null != K ? K : true,
        onClose: I,
        transitionState: e,
        actions: Z
      }), null != z ? (0, r.jsx)(g.K, {
        options: z
      }) : (0, r.jsx)(A.A, {
        confettiTarget: H.current,
        confettiCanvas: V,
        sprites: (0, m.rA)(M.categorySkuId),
        colors: null == X ? true : X.map(t => t.toHexString())
      })]
    })
  })
}