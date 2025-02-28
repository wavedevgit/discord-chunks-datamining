/** Chunk was on web.js **/
"use strict";
n.d(t, {
  As: () => k,
  By: () => j,
  Lu: () => U,
  e9: () => W,
  hG: () => V,
  nd: () => H,
  yT: () => Y
}), n(411104), n(230036), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(512722),
  l = n.n(s),
  c = n(442837),
  u = n(481060),
  d = n(911969),
  f = n(100527),
  _ = n(906732),
  p = n(509545),
  h = n(259580),
  g = n(63063),
  m = n(74538),
  E = n(937615),
  v = n(374649),
  b = n(591548),
  y = n(639119),
  O = n(653798),
  S = n(585602),
  I = n(474936),
  T = n(981631),
  N = n(388032),
  A = n(757439);

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = (e, t) => {
    var n;
    return !!(null === (n = e.discounts) || void 0 === n ? void 0 : n.some(e => e.type === t))
  },
  L = (e, t) => {
    var n, r, i;
    return e.subscriptionPlanPrice - (null !== (i = null === (r = e.discounts) || void 0 === r ? void 0 : null === (n = r.find(e => e.type === t)) || void 0 === n ? void 0 : n.amount) && void 0 !== i ? i : 0)
  };

function x(e, t, n, r) {
  let i = w(e, d.eW.PREMIUM_TRIAL);
  switch (e.subscriptionPlanId) {
    case I.Xh.PREMIUM_MONTH_LEGACY:
    case I.Xh.PREMIUM_YEAR_LEGACY:
    case I.Xh.PREMIUM_MONTH_TIER_0:
    case I.Xh.PREMIUM_YEAR_TIER_0:
    case I.Xh.PREMIUM_MONTH_TIER_1:
    case I.Xh.PREMIUM_YEAR_TIER_1:
    case I.Xh.PREMIUM_MONTH_TIER_2:
    case I.Xh.PREMIUM_YEAR_TIER_2:
    case I.Xh.PREMIUM_3_MONTH_TIER_2:
    case I.Xh.PREMIUM_6_MONTH_TIER_2:
      return (0, m.Gf)(e.subscriptionPlanId, i, n, r);
    case I.Xh.PREMIUM_3_MONTH_GUILD:
    case I.Xh.PREMIUM_6_MONTH_GUILD:
      return N.NW.format(N.t.YAIIWl, {
        num: e.quantity,
        intervalCount: t.intervalCount
      });
    case I.Xh.PREMIUM_MONTH_GUILD:
      return N.NW.format(N.t["3BYyio"], {
        num: e.quantity
      });
    case I.Xh.PREMIUM_YEAR_GUILD:
      return N.NW.format(N.t.JVW4UF, {
        num: e.quantity
      })
  }
  switch (t.interval) {
    case I.rV.MONTH:
      if (1 === t.intervalCount) return N.NW.formatToPlainString(N.t["6oq129"], {
        planName: t.name
      });
      return N.NW.formatToPlainString(N.t["9ydggY"], {
        planName: t.name,
        intervalCount: t.intervalCount
      });
    case I.rV.YEAR:
      return N.NW.formatToPlainString(N.t.V6UFQE, {
        planName: t.name
      })
  }
  throw Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
}

function M(e) {
  var t;
  let {
    invoiceItem: n,
    overrideAmount: i,
    showGuildSubscriptionAdjustmentTooltip: o,
    currency: a,
    className: s,
    isPrepaidPaymentSource: d,
    referralTrialOfferId: f,
    inTrialPeriod: _
  } = e, h = (0, c.e7)([p.Z], () => p.Z.get(n.subscriptionPlanId)), g = null === (t = (0, y.N)(f)) || void 0 === t ? void 0 : t.subscription_trial;
  l()(null != h, "Missing subscriptionPlan");
  let v = x(n, h, d, (0, m.if)({
    intervalType: null == g ? void 0 : g.interval,
    intervalCount: null == g ? void 0 : g.interval_count
  }));
  !0 === o && (v = (0, r.jsxs)("div", {
    className: A.invoiceItemLabelWithIcon,
    children: [(0, r.jsxs)("div", {
      children: [v, " "]
    }), (0, r.jsx)(u.ua7, {
      text: N.NW.format(N.t.UDop9f, {}),
      "aria-label": N.NW.string(N.t.P68ePD),
      tooltipClassName: A.invoiceItemTooltip,
      children: e => (0, r.jsx)(u.idN, D(R({
        size: "md",
        color: "currentColor"
      }, e), {
        className: A.invoiceItemLabelIcon
      }))
    })]
  }));
  let b = (0, E.T4)(null != i ? i : n.amount, a),
    S = d ? b : (0, E.og)(b, h.interval, h.intervalCount);
  return (0, r.jsx)(O.i$, {
    label: v,
    value: S,
    originalAmount: n.subscriptionPlanPrice * n.quantity,
    discounts: n.discounts,
    interval: h.interval,
    intervalCount: h.intervalCount,
    currency: a,
    className: s,
    inTrialPeriod: _
  })
}

