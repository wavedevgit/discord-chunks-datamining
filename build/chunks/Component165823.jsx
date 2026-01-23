/** Chunk was on web.js **/
/** chunk id: 165823, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => G,
  Kg: () => k,
  NW: () => D,
  Ub: () => L,
  kj: () => U,
  ot: () => M,
  v1: () => j,
  yC: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk106778 = require("./106778.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk590180 = require("./590180.js"),
  Chunk213530 = require("./213530.jsx"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk491057 = require("./491057.jsx"),
  Chunk546042 = require("./546042.jsx"),
  Chunk721252 = require("./721252.jsx"),
  Chunk231018 = require("./231018.jsx"),
  Chunk971456 = require("./971456.jsx"),
  Chunk975189 = require("./975189.jsx"),
  Chunk503516 = require("./503516.jsx"),
  Chunk685944 = require("./685944.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk158216 = require("./158216.js"),
  Chunk758836 = require("./758836.js"),
  Chunk818348 = require("./818348.js"),
  Chunk186319 = require("./186319.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
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
    } = (0, d.Ay)([...t, u.A.COLLECTIBLES_PAYMENT_MODAL]);
    return {
      analyticsLocations: n
    }
  },
  x = {
    bodyClassName: Chunk186319.As,
    sliderBodyClassName: Chunk186319.Bz
  },
  L = e => {
    let {
      skuId: t
    } = e, n = i.useRef(new o.OH), [r, a] = i.useState(null), [s, l] = i.useState(false), c = i.useMemo(() => (0, T.AB)({
      purchaseType: C.gs.FIAT,
      skuId: t
    }), [t]);
    return {
      environment: n,
      confettiCanvas: r,
      setConfettiCanvas: a,
      customConfettiVisible: s,
      setCustomConfettiVisible: l,
      customConfettiDisplayOptions: c,
      hideConfirmStepConfetti: null != c
    }
  },
  j = e => {
    let {
      skuId: t
    } = e, n = (0, l.yK)([f.A], () => f.A.recommendedGiftSkuIds, []);
    return null != t ? [t] : n
  },
  M = e => {
    var t;
    let {
      skuIDs: n,
      onClose: r,
      onComplete: a,
      setCustomConfettiVisible: s
    } = e, o = null != (t = n[0]) ? t : null, l = i.useCallback(() => {
      s(true), null == a || a()
    }, [a, s]);
    return {
      paymentModalSkuId: o,
      paymentModalOnClose: i.useCallback(e => {
        s(false), r(e), c.h.dispatch({
          type: "SKU_PURCHASE_MODAL_CLOSE",
          error: null
        })
      }, [r, s]),
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
      children: [(0, r.jsx)(o.Fk, {
        ref: n,
        className: R.Lb,
        environment: t.current
      }), (0, r.jsx)(p.K, {
        options: i,
        className: s()(R.Oh, {
          [R.R]: !a
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
    return i ? (0, r.jsx)(b.A, {
      step: t,
      onClose: () => n(false),
      giftingOrigin: a
    }) : (0, r.jsx)(I.A, {
      step: t,
      onClose: () => n(false)
    })
  };

function G(e) {
  let {
    onClose: t,
    onComplete: n,
    onStepChange: a,
    transitionState: s,
    loadId: o,
    skuId: l,
    isGift: c = false,
    giftRecipient: u,
    giftMessage: f,
    giftingOrigin: p,
    analyticsLocations: b,
    returnRef: I
  } = e, {
    analyticsLocations: T
  } = D({
    analyticsLocations: b
  }), {
    confettiCanvas: C,
    environment: R,
    setConfettiCanvas: w,
    customConfettiVisible: G,
    setCustomConfettiVisible: V,
    customConfettiDisplayOptions: F,
    hideConfirmStepConfetti: B
  } = L({
    skuId: l
  }), H = j({
    skuId: l
  }), {
    paymentModalSkuId: Y,
    paymentModalOnClose: W,
    paymentModalOnComplete: K
  } = M({
    onClose: t,
    onComplete: n,
    skuIDs: H,
    setCustomConfettiVisible: V
  }), z = (e, t, n) => (0, r.jsx)(U, {
    isGift: c,
    step: n,
    onClose: t,
    giftingOrigin: p
  }), q = i.useMemo(() => [y.kJ, ...c ? [A.gA] : [], O.p, ...y.hh, y.r2, {
    key: m.pn.CONFIRM,
    renderStep: e => (0, r.jsx)(v.v, P({
      confettiCanvas: C,
      analyticsLocations: T,
      hideConfetti: B
    }, e)),
    options: x
  }], [T, C, B, c]);
  return (0, r.jsxs)(d.f5, {
    value: T,
    children: [(0, r.jsx)(k, {
      environment: R,
      setConfettiCanvas: w,
      customConfettiDisplayOptions: F,
      customConfettiVisible: G
    }), (0, r.jsx)(h.PaymentContextProvider, {
      loadId: o,
      stepConfigs: q,
      applicationId: S.FYj,
      skuIDs: H,
      isGift: c,
      activeSubscription: null,
      purchaseType: N.VV.ONE_TIME,
      excludeSubscriptionPlansBySKU: true,
      children: (0, r.jsx)(g.Qt, {
        children: (0, r.jsx)(_.dX, {
          isGift: c,
          giftRecipient: u,
          giftMessage: f,
          giftingOrigin: p,
          children: (0, r.jsx)(E.PaymentModal, {
            skuId: Y,
            onClose: W,
            onComplete: K,
            applicationId: S.FYj,
            initialPlanId: null,
            analyticsLocations: T,
            renderHeader: z,
            onStepChange: a,
            hideShadow: true,
            transitionState: s,
            returnRef: I
          })
        })
      })
    })]
  })
}