/** Chunk was on web.js **/
/** chunk id: 608579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk238651 = require("./238651.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk197831 = require("./197831.jsx"),
  Chunk317951 = require("./317951.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk107998 = require("./107998.jsx"),
  Chunk791785 = require("./791785.jsx"),
  Chunk961830 = require("./961830.jsx"),
  Chunk742956 = require("./742956.jsx"),
  Chunk346790 = require("./346790.jsx"),
  Chunk49308 = require("./49308.jsx"),
  Chunk117652 = require("./117652.jsx"),
  Chunk126982 = require("./126982.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk302800 = require("./302800.js"),
  Chunk215023 = require("./215023.js"),
  Chunk231338 = require("./231338.js"),
  Chunk206051 = require("./206051.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e) {
  var t;
  let {
    onClose: n,
    onComplete: a,
    onStepChange: D,
    transitionState: x,
    loadId: M,
    skuId: j,
    isGift: k = false,
    giftRecipient: U,
    giftMessage: G,
    giftingOrigin: B,
    analyticsLocations: Z,
    returnRef: F
  } = e, {
    analyticsLocations: V
  } = (0, d.ZP)([...Z, u.Z.COLLECTIBLES_PAYMENT_MODAL]), H = i.useRef(new s.qA), [Y, W] = i.useState(null), [K, z] = i.useState(false), q = i.useMemo(() => (0, C.UY)({
    purchaseType: N.o8.FIAT,
    skuId: j
  }), [j]), X = (0, l.Wu)([f.Z], () => f.Z.recommendedGiftSkuIds, []), Q = null != j ? [j] : X, J = null != (t = Q[0]) ? t : null, $ = null != j && p.Rm.has(j), ee = i.useCallback(() => {
    z(true), null == a || a()
  }, [a]), et = i.useCallback(e => {
    z(false), n(e), c.Z.dispatch({
      type: "SKU_PURCHASE_MODAL_CLOSE",
      error: null
    })
  }, [n]), en = (e, t, n) => k ? (0, r.jsx)(O.Z, {
    step: n,
    onClose: () => t(false),
    giftingOrigin: B
  }) : (0, r.jsx)(S.Z, {
    step: n,
    onClose: () => t(false)
  }), er = i.useMemo(() => [y.WA, ...k ? [T.Dd] : [], v.n, ...y.yp, y.wo, {
    key: g.h8.CONFIRM,
    renderStep: e => (0, r.jsx)(I.x, L(w({}, e), {
      confettiCanvas: Y,
      analyticsLocations: V,
      hideConfetti: null != q
    })),
    options: {
      bodyClassName: P.modalOverrideBody,
      sliderBodyClassName: P.modalOverrideSliderBody
    }
  }], [V, Y, q, k]);
  return (0, r.jsxs)(d.Gt, {
    value: V,
    children: [(0, r.jsx)(s.O_, {
      ref: W,
      className: P.confettiCanvas,
      environment: H.current
    }), (0, r.jsx)(_.i, {
      options: q,
      className: o()(P.customConfetti, {
        [P.hidden]: !K
      })
    }), (0, r.jsx)(m.PaymentContextProvider, {
      loadId: M,
      stepConfigs: er,
      applicationId: A.XAJ,
      skuIDs: Q,
      isGift: k,
      activeSubscription: null,
      purchaseType: R.GZ.ONE_TIME,
      excludeSubscriptionPlansBySKU: true,
      children: (0, r.jsx)(E.c1, {
        children: (0, r.jsx)(h.KB, {
          isGift: k,
          giftRecipient: U,
          giftMessage: G,
          giftingOrigin: B,
          children: (0, r.jsx)(b.PaymentModal, {
            onClose: et,
            onComplete: ee,
            applicationId: A.XAJ,
            skuId: J,
            initialPlanId: null,
            analyticsLocations: V,
            transitionState: x,
            renderHeader: en,
            returnRef: F,
            onStepChange: D,
            skipConfirm: $,
            hideShadow: true
          })
        })
      })
    })]
  })
}