/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => j
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(512722),
  a = n.n(o),
  s = n(742280),
  l = n(442837),
  c = n(481060),
  u = n(190947),
  d = n(224550),
  f = n(275850),
  _ = n(672971),
  p = n(100527),
  h = n(906732),
  g = n(987209),
  m = n(563132),
  E = n(45572),
  v = n(614223),
  b = n(246946),
  y = n(351402),
  O = n(509545),
  S = n(74538),
  I = n(296848),
  T = n(374649),
  N = n(642530),
  A = n(653798),
  C = n(585602),
  R = n(314182),
  P = n(314404),
  D = n(42818),
  w = n(981631),
  L = n(388032),
  x = n(800459),
  M = n(214803);

function j(e) {
  var t;
  let n, {
      premiumSubscription: o,
      paymentSources: p,
      priceOptions: h,
      onPaymentSourceChange: T,
      onPaymentSourceAdd: C,
      planId: D,
      setHasAcceptedTerms: x,
      legalTermsNodeRef: j,
      hasLegalTermsFlash: V,
      onInvoiceError: Z,
      planGroup: H,
      currencies: W,
      onCurrencyChange: Y,
      hasOpenInvoice: K,
      purchaseState: z,
      handleClose: q
    } = e,
    {
      selectedSkuId: Q,
      defaultPlanId: X,
      isPremium: J,
      startedPaymentFlowWithPaymentSourcesRef: $
    } = (0, m.JL)(),
    {
      isGift: ee
    } = (0, g.wD)(),
    et = h.paymentSourceId,
    en = (0, l.e7)([O.Z], () => O.Z.get(D));
  a()(null != en, "Missing newPlan");
  let er = (0, l.e7)([b.Z], () => b.Z.hidePersonalInformation),
    ei = s.M.EEA_COUNTRIES.has(y.Z.ipCountryCodeWithFallback),
    eo = z === E.A.PURCHASING || z === E.A.COMPLETED,
    ea = (0, v.Kp)({
      isTrial: !1,
      isGift: ee,
      selectedSkuId: Q,
      startedPaymentFlowWithPaymentSources: $.current
    }),
    es = (null == o ? void 0 : o.status) === w.O0b.PAUSED,
    el = i.useMemo(() => (0, S.V7)({
      skuId: Q,
      isPremium: J,
      multiMonthPlans: [],
      currentSubscription: o,
      isGift: ee,
      isEligibleForTrial: !1,
      defaultPlanId: X,
      defaultToMonthlyPlan: !1
    }), [Q, o, X, J, ee]);
  n = K || es ? L.NW.string(L.t.nyzoFR) : (0, S.PV)(D) ? (0, S.W_)(o, en) : L.NW.formatToPlainString(L.t["sBpy9/"], {
    planName: en.name
  });
  let ec = null;
  return null != o && (ec = K ? (0, r.jsx)(k, {
    premiumSubscription: o,
    onInvoiceError: Z,
    priceOptions: h,
    preventFetch: !1
  }) : es ? (0, r.jsx)(B, {
    premiumSubscription: o,
    onInvoiceError: Z,
    priceOptions: h,
    preventFetch: eo
  }) : (0, I.R4)(o, D, H) ? (0, r.jsx)(U, {
    premiumSubscription: o,
    newPlan: en,
    onInvoiceError: Z,
    planGroup: H,
    priceOptions: h,
    preventFetch: eo
  }) : (0, r.jsx)(F, {
    premiumSubscription: o,
    newPlan: en,
    planGroup: H,
    priceOptions: h,
    preventFetch: eo
  })), (0, r.jsxs)("div", {
    className: M.stepBody,
    children: [!es && ea && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(A.KU, {
        negativeMarginBottom: !0,
        negativeMarginTop: !0
      }), (0, r.jsx)(N.Z, {}), (0, r.jsx)(P.O, {
        planOptions: el,
        eligibleForMultiMonthPlans: !1,
        selectedPlanId: D,
        showTotal: !1,
        handleClose: q
      }), (0, r.jsx)(A.KU, {})]
    }), (0, r.jsx)(c.vwX, {
      tag: c.RB0.H5,
      children: n
    }), ec, (0, r.jsxs)("div", {
      className: M.paymentSourceWrapper,
      children: [(0, r.jsx)(c.vwX, {
        tag: c.RB0.H5,
        children: L.NW.string(L.t.mmDvV1)
      }), (0, r.jsx)(f.Z, {
        paymentSources: Object.values(p),
        selectedPaymentSourceId: et,
        onChange: T,
        onPaymentSourceAdd: C,
        hidePersonalInformation: er,
        disabled: eo
      })]
    }), (0, r.jsxs)(u.b, {
      currencies: W,
      className: M.currencyWrapper,
      children: [(0, r.jsx)(c.vwX, {
        tag: c.RB0.H5,
        children: L.NW.string(L.t["/AAR09"])
      }), (0, r.jsx)(u.Z, {
        selectedCurrency: h.currency,
        currencies: W,
        onChange: Y,
        disabled: eo
      })]
    }), (0, r.jsx)(R.Z, {
      isActive: V,
      ref: j,
      children: null != o && (0, I.R4)(o, D, H) ? (0, r.jsx)(G, {
        premiumSubscription: o,
        newPlan: en,
        onInvoiceError: Z,
        planGroup: H,
        priceOptions: h,
        preventFetch: eo,
        disabled: eo,
        isEEA: ei,
        paymentSources: p,
        setHasAcceptedTerms: x
      }) : (0, r.jsx)(_.Z, {
        onChange: x,
        finePrint: (0, r.jsx)(d.Z, {
          subscriptionPlan: en,
          paymentSourceType: null === (t = p[null != et ? et : ""]) || void 0 === t ? void 0 : t.type,
          basePrice: (0, S.aS)(en.id, !1, ee, h),
          currentSubscription: o,
          planGroup: H
        }),
        forceShow: !0,
        showPricingLink: en.currency !== w.pKx.USD,
        showWithdrawalWaiver: ei,
        disabled: eo,
        subscriptionPlan: en,
        currentSubscription: o,
        planGroup: H
      })
    })]
  })
}

