/** Chunk was on web.js **/
/** chunk id: 367160, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk637141 = require("./637141.jsx"),
  Chunk69882 = require("./69882.jsx"),
  Chunk241989 = require("./241989.jsx"),
  Chunk669510 = require("./669510.jsx"),
  Chunk234419 = require("./234419.js"),
  Chunk446929 = require("./446929.jsx"),
  Chunk494230 = require("./494230.jsx"),
  Chunk299301 = require("./299301.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk222707 = require("./222707.js"),
  Chunk340034 = require("./340034.jsx"),
  Chunk888751 = require("./888751.jsx"),
  Chunk985018 = require("./985018.jsx");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}
let O = e => {
  let {
    referralTrialOfferId: t,
    selectedPlanId: n,
    priceOptions: y,
    paymentSources: O,
    onPaymentSourceChange: v,
    handlePaymentSourceAdd: A,
    isTrial: I,
    planGroup: S
  } = e, T = (0, f.L)(e), {
    isEligibleForTrial: C
  } = (0, _.P5)(), {
    error: N,
    isGift: w,
    giftRecipient: R,
    oneTimePurchaseNitroGiftInvoicePreview: P,
    subscriptionPeriodEnd: D,
    trialInvoicePreview: L,
    proratedInvoicePreview: x,
    renewalInvoicePreview: M,
    planSwitchLoading: j,
    plan: k,
    isPrepaid: U,
    discountInvoiceItems: G,
    premiumPlanOptions: V,
    shouldAllowPlanSelect: F,
    isCustomGift: B,
    hidePersonalInformation: H,
    hasEntitlements: Y,
    paymentSourceId: W,
    eligiblePaymentGateways: K,
    activeSubscription: z,
    fractionalPremiumInfo: q,
    isPremiumGroupPurchase: Z
  } = T, Q = (0, r.jsx)(o.A, {
    shouldUseUnifiedCheckoutUI: true,
    paymentSources: Object.values(O),
    selectedPaymentSourceId: W,
    newPaymentMethodOptionLabel: Y && !I ? E.intl.string(E.t.IGU7El) : null,
    onChange: v,
    onPaymentSourceAdd: A,
    hidePersonalInformation: H,
    isTrial: I,
    paymentGatewayRestrictions: K
  }), X = (0, p.yf)({
    error: N,
    isGift: w,
    oneTimePurchaseNitroGiftInvoicePreview: P,
    trialInvoicePreview: L,
    proratedInvoicePreview: x,
    renewalInvoicePreview: M,
    planSwitchLoading: j
  }), J = (0, u.V)(t), $ = (0, d.O8)(), ee = (0, h.pt)({
    fractionalPremiumInfo: q,
    selectedPlanId: n,
    planGroup: S,
    premiumSubscription: z,
    isGift: w
  }), et = i.useMemo(() => ee ? (0, r.jsx)(m.l$, {
    fractionalPremiumInfo: q,
    isEligibleForTrial: C,
    trialPeriodCopy: $,
    subscriptionPeriodEnd: D
  }) : Z ? (0, r.jsx)(a.wx6, {
    type: "info",
    children: (0, h.Nn)()
  }) : null, [ee, q, C, $, D, Z]);
  if (null == X || X.type === p.N$.LOADING) return (0, r.jsx)(s.Ed, {});
  let en = (0, r.jsx)(m.Z$, {
      invoiceSummaryTypeWithPreview: X,
      subscriptionPlan: k,
      isPrepaidPaymentSource: U,
      premiumTrialOffer: J,
      isCustomGift: B
    }),
    er = null;
  if (!U && (X.type === p.N$.PREMIUM_DEFAULT || X.type === p.N$.PREMIUM_WITH_TRIAL) && null != X.renewalInvoicePreview) {
    let e = (0, g.Gj)(X.invoicePreview, X.renewalInvoicePreview, J);
    er = (0, r.jsx)(c._, b({}, e))
  }
  let ei = (0, g.BZ)(X, k, {
      isPrepaidPaymentSource: U,
      giftRecipient: R,
      isPremiumGroupPurchase: Z
    }),
    ea = F ? (0, r.jsx)(m.XH, {
      selectedPlanId: n,
      priceOptions: y,
      planOptions: V,
      eligibleForMultiMonthPlans: false,
      subscriptionPeriodEnd: D,
      discountInvoiceItems: G
    }) : true,
    eo = F ? true : (0, r.jsx)(l.f7, b({}, ei));
  return (0, r.jsx)(s.rg, {
    upperInlineNoticeContent: et,
    planSelectContent: ea,
    purchaseItemContent: eo,
    subscriptionDetailsContent: er,
    paymentSelectContent: Q,
    invoiceSummaryContent: en
  })
}