function k(e) {
  let {
    label: t,
    tooltipText: n,
    tooltipAriaLabel: i
  } = e;
  return (0, r.jsxs)("div", {
    className: A.invoiceItemLabelWithIcon,
    children: [t, (0, r.jsx)(u.ua7, {
      clickableOnMobile: !0,
      text: n,
      "aria-label": i,
      tooltipClassName: A.invoiceItemTooltip,
      children: e => (0, r.jsx)(u.idN, D(R({
        size: "md",
        color: "currentColor"
      }, e), {
        className: A.invoiceItemLabelIcon
      }))
    })]
  })
}

function j(e) {
  let {
    invoice: t,
    isPrepaidPaymentSource: n
  } = e, i = (0, b.j)(t.invoiceItems), o = i.find(e => !(0, m.Z8)(e.subscriptionPlanId) && e.amount >= 0), a = i.find(e => (0, m.Z8)(e.subscriptionPlanId) && e.amount >= 0), s = (0, c.e7)([p.Z], () => null != a ? p.Z.get(a.subscriptionPlanId) : null), l = null != a ? a.amount : 0, u = (0, E.T4)(l, t.currency), d = null != s ? (0, E.og)(u, s.interval, s.intervalCount) : 0;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != o ? (0, r.jsx)(M, {
      invoiceItem: o,
      currency: t.currency,
      isPrepaidPaymentSource: n
    }) : null, 0 !== l && null != a && null != s ? (0, r.jsx)(O.R$, {
      label: N.NW.formatToPlainString(N.t.a3cAOj, {
        numGuildSubscriptions: a.quantity,
        planName: (0, m.Gf)(s.id, !1, n)
      }),
      value: n ? u : d
    }) : null, (0, r.jsx)(S.Z, {
      invoice: t
    }), (0, r.jsx)(O.KU, {}), (0, r.jsx)(O.Ji, {
      label: N.NW.format(t.taxInclusive ? n ? N.t.BqdxQk : N.t.XH4raG : N.t.RUI48P, {}),
      value: t.currency === T.pKx.USD ? (0, E.T4)(t.total, t.currency) : "".concat((0, E.T4)(t.total, t.currency), "*")
    })]
  })
}

function U(e) {
  let {
    invoice: t,
    newPlan: n,
    isPrepaidPaymentSource: i,
    referralTrialOfferId: o
  } = e, a = (0, b.j)(t.invoiceItems), s = a.find(e => e.subscriptionPlanId === n.id);
  l()(null != s, "Expected newPlanInvoiceItem");
  let c = a.find(e => !(0, m.Z8)(e.subscriptionPlanId) && e.amount < 0),
    u = a.find(e => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find(e => e.type === d.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
    f = w(s, d.eW.PREMIUM_TRIAL),
    _ = L(s, d.eW.SUBSCRIPTION_PLAN),
    p = s.quantity * _,
    h = s.amount + (null != c ? c.amount : 0) - p + (null != u ? u.amount : 0),
    g = a.filter(e => e.subscriptionPlanId === I.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === I.Xh.PREMIUM_YEAR_GUILD).reduce((e, t) => e + t.amount, 0);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(M, {
      invoiceItem: s,
      currency: t.currency,
      overrideAmount: p,
      isPrepaidPaymentSource: i,
      referralTrialOfferId: o
    }), 0 === h || f ? null : (0, r.jsx)(O.R$, {
      label: (0, r.jsx)(k, {
        label: N.NW.formatToPlainString(N.t.ZSVgeX, {
          planName: (0, m.PV)(n.id) ? (0, m.aq)(n.id) : n.name
        }),
        tooltipText: N.NW.string(N.t.JmwQJC)
      }),
      value: (0, E.T4)(h, t.currency)
    }), 0 !== g ? (0, r.jsx)(O.R$, {
      label: (0, r.jsx)(k, {
        label: N.NW.string(N.t["+as5ZW"]),
        tooltipText: N.NW.format(N.t.UDop9f, {}),
        tooltipAriaLabel: N.NW.string(N.t.P68ePD)
      }),
      value: (0, E.T4)(g, t.currency)
    }) : null, (0, r.jsx)(S.Z, {
      invoice: t
    }), (0, r.jsx)(O.KU, {}), (0, r.jsx)(O.Ji, {
      label: N.NW.format(t.taxInclusive ? i ? N.t.BqdxQk : N.t.XH4raG : N.t.RUI48P, {}),
      value: t.currency === T.pKx.USD ? (0, E.T4)(t.total, t.currency) : "".concat((0, E.T4)(t.total, t.currency), "*")
    })]
  })
}

