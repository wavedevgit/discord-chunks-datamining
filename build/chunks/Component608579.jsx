/** Chunk was on web.js **/
/** chunk id: 608579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $g: () => M,
  Af: () => j,
  Jb: () => D,
  Kf: () => x,
  ZP: () => G,
  dc: () => L,
  sy: () => k,
  tw: () => U
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
  Chunk867219 = require("./867219.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
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
let D = e => {
    let {
      analyticsLocations: t
    } = e, {
      analyticsLocations: n
    } = (0, d.ZP)([...t, u.Z.COLLECTIBLES_PAYMENT_MODAL]);
    return {
      analyticsLocations: n
    }
  },
  x = {
    bodyClassName: Chunk867219.modalOverrideBody,
    sliderBodyClassName: Chunk867219.modalOverrideSliderBody
  },
  L = e => {
    let {
      skuId: t
    } = e, n = i.useRef(new s.qA), [r, a] = i.useState(null), [o, l] = i.useState(false), c = i.useMemo(() => (0, C.UY)({
      purchaseType: A.o8.FIAT,
      skuId: t
    }), [t]);
    return {
      environment: n,
      confettiCanvas: r,
      setConfettiCanvas: a,
      customConfettiVisible: o,
      setCustomConfettiVisible: l,
      customConfettiDisplayOptions: c,
      hideConfirmStepConfetti: null != c
    }
  },
  j = e => {
    let {
      skuId: t
    } = e, n = (0, l.Wu)([f.Z], () => f.Z.recommendedGiftSkuIds, []);
    return null != t ? [t] : n
  },
  M = e => {
    var t;
    let {
      skuIDs: n,
      onClose: r,
      onComplete: a,
      setCustomConfettiVisible: o
    } = e, s = null != (t = n[0]) ? t : null, l = i.useCallback(() => {
      o(true), null == a || a()
    }, [a, o]);
    return {
      paymentModalSkuId: s,
      paymentModalOnClose: i.useCallback(e => {
        o(false), r(e), c.Z.dispatch({
          type: "SKU_PURCHASE_MODAL_CLOSE",
          error: null
        })
      }, [r, o]),
      paymentModalOnComplete: l
    }
  },
  k = e => {
    let {
      environment: t,
      setConfettiCanvas: n,
      customConfettiDisplayOptions: i,
      customConfettiVisible: a
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.O_, {
        ref: n,
        className: P.confettiCanvas,
        environment: t.current
      }), (0, r.jsx)(p.i, {
        options: i,
        className: o()(P.customConfetti, {
          [P.hidden]: !a
        })
      })]
    })
  },
  U = e => {
    let {
      step: t,
      onClose: n,
      isGift: i,
      giftingOrigin: a
    } = e;
    return i ? (0, r.jsx)(y.Z, {
      step: t,
      onClose: () => n(false),
      giftingOrigin: a
    }) : (0, r.jsx)(I.Z, {
      step: t,
      onClose: () => n(false)
    })
  };

function G(e) {
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
    analyticsLocations: y,
    returnRef: I
  } = e, {
    analyticsLocations: C
  } = D({
    analyticsLocations: y
  }), {
    confettiCanvas: A,
    environment: P,
    setConfettiCanvas: w,
    customConfettiVisible: G,
    setCustomConfettiVisible: Z,
    customConfettiDisplayOptions: F,
    hideConfirmStepConfetti: B
  } = L({
    skuId: l
  }), V = j({
    skuId: l
  }), {
    paymentModalSkuId: H,
    paymentModalOnClose: Y,
    paymentModalOnComplete: W
  } = M({
    onClose: t,
    onComplete: n,
    skuIDs: V,
    setCustomConfettiVisible: Z
  }), K = (e, t, n) => (0, r.jsx)(U, {
    isGift: c,
    step: n,
    onClose: t,
    giftingOrigin: p
  }), z = i.useMemo(() => [b.WA, ...c ? [S.Dd] : [], O.n, ...b.yp, b.wo, {
    key: m.h8.CONFIRM,
    renderStep: e => (0, r.jsx)(v.x, R({
      confettiCanvas: A,
      analyticsLocations: C,
      hideConfetti: B
    }, e)),
    options: x
  }], [C, A, B, c]);
  return (0, r.jsxs)(d.Gt, {
    value: C,
    children: [(0, r.jsx)(k, {
      environment: P,
      setConfettiCanvas: w,
      customConfettiDisplayOptions: F,
      customConfettiVisible: G
    }), (0, r.jsx)(h.PaymentContextProvider, {
      loadId: s,
      stepConfigs: z,
      applicationId: T.XAJ,
      skuIDs: V,
      isGift: c,
      activeSubscription: null,
      purchaseType: N.GZ.ONE_TIME,
      excludeSubscriptionPlansBySKU: true,
      children: (0, r.jsx)(g.c1, {
        children: (0, r.jsx)(_.KB, {
          isGift: c,
          giftRecipient: u,
          giftMessage: f,
          giftingOrigin: p,
          children: (0, r.jsx)(E.PaymentModal, {
            skuId: H,
            onClose: Y,
            onComplete: W,
            applicationId: T.XAJ,
            initialPlanId: null,
            analyticsLocations: C,
            renderHeader: K,
            onStepChange: a,
            hideShadow: true,
            transitionState: o,
            returnRef: I
          })
        })
      })
    })]
  })
}