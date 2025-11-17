/** Chunk was on web.js **/
/** chunk id: 664891, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => K
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk742280 = require("./742280.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk190947 = require("./190947.jsx"),
  Chunk224550 = require("./224550.jsx"),
  Chunk275850 = require("./275850.jsx"),
  Chunk672971 = require("./672971.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk45572 = require("./45572.js"),
  Chunk614223 = require("./614223.js"),
  Chunk405685 = require("./405685.jsx"),
  Chunk435020 = require("./435020.js"),
  Chunk246946 = require("./246946.js"),
  Chunk351402 = require("./351402.js"),
  Chunk509545 = require("./509545.js"),
  Chunk855775 = require("./855775.js"),
  Chunk74538 = require("./74538.js"),
  Chunk296848 = require("./296848.js"),
  Chunk374649 = require("./374649.js"),
  Chunk811334 = require("./811334.jsx"),
  Chunk585602 = require("./585602.jsx"),
  Chunk314182 = require("./314182.jsx"),
  Chunk396955 = require("./396955.jsx"),
  Chunk314404 = require("./314404.jsx"),
  Chunk42818 = require("./42818.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk250445 = require("./250445.js"),
  Chunk867983 = require("./867983.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function K(e) {
  let t, {
      premiumSubscription: n,
      paymentSources: a,
      priceOptions: s,
      onPaymentSourceChange: m,
      onPaymentSourceAdd: g,
      planId: D,
      setHasAcceptedTerms: x,
      legalTermsNodeRef: j,
      hasLegalTermsFlash: U,
      onInvoiceError: Z,
      planGroup: V,
      currencies: H,
      onCurrencyChange: Y,
      hasOpenInvoice: W,
      purchaseState: K,
      handleClose: $
    } = e,
    {
      selectedSkuId: ee,
      defaultPlanId: et,
      isPremium: en,
      startedPaymentFlowWithPaymentSourcesRef: er,
      hasPaymentSources: ei,
      enablePremiumBrandRefresh: ea
    } = (0, y.JL)(),
    {
      isGift: eo
    } = (0, b.wD)(),
    es = s.paymentSourceId,
    el = (0, T.$)(a, es),
    ec = (0, u.e7)([C.Z], () => C.Z.get(D));
  l()(null != ec, "Missing newPlan");
  let eu = (0, u.e7)([S.Z], () => S.Z.hidePersonalInformation),
    ed = (0, E.Z)(),
    ef = c.M.EEA_COUNTRIES.has(A.Z.ipCountryCodeWithFallback),
    e_ = K === O.A.PURCHASING || K === O.A.COMPLETED,
    ep = (0, v.Kp)({
      isTrial: false,
      isGift: eo,
      selectedSkuId: ee,
      startedPaymentFlowWithPaymentSources: er.current
    }),
    eh = null == n ? true : n.isPausedAllowsResumeButNotUpdates,
    em = i.useMemo(() => (0, R.V7)({
      skuId: ee,
      isPremium: en,
      multiMonthPlans: [],
      currentSubscription: n,
      defaultPlanId: et
    }), [ee, n, et, en]);
  t = W || eh ? B.intl.string(B.t.nyzoFb) : (0, R.PV)(D) ? (0, R.W_)(n, ec) : B.intl.formatToPlainString(B.t["sBpy9/"], {
    planName: ec.name
  });
  let eg = null;
  null != n && (eg = W ? (0, r.jsx)(z, {
    premiumSubscription: n,
    onInvoiceError: Z,
    priceOptions: s,
    preventFetch: false
  }) : eh ? (0, r.jsx)(Q, {
    premiumSubscription: n,
    onInvoiceError: Z,
    priceOptions: s,
    preventFetch: e_
  }) : (0, P.R4)(n, D, V) ? (0, r.jsx)(q, {
    premiumSubscription: n,
    newPlan: ec,
    onInvoiceError: Z,
    planGroup: V,
    priceOptions: s,
    fractionalPremiumInfo: ed,
    preventFetch: e_
  }) : (0, r.jsx)(J, {
    premiumSubscription: n,
    newPlan: ec,
    planGroup: V,
    fractionalPremiumInfo: ed,
    priceOptions: s,
    preventFetch: e_
  }));
  let eE = null == n ? true : n.eligiblePaymentGateways,
    eb = null != eE && eE.length > 0 && (es === N.c || null === el) && ei ? M.w.SELECT_PAYMENT_METHOD : true;
  return (0, r.jsxs)("div", {
    className: F.stepBody,
    children: [(0, r.jsx)(M.Y, {
      paymentRestrictionBannerType: eb
    }), !eh && ep && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(w.UN, {
        negativeMarginBottom: true,
        negativeMarginTop: true
      }), (0, r.jsx)(I.a, {
        planSkuId: ec.skuId
      }), (0, r.jsx)(k.O, {
        planOptions: em,
        eligibleForMultiMonthPlans: false,
        selectedPlanId: D,
        planGroup: V,
        showTotal: false,
        handleClose: $
      }), (0, r.jsx)(w.UN, {})]
    }), (0, r.jsx)(d.gNt, {
      label: t,
      children: eg
    }), (0, r.jsx)("div", {
      className: F.paymentSourceWrapper,
      children: (0, r.jsx)(p.ZP, {
        label: B.intl.string(B.t["mmDvV+"]),
        paymentSources: Object.values(a),
        selectedPaymentSourceId: es,
        onChange: m,
        onPaymentSourceAdd: g,
        hidePersonalInformation: eu,
        disabled: e_,
        paymentGatewayRestrictions: null == n ? true : n.eligiblePaymentGateways,
        className: o()({
          [F.premiumBrandRefreshInputBackground]: ea
        })
      })
    }), (0, r.jsx)(f.b, {
      currencies: H,
      className: F.currencyWrapper,
      children: (0, r.jsx)(f.Z, {
        label: B.intl.string(B.t["/AAR02"]),
        selectedCurrency: s.currency,
        currencies: H,
        onChange: Y,
        disabled: e_
      })
    }), (0, r.jsx)(L.Z, {
      isActive: U,
      ref: j,
      children: null != n && (0, P.R4)(n, D, V) ? (0, r.jsx)(X, {
        premiumSubscription: n,
        newPlan: ec,
        onInvoiceError: Z,
        planGroup: V,
        priceOptions: s,
        preventFetch: e_,
        disabled: e_,
        isEEA: ef,
        paymentSources: a,
        setHasAcceptedTerms: x
      }) : (0, r.jsx)(h.Z, {
        onChange: x,
        finePrint: (0, r.jsx)(_.Z, {
          subscriptionPlan: ec,
          paymentSourceType: el,
          basePrice: (0, R.aS)(ec.id, false, eo, s),
          currentSubscription: n,
          planGroup: V
        }),
        forceShow: true,
        showPricingLink: ec.currency !== G.pKx.USD,
        showWithdrawalWaiver: ef,
        disabled: e_,
        subscriptionPlan: ec,
        currentSubscription: n,
        planGroup: V
      })
    })]
  })
}

function z(e) {
  let {
    premiumSubscription: t,
    onInvoiceError: n,
    priceOptions: a,
    preventFetch: o
  } = e, {
    setInvoicePreview: s
  } = (0, y.JL)(), [l, c] = (0, D.Ox)({
    subscriptionId: t.id,
    preventFetch: o
  });
  i.useEffect(() => {
    s(l)
  }, [s, l]), i.useEffect(() => {
    n(c)
  }, [n, c]);
  let u = (0, R.Ap)(a.paymentSourceId);
  return null != l ? (0, r.jsxs)(w.aO, {
    className: Z.__invalid_invoice,
    children: [(0, r.jsx)(j.By, {
      invoice: l,
      isPrepaidPaymentSource: u
    }), (0, r.jsx)(j.nd, {
      premiumSubscription: t,
      renewalInvoice: l,
      isUpdate: true,
      isPrepaidPaymentSource: u
    })]
  }) : (0, r.jsx)(d.$jN, {})
}

function q(e) {
  let t, {
      premiumSubscription: n,
      newPlan: a,
      onInvoiceError: s,
      planGroup: l,
      priceOptions: c,
      fractionalPremiumInfo: u,
      preventFetch: f
    } = e,
    {
      selectedSkuId: _,
      startedPaymentFlowWithPaymentSourcesRef: p,
      setInvoicePreview: h,
      premiumBrandRefreshBackgroundClassName: m
    } = (0, y.JL)(),
    {
      isGift: E
    } = (0, b.wD)(),
    {
      analyticsLocations: O
    } = (0, g.ZP)(),
    I = (0, R.al)(n, a.id, 1, new Set(l)),
    {
      proratedInvoicePreview: T,
      proratedInvoiceError: S,
      renewalInvoicePreview: A,
      renewalInvoiceError: C
    } = $({
      premiumSubscription: n,
      newItems: I,
      priceOptions: c,
      preventFetch: f,
      analyticsLocations: O
    });
  i.useEffect(() => {
    h(T)
  }, [h, T]);
  let N = null != S ? S : C;
  if (i.useEffect(() => {
      s(N)
    }, [s, N]), null != N) return (0, r.jsx)(d.M14, {
    type: "critical",
    children: N.message
  });
  let P = (0, v.Kp)({
      isTrial: false,
      isGift: E,
      selectedSkuId: _,
      startedPaymentFlowWithPaymentSources: p.current
    }),
    D = (0, v.$g)(P, T, a);
  if (null !== u && null !== T && (t = (0, R.N1)(T.subscriptionPeriodEnd, u.unactivatedUnits, u.endsAt)), null == T || null == A || D) return (0, r.jsx)(d.$jN, {
    className: F.__invalid_spinner
  });
  let x = (0, R.Ap)(c.paymentSourceId);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(j.hG, {
      proratedInvoice: T,
      renewalInvoice: A,
      overrideRenewalDate: t
    }), (0, r.jsxs)(w.aO, {
      className: o()(F.invoice, m),
      children: [(0, r.jsx)(w.Z9, {
        children: B.intl.string(B.t["2eh+Co"])
      }), (0, r.jsx)(j.Lu, {
        invoice: T,
        newPlan: a,
        isPrepaidPaymentSource: x
      }), (0, r.jsx)(j.nd, {
        premiumSubscription: n,
        proratedInvoice: T,
        renewalInvoice: A,
        overrideRenewalDate: t,
        isUpdate: true,
        isPrepaidPaymentSource: x
      })]
    })]
  })
}

function X(e) {
  let t, {
      premiumSubscription: n,
      newPlan: a,
      onInvoiceError: o,
      planGroup: s,
      priceOptions: l,
      preventFetch: c,
      disabled: u,
      isEEA: f,
      paymentSources: p,
      setHasAcceptedTerms: m
    } = e,
    {
      analyticsLocations: E
    } = (0, g.ZP)(),
    b = (0, R.al)(n, a.id, 1, new Set(s)),
    {
      proratedInvoicePreview: y,
      proratedInvoiceError: O,
      renewalInvoicePreview: v,
      renewalInvoiceError: I
    } = $({
      premiumSubscription: n,
      newItems: b,
      priceOptions: l,
      preventFetch: c,
      analyticsLocations: E
    }),
    S = (0, T.$)(p, l.paymentSourceId),
    A = null != I ? I : O;
  return (i.useEffect(() => {
    o(A)
  }, [o, A]), null != A) ? (0, r.jsx)(d.M14, {
    type: "critical",
    children: A.message
  }) : (null != v && (t = {
    amount: v.subtotal,
    currency: v.currency,
    tax: v.tax,
    taxInclusive: v.taxInclusive
  }), null == t) ? null : (0, r.jsx)(h.Z, {
    onChange: m,
    finePrint: (0, r.jsx)(_.Z, {
      subscriptionPlan: a,
      paymentSourceType: S,
      basePrice: t,
      proratedAmount: null != y ? y.total : true,
      currentSubscription: n,
      planGroup: s
    }),
    forceShow: true,
    showPricingLink: a.currency !== G.pKx.USD,
    showWithdrawalWaiver: f,
    disabled: u,
    subscriptionPlan: a,
    currentSubscription: n,
    planGroup: s
  })
}

function Q(e) {
  let {
    premiumSubscription: t,
    priceOptions: n,
    preventFetch: a,
    onInvoiceError: s
  } = e, {
    setInvoicePreview: l,
    premiumBrandRefreshBackgroundClassName: c
  } = (0, y.JL)(), {
    analyticsLocations: u
  } = (0, g.ZP)(), [f, _] = (0, D.ED)({
    subscriptionId: t.id,
    renewal: true,
    applyEntitlements: true,
    paymentSourceId: n.paymentSourceId,
    currency: n.currency,
    preventFetch: a,
    analyticsLocations: u,
    analyticsLocation: m.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
  }), [p, h] = (0, D.ED)({
    subscriptionId: t.id,
    renewal: true,
    paymentSourceId: n.paymentSourceId,
    currency: n.currency,
    preventFetch: a,
    analyticsLocations: u,
    analyticsLocation: m.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
  });
  i.useEffect(() => {
    l(f)
  }, [l, f]);
  let E = null != _ ? _ : h;
  if (i.useEffect(() => {
      s(E)
    }, [s, E]), null != E) return (0, r.jsx)(d.M14, {
    type: "critical",
    children: E.message
  });
  if (null == f || null == p) return (0, r.jsx)(d.$jN, {
    className: F.__invalid_spinner
  });
  let b = (0, R.Ap)(n.paymentSourceId);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: Z.renewalInvoiceDate,
      children: B.intl.string(B.t.spIYou)
    }), (0, r.jsxs)(w.aO, {
      className: o()(F.invoice, c),
      children: [(0, r.jsx)(w.Z9, {
        children: B.intl.string(B.t["2eh+Co"])
      }), (0, r.jsx)(j.By, {
        invoice: f,
        isPrepaidPaymentSource: b
      }), (0, r.jsx)(j.nd, {
        premiumSubscription: t,
        renewalInvoice: p,
        isUpdate: true,
        isPrepaidPaymentSource: b
      })]
    })]
  })
}

function J(e) {
  let t, {
      premiumSubscription: n,
      newPlan: a,
      planGroup: s,
      fractionalPremiumInfo: l,
      priceOptions: c,
      preventFetch: u
    } = e,
    {
      setInvoicePreview: f,
      premiumBrandRefreshBackgroundClassName: _
    } = (0, y.JL)(),
    {
      analyticsLocations: p
    } = (0, g.ZP)(),
    [h, m] = (0, D.ED)({
      subscriptionId: n.id,
      items: (0, R.al)(n, a.id, 1, new Set(s)),
      renewal: true,
      applyEntitlements: false,
      paymentSourceId: c.paymentSourceId,
      currency: c.currency,
      preventFetch: u,
      analyticsLocations: p,
      analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
    });
  if (i.useEffect(() => {
      f(h)
    }, [f, h]), null != m) return (0, r.jsx)(d.M14, {
    type: "critical",
    children: m.message
  });
  if (null == h) return (0, r.jsx)("div", {
    children: (0, r.jsx)(d.$jN, {})
  });
  t = n.type === G.NYc.PREMIUM ? (0, R.Gf)(a.id) : a.name;
  let E = (0, R.Ap)(c.paymentSourceId),
    b = h.subscriptionPeriodStart;
  return l.fractionalState === U.a$.FP_SUB_PAUSED && (b = l.endsAt.toDate()), (0, r.jsxs)("div", {
    className: F.bodyText,
    children: [(0, r.jsx)("div", {
      className: Z.renewalInvoiceDate,
      children: B.intl.format(B.t["+y0Tjy"], {
        renewalDate: b
      })
    }), (0, r.jsxs)(w.aO, {
      className: o()(F.invoice, _),
      children: [(0, r.jsx)(w.Z9, {
        children: B.intl.string(B.t.iqhIp4)
      }), (0, r.jsx)(w.B1, {
        label: t,
        value: (0, R.PK)(a, c, true)
      }), (0, r.jsx)(x.Z, {
        invoice: h
      }), (0, r.jsx)(w.UN, {}), (0, r.jsx)(j.nd, {
        premiumSubscription: n,
        renewalInvoice: h,
        isUpdate: true,
        isPrepaidPaymentSource: E
      })]
    })]
  })
}
let $ = e => {
  let {
    premiumSubscription: t,
    newItems: n,
    priceOptions: r,
    preventFetch: i,
    analyticsLocations: a
  } = e, o = {
    subscriptionId: t.id,
    items: n,
    paymentSourceId: r.paymentSourceId,
    currency: r.currency,
    preventFetch: i,
    analyticsLocations: a,
    analyticsLocation: m.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
  }, [s, l] = (0, D.ED)(W(H({}, o), {
    renewal: false,
    applyEntitlements: true
  })), [c, u] = (0, D.ED)(W(H({}, o), {
    renewal: true
  }));
  return {
    proratedInvoicePreview: s,
    proratedInvoiceError: l,
    renewalInvoicePreview: c,
    renewalInvoiceError: u
  }
}