function G(e) {
  let t = e.slice();
  return t.sort((e, t) => {
    let n = (0, m.uZ)(e.subscriptionPlanId),
      r = (0, m.uZ)(t.subscriptionPlanId);
    return n && !r ? -1 : !n && r ? 1 : 0
  }), t
}

function B(e) {
  return e.filter(e => {
    let {
      subscriptionPlanId: t
    } = e;
    return t !== I.Xh.NONE_MONTH && t !== I.Xh.NONE_YEAR
  })
}

function V(e) {
  let {
    proratedInvoice: t,
    renewalInvoice: n
  } = e, {
    intervalType: i,
    intervalCount: o
  } = (0, m.dn)(t), {
    intervalType: a,
    intervalCount: s
  } = (0, m.dn)(n);
  return i !== a || o !== s || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime() ? null : (0, r.jsx)("div", {
    className: A.subscriptionPeriodResetNotice,
    children: N.NW.format(N.t.JWWD4O, {
      renewalDate: t.subscriptionPeriodEnd
    })
  })
}

function F(e) {
  let {
    isUpdate: t,
    currentInvoice: n,
    newInvoice: i,
    inTrialPeriod: o
  } = e, s = null != n ? (0, b.j)(n.invoiceItems) : null, l = null != n ? (0, m.dn)(n) : null, {
    intervalType: c,
    intervalCount: u
  } = (0, m.dn)(i), d = null != l && (l.intervalType !== c || l.intervalCount !== u);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(O.KU, {
      extended: !0
    }), null != n ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(O.q9, {
        children: N.NW.string(N.t.tuqjWV)
      }), B(G((0, b.j)(n.invoiceItems))).map(e => (0, r.jsx)(M, {
        invoiceItem: e,
        currency: n.currency,
        inTrialPeriod: o
      }, e.id)), (0, r.jsx)(O.KU, {
        extended: !0
      })]
    }) : null, (0, r.jsx)(O.q9, {
      children: N.NW.string(N.t.qxVrh4)
    }), B(G((0, b.j)(i.invoiceItems))).map(e => {
      let n = null != s && !s.some(t => t.subscriptionPlanId === e.subscriptionPlanId && t.quantity === e.quantity);
      return (0, r.jsx)(M, {
        invoiceItem: e,
        currency: i.currency,
        showGuildSubscriptionAdjustmentTooltip: d && (e.subscriptionPlanId === I.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === I.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === I.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === I.Xh.PREMIUM_6_MONTH_GUILD),
        className: a()({
          [A.subscriptionAddedInvoiceItem]: !t || n
        })
      }, e.id)
    }), (0, r.jsx)(S.Z, {
      invoice: i
    }), (0, r.jsx)(O.KU, {}), (0, r.jsx)(O.R$, {
      label: N.NW.string(N.t.AChTLS),
      value: (0, E.og)((0, E.T4)(i.total, i.currency), c, u),
      className: A.subscriptionCostRow
    })]
  })
}

function Z(e) {
  var t;
  let {
    proratedInvoice: n,
    renewalInvoice: i,
    isTrial: o,
    isUpdate: a,
    overrideRenewalDate: s,
    trialFooterMessageOverride: l
  } = e, c = null === (t = (0, y.N)()) || void 0 === t ? void 0 : t.subscription_trial, {
    intervalType: u,
    intervalCount: d
  } = (0, m.dn)(i);
  if (null == n) return null;
  if (o) {
    let e = (0, m.if)({
        intervalType: null == c ? void 0 : c.interval,
        intervalCount: null == c ? void 0 : c.interval_count
      }),
      t = (null == c ? void 0 : c.interval) === I.rV.DAY && (null == c ? void 0 : c.interval_count) < 28 ? 2 : 7;
    return null != l ? l : N.NW.format(N.t["2FvcjI"], {
      duration: e,
      days: t,
      contactLink: T.EYA.CONTACT,
      helpdeskArticle: g.Z.getArticleURL(T.BhN.PREMIUM_TRIAL)
    })
  }
  let f = i.taxInclusive ? N.t["hay+go"] : N.t.da0lkp;
  return (0, r.jsx)(r.Fragment, {
    children: N.NW.format(f, {
      rate: (0, E.og)((0, E.T4)(i.subtotal, i.currency), u, d),
      renewalDate: null != s ? s : a ? null != n ? n.subscriptionPeriodEnd : i.subscriptionPeriodStart : i.subscriptionPeriodEnd,
      contactLink: T.EYA.CONTACT,
      helpdeskArticle: g.Z.getArticleURL(T.BhN.BILLING)
    })
  })
}

