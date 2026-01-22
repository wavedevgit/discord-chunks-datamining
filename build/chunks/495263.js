/** Chunk was on web.js **/
/** chunk id: 495263, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => y
}), require("./896048.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk73153 = require("./73153.js"),
  Chunk384904 = require("./384904.js"),
  Chunk391048 = require("./391048.js"),
  Chunk158032 = require("./158032.js"),
  Chunk830382 = require("./830382.js"),
  Chunk272207 = require("./272207.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk566980 = require("./566980.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

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
    baseAnalyticsData: A,
    analyticsLocation: v,
    analyticsLocations: S,
    flowStartTime: I,
    subscriptionPlan: T,
    planGroup: C,
    trialId: N,
    priceOptions: R,
    paymentSource: w,
    isPrepaidPaymentPastDue: P,
    openInvoiceId: D,
    premiumSubscription: x,
    onNext: L,
    metadata: j,
    sku: M,
    skuPricePreview: k,
    purchaseType: U,
    referralCode: G,
    loadId: V,
    giftInfoOptions: F,
    invoicePreview: B,
    orderId: H
  } = e;
  t(p.h.PURCHASING), n(true), r(true), a.h.wait(o.ET), m(null);
  try {
    let e, n, r, a;
    if (d.default.track(_.HAw.PAYMENT_FLOW_COMPLETED, b(g({}, A), {
        subtotal: null == B ? true : B.subtotal,
        tax: null == B ? true : B.tax,
        expected_amount: null == B ? true : B.total,
        expected_currency: null == B ? true : B.currency,
        duration_ms: Date.now() - I
      })), E) return;
    if (U === _.VVm.ONE_TIME) i()(null != M, "SKU must exist and be fetched."), i()(null != k, "SKUPricePreview must exist."), e = await (0, c.XU)(M.applicationId, M.id, {
      expectedAmount: k.amount,
      expectedCurrency: k.currency,
      isGift: O,
      paymentSource: w,
      loadId: V,
      giftInfoOptions: F,
      orderId: H
    });
    else {
      i()(null != T, "Missing subscriptionPlan"), i()(null != B, "Missing invoicePreview");
      let t = {
          amount: B.total,
          currency: B.currency
        },
        n = (0, f.$Q)((0, f.y8)(T.id, false, false, R));
      if (null != x) {
        let e = (0, f.Pg)(x, T.id, 1, new Set(C));
        e = (0, f.qn)(e), n = (0, f.UC)(e, R.currency.toLowerCase(), R.paymentSourceId)
      }
      if (O) {
        let t = B.total,
          n = B.currency;
        e = await (0, c.XU)(h.tv, T.skuId, {
          expectedAmount: t,
          expectedCurrency: n,
          paymentSource: w,
          subscriptionPlanId: T.id,
          isGift: true,
          loadId: V,
          giftInfoOptions: F,
          orderId: H
        })
      } else if (P && null != D && null != w && null != x) e = _.AD1.has(w.type) ? await (0, s.LD)(x, D, w, R.currency) : await (0, s.nV)(x, {
        paymentSource: w,
        currency: R.currency
      }, t, n, S, v, V);
      else if (null != x) {
        let r = (0, f.Pg)(x, T.id, 1, new Set(C)),
          i = {
            paymentSource: w,
            currency: R.currency
          };
        x.status === _.Dmq.PAUSED && (i.status = _.Dmq.ACTIVE), x.isPausedAllowsResumeButNotUpdates || (i.items = r), e = await (0, s.nV)(x, i, t, n, S, v, V)
      } else e = await (0, l.B1)({
        planId: T.id,
        currency: R.currency,
        paymentSource: w,
        trialId: N,
        metadata: j,
        referralCode: G,
        loadId: V,
        expectedInvoicePrice: t,
        expectedRenewalPrice: n
      })
    }
    if (e.redirectConfirmation) return void y(null != e.redirectURL);
    t(p.h.COMPLETED), "subscription" in e ? n = null != e.subscription ? u.A.createFromServer(e.subscription) : null : "entitlements" in e && (r = null != e.entitlements ? e.entitlements : true), "appliedUserDiscounts" in e && (a = null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0 ? e.appliedUserDiscounts : true), L(n, r, a)
  } catch (e) {
    t(p.h.FAIL), m(e), d.default.track(_.HAw.PAYMENT_FLOW_FAILED, b(g({}, A), {
      payment_error_code: null == e ? true : e.code,
      payment_source_id: null == w ? true : w.id,
      payment_source_type: null == w ? true : w.type,
      duration_ms: Date.now() - I
    }))
  } finally {
    E || r(false)
  }
}