function k(e) {
  let {
    premiumSubscription: t,
    onInvoiceError: n,
    priceOptions: o,
    preventFetch: a
  } = e, [s, l] = (0, T.Ox)({
    subscriptionId: t.id,
    preventFetch: a
  });
  i.useEffect(() => {
    n(l)
  }, [n, l]);
  let u = (0, S.Ap)(o.paymentSourceId);
  return null != s ? (0, r.jsxs)(A.PO, {
    className: x.__invalid_invoice,
    children: [(0, r.jsx)(D.By, {
      invoice: s,
      isPrepaidPaymentSource: u
    }), (0, r.jsx)(D.nd, {
      premiumSubscription: t,
      renewalInvoice: s,
      isUpdate: !0,
      isPrepaidPaymentSource: u
    })]
  }) : (0, r.jsx)(c.$jN, {})
}

function U(e) {
  let {
    premiumSubscription: t,
    newPlan: n,
    onInvoiceError: o,
    planGroup: a,
    priceOptions: s,
    preventFetch: l
  } = e, {
    selectedSkuId: u,
    startedPaymentFlowWithPaymentSourcesRef: d
  } = (0, m.JL)(), {
    isGift: f
  } = (0, g.wD)(), {
    analyticsLocations: _
  } = (0, h.ZP)(), E = (0, S.al)(t, n.id, 1, new Set(a)), [b, y] = (0, T.ED)({
    subscriptionId: t.id,
    items: E,
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: s.paymentSourceId,
    currency: s.currency,
    preventFetch: l,
    analyticsLocations: _,
    analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
  }), [O, I] = (0, T.ED)({
    subscriptionId: t.id,
    items: E,
    renewal: !0,
    paymentSourceId: s.paymentSourceId,
    currency: s.currency,
    preventFetch: l,
    analyticsLocations: _,
    analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
  }), N = null != y ? y : I;
  if (i.useEffect(() => {
      o(N)
    }, [o, N]), null != N) return (0, r.jsx)(c.kzN, {
    children: N.message
  });
  let C = (0, v.Kp)({
      isTrial: !1,
      isGift: f,
      selectedSkuId: u,
      startedPaymentFlowWithPaymentSources: d.current
    }),
    R = (0, v.$g)(C, b, n);
  if (null == b || null == O || R) return (0, r.jsx)(c.$jN, {
    className: M.__invalid_spinner
  });
  let P = (0, S.Ap)(s.paymentSourceId);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(D.hG, {
      proratedInvoice: b,
      renewalInvoice: O
    }), (0, r.jsxs)(A.PO, {
      className: M.invoice,
      children: [(0, r.jsx)(A.q9, {
        children: L.NW.string(L.t["2eh+Cg"])
      }), (0, r.jsx)(D.Lu, {
        invoice: b,
        newPlan: n,
        isPrepaidPaymentSource: P
      }), (0, r.jsx)(D.nd, {
        premiumSubscription: t,
        proratedInvoice: b,
        renewalInvoice: O,
        isUpdate: !0,
        isPrepaidPaymentSource: P
      })]
    })]
  })
}

