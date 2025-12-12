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
async function y(e) {
  let {
    setPurchaseState: t,
    setHasAcceptedTerms: n,
    setIsSubmitting: r,
    setPurchaseError: h,
    hasRedirectURL: E,
    setHasRedirectURL: y,
    isGift: O,
    baseAnalyticsData: v,
    analyticsLocation: S,
    analyticsLocations: I,
    flowStartTime: T,
    subscriptionPlan: C,
    planGroup: A,
    trialId: N,
    priceOptions: P,
    paymentSource: R,
    isPrepaidPaymentPastDue: w,
    openInvoiceId: D,
    premiumSubscription: x,
    onNext: L,
    metadata: j,
    sku: M,
    skuPricePreview: k,
    purchaseType: U,
    referralCode: G,
    loadId: Z,
    giftInfoOptions: F,
    invoicePreview: B,
    orderId: V
  } = e;
  t(p.A.PURCHASING), n(true), r(true), o.Z.wait(s.fw), h(null);
  try {
    let e, n, r, o;
    if (d.default.track(_.rMx.PAYMENT_FLOW_COMPLETED, b(g({}, v), {
        subtotal: null == B ? true : B.subtotal,
        tax: null == B ? true : B.tax,
        expected_amount: null == B ? true : B.total,
        expected_currency: null == B ? true : B.currency,
        duration_ms: Date.now() - T
      })), E) return;
    if (U === _.GZQ.ONE_TIME) i()(null != M, "SKU must exist and be fetched."), i()(null != k, "SKUPricePreview must exist."), e = await (0, c.ZZ)(M.applicationId, M.id, {
      expectedAmount: k.amount,
      expectedCurrency: k.currency,
      isGift: O,
      paymentSource: R,
      loadId: Z,
      giftInfoOptions: F,
      orderId: V
    });
    else {
      i()(null != C, "Missing subscriptionPlan"), i()(null != B, "Missing invoicePreview");
      let t = {
          amount: B.total,
          currency: B.currency
        },
        n = (0, f.BK)((0, f.aS)(C.id, false, false, P));
      if (null != x) {
        let e = (0, f.al)(x, C.id, 1, new Set(A));
        e = (0, f.gB)(e), n = (0, f.UX)(e, P.currency.toLowerCase(), P.paymentSourceId)
      }
      if (O) {
        let t = B.total,
          n = B.currency;
        e = await (0, c.ZZ)(m.CL, C.skuId, {
          expectedAmount: t,
          expectedCurrency: n,
          paymentSource: R,
          subscriptionPlanId: C.id,
          isGift: true,
          loadId: Z,
          giftInfoOptions: F,
          orderId: V
        })
      } else if (w && null != D && null != R && null != x) e = _.Uk1.has(R.type) ? await (0, a.G)(x, D, R, P.currency) : await (0, a.Mg)(x, {
        paymentSource: R,
        currency: P.currency
      }, t, n, I, S, Z);
      else if (null != x) {
        let r = (0, f.al)(x, C.id, 1, new Set(A)),
          i = {
            paymentSource: R,
            currency: P.currency
          };
        x.status === _.O0b.PAUSED && (i.status = _.O0b.ACTIVE), x.isPausedAllowsResumeButNotUpdates || (i.items = r), e = await (0, a.Mg)(x, i, t, n, I, S, Z)
      } else e = await (0, l.Ld)({
        planId: C.id,
        currency: P.currency,
        paymentSource: R,
        trialId: N,
        metadata: j,
        referralCode: G,
        loadId: Z,
        expectedInvoicePrice: t,
        expectedRenewalPrice: n
      })
    }
    if (e.redirectConfirmation) return void y(null != e.redirectURL);
    t(p.A.COMPLETED), "subscription" in e ? n = null != e.subscription ? u.Z.createFromServer(e.subscription) : null : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : true), "appliedUserDiscounts" in e && (o = null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0 ? e.appliedUserDiscounts : true), L(n, r, o)
  } catch (e) {
    t(p.A.FAIL), h(e), d.default.track(_.rMx.PAYMENT_FLOW_FAILED, b(g({}, v), {
      payment_error_code: null == e ? true : e.code,
      payment_source_id: null == R ? true : R.id,
      payment_source_type: null == R ? true : R.type,
      duration_ms: Date.now() - T
    }))
  } finally {
    E || r(false)
  }
}