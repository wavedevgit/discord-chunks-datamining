/** Chunk was on web.js **/
/** chunk id: 692440, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DP: () => B,
  Lw: () => V,
  _J: () => M,
  m0: () => F,
  mT: () => j,
  sw: () => x,
  tC: () => H,
  wP: () => k
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
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

function P(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = D(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function L(e) {
  let {
    invoiceItem: t,
    overrideAmount: n,
    showGuildSubscriptionAdjustmentTooltip: i,
    currency: a,
    className: o,
    isPrepaidPaymentSource: s,
    referralTrialOfferId: l,
    inTrialPeriod: f
  } = e, p = (0, O.V)(l), h = (0, c.bG)([_.A], () => _.A.get(t.subscriptionPlanId)), {
    subscriptionPlan: m,
    label: g,
    value: E,
    subscriptionDiscount: y,
    entitlementDiscount: b
  } = (0, I.Ol)(t, {
    subscriptionPlan: h,
    premiumTrialOffer: p,
    overrideAmount: n,
    isPrepaidPaymentSource: s,
    currency: a
  }), A = g;
  returntrue === i && (A = (0, r.jsxs)("div", {
    className: N._H,
    children: [(0, r.jsxs)("div", {
      children: [A, " "]
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
  })), (0, r.jsx)(v.f0, {
    label: A,
    value: E,
    originalAmount: t.subscriptionPlanPrice * t.quantity,
    subscriptionDiscount: y,
    entitlementDiscount: b,
    interval: m.interval,
    intervalCount: m.intervalCount,
    currency: a,
    className: o,
    inTrialPeriod: f
  })
}

function x(e) {
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

function M(e) {
  let {
    invoice: t,
    isPrepaidPaymentSource: n
  } = e, i = (0, b.Z)(t.invoiceItems), a = i.find(e => !(0, g.z4)(e.subscriptionPlanId) && e.amount >= 0), o = i.find(e => (0, g.z4)(e.subscriptionPlanId) && e.amount >= 0), s = (0, c.bG)([_.A], () => null != o ? _.A.get(o.subscriptionPlanId) : null), l = null != o ? o.amount : 0, u = (0, E.$g)(l, t.currency), d = null != s ? (0, E.CE)(u, s.interval, s.intervalCount) : 0;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != a ? (0, r.jsx)(L, {
      invoiceItem: a,
      currency: t.currency,
      isPrepaidPaymentSource: n
    }) : null, 0 !== l && null != o && null != s ? (0, r.jsx)(v.oR, {
      label: C.intl.formatToPlainString(C.t.a3cAOg, {
        numGuildSubscriptions: o.quantity,
        planName: (0, g.Mn)(s.id, false, n)
      }),
      value: n ? u : d
    }) : null, (0, r.jsx)(A.A, {
      invoice: t
    }), (0, r.jsx)(v.pK, {}), (0, r.jsx)(v.Sd, {
      label: C.intl.format(t.taxInclusive ? n ? C.t.BqdxQt : C.t.XH4raN : C.t.RUI48E, {}),
      value: t.currency === T.Yri.USD ? (0, E.$g)(t.total, t.currency) : "".concat((0, E.$g)(t.total, t.currency), "*")
    })]
  })
}

function j(e) {
  let {
    invoice: t,
    newPlan: n,
    isPrepaidPaymentSource: i,
    referralTrialOfferId: a
  } = e, {
    newPlanInvoiceItem: o,
    basePlanFullAmount: s,
    invoiceAdjustmentDisplayItems: l
  } = (0, I.qi)(t, n);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(L, {
      invoiceItem: o,
      currency: t.currency,
      overrideAmount: s,
      isPrepaidPaymentSource: i,
      referralTrialOfferId: a
    }), l.map(e => {
      let {
        id: t,
        label: n,
        tooltipText: i,
        tooltipAriaLabel: a,
        value: o
      } = e;
      return (0, r.jsx)(v.oR, {
        label: (0, r.jsx)(x, {
          label: n,
          tooltipText: i,
          tooltipAriaLabel: a
        }),
        value: o
      }, t)
    }), (0, r.jsx)(A.A, {
      invoice: t
    }), (0, r.jsx)(v.pK, {}), (0, r.jsx)(v.Sd, {
      label: C.intl.format(t.taxInclusive ? i ? C.t.BqdxQt : C.t.XH4raN : C.t.RUI48E, {}),
      value: t.currency === T.Yri.USD ? (0, E.$g)(t.total, t.currency) : "".concat((0, E.$g)(t.total, t.currency), "*")
    })]
  })
}

function k(e) {
  let {
    proratedInvoice: t,
    renewalInvoice: n,
    overrideRenewalDate: i
  } = e, {
    intervalType: a,
    intervalCount: o
  } = (0, g.Ge)(t), {
    intervalType: s,
    intervalCount: l
  } = (0, g.Ge)(n);
  if (a !== s || o !== l || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
  let c = null != i ? i : t.subscriptionPeriodEnd;
  return (0, r.jsx)("div", {
    className: N.gX,
    children: C.intl.format(C.t.JWWD4E, {
      renewalDate: c
    })
  })
}

function U(e) {
  let {
    isUpdate: t,
    currentInvoice: n,
    newInvoice: i,
    inTrialPeriod: a
  } = e, s = null != n ? (0, b.Z)(n.invoiceItems) : null, {
    intervalType: l,
    intervalCount: c
  } = (0, g.Ge)(i);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(v.pK, {
      extended: true
    }), null != n ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(v.Xd, {
        children: C.intl.string(C.t.tuqjWQ)
      }), (0, I.Q8)(n).map(e => (0, r.jsx)(L, {
        invoiceItem: e,
        currency: n.currency,
        inTrialPeriod: a
      }, e.id)), (0, r.jsx)(v.pK, {
        extended: true
      })]
    }) : null, (0, r.jsx)(v.Xd, {
      children: C.intl.string(C.t.qxVrh6)
    }), (0, I.Q8)(i, n).map(e => {
      let {
        showGuildSubscriptionAdjustmentTooltip: n
      } = e, a = P(e, ["showGuildSubscriptionAdjustmentTooltip"]), l = null != s && !s.some(e => e.subscriptionPlanId === a.subscriptionPlanId && e.quantity === a.quantity);
      return (0, r.jsx)(L, {
        invoiceItem: a,
        currency: i.currency,
        showGuildSubscriptionAdjustmentTooltip: n,
        className: o()({
          [N.sy]: !t || l
        })
      }, a.id)
    }), (0, r.jsx)(A.A, {
      invoice: i
    }), (0, r.jsx)(v.pK, {}), (0, r.jsx)(v.oR, {
      label: C.intl.string(C.t.AChTLW),
      value: (0, E.CE)((0, E.$g)(i.total, i.currency), l, c),
      className: N.RV
    })]
  })
}

function G(e) {
  var t;
  let {
    proratedInvoice: n,
    renewalInvoice: i,
    isTrial: a,
    isUpdate: o,
    overrideRenewalDate: s,
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
      t = (null == c ? true : c.interval) === S.WT.DAY && (null == c ? true : c.interval_count) < 28 ? 2 : 7;
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
      renewalDate: null != s ? s : o ? null != n ? n.subscriptionPeriodEnd : i.subscriptionPeriodStart : i.subscriptionPeriodEnd,
      contactLink: T.X7G.CONTACT,
      helpdeskArticle: m.A.getArticleURL(T.MVz.BILLING)
    })
  })
}

function F(e) {
  let {
    premiumSubscription: t,
    proratedInvoice: n,
    renewalInvoice: a,
    overrideRenewalDate: o,
    isUpdate: s = false,
    isTrial: l = false,
    priceOptions: c,
    isPrepaidPaymentSource: u = false,
    trialFooterMessageOverride: _,
    hideSubscriptionDetails: m = false
  } = e, {
    analyticsLocations: g
  } = (0, p.Ay)(), E = R({
    subscriptionId: null == t ? true : t.id,
    renewal: true,
    preventFetch: !s,
    analyticsLocatinons: g,
    analyticsLocation: f.A.SUBSCRIPTION_INVOICE_FOOTER
  }, c), [b] = (0, y.Kq)(E), [O, A] = i.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [u ? null : (0, r.jsx)(v.X0, {
      children: (0, r.jsx)(G, {
        proratedInvoice: n,
        renewalInvoice: a,
        isTrial: l,
        isUpdate: s,
        overrideRenewalDate: o,
        trialFooterMessageOverride: _
      })
    }), !m && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(d.DUT, {
        onClick: () => A(e => !e),
        className: N.K3,
        children: [O ? C.intl.string(C.t.aBcRbK) : C.intl.string(C.t.X6duqp), (0, r.jsx)(h.A, {
          direction: O ? h.A.Directions.UP : h.A.Directions.DOWN,
          className: N.ts
        })]
      }), O ? (0, r.jsx)(U, {
        isUpdate: s,
        currentInvoice: b,
        newInvoice: a,
        inTrialPeriod: l
      }) : null]
    })]
  })
}
let V = (e, t) => {
  let {
    isCustomGift: n,
    isPrepaidPaymentSource: r
  } = t;
  return n ? (0, g.D8)(e.interval, true, true, true, true, (0, g.m6)(e.id)) : C.intl.formatToPlainString(C.t.LQLxkW, {
    planName: (0, g.Mn)(e.id, false, r)
  })
};

function B(e) {
  let {
    plan: t,
    className: n,
    isPrepaidPaymentSource: i = false,
    isCustomGift: a = false,
    invoicePreview: o
  } = e, {
    tax: s,
    taxInclusive: l,
    currency: c
  } = o, u = o.total, f = u - s, p = (0, E.$g)(f, c), _ = (0, E.$g)(u, c), h = V(t, {
    isCustomGift: a,
    isPrepaidPaymentSource: i
  });
  return (0, r.jsxs)("div", {
    className: n,
    children: [(0, r.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      children: C.intl.string(C.t.PEjaCx)
    }), s >= 0 && false === l ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/bold",
        className: N.Uc,
        children: h
      }), (0, r.jsxs)(v.Yx, {
        className: n,
        children: [(0, r.jsx)(v.Xd, {
          children: C.intl.string(C.t.sail9P)
        }), (0, r.jsx)(v.oR, {
          label: h,
          value: p
        }), (0, r.jsx)(A.A, {
          invoice: o
        }), (0, r.jsx)(v.pK, {}), (0, r.jsx)(v.oR, {
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

function H(e) {
  let t, {
      invoice: n,
      plan: i
    } = e,
    a = (0, b.Z)(n.invoiceItems).find(e => e.subscriptionPlanId === i.id);
  return l()(null != a, "newPlanInvoiceItem can not be null"), i.interval === S.WT.MONTH ? t = n.taxInclusive ? C.t.v9QeON : C.t.FALkO5 : i.interval === S.WT.YEAR ? t = n.taxInclusive ? C.t.ECT4A5 : C.t["0HQxKW"] : l()(false, "Invalid interval type"), (0, r.jsx)(d.Text, {
    variant: "text-md/normal",
    children: C.intl.format(t, {
      price: (0, E.$g)(a.subscriptionPlanPrice, n.currency)
    })
  })
}