function G(e) {
  var t, n;
  let o, {
      premiumSubscription: a,
      newPlan: s,
      onInvoiceError: l,
      planGroup: u,
      priceOptions: f,
      preventFetch: g,
      disabled: m,
      isEEA: E,
      paymentSources: v,
      setHasAcceptedTerms: b
    } = e,
    {
      analyticsLocations: y
    } = (0, h.ZP)(),
    O = (0, S.al)(a, s.id, 1, new Set(u)),
    [I, N] = (0, T.ED)({
      subscriptionId: a.id,
      items: O,
      renewal: !0,
      paymentSourceId: f.paymentSourceId,
      currency: f.currency,
      preventFetch: g,
      analyticsLocations: y,
      analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
    }),
    A = N;
  return (i.useEffect(() => {
    l(A)
  }, [l, A]), null != A) ? (0, r.jsx)(c.kzN, {
    children: A.message
  }) : (null != I && (o = {
    amount: I.total,
    currency: I.currency,
    tax: I.tax,
    taxInclusive: I.taxInclusive
  }), null == o) ? null : (0, r.jsx)(_.Z, {
    onChange: b,
    finePrint: (0, r.jsx)(d.Z, {
      subscriptionPlan: s,
      paymentSourceType: null === (t = v[null !== (n = f.paymentSourceId) && void 0 !== n ? n : ""]) || void 0 === t ? void 0 : t.type,
      basePrice: o,
      currentSubscription: a,
      planGroup: u
    }),
    forceShow: !0,
    showPricingLink: s.currency !== w.pKx.USD,
    showWithdrawalWaiver: E,
    disabled: m,
    subscriptionPlan: s,
    currentSubscription: a,
    planGroup: u
  })
}

function B(e) {
  let {
    premiumSubscription: t,
    priceOptions: n,
    preventFetch: o,
    onInvoiceError: a
  } = e, {
    analyticsLocations: s
  } = (0, h.ZP)(), [l, u] = (0, T.ED)({
    subscriptionId: t.id,
    renewal: !0,
    applyEntitlements: !0,
    paymentSourceId: n.paymentSourceId,
    currency: n.currency,
    preventFetch: o,
    analyticsLocations: s,
    analyticsLocation: p.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
  }), [d, f] = (0, T.ED)({
    subscriptionId: t.id,
    renewal: !0,
    paymentSourceId: n.paymentSourceId,
    currency: n.currency,
    preventFetch: o,
    analyticsLocations: s,
    analyticsLocation: p.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
  }), _ = null != u ? u : f;
  if (i.useEffect(() => {
      a(_)
    }, [a, _]), null != _) return (0, r.jsx)(c.kzN, {
    children: _.message
  });
  if (null == l || null == d) return (0, r.jsx)(c.$jN, {
    className: M.__invalid_spinner
  });
  let g = (0, S.Ap)(n.paymentSourceId);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: x.renewalInvoiceDate,
      children: L.NW.string(L.t.spIYoq)
    }), (0, r.jsxs)(A.PO, {
      className: M.invoice,
      children: [(0, r.jsx)(A.q9, {
        children: L.NW.string(L.t["2eh+Cg"])
      }), (0, r.jsx)(D.By, {
        invoice: l,
        isPrepaidPaymentSource: g
      }), (0, r.jsx)(D.nd, {
        premiumSubscription: t,
        renewalInvoice: d,
        isUpdate: !0,
        isPrepaidPaymentSource: g
      })]
    })]
  })
}

function F(e) {
  let t, {
      premiumSubscription: n,
      newPlan: i,
      planGroup: o,
      priceOptions: a,
      preventFetch: s
    } = e,
    {
      analyticsLocations: l
    } = (0, h.ZP)(),
    [u, d] = (0, T.ED)({
      subscriptionId: n.id,
      items: (0, S.al)(n, i.id, 1, new Set(o)),
      renewal: !0,
      applyEntitlements: !1,
      paymentSourceId: a.paymentSourceId,
      currency: a.currency,
      preventFetch: s,
      analyticsLocations: l,
      analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
    });
  if (null != d) return (0, r.jsx)(c.kzN, {
    children: d.message
  });
  if (null == u) return (0, r.jsx)("div", {
    children: (0, r.jsx)(c.$jN, {})
  });
  t = n.type === w.NYc.PREMIUM ? (0, S.Gf)(i.id) : i.name;
  let f = (0, S.Ap)(a.paymentSourceId);
  return (0, r.jsxs)("div", {
    className: M.bodyText,
    children: [(0, r.jsx)("div", {
      className: x.renewalInvoiceDate,
      children: L.NW.format(L.t["+y0Tj4"], {
        renewalDate: u.subscriptionPeriodStart
      })
    }), (0, r.jsxs)(A.PO, {
      className: M.invoice,
      children: [(0, r.jsx)(A.q9, {
        children: L.NW.string(L.t.iqhIp6)
      }), (0, r.jsx)(A.R$, {
        label: t,
        value: (0, S.PK)(i, a, !0)
      }), (0, r.jsx)(C.Z, {
        invoice: u
      }), (0, r.jsx)(A.KU, {}), (0, r.jsx)(D.nd, {
        premiumSubscription: n,
        renewalInvoice: u,
        isUpdate: !0,
        isPrepaidPaymentSource: f
      })]
    })]
  })
}