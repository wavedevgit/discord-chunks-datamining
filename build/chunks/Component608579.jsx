/** Chunk was on web.js **/
/** chunk id: 608579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $g: () => k,
  Af: () => M,
  Jb: () => x,
  Kf: () => L,
  ZP: () => Z,
  dc: () => j,
  sy: () => U,
  tw: () => G
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
let x = e => {
    let {
      analyticsLocations: t
    } = e, {
      analyticsLocations: n
    } = (0, d.ZP)([...t, u.Z.COLLECTIBLES_PAYMENT_MODAL]);
    return {
      analyticsLocations: n
    }
  },
  L = {
    bodyClassName: Chunk206051.modalOverrideBody,
    sliderBodyClassName: Chunk206051.modalOverrideSliderBody
  },
  j = e => {
    let {
      skuId: t
    } = e, n = i.useRef(new s.qA), [r, o] = i.useState(null), [a, l] = i.useState(false), c = i.useMemo(() => (0, A.UY)({
      purchaseType: N.o8.FIAT,
      skuId: t
    }), [t]);
    return {
      environment: n,
      confettiCanvas: r,
      setConfettiCanvas: o,
      customConfettiVisible: a,
      setCustomConfettiVisible: l,
      customConfettiDisplayOptions: c,
      hideConfirmStepConfetti: null != c
    }
  },
  M = e => {
    let {
      skuId: t
    } = e, n = (0, l.Wu)([f.Z], () => f.Z.recommendedGiftSkuIds, []);
    return {
      skuIDs: null != t ? [t] : n,
      skipConfirm: null != t && _.Rm.has(t)
    }
  },
  k = e => {
    var t;
    let {
      skuIDs: n,
      onClose: r,
      onComplete: o,
      setCustomConfettiVisible: a
    } = e, s = null != (t = n[0]) ? t : null, l = i.useCallback(() => {
      a(true), null == o || o()
    }, [o, a]);
    return {
      paymentModalSkuId: s,
      paymentModalOnClose: i.useCallback(e => {
        a(false), r(e), c.Z.dispatch({
          type: "SKU_PURCHASE_MODAL_CLOSE",
          error: null
        })
      }, [r, a]),
      paymentModalOnComplete: l
    }
  },
  U = e => {
    let {
      environment: t,
      setConfettiCanvas: n,
      customConfettiDisplayOptions: i,
      customConfettiVisible: o
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.O_, {
        ref: n,
        className: R.confettiCanvas,
        environment: t.current
      }), (0, r.jsx)(p.i, {
        options: i,
        className: a()(R.customConfetti, {
          [R.hidden]: !o
        })
      })]
    })
  },
  G = e => {
    let {
      step: t,
      onClose: n,
      isGift: i,
      giftingOrigin: o
    } = e;
    return i ? (0, r.jsx)(O.Z, {
      step: t,
      onClose: () => n(false),
      giftingOrigin: o
    }) : (0, r.jsx)(T.Z, {
      step: t,
      onClose: () => n(false)
    })
  };

function Z(e) {
  let {
    onClose: t,
    onComplete: n,
    onStepChange: o,
    transitionState: a,
    loadId: s,
    skuId: l,
    isGift: c = false,
    giftRecipient: u,
    giftMessage: f,
    giftingOrigin: p,
    analyticsLocations: _,
    returnRef: O
  } = e, {
    analyticsLocations: T
  } = x({
    analyticsLocations: _
  }), {
    confettiCanvas: A,
    environment: N,
    setConfettiCanvas: R,
    customConfettiVisible: w,
    setCustomConfettiVisible: Z,
    customConfettiDisplayOptions: F,
    hideConfirmStepConfetti: B
  } = j({
    skuId: l
  }), {
    skuIDs: V,
    skipConfirm: H
  } = M({
    skuId: l
  }), {
    paymentModalSkuId: Y,
    paymentModalOnClose: W,
    paymentModalOnComplete: K
  } = k({
    onClose: t,
    onComplete: n,
    skuIDs: V,
    setCustomConfettiVisible: Z
  }), z = (e, t, n) => (0, r.jsx)(G, {
    isGift: c,
    step: n,
    onClose: t,
    giftingOrigin: p
  }), q = i.useMemo(() => [y.WA, ...c ? [I.Dd] : [], v.n, ...y.yp, y.wo, {
    key: g.h8.CONFIRM,
    renderStep: e => (0, r.jsx)(S.x, D({
      confettiCanvas: A,
      analyticsLocations: T,
      hideConfetti: B
    }, e)),
    options: L
  }], [T, A, B, c]);
  return (0, r.jsxs)(d.Gt, {
    value: T,
    children: [(0, r.jsx)(U, {
      environment: N,
      setConfettiCanvas: R,
      customConfettiDisplayOptions: F,
      customConfettiVisible: w
    }), (0, r.jsx)(h.PaymentContextProvider, {
      loadId: s,
      stepConfigs: q,
      applicationId: C.XAJ,
      skuIDs: V,
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
            skuId: Y,
            onClose: W,
            onComplete: K,
            applicationId: C.XAJ,
            initialPlanId: null,
            analyticsLocations: T,
            renderHeader: z,
            onStepChange: o,
            skipConfirm: H,
            hideShadow: true,
            transitionState: a,
            returnRef: O
          })
        })
      })
    })]
  })
}