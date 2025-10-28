/** Chunk was on web.js **/
/** chunk id: 632580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => y
}), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk159351 = require("./159351.js"),
  Chunk366939 = require("./366939.js"),
  Chunk16084 = require("./16084.js"),
  Chunk255078 = require("./255078.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk45572 = require("./45572.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function m(e, t, n) {
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
      m(e, t, n[t])
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
async function y(e) {
  let {
    setPurchaseState: t,
    setHasAcceptedTerms: n,
    setIsSubmitting: r,
    setPurchaseError: m,
    hasRedirectURL: E,
    setHasRedirectURL: y,
    isGift: O,
    baseAnalyticsData: v,
    analyticsLocation: I,
    analyticsLocations: T,
    flowStartTime: S,
    subscriptionPlan: A,
    planGroup: C,
    trialId: N,
    priceOptions: R,
    paymentSource: P,
    isPrepaidPaymentPastDue: w,
    openInvoiceId: D,
    premiumSubscription: L,
    onNext: x,
    metadata: M,
    sku: k,
    skuPricePreview: j,
    purchaseType: U,
    referralCode: G,
    loadId: B,
    giftInfoOptions: Z,
    invoicePreview: F,
    orderId: V
  } = e;
  t(_.A.PURCHASING), n(true), r(true), a.Z.wait(s.fw), m(null);
  try {
    let e, n, r, a;
    if (d.default.track(p.rMx.PAYMENT_FLOW_COMPLETED, b(g({}, v), {
        subtotal: null == F ? true : F.subtotal,
        tax: null == F ? true : F.tax,
        expected_amount: null == F ? true : F.total,
        expected_currency: null == F ? true : F.currency,
        duration_ms: Date.now() - S
      })), E) return;
    if (U === p.GZQ.ONE_TIME) i()(null != k, "SKU must exist and be fetched."), i()(null != j, "SKUPricePreview must exist."), e = await (0, c.ZZ)(k.applicationId, k.id, {
      expectedAmount: j.amount,
      expectedCurrency: j.currency,
      isGift: O,
      paymentSource: P,
      loadId: B,
      giftInfoOptions: Z,
      orderId: V
    });
    else {
      i()(null != A, "Missing subscriptionPlan"), i()(null != F, "Missing invoicePreview");
      let t = {
          amount: F.total,
          currency: F.currency
        },
        n = (0, f.BK)((0, f.aS)(A.id, false, false, R));
      if (null != L) {
        let e = (0, f.al)(L, A.id, 1, new Set(C));
        e = (0, f.gB)(e), n = (0, f.UX)(e, R.currency.toLowerCase(), R.paymentSourceId)
      }
      if (O) {
        let t = F.total,
          n = F.currency;
        e = await (0, c.ZZ)(h.CL, A.skuId, {
          expectedAmount: t,
          expectedCurrency: n,
          paymentSource: P,
          subscriptionPlanId: A.id,
          isGift: true,
          loadId: B,
          giftInfoOptions: Z,
          orderId: V
        })
      } else if (w && null != D && null != P && null != L) e = p.Uk1.has(P.type) ? await (0, o.G)(L, D, P, R.currency) : await (0, o.Mg)(L, {
        paymentSource: P,
        currency: R.currency
      }, t, n, T, I, B);
      else if (null != L) {
        let r = (0, f.al)(L, A.id, 1, new Set(C)),
          i = {
            paymentSource: P,
            currency: R.currency
          };
        L.status === p.O0b.PAUSED && (i.status = p.O0b.ACTIVE), L.isPausedAllowsResumeButNotUpdates || (i.items = r), e = await (0, o.Mg)(L, i, t, n, T, I, B)
      } else e = await (0, l.Ld)({
        planId: A.id,
        currency: R.currency,
        paymentSource: P,
        trialId: N,
        metadata: M,
        referralCode: G,
        loadId: B,
        expectedInvoicePrice: t,
        expectedRenewalPrice: n
      })
    }
    if (e.redirectConfirmation) return void y(null != e.redirectURL);
    t(_.A.COMPLETED), "subscription" in e ? n = null != e.subscription ? u.Z.createFromServer(e.subscription) : null : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : true), "appliedUserDiscounts" in e && (a = null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0 ? e.appliedUserDiscounts : true), x(n, r, a)
  } catch (e) {
    t(_.A.FAIL), m(e), d.default.track(p.rMx.PAYMENT_FLOW_FAILED, b(g({}, v), {
      payment_error_code: null == e ? true : e.code,
      payment_source_id: null == P ? true : P.id,
      payment_source_type: null == P ? true : P.type,
      duration_ms: Date.now() - S
    }))
  } finally {
    E || r(false)
  }
}