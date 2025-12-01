/** Chunk was on web.js **/
/** chunk id: 276442, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => O
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk35387 = require("./35387.js"),
  Chunk639119 = require("./639119.js"),
  Chunk3409 = require("./3409.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk45572 = require("./45572.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
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

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t, n) {
  return (0, c.isDesktop)() && null != e && [m.Si.TIER_0, m.Si.TIER_2].includes(e) && !t && null == n
}

function O(e) {
  let {
    analyticsData: t,
    initialPlanId: n,
    breadcrumbSteps: r,
    handleStepChange: c,
    referralTrialOfferId: h,
    onReturn: E,
    continueSessionToInitialStep: O
  } = e, {
    contextMetadata: v,
    step: S,
    paymentSources: I,
    paymentSourceId: T,
    setPaymentSourceId: A,
    purchaseError: C,
    setPurchaseError: N,
    purchaseErrorBlockRef: P,
    paymentAuthenticationState: R,
    selectedSkuId: w,
    activeSubscription: D,
    previousStepRef: x,
    setPurchaseState: L,
    paymentElementsEnabled: j
  } = (0, d.JL)(), {
    isGift: M
  } = (0, u.wD)(), k = b(g({}, (0, s.fL)()), {
    paymentSources: I,
    paymentSourceId: T,
    setPaymentSourceId: A,
    purchaseError: C,
    setPurchaseError: N,
    purchaseErrorBlockRef: P,
    paymentAuthenticationState: R,
    selectedSkuId: w,
    isGift: M
  }), U = (0, o.N)(h), G = !M && null != U && null != w && m.nG[U.trial_id].skus.includes(w), Z = () => {
    c(Object.values(I).length < 1 && null == n ? f.h8.PLAN_SELECT : f.h8.REVIEW, {
      trackedFromStep: j ? f.h8.PAYMENT_ELEMENT : f.h8.PAYMENT_TYPE
    })
  }, B = null != E ? E : Z;
  i()(S, "Step should be set here");
  let F = (0, a.Z)(() => Date.now(), [S]),
    V = (0, a.Z)(() => null != O && null == x.current ? j && O === f.h8.CREDIT_CARD_INFORMATION ? f.h8.PAYMENT_ELEMENT : O : j ? f.h8.PAYMENT_ELEMENT : f.h8.PAYMENT_TYPE, [O, x.current, j]);
  return (0, s.vP)({
    paymentModalArgs: k,
    initialStep: V,
    prependSteps: [f.h8.PROMOTION_INFO],
    appendSteps: [f.h8.REVIEW, f.h8.CONFIRM],
    breadcrumpSteps: r,
    currentBreadcrumpStep: S,
    usePaymentModalStep: true,
    analyticsData: t,
    onReturn: B,
    onComplete: e => {
      f.Nj.has(e) ? (L(p.A.COMPLETED), c(f.h8.CONFIRM, {
        trackedFromStep: e
      })) : c(f.h8.REVIEW, {
        trackedFromStep: e
      })
    },
    onStepChange: e => {
      let {
        currentStep: n,
        toStep: r
      } = e, i = Date.now();
      l.default.track(_.rMx.PAYMENT_FLOW_STEP, b(g({}, t), {
        from_step: n,
        to_step: r,
        step_duration_ms: i - F,
        flow_duration_ms: i - v.startTime
      }))
    },
    isEligibleForTrial: G,
    allowDesktopRedirectPurchase: y(w, M, D),
    continueSessionToInitialStep: O
  })
}