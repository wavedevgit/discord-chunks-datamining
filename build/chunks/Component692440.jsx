/** Chunk was on web.js **/
/** chunk id: 692440, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DP: () => V,
  Lw: () => G,
  _J: () => x,
  m0: () => U,
  mT: () => L,
  sw: () => D,
  tC: () => F,
  wP: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk97352 = require("./97352.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk543767 = require("./543767.js"),
  Chunk874638 = require("./874638.js"),
  Chunk234419 = require("./234419.js"),
  Chunk735164 = require("./735164.jsx"),
  Chunk787455 = require("./787455.jsx"),
  Chunk815545 = require("./815545.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk362442 = require("./362442.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function P(e) {
  let {
    invoiceItem: t,
    overrideAmount: n,
    showGuildSubscriptionAdjustmentTooltip: i,
    currency: a,
    className: s,
    isPrepaidPaymentSource: o,
    referralTrialOfferId: l,
    inTrialPeriod: f
  } = e, p = (0, O.V)(l), h = (0, c.bG)([_.A], () => _.A.get(t.subscriptionPlanId)), {
    subscriptionPlan: m,
    label: g,
    value: E,
    subscriptionDiscount: b,
    entitlementDiscount: y
  } = (0, S.Ol)(t, {
    subscriptionPlan: h,
    premiumTrialOffer: p,
    overrideAmount: n,
    isPrepaidPaymentSource: o,
    currency: a
  }), v = g;
  returntrue === i && (v = (0, r.jsxs)("div", {
    className: N._H,
    children: [(0, r.jsxs)("div", {
      children: [v, " "]
    }), (0, r.jsx)(u.m_, {
      text: C.intl.format(C.t.UDop9c, {}),
      ariaHidden: true,
      children: (0, r.jsx)(d.cBN, {
        size: "md",
        color: "currentColor",
        "aria-label": C.intl.string(C.t.P68ePO),
        className: N.kK
      })
    })]
  })), (0, r.jsx)(A.f0, {
    label: v,
    value: E,
    originalAmount: t.subscriptionPlanPrice * t.quantity,
    subscriptionDiscount: b,
    entitlementDiscount: y,
    interval: m.interval,
    intervalCount: m.intervalCount,
    currency: a,
    className: s,
    inTrialPeriod: f
  })
}

function D(e) {
  let {
    label: t,
    tooltipText: n,
    tooltipAriaLabel: i
  } = e;
  return (0, r.jsxs)("div", {
    className: N._H,
    children: [t, (0, r.jsx)(u.m_, {
      __unsupportedReactNodeAsText: n,
      ariaHidden: true,
      children: (0, r.jsx)(d.cBN, {
        size: "md",
        color: "currentColor",
        "aria-label": i,
        className: N.kK
      })
    })]
  })
}

function x(e) {
  let {
    invoice: t,
    isPrepaidPaymentSource: n
  } = e, i = (0, y.Z)(t.invoiceItems), a = i.find(e => !(0, g.z4)(e.subscriptionPlanId) && e.amount >= 0), s = i.find(e => (0, g.z4)(e.subscriptionPlanId) && e.amount >= 0), o = (0, c.bG)([_.A], () => null != s ? _.A.get(s.subscriptionPlanId) : null), l = null != s ? s.amount : 0, u = (0, E.$g)(l, t.currency), d = null != o ? (0, E.CE)(u, o.interval, o.intervalCount) : 0;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != a ? (0, r.jsx)(P, {
      invoiceItem: a,
      currency: t.currency,
      isPrepaidPaymentSource: n
    }) : null, 0 !== l && null != s && null != o ? (0, r.jsx)(A.oR, {
      label: C.intl.formatToPlainString(C.t.a3cAOg, {
        numGuildSubscriptions: s.quantity,
        planName: (0, g.Mn)(o.id, false, n)
      }),
      value: n ? u : d
    }) : null, (0, r.jsx)(v.A, {
      invoice: t
    }), (0, r.jsx)(A.pK, {}), (0, r.jsx)(A.Sd, {
      label: C.intl.format(t.taxInclusive ? n ? C.t.BqdxQt : C.t.XH4raN : C.t.RUI48E, {}),
      value: t.currency === T.Yri.USD ? (0, E.$g)(t.total, t.currency) : "".concat((0, E.$g)(t.total, t.currency), "*")
    })]
  })
}

function L(e) {
  let {
    invoice: t,
    newPlan: n,
    isPrepaidPaymentSource: i,
    referralTrialOfferId: a
  } = e, {
    newPlanInvoiceItem: s,
    basePlanFullAmount: o,
    invoiceAdjustmentDisplayItems: l
  } = (0, S.qi)(t, n);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(P, {
      invoiceItem: s,
      currency: t.currency,
      overrideAmount: o,
      isPrepaidPaymentSource: i,
      referralTrialOfferId: a
    }), l.map(e => {
      let {
        id: t,
        label: n,
        tooltipText: i,
        tooltipAriaLabel: a,
        value: s
      } = e;
      return (0, r.jsx)(A.oR, {
        label: (0, r.jsx)(D, {
          label: n,
          tooltipText: i,
          tooltipAriaLabel: a
        }),
        value: s
      }, t)
    }), (0, r.jsx)(v.A, {
      invoice: t
    }), (0, r.jsx)(A.pK, {}), (0, r.jsx)(A.Sd, {
      label: C.intl.format(t.taxInclusive ? i ? C.t.BqdxQt : C.t.XH4raN : C.t.RUI48E, {}),
      value: t.currency === T.Yri.USD ? (0, E.$g)(t.total, t.currency) : "".concat((0, E.$g)(t.total, t.currency), "*")
    })]
  })
}

function j(e) {
  let {
    proratedInvoice: t,
    renewalInvoice: n,
    overrideRenewalDate: i
  } = e, {
    intervalType: a,
    intervalCount: s
  } = (0, g.Ge)(t), {
    intervalType: o,
    intervalCount: l
  } = (0, g.Ge)(n);
  if (a !== o || s !== l || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
  let c = null != i ? i : t.subscriptionPeriodEnd;
  return (0, r.jsx)("div", {
    className: N.gX,
    children: C.intl.format(C.t.JWWD4E, {
      renewalDate: c
    })
  })
}

function M(e) {
  let {
    isUpdate: t,
    currentInvoice: n,
    newInvoice: i,
    inTrialPeriod: a
  } = e, o = null != n ? (0, y.Z)(n.invoiceItems) : null, l = null != n ? (0, g.Ge)(n) : null, {
    intervalType: c,
    intervalCount: u
  } = (0, g.Ge)(i), d = null != l && (l.intervalType !== c || l.intervalCount !== u);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(A.pK, {
      extended: true
    }), null != n ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(A.Xd, {
        children: C.intl.string(C.t.tuqjWQ)
      }), (0, S.Q8)(n).map(e => (0, r.jsx)(P, {
        invoiceItem: e,
        currency: n.currency,
        inTrialPeriod: a
      }, e.id)), (0, r.jsx)(A.pK, {
        extended: true
      })]
    }) : null, (0, r.jsx)(A.Xd, {
      children: C.intl.string(C.t.qxVrh6)
    }), (0, S.Q8)(i).map(e => {
      let n = null != o && !o.some(t => t.subscriptionPlanId === e.subscriptionPlanId && t.quantity === e.quantity);
      return (0, r.jsx)(P, {
        invoiceItem: e,
        currency: i.currency,
        showGuildSubscriptionAdjustmentTooltip: d && (e.subscriptionPlanId === I.gD.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === I.gD.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === I.gD.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === I.gD.PREMIUM_6_MONTH_GUILD),
        className: s()({
          [N.sy]: !t || n
        })
      }, e.id)
    }), (0, r.jsx)(v.A, {
      invoice: i
    }), (0, r.jsx)(A.pK, {}), (0, r.jsx)(A.oR, {
      label: C.intl.string(C.t.AChTLW),
      value: (0, E.CE)((0, E.$g)(i.total, i.currency), c, u),
      className: N.RV
    })]
  })
}

function k(e) {
  var t;
  let {
    proratedInvoice: n,
    renewalInvoice: i,
    isTrial: a,
    isUpdate: s,
    overrideRenewalDate: o,
    trialFooterMessageOverride: l
  } = e, c = null == (t = (0, O.V)()) ? true : t.subscription_trial, {
    intervalType: u,
    intervalCount: d
  } = (0, g.Ge)(i);
  if (null == n) return null;
  if (a) {
    let e = (0, g.re)({
        intervalType: null == c ? true : c.interval,
        intervalCount: null == c ? true : c.interval_count
      }),
      t = (null == c ? true : c.interval) === I.WT.DAY && (null == c ? true : c.interval_count) < 28 ? 2 : 7;
    return null != l ? l : C.intl.format(C.t["2FvcjG"], {
      duration: e,
      days: t,
      contactLink: T.X7G.CONTACT,
      helpdeskArticle: m.A.getArticleURL(T.MVz.PREMIUM_TRIAL)
    })
  }
  let f = i.taxInclusive ? C.t["hay+gu"] : C.t.da0lki;
  return (0, r.jsx)(r.Fragment, {
    children: C.intl.format(f, {
      rate: (0, E.CE)((0, E.$g)(i.subtotal, i.currency), u, d),
      renewalDate: null != o ? o : s ? null != n ? n.subscriptionPeriodEnd : i.subscriptionPeriodStart : i.subscriptionPeriodEnd,
      contactLink: T.X7G.CONTACT,
      helpdeskArticle: m.A.getArticleURL(T.MVz.BILLING)
    })
  })
}

function U(e) {
  let {
    premiumSubscription: t,
    proratedInvoice: n,
    renewalInvoice: a,
    overrideRenewalDate: s,
    isUpdate: o = false,
    isTrial: l = false,
    priceOptions: c,
    isPrepaidPaymentSource: u = false,
    trialFooterMessageOverride: _,
    hideSubscriptionDetails: m = false
  } = e, {
    analyticsLocations: g
  } = (0, p.Ay)(), E = w({
    subscriptionId: null == t ? true : t.id,
    renewal: true,
    preventFetch: !o,
    analyticsLocatinons: g,
    analyticsLocation: f.A.SUBSCRIPTION_INVOICE_FOOTER
  }, c), [y] = (0, b.Kq)(E), [O, v] = i.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [u ? null : (0, r.jsx)(A.X0, {
      children: (0, r.jsx)(k, {
        proratedInvoice: n,
        renewalInvoice: a,
        isTrial: l,
        isUpdate: o,
        overrideRenewalDate: s,
        trialFooterMessageOverride: _
      })
    }), !m && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(d.DUT, {
        onClick: () => v(e => !e),
        className: N.K3,
        children: [O ? C.intl.string(C.t.aBcRbK) : C.intl.string(C.t.X6duqp), (0, r.jsx)(h.A, {
          direction: O ? h.A.Directions.UP : h.A.Directions.DOWN,
          className: N.ts
        })]
      }), O ? (0, r.jsx)(M, {
        isUpdate: o,
        currentInvoice: y,
        newInvoice: a,
        inTrialPeriod: l
      }) : null]
    })]
  })
}
let G = (e, t) => {
  let {
    isCustomGift: n,
    isPrepaidPaymentSource: r
  } = t;
  return n ? (0, g.D8)(e.interval, true, true, true, true, (0, g.m6)(e.id)) : C.intl.formatToPlainString(C.t.LQLxkW, {
    planName: (0, g.Mn)(e.id, false, r)
  })
};

function V(e) {
  let {
    plan: t,
    className: n,
    isPrepaidPaymentSource: i = false,
    isCustomGift: a = false,
    invoicePreview: s
  } = e, {
    tax: o,
    taxInclusive: l,
    currency: c
  } = s, u = s.total, f = u - o, p = (0, E.$g)(f, c), _ = (0, E.$g)(u, c), h = G(t, {
    isCustomGift: a,
    isPrepaidPaymentSource: i
  });
  return (0, r.jsxs)("div", {
    className: n,
    children: [(0, r.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      children: C.intl.string(C.t.PEjaCx)
    }), o >= 0 && false === l ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/bold",
        className: N.Uc,
        children: h
      }), (0, r.jsxs)(A.Yx, {
        className: n,
        children: [(0, r.jsx)(A.Xd, {
          children: C.intl.string(C.t.sail9P)
        }), (0, r.jsx)(A.oR, {
          label: h,
          value: p
        }), (0, r.jsx)(v.A, {
          invoice: s
        }), (0, r.jsx)(A.pK, {}), (0, r.jsx)(A.oR, {
          label: C.intl.string(C.t.txajQG),
          value: _,
          className: N.RV
        })]
      })]
    }) : (0, r.jsx)(d.Heading, {
      variant: "text-md/normal",
      children: "".concat(h, " - ").concat(_)
    })]
  })
}

function F(e) {
  let t, {
      invoice: n,
      plan: i
    } = e,
    a = (0, y.Z)(n.invoiceItems).find(e => e.subscriptionPlanId === i.id);
  return l()(null != a, "newPlanInvoiceItem can not be null"), i.interval === I.WT.MONTH ? t = n.taxInclusive ? C.t.v9QeON : C.t.FALkO5 : i.interval === I.WT.YEAR ? t = n.taxInclusive ? C.t.ECT4A5 : C.t["0HQxKW"] : l()(false, "Invalid interval type"), (0, r.jsx)(d.Text, {
    variant: "text-md/normal",
    children: C.intl.format(t, {
      price: (0, E.$g)(a.subscriptionPlanPrice, n.currency)
    })
  })
}