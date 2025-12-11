/** Chunk was on web.js **/
/** chunk id: 664891, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => q
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
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk137427 = require("./137427.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk523545 = require("./523545.js"),
  Chunk400005 = require("./400005.js");

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Y(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : K(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function q(e) {
  let t, {
      premiumSubscription: n,
      paymentSources: a,
      priceOptions: s,
      onPaymentSourceChange: h,
      onPaymentSourceAdd: g,
      planId: w,
      setHasAcceptedTerms: x,
      legalTermsNodeRef: k,
      hasLegalTermsFlash: U,
      onInvoiceError: V,
      planGroup: Y,
      currencies: W,
      onCurrencyChange: K,
      hasOpenInvoice: z,
      purchaseState: q,
      handleClose: et
    } = e,
    {
      selectedSkuId: en,
      defaultPlanId: er,
      isPremium: ei,
      startedPaymentFlowWithPaymentSourcesRef: ea,
      hasPaymentSources: eo,
      enablePremiumBrandRefresh: es,
      isPremiumGroupPurchase: el
    } = (0, y.JL)(),
    {
      isGift: ec
    } = (0, b.wD)(),
    eu = s.paymentSourceId,
    ed = (0, I.$)(a, eu),
    ef = (0, u.e7)([A.Z], () => A.Z.get(w));
  l()(null != ef, "Missing newPlan");
  let ep = (0, u.e7)([T.Z], () => T.Z.hidePersonalInformation),
    e_ = (0, E.Z)(),
    em = c.M.EEA_COUNTRIES.has(C.Z.ipCountryCodeWithFallback),
    eh = q === O.A.PURCHASING || q === O.A.COMPLETED,
    eg = (0, v.Kp)({
      isTrial: false,
      isGift: ec,
      selectedSkuId: en,
      startedPaymentFlowWithPaymentSources: ea.current
    }),
    eE = null == n ? true : n.isPausedAllowsResumeButNotUpdates,
    eb = i.useMemo(() => (0, P.V7)({
      skuId: en,
      isPremium: ei,
      multiMonthPlans: [],
      currentSubscription: n,
      defaultPlanId: er
    }), [en, n, er, ei]);
  t = z || eE ? B.intl.string(B.t.nyzoFb) : el ? B.intl.formatToPlainString(F.default["3m9DJK"], {
    premiumGroupProductName: (0, G.sO)()
  }) : (0, P.PV)(w) ? (0, P.W_)(n, ef) : B.intl.formatToPlainString(B.t["sBpy9/"], {
    planName: ef.name
  });
  let ey = null;
  null != n && (ey = z ? (0, r.jsx)(Q, {
    premiumSubscription: n,
    onInvoiceError: V,
    priceOptions: s,
    preventFetch: false
  }) : eE ? (0, r.jsx)($, {
    premiumSubscription: n,
    onInvoiceError: V,
    priceOptions: s,
    preventFetch: eh
  }) : (0, R.R4)(n, w, Y) ? (0, r.jsx)(X, {
    premiumSubscription: n,
    newPlan: ef,
    onInvoiceError: V,
    planGroup: Y,
    priceOptions: s,
    fractionalPremiumInfo: e_,
    preventFetch: eh
  }) : (0, r.jsx)(ee, {
    premiumSubscription: n,
    newPlan: ef,
    planGroup: Y,
    fractionalPremiumInfo: e_,
    priceOptions: s,
    preventFetch: eh
  }));
  let eO = null == n ? true : n.eligiblePaymentGateways,
    ev = null != eO && eO.length > 0 && (eu === N.c || null === ed) && eo ? j.w.SELECT_PAYMENT_METHOD : true;
  return (0, r.jsxs)("div", {
    className: H.stepBody,
    children: [(0, r.jsx)(j.Y, {
      paymentRestrictionBannerType: ev
    }), !eE && eg && !el && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(D.UN, {
        negativeMarginBottom: true,
        negativeMarginTop: true
      }), (0, r.jsx)(S.a, {
        planSkuId: ef.skuId
      }), (0, r.jsx)(M.O, {
        planOptions: eb,
        eligibleForMultiMonthPlans: false,
        selectedPlanId: w,
        planGroup: Y,
        showTotal: false,
        handleClose: et
      }), (0, r.jsx)(D.UN, {})]
    }), el && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/medium",
        children: B.intl.formatToPlainString(F.default["h1i+H8"], {
          premiumGroupProductName: (0, G.sO)(),
          cooldownMonths: G.T9
        })
      }), (0, r.jsx)(D.UN, {})]
    }), (0, r.jsx)(d.gNt, {
      label: t,
      children: ey
    }), (0, r.jsx)("div", {
      className: H.paymentSourceWrapper,
      children: (0, r.jsx)(_.ZP, {
        label: B.intl.string(B.t["mmDvV+"]),
        paymentSources: Object.values(a),
        selectedPaymentSourceId: eu,
        onChange: h,
        onPaymentSourceAdd: g,
        hidePersonalInformation: ep,
        disabled: eh,
        paymentGatewayRestrictions: null == n ? true : n.eligiblePaymentGateways,
        className: o()({
          [H.premiumBrandRefreshInputBackground]: es
        })
      })
    }), (0, r.jsx)(f.b, {
      currencies: W,
      className: H.currencyWrapper,
      children: (0, r.jsx)(f.Z, {
        label: B.intl.string(B.t["/AAR02"]),
        selectedCurrency: s.currency,
        currencies: W,
        onChange: K,
        disabled: eh
      })
    }), (0, r.jsx)(L.Z, {
      isActive: U,
      ref: k,
      children: null != n && (0, R.R4)(n, w, Y) ? (0, r.jsx)(J, {
        premiumSubscription: n,
        newPlan: ef,
        onInvoiceError: V,
        planGroup: Y,
        priceOptions: s,
        preventFetch: eh,
        disabled: eh,
        isEEA: em,
        paymentSources: a,
        setHasAcceptedTerms: x
      }) : (0, r.jsx)(m.Z, {
        onChange: x,
        finePrint: (0, r.jsx)(p.Z, {
          subscriptionPlan: ef,
          paymentSourceType: ed,
          basePrice: (0, P.aS)(ef.id, false, ec, s),
          currentSubscription: n,
          planGroup: Y
        }),
        forceShow: true,
        showPricingLink: ef.currency !== Z.pKx.USD,
        showWithdrawalWaiver: em,
        disabled: eh,
        subscriptionPlan: ef,
        currentSubscription: n,
        planGroup: Y
      })
    })]
  })
}

function Q(e) {
  let {
    premiumSubscription: t,
    onInvoiceError: n,
    priceOptions: a,
    preventFetch: o
  } = e, {
    setInvoicePreview: s
  } = (0, y.JL)(), [l, c] = (0, w.Ox)({
    subscriptionId: t.id,
    preventFetch: o
  });
  i.useEffect(() => {
    s(l)
  }, [s, l]), i.useEffect(() => {
    n(c)
  }, [n, c]);
  let u = (0, P.Ap)(a.paymentSourceId);
  return null != l ? (0, r.jsxs)(D.aO, {
    className: V.__invalid_invoice,
    children: [(0, r.jsx)(k.By, {
      invoice: l,
      isPrepaidPaymentSource: u
    }), (0, r.jsx)(k.nd, {
      premiumSubscription: t,
      renewalInvoice: l,
      isUpdate: true,
      isPrepaidPaymentSource: u
    })]
  }) : (0, r.jsx)(d.$jN, {})
}

function X(e) {
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
      selectedSkuId: p,
      startedPaymentFlowWithPaymentSourcesRef: _,
      setInvoicePreview: m,
      premiumBrandRefreshBackgroundClassName: h
    } = (0, y.JL)(),
    {
      isGift: E
    } = (0, b.wD)(),
    {
      analyticsLocations: O
    } = (0, g.ZP)(),
    S = (0, P.al)(n, a.id, 1, new Set(l)),
    {
      proratedInvoicePreview: I,
      proratedInvoiceError: T,
      renewalInvoicePreview: C,
      renewalInvoiceError: A
    } = et({
      premiumSubscription: n,
      newItems: S,
      priceOptions: c,
      preventFetch: f,
      analyticsLocations: O
    });
  i.useEffect(() => {
    m(I)
  }, [m, I]);
  let N = null != T ? T : A;
  if (i.useEffect(() => {
      s(N)
    }, [s, N]), null != N) return (0, r.jsx)(d.M14, {
    type: "critical",
    children: N.message
  });
  let R = (0, v.Kp)({
      isTrial: false,
      isGift: E,
      selectedSkuId: p,
      startedPaymentFlowWithPaymentSources: _.current
    }),
    w = (0, v.$g)(R, I, a);
  if (null !== u && null !== I && (t = (0, P.N1)(I.subscriptionPeriodEnd, u.unactivatedUnits, u.endsAt)), null == I || null == C || w) return (0, r.jsx)(d.$jN, {
    className: H.__invalid_spinner
  });
  let x = (0, P.Ap)(c.paymentSourceId);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(k.hG, {
      proratedInvoice: I,
      renewalInvoice: C,
      overrideRenewalDate: t
    }), (0, r.jsxs)(D.aO, {
      className: o()(H.invoice, h),
      children: [(0, r.jsx)(D.Z9, {
        children: B.intl.string(B.t["2eh+Co"])
      }), (0, r.jsx)(k.Lu, {
        invoice: I,
        newPlan: a,
        isPrepaidPaymentSource: x
      }), (0, r.jsx)(k.nd, {
        premiumSubscription: n,
        proratedInvoice: I,
        renewalInvoice: C,
        overrideRenewalDate: t,
        isUpdate: true,
        isPrepaidPaymentSource: x
      })]
    })]
  })
}

function J(e) {
  let t, {
      premiumSubscription: n,
      newPlan: a,
      onInvoiceError: o,
      planGroup: s,
      priceOptions: l,
      preventFetch: c,
      disabled: u,
      isEEA: f,
      paymentSources: _,
      setHasAcceptedTerms: h
    } = e,
    {
      analyticsLocations: E
    } = (0, g.ZP)(),
    b = (0, P.al)(n, a.id, 1, new Set(s)),
    {
      proratedInvoicePreview: y,
      proratedInvoiceError: O,
      renewalInvoicePreview: v,
      renewalInvoiceError: S
    } = et({
      premiumSubscription: n,
      newItems: b,
      priceOptions: l,
      preventFetch: c,
      analyticsLocations: E
    }),
    T = (0, I.$)(_, l.paymentSourceId),
    C = null != S ? S : O;
  return (i.useEffect(() => {
    o(C)
  }, [o, C]), null != C) ? (0, r.jsx)(d.M14, {
    type: "critical",
    children: C.message
  }) : (null != v && (t = {
    amount: v.subtotal,
    currency: v.currency,
    tax: v.tax,
    taxInclusive: v.taxInclusive
  }), null == t) ? null : (0, r.jsx)(m.Z, {
    onChange: h,
    finePrint: (0, r.jsx)(p.Z, {
      subscriptionPlan: a,
      paymentSourceType: T,
      basePrice: t,
      proratedAmount: null != y ? y.total : true,
      currentSubscription: n,
      planGroup: s
    }),
    forceShow: true,
    showPricingLink: a.currency !== Z.pKx.USD,
    showWithdrawalWaiver: f,
    disabled: u,
    subscriptionPlan: a,
    currentSubscription: n,
    planGroup: s
  })
}

function $(e) {
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
  } = (0, g.ZP)(), [f, p] = (0, w.ED)({
    subscriptionId: t.id,
    renewal: true,
    applyEntitlements: true,
    paymentSourceId: n.paymentSourceId,
    currency: n.currency,
    preventFetch: a,
    analyticsLocations: u,
    analyticsLocation: h.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
  }), [_, m] = (0, w.ED)({
    subscriptionId: t.id,
    renewal: true,
    paymentSourceId: n.paymentSourceId,
    currency: n.currency,
    preventFetch: a,
    analyticsLocations: u,
    analyticsLocation: h.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
  });
  i.useEffect(() => {
    l(f)
  }, [l, f]);
  let E = null != p ? p : m;
  if (i.useEffect(() => {
      s(E)
    }, [s, E]), null != E) return (0, r.jsx)(d.M14, {
    type: "critical",
    children: E.message
  });
  if (null == f || null == _) return (0, r.jsx)(d.$jN, {
    className: H.__invalid_spinner
  });
  let b = (0, P.Ap)(n.paymentSourceId);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: V.renewalInvoiceDate,
      children: B.intl.string(B.t.spIYou)
    }), (0, r.jsxs)(D.aO, {
      className: o()(H.invoice, c),
      children: [(0, r.jsx)(D.Z9, {
        children: B.intl.string(B.t["2eh+Co"])
      }), (0, r.jsx)(k.By, {
        invoice: f,
        isPrepaidPaymentSource: b
      }), (0, r.jsx)(k.nd, {
        premiumSubscription: t,
        renewalInvoice: _,
        isUpdate: true,
        isPrepaidPaymentSource: b
      })]
    })]
  })
}

function ee(e) {
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
      premiumBrandRefreshBackgroundClassName: p
    } = (0, y.JL)(),
    {
      analyticsLocations: _
    } = (0, g.ZP)(),
    [m, h] = (0, w.ED)({
      subscriptionId: n.id,
      items: (0, P.al)(n, a.id, 1, new Set(s)),
      renewal: true,
      applyEntitlements: false,
      paymentSourceId: c.paymentSourceId,
      currency: c.currency,
      preventFetch: u,
      analyticsLocations: _,
      analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
    });
  if (i.useEffect(() => {
      f(m)
    }, [f, m]), null != h) return (0, r.jsx)(d.M14, {
    type: "critical",
    children: h.message
  });
  if (null == m) return (0, r.jsx)("div", {
    children: (0, r.jsx)(d.$jN, {})
  });
  t = n.type === Z.NYc.PREMIUM ? (0, P.Gf)(a.id) : a.name;
  let E = (0, P.Ap)(c.paymentSourceId),
    b = m.subscriptionPeriodStart;
  return l.fractionalState === U.a$.FP_SUB_PAUSED && (b = l.endsAt.toDate()), (0, r.jsxs)("div", {
    className: H.bodyText,
    children: [(0, r.jsx)("div", {
      className: V.renewalInvoiceDate,
      children: B.intl.format(B.t["+y0Tjy"], {
        renewalDate: b
      })
    }), (0, r.jsxs)(D.aO, {
      className: o()(H.invoice, p),
      children: [(0, r.jsx)(D.Z9, {
        children: B.intl.string(B.t.iqhIp4)
      }), (0, r.jsx)(D.B1, {
        label: t,
        value: (0, P.PK)(a, c, true)
      }), (0, r.jsx)(x.Z, {
        invoice: m
      }), (0, r.jsx)(D.UN, {}), (0, r.jsx)(k.nd, {
        premiumSubscription: n,
        renewalInvoice: m,
        isUpdate: true,
        isPrepaidPaymentSource: E
      })]
    })]
  })
}
let et = e => {
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
    analyticsLocation: h.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
  }, [s, l] = (0, w.ED)(z(W({}, o), {
    renewal: false,
    applyEntitlements: true
  })), [c, u] = (0, w.ED)(z(W({}, o), {
    renewal: true
  }));
  return {
    proratedInvoicePreview: s,
    proratedInvoiceError: l,
    renewalInvoicePreview: c,
    renewalInvoiceError: u
  }
}