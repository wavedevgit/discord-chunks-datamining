/** Chunk was on web.js **/
/** chunk id: 608579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk921254 = require("./921254.js"),
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

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
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
let j = e => {
    var t;
    let {
      onClose: n,
      onComplete: r,
      skuId: a,
      analyticsLocations: o
    } = e, {
      analyticsLocations: p
    } = (0, d.ZP)([...o, u.Z.COLLECTIBLES_PAYMENT_MODAL]), m = i.useRef(new s.qA), [h, g] = i.useState(null), [E, b] = i.useState(false), y = i.useMemo(() => (0, C.UY)({
      purchaseType: N.o8.FIAT,
      skuId: a
    }), [a]), O = (0, l.Wu)([f.Z], () => f.Z.recommendedGiftSkuIds, []), v = null != a ? [a] : O, S = null != (t = v[0]) ? t : null, I = null != a && _.Rm.has(a), T = i.useCallback(() => {
      b(true), null == r || r()
    }, [r]);
    return {
      analyticsLocations: p,
      environment: m,
      confettiCanvas: h,
      setConfettiCanvas: g,
      customConfettiVisible: E,
      customConfettiDisplayOptions: y,
      skuIDs: v,
      paymentModalSkuId: S,
      paymentModalOnClose: i.useCallback(e => {
        b(false), n(e), c.Z.dispatch({
          type: "SKU_PURCHASE_MODAL_CLOSE",
          error: null
        })
      }, [n]),
      paymentModalOnComplete: T,
      skipConfirm: I
    }
  },
  M = e => {
    let {
      environment: t,
      setConfettiCanvas: n,
      customConfettiDisplayOptions: i,
      customConfettiVisible: a
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.O_, {
        ref: n,
        className: R.confettiCanvas,
        environment: t.current
      }), (0, r.jsx)(p.i, {
        options: i,
        className: o()(R.customConfetti, {
          [R.hidden]: !a
        })
      })]
    })
  };

function k(e) {
  let {
    onClose: t,
    onComplete: n,
    onStepChange: a,
    transitionState: o,
    loadId: s,
    skuId: l,
    isGift: c = false,
    giftRecipient: u,
    giftMessage: f,
    giftingOrigin: p,
    analyticsLocations: _,
    returnRef: C
  } = e, {
    analyticsLocations: N,
    environment: w,
    confettiCanvas: x,
    setConfettiCanvas: k,
    customConfettiVisible: U,
    customConfettiDisplayOptions: G,
    skuIDs: Z,
    paymentModalSkuId: B,
    paymentModalOnClose: F,
    paymentModalOnComplete: V,
    skipConfirm: H
  } = j({
    onClose: t,
    onComplete: n,
    skuId: l,
    analyticsLocations: _
  }), Y = (e, t, n) => c ? (0, r.jsx)(O.Z, {
    step: n,
    onClose: () => t(false),
    giftingOrigin: p
  }) : (0, r.jsx)(T.Z, {
    step: n,
    onClose: () => t(false)
  }), W = i.useMemo(() => [y.WA, ...c ? [I.Dd] : [], v.n, ...y.yp, y.wo, {
    key: g.h8.CONFIRM,
    renderStep: e => (0, r.jsx)(S.x, L(D({}, e), {
      confettiCanvas: x,
      analyticsLocations: N,
      hideConfetti: null != G
    })),
    options: {
      bodyClassName: R.modalOverrideBody,
      sliderBodyClassName: R.modalOverrideSliderBody
    }
  }], [N, x, G, c]);
  return (0, r.jsxs)(d.Gt, {
    value: N,
    children: [(0, r.jsx)(M, {
      environment: w,
      setConfettiCanvas: k,
      customConfettiDisplayOptions: G,
      customConfettiVisible: U
    }), (0, r.jsx)(h.PaymentContextProvider, {
      loadId: s,
      stepConfigs: W,
      applicationId: A.XAJ,
      skuIDs: Z,
      isGift: c,
      activeSubscription: null,
      purchaseType: P.GZ.ONE_TIME,
      excludeSubscriptionPlansBySKU: true,
      children: (0, r.jsx)(E.c1, {
        children: (0, r.jsx)(m.KB, {
          isGift: c,
          giftRecipient: u,
          giftMessage: f,
          giftingOrigin: p,
          children: (0, r.jsx)(b.PaymentModal, {
            skuId: B,
            onClose: F,
            onComplete: V,
            applicationId: A.XAJ,
            initialPlanId: null,
            analyticsLocations: N,
            renderHeader: Y,
            onStepChange: a,
            skipConfirm: H,
            hideShadow: true,
            transitionState: o,
            returnRef: C
          })
        })
      })
    })]
  })
}