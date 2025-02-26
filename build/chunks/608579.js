/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => w
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(119617),
  l = n(442837),
  c = n(570140),
  u = n(100527),
  d = n(906732),
  f = n(597688),
  _ = n(317951),
  p = n(987209),
  h = n(563132),
  g = n(409813),
  m = n(791785),
  E = n(961830),
  v = n(742956),
  b = n(346790),
  y = n(49308),
  O = n(117652),
  S = n(126982),
  I = n(981631),
  T = n(302800),
  N = n(231338),
  A = n(509827);

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e) {
  var t;
  let {
    onClose: n,
    onComplete: o,
    onStepChange: C,
    transitionState: P,
    loadId: w,
    skuId: L,
    isGift: x = !1,
    giftRecipient: M,
    giftMessage: k,
    giftingOrigin: j,
    analyticsLocations: U,
    returnRef: G
  } = e, {
    analyticsLocations: B
  } = (0, d.ZP)([...U, u.Z.COLLECTIBLES_PAYMENT_MODAL]), V = i.useRef(new s.qA), [F, Z] = i.useState(null), [H, W] = i.useState(!1), Y = i.useMemo(() => (0, T.UY)(L), [L]), K = (0, l.Wu)([f.Z], () => f.Z.recommendedGiftSkuIds, []), z = null != L ? [L] : K, q = null !== (t = z[0]) && void 0 !== t ? t : null, Q = null != L && _.Rm.has(L), X = i.useCallback(() => {
    W(!0), null == o || o()
  }, [o]), J = i.useCallback(e => {
    W(!1), n(e), c.Z.dispatch({
      type: "SKU_PURCHASE_MODAL_CLOSE",
      error: null
    })
  }, [n]), $ = (e, t, n) => x ? (0, r.jsx)(v.Z, {
    step: n,
    onClose: () => t(!1),
    giftingOrigin: j
  }) : (0, r.jsx)(S.Z, {
    step: n,
    onClose: () => t(!1)
  }), ee = i.useMemo(() => [E.WA, ...x ? [O.Dd] : [], b.n, ...E.yp, E.wo, {
    key: g.h8.CONFIRM,
    renderStep: e => (0, r.jsx)(y.x, D(R({}, e), {
      confettiCanvas: F,
      analyticsLocations: B,
      hideConfetti: null != Y
    })),
    options: {
      bodyClassName: A.modalOverrideBody,
      sliderBodyClassName: A.modalOverrideSliderBody
    }
  }], [B, F, Y, x]);
  return (0, r.jsxs)(d.Gt, {
    value: B,
    children: [(0, r.jsx)(s.O_, {
      ref: Z,
      className: A.confettiCanvas,
      environment: V.current
    }), null != Y && (0, r.jsx)("img", {
      src: Y.imageSrc,
      className: a()(A.customConfetti, {
        [A.hidden]: !H
      }),
      style: Y.style,
      alt: "",
      "aria-hidden": !0
    }), (0, r.jsx)(h.PaymentContextProvider, {
      loadId: w,
      stepConfigs: ee,
      applicationId: I.XAJ,
      skuIDs: z,
      isGift: x,
      activeSubscription: null,
      purchaseType: N.GZ.ONE_TIME,
      children: (0, r.jsx)(p.KB, {
        isGift: x,
        giftRecipient: M,
        giftMessage: k,
        giftingOrigin: j,
        children: (0, r.jsx)(m.PaymentModal, {
          onClose: J,
          onComplete: X,
          applicationId: I.XAJ,
          skuId: q,
          initialPlanId: null,
          analyticsLocations: B,
          transitionState: P,
          renderHeader: $,
          returnRef: G,
          onStepChange: C,
          skipConfirm: Q,
          hideShadow: !0
        })
      })
    })]
  })
}