function H(e) {
  let {
    premiumSubscription: t,
    proratedInvoice: n,
    renewalInvoice: o,
    overrideRenewalDate: a,
    isUpdate: s = !1,
    isTrial: l = !1,
    priceOptions: c,
    isPrepaidPaymentSource: d = !1,
    trialFooterMessageOverride: p,
    hideSubscriptionDetails: g = !1
  } = e, {
    analyticsLocations: m
  } = (0, _.ZP)(), E = R({
    subscriptionId: null == t ? void 0 : t.id,
    renewal: !0,
    preventFetch: !s,
    analyticsLocatinons: m,
    analyticsLocation: f.Z.SUBSCRIPTION_INVOICE_FOOTER
  }, c), [b] = (0, v.ED)(E), [y, S] = i.useState(!1);
  return (0, r.jsxs)(r.Fragment, {
    children: [d ? null : (0, r.jsx)(O.HE, {
      children: (0, r.jsx)(Z, {
        proratedInvoice: n,
        renewalInvoice: o,
        isTrial: l,
        isUpdate: s,
        overrideRenewalDate: a,
        trialFooterMessageOverride: p
      })
    }), !g && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(u.P3F, {
        onClick: () => S(e => !e),
        className: A.subscriptionDetailsToggle,
        children: [y ? N.NW.string(N.t.aBcRbG) : N.NW.string(N.t.X6duqq), (0, r.jsx)(h.Z, {
          direction: y ? h.Z.Directions.UP : h.Z.Directions.DOWN,
          className: A.subscriptionDetailsToggleCaret
        })]
      }), y ? (0, r.jsx)(F, {
        isUpdate: s,
        currentInvoice: b,
        newInvoice: o,
        inTrialPeriod: l
      }) : null]
    })]
  })
}

function W(e) {
  let t, {
      plan: n,
      className: i,
      isPrepaidPaymentSource: o = !1,
      isCustomGift: a = !1,
      invoicePreview: s
    } = e,
    {
      tax: l,
      taxInclusive: c,
      currency: d
    } = s,
    f = s.total,
    _ = f - l,
    p = (0, E.T4)(_, d),
    h = (0, E.T4)(f, d);
  return t = a ? (0, m.L7)(n.interval, !0, void 0, void 0, !0, (0, m.Rd)(n.id)) : N.NW.formatToPlainString(N.t.LQLxkZ, {
    planName: (0, m.Gf)(n.id, !1, o)
  }), (0, r.jsxs)("div", {
    className: i,
    children: [(0, r.jsx)(u.vwX, {
      children: N.NW.string(N.t.PEjaCw)
    }), l >= 0 && !1 === c ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/bold",
        className: A.purchaseDetailsHeaderText,
        children: t
      }), (0, r.jsxs)(O.PO, {
        className: i,
        children: [(0, r.jsx)(O.q9, {
          children: N.NW.string(N.t.sail9P)
        }), (0, r.jsx)(O.R$, {
          label: t,
          value: p
        }), (0, r.jsx)(S.Z, {
          invoice: s
        }), (0, r.jsx)(O.KU, {}), (0, r.jsx)(O.R$, {
          label: N.NW.string(N.t.txajQE),
          value: h,
          className: A.subscriptionCostRow
        })]
      })]
    }) : (0, r.jsx)(u.X6q, {
      variant: "text-md/normal",
      children: "".concat(t, " - ").concat(h)
    })]
  })
}

function Y(e) {
  let t, {
      invoice: n,
      plan: i
    } = e,
    o = (0, b.j)(n.invoiceItems).find(e => e.subscriptionPlanId === i.id);
  return l()(null != o, "newPlanInvoiceItem can not be null"), i.interval === I.rV.MONTH ? t = n.taxInclusive ? N.t.v9QeOD : N.t.FALkOz : i.interval === I.rV.YEAR ? t = n.taxInclusive ? N.t.ECT4Aw : N.t["0HQxKS"] : l()(!1, "Invalid interval type"), (0, r.jsx)(u.Text, {
    variant: "text-md/normal",
    children: N.NW.format(t, {
      price: (0, E.T4)(o.subscriptionPlanPrice, n.currency)
    })
  })
}