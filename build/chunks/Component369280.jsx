/** Chunk was on web.js **/
/** chunk id: 369280, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => Q
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
  Chunk210507 = require("./210507.js"),
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

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      K(e, t, n[t])
    })
  }
  return e
}

function q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Q(e) {
  let t, {
      premiumSubscription: n,
      paymentSources: a,
      priceOptions: s,
      onPaymentSourceChange: m,
      onPaymentSourceAdd: g,
      planId: D,
      setHasAcceptedTerms: x,
      legalTermsNodeRef: U,
      hasLegalTermsFlash: G,
      onInvoiceError: Y,
      planGroup: K,
      currencies: z,
      onCurrencyChange: q,
      hasOpenInvoice: Z,
      purchaseState: Q,
      handleClose: en
    } = e,
    {
      selectedSkuId: er,
      defaultPlanId: ei,
      isPremium: ea,
      startedPaymentFlowWithPaymentSourcesRef: eo,
      hasPaymentSources: es,
      enablePremiumBrandRefresh: el,
      isPremiumGroupPurchase: ec
    } = (0, b.P5)(),
    {
      isGift: eu
    } = (0, y.Pv)(),
    ed = s.paymentSourceId,
    ef = (0, S.g)(a, ed),
    ep = (0, u.bG)([N.A], () => N.A.get(D));
  l()(null != ep, "Missing newPlan");
  let e_ = (0, u.bG)([T.A], () => T.A.hidePersonalInformation),
    eh = (0, E.A)(),
    em = c.M.EEA_COUNTRIES.has(C.A.ipCountryCodeWithFallback),
    eg = Q === O.h.PURCHASING || Q === O.h.COMPLETED,
    eE = (0, A.vT)({
      isTrial: false,
      isGift: eu,
      selectedSkuId: er,
      startedPaymentFlowWithPaymentSources: eo.current
    }),
    ey = null == n ? true : n.isPausedAllowsResumeButNotUpdates,
    eb = i.useMemo(() => (0, R.Tm)({
      skuId: er,
      isPremium: ea,
      multiMonthPlans: [],
      currentSubscription: n,
      defaultPlanId: ei
    }), [er, n, ei, ea]);
  t = Z || ey ? H.intl.string(H.t.nyzoFb) : ec ? H.intl.formatToPlainString(B.default["3m9DJK"], {
    premiumGroupProductName: (0, F.DP)()
  }) : (0, R.ys)(D) ? (0, R.ff)(n, ep) : H.intl.formatToPlainString(H.t["sBpy9/"], {
    planName: ep.name
  });
  let eO = null;
  null != n && (eO = Z ? (0, r.jsx)(X, {
    premiumSubscription: n,
    onInvoiceError: Y,
    priceOptions: s,
    preventFetch: false
  }) : ey ? (0, r.jsx)(ee, {
    premiumSubscription: n,
    onInvoiceError: Y,
    priceOptions: s,
    preventFetch: eg
  }) : (0, P.Ge)(n, D, K) ? (0, r.jsx)(J, {
    premiumSubscription: n,
    newPlan: ep,
    onInvoiceError: Y,
    planGroup: K,
    priceOptions: s,
    fractionalPremiumInfo: eh,
    preventFetch: eg
  }) : (0, r.jsx)(et, {
    premiumSubscription: n,
    newPlan: ep,
    planGroup: K,
    fractionalPremiumInfo: eh,
    priceOptions: s,
    preventFetch: eg
  }));
  let ev = null == n ? true : n.eligiblePaymentGateways,
    eA = null != ev && ev.length > 0 && (ed === w.B || null === ef) && es ? j.f.SELECT_PAYMENT_METHOD : true;
  return (0, r.jsxs)("div", {
    className: W.Du,
    children: [(0, r.jsx)(j.j, {
      paymentRestrictionBannerType: eA
    }), !ey && eE && !ec && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(L.pK, {
        negativeMarginBottom: true,
        negativeMarginTop: true
      }), (0, r.jsx)(I.P, {
        planSkuId: ep.skuId
      }), (0, r.jsx)(k.$p, {
        planOptions: eb,
        eligibleForMultiMonthPlans: false,
        selectedPlanId: D,
        planGroup: K,
        showTotal: false,
        handleClose: en
      }), (0, r.jsx)(L.pK, {})]
    }), ec && (0, r.jsx)("div", {
      className: W.Ni,
      children: (0, r.jsx)(d.wx6, {
        type: "info",
        children: (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          children: (0, v.Nn)()
        })
      })
    }), (0, r.jsx)(d.D0$, {
      label: t,
      children: eO
    }), (0, r.jsx)("div", {
      className: W.LC,
      children: (0, r.jsx)(_.A, {
        label: H.intl.string(H.t["mmDvV+"]),
        paymentSources: Object.values(a),
        selectedPaymentSourceId: ed,
        onChange: m,
        onPaymentSourceAdd: g,
        hidePersonalInformation: e_,
        disabled: eg,
        paymentGatewayRestrictions: null == n ? true : n.eligiblePaymentGateways,
        className: o()({
          [W.E4]: el
        })
      })
    }), (0, r.jsx)(f.f, {
      currencies: z,
      className: W.p2,
      children: (0, r.jsx)(f.A, {
        label: H.intl.string(H.t["/AAR02"]),
        selectedCurrency: s.currency,
        currencies: z,
        onChange: q,
        disabled: eg
      })
    }), (0, r.jsx)(M.A, {
      isActive: G,
      ref: U,
      children: null != n && (0, P.Ge)(n, D, K) ? (0, r.jsx)($, {
        premiumSubscription: n,
        newPlan: ep,
        onInvoiceError: Y,
        planGroup: K,
        priceOptions: s,
        preventFetch: eg,
        disabled: eg,
        isEEA: em,
        paymentSources: a,
        setHasAcceptedTerms: x
      }) : (0, r.jsx)(h.A, {
        onChange: x,
        finePrint: (0, r.jsx)(p.A, {
          subscriptionPlan: ep,
          paymentSourceType: ef,
          basePrice: (0, R.y8)(ep.id, false, eu, s),
          currentSubscription: n,
          planGroup: K
        }),
        forceShow: true,
        showPricingLink: ep.currency !== V.Yri.USD,
        showWithdrawalWaiver: em,
        disabled: eg,
        subscriptionPlan: ep,
        currentSubscription: n,
        planGroup: K
      })
    })]
  })
}

function X(e) {
  let {
    premiumSubscription: t,
    onInvoiceError: n,
    priceOptions: a,
    preventFetch: o
  } = e, {
    setInvoicePreview: s
  } = (0, b.P5)(), [l, c] = (0, D.C8)({
    subscriptionId: t.id,
    preventFetch: o
  });
  i.useEffect(() => {
    s(l)
  }, [s, l]), i.useEffect(() => {
    n(c)
  }, [n, c]);
  let u = (0, R.J$)(a.paymentSourceId);
  return null != l ? (0, r.jsxs)(L.Yx, {
    className: Y.__invalid_invoice,
    children: [(0, r.jsx)(U._J, {
      invoice: l,
      isPrepaidPaymentSource: u
    }), (0, r.jsx)(U.m0, {
      premiumSubscription: t,
      renewalInvoice: l,
      isUpdate: true,
      isPrepaidPaymentSource: u
    })]
  }) : (0, r.jsx)(d.y$y, {})
}

function J(e) {
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
    v = (0, R.Pg)(n, a.id, 1, new Set(l)),
    {
      proratedInvoicePreview: I,
      proratedInvoiceError: S,
      renewalInvoicePreview: T,
      renewalInvoiceError: C
    } = en({
      premiumSubscription: n,
      newItems: v,
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
  let w = (0, A.vT)({
      isTrial: false,
      isGift: E,
      selectedSkuId: p,
      startedPaymentFlowWithPaymentSources: _.current
    }),
    P = (0, A.UB)(w, I, a);
  if (null !== u && null !== I && (t = (0, R._e)(I.subscriptionPeriodEnd, u.unactivatedUnits, u.endsAt)), null == I || null == T || P) return (0, r.jsx)(d.y$y, {
    className: W.__invalid_spinner
  });
  let D = (0, R.J$)(c.paymentSourceId);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(U.wP, {
      proratedInvoice: I,
      renewalInvoice: T,
      overrideRenewalDate: t
    }), (0, r.jsxs)(L.Yx, {
      className: o()(W.SU, m),
      children: [(0, r.jsx)(L.Xd, {
        children: H.intl.string(H.t["2eh+Co"])
      }), (0, r.jsx)(U.mT, {
        invoice: I,
        newPlan: a,
        isPrepaidPaymentSource: D
      }), (0, r.jsx)(U.m0, {
        premiumSubscription: n,
        proratedInvoice: I,
        renewalInvoice: T,
        overrideRenewalDate: t,
        isUpdate: true,
        isPrepaidPaymentSource: D
      })]
    })]
  })
}

function $(e) {
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
    y = (0, R.Pg)(n, a.id, 1, new Set(s)),
    {
      proratedInvoicePreview: b,
      proratedInvoiceError: O,
      renewalInvoicePreview: v,
      renewalInvoiceError: A
    } = en({
      premiumSubscription: n,
      newItems: y,
      priceOptions: l,
      preventFetch: c,
      analyticsLocations: E
    }),
    I = (0, S.g)(_, l.paymentSourceId),
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
      paymentSourceType: I,
      basePrice: t,
      proratedAmount: null != b ? b.total : true,
      currentSubscription: n,
      planGroup: s
    }),
    forceShow: true,
    showPricingLink: a.currency !== V.Yri.USD,
    showWithdrawalWaiver: f,
    disabled: u,
    subscriptionPlan: a,
    currentSubscription: n,
    planGroup: s
  })
}

function ee(e) {
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
  } = (0, g.Ay)(), [f, p] = (0, D.Kq)({
    subscriptionId: t.id,
    renewal: true,
    applyEntitlements: true,
    paymentSourceId: n.paymentSourceId,
    currency: n.currency,
    preventFetch: a,
    analyticsLocations: u,
    analyticsLocation: m.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
  }), [_, h] = (0, D.Kq)({
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
    className: W.__invalid_spinner
  });
  let y = (0, R.J$)(n.paymentSourceId);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: Y.o,
      children: H.intl.string(H.t.spIYou)
    }), (0, r.jsxs)(L.Yx, {
      className: o()(W.SU, c),
      children: [(0, r.jsx)(L.Xd, {
        children: H.intl.string(H.t["2eh+Co"])
      }), (0, r.jsx)(U._J, {
        invoice: f,
        isPrepaidPaymentSource: y
      }), (0, r.jsx)(U.m0, {
        premiumSubscription: t,
        renewalInvoice: _,
        isUpdate: true,
        isPrepaidPaymentSource: y
      })]
    })]
  })
}

function et(e) {
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
    [h, m] = (0, D.Kq)({
      subscriptionId: n.id,
      items: (0, R.Pg)(n, a.id, 1, new Set(s)),
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
  t = n.type === V.rzx.PREMIUM ? (0, R.Mn)(a.id) : a.name;
  let E = (0, R.J$)(c.paymentSourceId),
    y = h.subscriptionPeriodStart;
  return l.fractionalState === G.xc.FP_SUB_PAUSED && (y = l.endsAt.toDate()), (0, r.jsxs)("div", {
    className: W.G3,
    children: [(0, r.jsx)("div", {
      className: Y.o,
      children: H.intl.format(H.t["+y0Tjy"], {
        renewalDate: y
      })
    }), (0, r.jsxs)(L.Yx, {
      className: o()(W.SU, p),
      children: [(0, r.jsx)(L.Xd, {
        children: H.intl.string(H.t.iqhIp4)
      }), (0, r.jsx)(L.oR, {
        label: t,
        value: (0, R.jh)(a, c, true)
      }), (0, r.jsx)(x.A, {
        invoice: h
      }), (0, r.jsx)(L.pK, {}), (0, r.jsx)(U.m0, {
        premiumSubscription: n,
        renewalInvoice: h,
        isUpdate: true,
        isPrepaidPaymentSource: E
      })]
    })]
  })
}
let en = e => {
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
  }, [s, l] = (0, D.Kq)(Z(z({}, o), {
    renewal: false,
    applyEntitlements: true
  })), [c, u] = (0, D.Kq)(Z(z({}, o), {
    renewal: true
  }));
  return {
    proratedInvoicePreview: s,
    proratedInvoiceError: l,
    renewalInvoicePreview: c,
    renewalInvoiceError: u
  }
}