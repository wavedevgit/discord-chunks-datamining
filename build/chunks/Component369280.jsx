/** Chunk was on web.js **/
/** chunk id: 369280, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => Z
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk997101 = require("./997101.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk821189 = require("./821189.jsx"),
  Chunk821891 = require("./821891.jsx"),
  Chunk637141 = require("./637141.jsx"),
  Chunk953689 = require("./953689.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk531260 = require("./531260.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk566980 = require("./566980.js"),
  Chunk800471 = require("./800471.js"),
  Chunk104745 = require("./104745.jsx"),
  Chunk216641 = require("./216641.js"),
  Chunk351906 = require("./351906.js"),
  Chunk615405 = require("./615405.js"),
  Chunk97352 = require("./97352.js"),
  Chunk79387 = require("./79387.js"),
  Chunk927578 = require("./927578.js"),
  Chunk615396 = require("./615396.js"),
  Chunk543767 = require("./543767.js"),
  Chunk735164 = require("./735164.jsx"),
  Chunk787455 = require("./787455.jsx"),
  Chunk778307 = require("./778307.jsx"),
  Chunk218075 = require("./218075.jsx"),
  Chunk446929 = require("./446929.jsx"),
  Chunk692440 = require("./692440.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk314654 = require("./314654.js"),
  Chunk982571 = require("./982571.js");

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      W(e, t, n[t])
    })
  }
  return e
}

function z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e) {
  let t, {
      premiumSubscription: n,
      paymentSources: a,
      priceOptions: s,
      onPaymentSourceChange: m,
      onPaymentSourceAdd: g,
      planId: P,
      setHasAcceptedTerms: L,
      legalTermsNodeRef: k,
      hasLegalTermsFlash: U,
      onInvoiceError: H,
      planGroup: W,
      currencies: K,
      onCurrencyChange: z,
      hasOpenInvoice: q,
      purchaseState: Z,
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
    } = (0, b.P5)(),
    {
      isGift: ec
    } = (0, y.Pv)(),
    eu = s.paymentSourceId,
    ed = (0, I.g)(a, eu),
    ef = (0, u.bG)([C.A], () => C.A.get(P));
  l()(null != ef, "Missing newPlan");
  let ep = (0, u.bG)([S.A], () => S.A.hidePersonalInformation),
    e_ = (0, E.A)(),
    eh = c.M.EEA_COUNTRIES.has(T.A.ipCountryCodeWithFallback),
    em = Z === O.h.PURCHASING || Z === O.h.COMPLETED,
    eg = (0, v.vT)({
      isTrial: false,
      isGift: ec,
      selectedSkuId: en,
      startedPaymentFlowWithPaymentSources: ea.current
    }),
    eE = null == n ? true : n.isPausedAllowsResumeButNotUpdates,
    ey = i.useMemo(() => (0, w.Tm)({
      skuId: en,
      isPremium: ei,
      multiMonthPlans: [],
      currentSubscription: n,
      defaultPlanId: er
    }), [en, n, er, ei]);
  t = q || eE ? B.intl.string(B.t.nyzoFb) : el ? B.intl.formatToPlainString(V.default["3m9DJK"], {
    premiumGroupProductName: (0, G.DP)()
  }) : (0, w.ys)(P) ? (0, w.ff)(n, ef) : B.intl.formatToPlainString(B.t["sBpy9/"], {
    planName: ef.name
  });
  let eb = null;
  null != n && (eb = q ? (0, r.jsx)(Q, {
    premiumSubscription: n,
    onInvoiceError: H,
    priceOptions: s,
    preventFetch: false
  }) : eE ? (0, r.jsx)($, {
    premiumSubscription: n,
    onInvoiceError: H,
    priceOptions: s,
    preventFetch: em
  }) : (0, R.Ge)(n, P, W) ? (0, r.jsx)(X, {
    premiumSubscription: n,
    newPlan: ef,
    onInvoiceError: H,
    planGroup: W,
    priceOptions: s,
    fractionalPremiumInfo: e_,
    preventFetch: em
  }) : (0, r.jsx)(ee, {
    premiumSubscription: n,
    newPlan: ef,
    planGroup: W,
    fractionalPremiumInfo: e_,
    priceOptions: s,
    preventFetch: em
  }));
  let eO = null == n ? true : n.eligiblePaymentGateways,
    ev = null != eO && eO.length > 0 && (eu === N.B || null === ed) && eo ? M.f.SELECT_PAYMENT_METHOD : true;
  return (0, r.jsxs)("div", {
    className: Y.Du,
    children: [(0, r.jsx)(M.j, {
      paymentRestrictionBannerType: ev
    }), !eE && eg && !el && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(D.pK, {
        negativeMarginBottom: true,
        negativeMarginTop: true
      }), (0, r.jsx)(A.P, {
        planSkuId: ef.skuId
      }), (0, r.jsx)(j.$p, {
        planOptions: ey,
        eligibleForMultiMonthPlans: false,
        selectedPlanId: P,
        planGroup: W,
        showTotal: false,
        handleClose: et
      }), (0, r.jsx)(D.pK, {})]
    }), el && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/medium",
        children: B.intl.formatToPlainString(V.default["h1i+H8"], {
          premiumGroupProductName: (0, G.DP)(),
          cooldownMonths: G.wl
        })
      }), (0, r.jsx)(D.pK, {})]
    }), (0, r.jsx)(d.D0$, {
      label: t,
      children: eb
    }), (0, r.jsx)("div", {
      className: Y.LC,
      children: (0, r.jsx)(_.A, {
        label: B.intl.string(B.t["mmDvV+"]),
        paymentSources: Object.values(a),
        selectedPaymentSourceId: eu,
        onChange: m,
        onPaymentSourceAdd: g,
        hidePersonalInformation: ep,
        disabled: em,
        paymentGatewayRestrictions: null == n ? true : n.eligiblePaymentGateways,
        className: o()({
          [Y.E4]: es
        })
      })
    }), (0, r.jsx)(f.f, {
      currencies: K,
      className: Y.p2,
      children: (0, r.jsx)(f.A, {
        label: B.intl.string(B.t["/AAR02"]),
        selectedCurrency: s.currency,
        currencies: K,
        onChange: z,
        disabled: em
      })
    }), (0, r.jsx)(x.A, {
      isActive: U,
      ref: k,
      children: null != n && (0, R.Ge)(n, P, W) ? (0, r.jsx)(J, {
        premiumSubscription: n,
        newPlan: ef,
        onInvoiceError: H,
        planGroup: W,
        priceOptions: s,
        preventFetch: em,
        disabled: em,
        isEEA: eh,
        paymentSources: a,
        setHasAcceptedTerms: L
      }) : (0, r.jsx)(h.A, {
        onChange: L,
        finePrint: (0, r.jsx)(p.A, {
          subscriptionPlan: ef,
          paymentSourceType: ed,
          basePrice: (0, w.y8)(ef.id, false, ec, s),
          currentSubscription: n,
          planGroup: W
        }),
        forceShow: true,
        showPricingLink: ef.currency !== F.Yri.USD,
        showWithdrawalWaiver: eh,
        disabled: em,
        subscriptionPlan: ef,
        currentSubscription: n,
        planGroup: W
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
  } = (0, b.P5)(), [l, c] = (0, P.C8)({
    subscriptionId: t.id,
    preventFetch: o
  });
  i.useEffect(() => {
    s(l)
  }, [s, l]), i.useEffect(() => {
    n(c)
  }, [n, c]);
  let u = (0, w.J$)(a.paymentSourceId);
  return null != l ? (0, r.jsxs)(D.Yx, {
    className: H.__invalid_invoice,
    children: [(0, r.jsx)(k._J, {
      invoice: l,
      isPrepaidPaymentSource: u
    }), (0, r.jsx)(k.m0, {
      premiumSubscription: t,
      renewalInvoice: l,
      isUpdate: true,
      isPrepaidPaymentSource: u
    })]
  }) : (0, r.jsx)(d.y$y, {})
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
      setInvoicePreview: h,
      premiumBrandRefreshBackgroundClassName: m
    } = (0, b.P5)(),
    {
      isGift: E
    } = (0, y.Pv)(),
    {
      analyticsLocations: O
    } = (0, g.Ay)(),
    A = (0, w.Pg)(n, a.id, 1, new Set(l)),
    {
      proratedInvoicePreview: I,
      proratedInvoiceError: S,
      renewalInvoicePreview: T,
      renewalInvoiceError: C
    } = et({
      premiumSubscription: n,
      newItems: A,
      priceOptions: c,
      preventFetch: f,
      analyticsLocations: O
    });
  i.useEffect(() => {
    h(I)
  }, [h, I]);
  let N = null != S ? S : C;
  if (i.useEffect(() => {
      s(N)
    }, [s, N]), null != N) return (0, r.jsx)(d.wx6, {
    type: "critical",
    children: N.message
  });
  let R = (0, v.vT)({
      isTrial: false,
      isGift: E,
      selectedSkuId: p,
      startedPaymentFlowWithPaymentSources: _.current
    }),
    P = (0, v.UB)(R, I, a);
  if (null !== u && null !== I && (t = (0, w._e)(I.subscriptionPeriodEnd, u.unactivatedUnits, u.endsAt)), null == I || null == T || P) return (0, r.jsx)(d.y$y, {
    className: Y.__invalid_spinner
  });
  let L = (0, w.J$)(c.paymentSourceId);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(k.wP, {
      proratedInvoice: I,
      renewalInvoice: T,
      overrideRenewalDate: t
    }), (0, r.jsxs)(D.Yx, {
      className: o()(Y.SU, m),
      children: [(0, r.jsx)(D.Xd, {
        children: B.intl.string(B.t["2eh+Co"])
      }), (0, r.jsx)(k.mT, {
        invoice: I,
        newPlan: a,
        isPrepaidPaymentSource: L
      }), (0, r.jsx)(k.m0, {
        premiumSubscription: n,
        proratedInvoice: I,
        renewalInvoice: T,
        overrideRenewalDate: t,
        isUpdate: true,
        isPrepaidPaymentSource: L
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
      setHasAcceptedTerms: m
    } = e,
    {
      analyticsLocations: E
    } = (0, g.Ay)(),
    y = (0, w.Pg)(n, a.id, 1, new Set(s)),
    {
      proratedInvoicePreview: b,
      proratedInvoiceError: O,
      renewalInvoicePreview: v,
      renewalInvoiceError: A
    } = et({
      premiumSubscription: n,
      newItems: y,
      priceOptions: l,
      preventFetch: c,
      analyticsLocations: E
    }),
    S = (0, I.g)(_, l.paymentSourceId),
    T = null != A ? A : O;
  return (i.useEffect(() => {
    o(T)
  }, [o, T]), null != T) ? (0, r.jsx)(d.wx6, {
    type: "critical",
    children: T.message
  }) : (null != v && (t = {
    amount: v.subtotal,
    currency: v.currency,
    tax: v.tax,
    taxInclusive: v.taxInclusive
  }), null == t) ? null : (0, r.jsx)(h.A, {
    onChange: m,
    finePrint: (0, r.jsx)(p.A, {
      subscriptionPlan: a,
      paymentSourceType: S,
      basePrice: t,
      proratedAmount: null != b ? b.total : true,
      currentSubscription: n,
      planGroup: s
    }),
    forceShow: true,
    showPricingLink: a.currency !== F.Yri.USD,
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
  } = (0, b.P5)(), {
    analyticsLocations: u
  } = (0, g.Ay)(), [f, p] = (0, P.Kq)({
    subscriptionId: t.id,
    renewal: true,
    applyEntitlements: true,
    paymentSourceId: n.paymentSourceId,
    currency: n.currency,
    preventFetch: a,
    analyticsLocations: u,
    analyticsLocation: m.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
  }), [_, h] = (0, P.Kq)({
    subscriptionId: t.id,
    renewal: true,
    paymentSourceId: n.paymentSourceId,
    currency: n.currency,
    preventFetch: a,
    analyticsLocations: u,
    analyticsLocation: m.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
  });
  i.useEffect(() => {
    l(f)
  }, [l, f]);
  let E = null != p ? p : h;
  if (i.useEffect(() => {
      s(E)
    }, [s, E]), null != E) return (0, r.jsx)(d.wx6, {
    type: "critical",
    children: E.message
  });
  if (null == f || null == _) return (0, r.jsx)(d.y$y, {
    className: Y.__invalid_spinner
  });
  let y = (0, w.J$)(n.paymentSourceId);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: H.o,
      children: B.intl.string(B.t.spIYou)
    }), (0, r.jsxs)(D.Yx, {
      className: o()(Y.SU, c),
      children: [(0, r.jsx)(D.Xd, {
        children: B.intl.string(B.t["2eh+Co"])
      }), (0, r.jsx)(k._J, {
        invoice: f,
        isPrepaidPaymentSource: y
      }), (0, r.jsx)(k.m0, {
        premiumSubscription: t,
        renewalInvoice: _,
        isUpdate: true,
        isPrepaidPaymentSource: y
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
    } = (0, b.P5)(),
    {
      analyticsLocations: _
    } = (0, g.Ay)(),
    [h, m] = (0, P.Kq)({
      subscriptionId: n.id,
      items: (0, w.Pg)(n, a.id, 1, new Set(s)),
      renewal: true,
      applyEntitlements: false,
      paymentSourceId: c.paymentSourceId,
      currency: c.currency,
      preventFetch: u,
      analyticsLocations: _,
      analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
    });
  if (i.useEffect(() => {
      f(h)
    }, [f, h]), null != m) return (0, r.jsx)(d.wx6, {
    type: "critical",
    children: m.message
  });
  if (null == h) return (0, r.jsx)("div", {
    children: (0, r.jsx)(d.y$y, {})
  });
  t = n.type === F.rzx.PREMIUM ? (0, w.Mn)(a.id) : a.name;
  let E = (0, w.J$)(c.paymentSourceId),
    y = h.subscriptionPeriodStart;
  return l.fractionalState === U.xc.FP_SUB_PAUSED && (y = l.endsAt.toDate()), (0, r.jsxs)("div", {
    className: Y.G3,
    children: [(0, r.jsx)("div", {
      className: H.o,
      children: B.intl.format(B.t["+y0Tjy"], {
        renewalDate: y
      })
    }), (0, r.jsxs)(D.Yx, {
      className: o()(Y.SU, p),
      children: [(0, r.jsx)(D.Xd, {
        children: B.intl.string(B.t.iqhIp4)
      }), (0, r.jsx)(D.oR, {
        label: t,
        value: (0, w.jh)(a, c, true)
      }), (0, r.jsx)(L.A, {
        invoice: h
      }), (0, r.jsx)(D.pK, {}), (0, r.jsx)(k.m0, {
        premiumSubscription: n,
        renewalInvoice: h,
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
    analyticsLocation: m.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
  }, [s, l] = (0, P.Kq)(q(K({}, o), {
    renewal: false,
    applyEntitlements: true
  })), [c, u] = (0, P.Kq)(q(K({}, o), {
    renewal: true
  }));
  return {
    proratedInvoicePreview: s,
    proratedInvoiceError: l,
    renewalInvoicePreview: c,
    renewalInvoiceError: u
  }
}