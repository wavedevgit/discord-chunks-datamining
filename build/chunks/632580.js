/** Chunk was on web.js **/
"use strict";
n.d(t, {
  H: () => b
}), n(47120);
var r = n(512722),
  i = n.n(r),
  o = n(570140),
  a = n(355467),
  s = n(159351),
  l = n(366939),
  c = n(16084),
  u = n(255078),
  d = n(626135),
  f = n(74538),
  _ = n(45572),
  p = n(981631),
  h = n(474936);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
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

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function b(e) {
  let {
    setPurchaseState: t,
    setHasAcceptedTerms: n,
    setIsSubmitting: r,
    setPurchaseError: g,
    hasRedirectURL: E,
    setHasRedirectURL: b,
    isGift: y,
    baseAnalyticsData: O,
    analyticsLocation: S,
    analyticsLocations: I,
    flowStartTime: T,
    subscriptionPlan: N,
    planGroup: A,
    trialId: C,
    priceOptions: R,
    paymentSource: P,
    isPrepaidPaymentPastDue: D,
    openInvoiceId: w,
    premiumSubscription: L,
    onNext: x,
    metadata: M,
    sku: j,
    skuPricePreview: k,
    purchaseType: U,
    referralCode: G,
    loadId: B,
    giftInfoOptions: F,
    invoicePreview: V
  } = e;
  t(_.A.PURCHASING), n(!0), r(!0), o.Z.wait(s.fw), g(null);
  try {
    let e, n, r;
    if (d.default.track(p.rMx.PAYMENT_FLOW_COMPLETED, v(m({}, O), {
        subtotal: null == V ? void 0 : V.subtotal,
        tax: null == V ? void 0 : V.tax,
        expected_amount: null == V ? void 0 : V.total,
        expected_currency: null == V ? void 0 : V.currency,
        duration_ms: Date.now() - T
      })), E) return;
    if (U === p.GZQ.ONE_TIME) i()(null != j, "SKU must exist and be fetched."), i()(null != k, "SKUPricePreview must exist."), e = await (0, c.ZZ)(j.applicationId, j.id, {
      expectedAmount: k.amount,
      expectedCurrency: k.currency,
      isGift: y,
      paymentSource: P,
      loadId: B,
      giftInfoOptions: F
    });
    else if (i()(null != N, "Missing subscriptionPlan"), y) {
      i()(null != V, "Missing invoicePreview");
      let t = V.total,
        n = V.currency;
      e = await (0, c.ZZ)(h.CL, N.skuId, {
        expectedAmount: t,
        expectedCurrency: n,
        paymentSource: P,
        subscriptionPlanId: N.id,
        isGift: !0,
        loadId: B,
        giftInfoOptions: F
      })
    } else if (D && null != w && null != P && null != L) e = p.Uk1.has(P.type) ? await (0, a.G)(L, w, P, R.currency) : await (0, a.Mg)(L, {
      paymentSource: P,
      currency: R.currency
    }, I, S, B);
    else if (null != L) {
      let t = (0, f.al)(L, N.id, 1, new Set(A)),
        n = {
          paymentSource: P,
          currency: R.currency
        };
      L.status === p.O0b.PAUSED ? n.status = p.O0b.ACTIVE : n.items = t, e = await (0, a.Mg)(L, n, I, S, B)
    } else e = await (0, l.Ld)({
      planId: N.id,
      currency: R.currency,
      paymentSource: P,
      trialId: C,
      metadata: M,
      referralCode: G,
      loadId: B
    });
    if (e.redirectConfirmation) {
      b(null != e.redirectURL);
      return
    }
    t(_.A.COMPLETED), "subscription" in e ? n = null != e.subscription ? u.Z.createFromServer(e.subscription) : null : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : void 0), x(n, r)
  } catch (e) {
    t(_.A.FAIL), g(e), d.default.track(p.rMx.PAYMENT_FLOW_FAILED, v(m({}, O), {
      payment_error_code: null == e ? void 0 : e.code,
      payment_source_id: null == P ? void 0 : P.id,
      payment_source_type: null == P ? void 0 : P.type,
      duration_ms: Date.now() - T
    }))
  } finally {
    E || r(!1)
  }
}