/** Chunk was on web.js **/
/** chunk id: 735305, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => y
});
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk330140 = require("./330140.js"),
  Chunk998678 = require("./998678.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk566980 = require("./566980.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t, n) {
  return (0, l.isDesktop)() && null != e && [_.pe.TIER_0, _.pe.TIER_2].includes(e) && !t && null == n
}

function y(e) {
  let {
    analyticsData: t,
    initialPlanId: n,
    breadcrumbSteps: r,
    handleStepChange: l,
    onReturn: _,
    continueSessionToInitialStep: h
  } = e, {
    contextMetadata: g,
    step: y,
    paymentSources: O,
    paymentSourceId: A,
    setPaymentSourceId: v,
    purchaseError: S,
    setPurchaseError: I,
    purchaseErrorBlockRef: T,
    paymentAuthenticationState: C,
    selectedSkuId: N,
    activeSubscription: R,
    previousStepRef: w,
    setPurchaseState: P,
    paymentElementsEnabled: D,
    isPremiumGroupPurchase: x,
    isEligibleForTrial: L
  } = (0, u.P5)(), {
    isGift: j
  } = (0, c.Pv)(), M = E(m({}, (0, s.KP)()), {
    paymentSources: O,
    paymentSourceId: A,
    setPaymentSourceId: v,
    purchaseError: S,
    setPurchaseError: I,
    purchaseErrorBlockRef: T,
    paymentAuthenticationState: C,
    selectedSkuId: N,
    isGift: j
  }), k = () => {
    l(Object.values(O).length < 1 && null == n ? d.pn.PLAN_SELECT : d.pn.REVIEW, {
      trackedFromStep: D ? d.pn.PAYMENT_ELEMENT : d.pn.PAYMENT_TYPE
    })
  }, U = null != _ ? _ : k;
  i()(y, "Step should be set here");
  let G = (0, a.A)(() => Date.now(), [y]),
    V = (0, a.A)(() => null != h && null == w.current ? D ? d.pn.PAYMENT_ELEMENT : h : D ? d.pn.PAYMENT_ELEMENT : d.pn.PAYMENT_TYPE, [h, w.current, D]);
  return (0, s.Y)({
    paymentModalArgs: M,
    initialStep: V,
    prependSteps: [d.pn.PROMOTION_INFO],
    appendSteps: [d.pn.REVIEW, d.pn.CONFIRM],
    breadcrumpSteps: r,
    currentBreadcrumpStep: y,
    usePaymentModalStep: true,
    analyticsData: t,
    onReturn: x ? true : U,
    onComplete: e => {
      d.l_.has(e) ? (P(f.h.COMPLETED), l(d.pn.CONFIRM, {
        trackedFromStep: e
      })) : l(d.pn.REVIEW, {
        trackedFromStep: e
      })
    },
    onStepChange: e => {
      let {
        currentStep: n,
        toStep: r
      } = e, i = Date.now();
      o.default.track(p.HAw.PAYMENT_FLOW_STEP, E(m({}, t), {
        from_step: n,
        to_step: r,
        step_duration_ms: i - G,
        flow_duration_ms: i - g.startTime
      }))
    },
    isEligibleForTrial: L,
    allowDesktopRedirectPurchase: b(N, j, R),
    continueSessionToInitialStep: h
  })
}