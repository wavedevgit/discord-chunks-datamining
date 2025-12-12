/** Chunk was on web.js **/
/** chunk id: 42818, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  As: () => k,
  By: () => U,
  Lu: () => G,
  e9: () => W,
  hG: () => B,
  nd: () => Y,
  yT: () => K
}), require("./415506.js"), require("./642613.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk509545 = require("./509545.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk374649 = require("./374649.js"),
  Chunk591548 = require("./591548.js"),
  Chunk639119 = require("./639119.js"),
  Chunk811334 = require("./811334.jsx"),
  Chunk585602 = require("./585602.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk626568 = require("./626568.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}
let x = (e, t) => {
    var n;
    return !!(null == (n = e.discounts) ? true : n.some(e => e.type === t))
  },
  L = (e, t) => {
    var n, r, i;
    return e.subscriptionPlanPrice - (null != (i = null == (r = e.discounts) || null == (n = r.find(e => e.type === t)) ? true : n.amount) ? i : 0)
  };

function j(e, t, n, r) {
  let i = x(e, f.eW.PREMIUM_TRIAL);
  switch (e.subscriptionPlanId) {
    case T.Xh.PREMIUM_GROUP_MONTH:
      return P.intl.formatToPlainString(N.default["8bPDtb"], {
        premiumGroupProductName: (0, C.sO)()
      });
    case T.Xh.PREMIUM_MONTH_LEGACY:
    case T.Xh.PREMIUM_YEAR_LEGACY:
    case T.Xh.PREMIUM_MONTH_TIER_0:
    case T.Xh.PREMIUM_YEAR_TIER_0:
    case T.Xh.PREMIUM_MONTH_TIER_1:
    case T.Xh.PREMIUM_YEAR_TIER_1:
    case T.Xh.PREMIUM_MONTH_TIER_2:
    case T.Xh.PREMIUM_YEAR_TIER_2:
    case T.Xh.PREMIUM_3_MONTH_TIER_2:
    case T.Xh.PREMIUM_6_MONTH_TIER_2:
      return (0, E.Gf)(e.subscriptionPlanId, i, n, r);
    case T.Xh.PREMIUM_3_MONTH_GUILD:
    case T.Xh.PREMIUM_6_MONTH_GUILD:
      return P.intl.format(P.t.YAIIWp, {
        num: e.quantity,
        intervalCount: t.intervalCount
      });
    case T.Xh.PREMIUM_MONTH_GUILD:
      return P.intl.format(P.t["3BYyip"], {
        num: e.quantity
      });
    case T.Xh.PREMIUM_YEAR_GUILD:
      return P.intl.format(P.t.JVW4UN, {
        num: e.quantity
      })
  }
  switch (t.interval) {
    case T.rV.MONTH:
      if (1 === t.intervalCount) return P.intl.formatToPlainString(P.t["6oq128"], {
        planName: t.name
      });
      return P.intl.formatToPlainString(P.t["9ydggS"], {
        planName: t.name,
        intervalCount: t.intervalCount
      });
    case T.rV.YEAR:
      return P.intl.formatToPlainString(P.t.V6UFQM, {
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
    showGuildSubscriptionAdjustmentTooltip: a,
    currency: o,
    className: s,
    isPrepaidPaymentSource: f,
    referralTrialOfferId: p,
    inTrialPeriod: _
  } = e, h = (0, c.e7)([m.Z], () => m.Z.get(n.subscriptionPlanId)), g = null == (t = (0, v.N)(p)) ? true : t.subscription_trial;
  l()(null != h, "Missing subscriptionPlan");
  let y = j(n, h, f, (0, E.if)({
    intervalType: null == g ? true : g.interval,
    intervalCount: null == g ? true : g.interval_count
  }));
  true === a && (y = (0, r.jsxs)("div", {
    className: R.invoiceItemLabelWithIcon,
    children: [(0, r.jsxs)("div", {
      children: [y, " "]
    }), (0, r.jsx)(u.u, {
      text: P.intl.format(P.t.UDop9c, {}),
      ariaHidden: true,
      children: (0, r.jsx)(d.idN, {
        size: "md",
        color: "currentColor",
        "aria-label": P.intl.string(P.t.P68ePO),
        className: R.invoiceItemLabelIcon
      })
    })]
  }));
  let O = (0, b.T4)(null != i ? i : n.amount, o),
    I = f ? O : (0, b.og)(O, h.interval, h.intervalCount);
  return (0, r.jsx)(S.i$, {
    label: y,
    value: I,
    originalAmount: n.subscriptionPlanPrice * n.quantity,
    discounts: n.discounts,
    interval: h.interval,
    intervalCount: h.intervalCount,
    currency: o,
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
    className: R.invoiceItemLabelWithIcon,
    children: [t, (0, r.jsx)(u.u, {
      __unsupportedReactNodeAsText: n,
      ariaHidden: true,
      children: (0, r.jsx)(d.idN, {
        size: "md",
        color: "currentColor",
        "aria-label": i,
        className: R.invoiceItemLabelIcon
      })
    })]
  })
}

function U(e) {
  let {
    invoice: t,
    isPrepaidPaymentSource: n
  } = e, i = (0, O.j)(t.invoiceItems), a = i.find(e => !(0, E.Z8)(e.subscriptionPlanId) && e.amount >= 0), o = i.find(e => (0, E.Z8)(e.subscriptionPlanId) && e.amount >= 0), s = (0, c.e7)([m.Z], () => null != o ? m.Z.get(o.subscriptionPlanId) : null), l = null != o ? o.amount : 0, u = (0, b.T4)(l, t.currency), d = null != s ? (0, b.og)(u, s.interval, s.intervalCount) : 0;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != a ? (0, r.jsx)(M, {
      invoiceItem: a,
      currency: t.currency,
      isPrepaidPaymentSource: n
    }) : null, 0 !== l && null != o && null != s ? (0, r.jsx)(S.B1, {
      label: P.intl.formatToPlainString(P.t.a3cAOg, {
        numGuildSubscriptions: o.quantity,
        planName: (0, E.Gf)(s.id, false, n)
      }),
      value: n ? u : d
    }) : null, (0, r.jsx)(I.Z, {
      invoice: t
    }), (0, r.jsx)(S.UN, {}), (0, r.jsx)(S.az, {
      label: P.intl.format(t.taxInclusive ? n ? P.t.BqdxQt : P.t.XH4raN : P.t.RUI48E, {}),
      value: t.currency === A.pKx.USD ? (0, b.T4)(t.total, t.currency) : "".concat((0, b.T4)(t.total, t.currency), "*")
    })]
  })
}

function G(e) {
  let {
    invoice: t,
    newPlan: n,
    isPrepaidPaymentSource: i,
    referralTrialOfferId: a
  } = e, o = (0, O.j)(t.invoiceItems), s = o.find(e => e.subscriptionPlanId === n.id);
  l()(null != s, "Expected newPlanInvoiceItem");
  let c = o.find(e => !(0, E.Z8)(e.subscriptionPlanId) && e.amount < 0),
    u = o.find(e => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find(e => e.type === f.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
    d = x(s, f.eW.PREMIUM_TRIAL),
    p = L(s, f.eW.SUBSCRIPTION_PLAN),
    _ = s.quantity * p,
    m = s.amount + (null != c ? c.amount : 0) - _ + (null != u ? u.amount : 0),
    h = o.filter(e => e.subscriptionPlanId === T.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === T.Xh.PREMIUM_YEAR_GUILD).reduce((e, t) => e + t.amount, 0);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(M, {
      invoiceItem: s,
      currency: t.currency,
      overrideAmount: _,
      isPrepaidPaymentSource: i,
      referralTrialOfferId: a
    }), 0 === m || d ? null : (0, r.jsx)(S.B1, {
      label: (0, r.jsx)(k, {
        label: P.intl.formatToPlainString(P.t.ZSVged, {
          planName: (0, E.PV)(n.id) ? (0, E.MF)(n.id) : n.name
        }),
        tooltipText: P.intl.string(P.t.JmwQJM)
      }),
      value: (0, b.T4)(m, t.currency)
    }), 0 !== h ? (0, r.jsx)(S.B1, {
      label: (0, r.jsx)(k, {
        label: P.intl.string(P.t["+as5ZZ"]),
        tooltipText: P.intl.format(P.t.UDop9c, {}),
        tooltipAriaLabel: P.intl.string(P.t.P68ePO)
      }),
      value: (0, b.T4)(h, t.currency)
    }) : null, (0, r.jsx)(I.Z, {
      invoice: t
    }), (0, r.jsx)(S.UN, {}), (0, r.jsx)(S.az, {
      label: P.intl.format(t.taxInclusive ? i ? P.t.BqdxQt : P.t.XH4raN : P.t.RUI48E, {}),
      value: t.currency === A.pKx.USD ? (0, b.T4)(t.total, t.currency) : "".concat((0, b.T4)(t.total, t.currency), "*")
    })]
  })
}

function Z(e) {
  let t = e.slice();
  return t.sort((e, t) => {
    let n = (0, E.uZ)(e.subscriptionPlanId),
      r = (0, E.uZ)(t.subscriptionPlanId);
    return n && !r ? false : !n && r ? 1 : 0
  }), t
}

function F(e) {
  return e.filter(e => {
    let {
      subscriptionPlanId: t
    } = e;
    return t !== T.Xh.NONE_MONTH && t !== T.Xh.NONE_YEAR
  })
}

function B(e) {
  let {
    proratedInvoice: t,
    renewalInvoice: n,
    overrideRenewalDate: i
  } = e, {
    intervalType: a,
    intervalCount: o
  } = (0, E.dn)(t), {
    intervalType: s,
    intervalCount: l
  } = (0, E.dn)(n);
  if (a !== s || o !== l || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
  let c = null != i ? i : t.subscriptionPeriodEnd;
  return (0, r.jsx)("div", {
    className: R.subscriptionPeriodResetNotice,
    children: P.intl.format(P.t.JWWD4E, {
      renewalDate: c
    })
  })
}

function V(e) {
  let {
    isUpdate: t,
    currentInvoice: n,
    newInvoice: i,
    inTrialPeriod: a
  } = e, s = null != n ? (0, O.j)(n.invoiceItems) : null, l = null != n ? (0, E.dn)(n) : null, {
    intervalType: c,
    intervalCount: u
  } = (0, E.dn)(i), d = null != l && (l.intervalType !== c || l.intervalCount !== u);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(S.UN, {
      extended: true
    }), null != n ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(S.Z9, {
        children: P.intl.string(P.t.tuqjWQ)
      }), F(Z((0, O.j)(n.invoiceItems))).map(e => (0, r.jsx)(M, {
        invoiceItem: e,
        currency: n.currency,
        inTrialPeriod: a
      }, e.id)), (0, r.jsx)(S.UN, {
        extended: true
      })]
    }) : null, (0, r.jsx)(S.Z9, {
      children: P.intl.string(P.t.qxVrh6)
    }), F(Z((0, O.j)(i.invoiceItems))).map(e => {
      let n = null != s && !s.some(t => t.subscriptionPlanId === e.subscriptionPlanId && t.quantity === e.quantity);
      return (0, r.jsx)(M, {
        invoiceItem: e,
        currency: i.currency,
        showGuildSubscriptionAdjustmentTooltip: d && (e.subscriptionPlanId === T.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === T.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === T.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === T.Xh.PREMIUM_6_MONTH_GUILD),
        className: o()({
          [R.subscriptionAddedInvoiceItem]: !t || n
        })
      }, e.id)
    }), (0, r.jsx)(I.Z, {
      invoice: i
    }), (0, r.jsx)(S.UN, {}), (0, r.jsx)(S.B1, {
      label: P.intl.string(P.t.AChTLW),
      value: (0, b.og)((0, b.T4)(i.total, i.currency), c, u),
      className: R.subscriptionCostRow
    })]
  })
}

function H(e) {
  var t;
  let {
    proratedInvoice: n,
    renewalInvoice: i,
    isTrial: a,
    isUpdate: o,
    overrideRenewalDate: s,
    trialFooterMessageOverride: l
  } = e, c = null == (t = (0, v.N)()) ? true : t.subscription_trial, {
    intervalType: u,
    intervalCount: d
  } = (0, E.dn)(i);
  if (null == n) return null;
  if (a) {
    let e = (0, E.if)({
        intervalType: null == c ? true : c.interval,
        intervalCount: null == c ? true : c.interval_count
      }),
      t = (null == c ? true : c.interval) === T.rV.DAY && (null == c ? true : c.interval_count) < 28 ? 2 : 7;
    return null != l ? l : P.intl.format(P.t["2FvcjG"], {
      duration: e,
      days: t,
      contactLink: A.EYA.CONTACT,
      helpdeskArticle: g.Z.getArticleURL(A.BhN.PREMIUM_TRIAL)
    })
  }
  let f = i.taxInclusive ? P.t["hay+gu"] : P.t.da0lki;
  return (0, r.jsx)(r.Fragment, {
    children: P.intl.format(f, {
      rate: (0, b.og)((0, b.T4)(i.subtotal, i.currency), u, d),
      renewalDate: null != s ? s : o ? null != n ? n.subscriptionPeriodEnd : i.subscriptionPeriodStart : i.subscriptionPeriodEnd,
      contactLink: A.EYA.CONTACT,
      helpdeskArticle: g.Z.getArticleURL(A.BhN.BILLING)
    })
  })
}

function Y(e) {
  let {
    premiumSubscription: t,
    proratedInvoice: n,
    renewalInvoice: a,
    overrideRenewalDate: o,
    isUpdate: s = false,
    isTrial: l = false,
    priceOptions: c,
    isPrepaidPaymentSource: u = false,
    trialFooterMessageOverride: f,
    hideSubscriptionDetails: m = false
  } = e, {
    analyticsLocations: g
  } = (0, _.ZP)(), E = D({
    subscriptionId: null == t ? true : t.id,
    renewal: true,
    preventFetch: !s,
    analyticsLocatinons: g,
    analyticsLocation: p.Z.SUBSCRIPTION_INVOICE_FOOTER
  }, c), [b] = (0, y.ED)(E), [O, v] = i.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [u ? null : (0, r.jsx)(S.P7, {
      children: (0, r.jsx)(H, {
        proratedInvoice: n,
        renewalInvoice: a,
        isTrial: l,
        isUpdate: s,
        overrideRenewalDate: o,
        trialFooterMessageOverride: f
      })
    }), !m && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(d.P3F, {
        onClick: () => v(e => !e),
        className: R.subscriptionDetailsToggle,
        children: [O ? P.intl.string(P.t.aBcRbK) : P.intl.string(P.t.X6duqp), (0, r.jsx)(h.Z, {
          direction: O ? h.Z.Directions.UP : h.Z.Directions.DOWN,
          className: R.subscriptionDetailsToggleCaret
        })]
      }), O ? (0, r.jsx)(V, {
        isUpdate: s,
        currentInvoice: b,
        newInvoice: a,
        inTrialPeriod: l
      }) : null]
    })]
  })
}

function W(e) {
  let t, {
      plan: n,
      className: i,
      isPrepaidPaymentSource: a = false,
      isCustomGift: o = false,
      invoicePreview: s
    } = e,
    {
      tax: l,
      taxInclusive: c,
      currency: u
    } = s,
    f = s.total,
    p = f - l,
    _ = (0, b.T4)(p, u),
    m = (0, b.T4)(f, u);
  return t = o ? (0, E.L7)(n.interval, true, true, true, true, (0, E.Rd)(n.id)) : P.intl.formatToPlainString(P.t.LQLxkW, {
    planName: (0, E.Gf)(n.id, false, a)
  }), (0, r.jsxs)("div", {
    className: i,
    children: [(0, r.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      children: P.intl.string(P.t.PEjaCx)
    }), l >= 0 && false === c ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/bold",
        className: R.purchaseDetailsHeaderText,
        children: t
      }), (0, r.jsxs)(S.aO, {
        className: i,
        children: [(0, r.jsx)(S.Z9, {
          children: P.intl.string(P.t.sail9P)
        }), (0, r.jsx)(S.B1, {
          label: t,
          value: _
        }), (0, r.jsx)(I.Z, {
          invoice: s
        }), (0, r.jsx)(S.UN, {}), (0, r.jsx)(S.B1, {
          label: P.intl.string(P.t.txajQG),
          value: m,
          className: R.subscriptionCostRow
        })]
      })]
    }) : (0, r.jsx)(d.Heading, {
      variant: "text-md/normal",
      children: "".concat(t, " - ").concat(m)
    })]
  })
}

function K(e) {
  let t, {
      invoice: n,
      plan: i
    } = e,
    a = (0, O.j)(n.invoiceItems).find(e => e.subscriptionPlanId === i.id);
  return l()(null != a, "newPlanInvoiceItem can not be null"), i.interval === T.rV.MONTH ? t = n.taxInclusive ? P.t.v9QeON : P.t.FALkO5 : i.interval === T.rV.YEAR ? t = n.taxInclusive ? P.t.ECT4A5 : P.t["0HQxKW"] : l()(false, "Invalid interval type"), (0, r.jsx)(d.Text, {
    variant: "text-md/normal",
    children: P.intl.format(t, {
      price: (0, b.T4)(a.subscriptionPlanPrice, n.currency)
    })
  })
}