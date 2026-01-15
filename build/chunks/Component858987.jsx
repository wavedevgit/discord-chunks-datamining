/** Chunk was on web.js **/
/** chunk id: 858987, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => E,
  Z: () => y
}), require("./997841.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk95015 = require("./95015.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk115130 = require("./115130.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk296848 = require("./296848.js"),
  Chunk244923 = require("./244923.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");

function E(e) {
  let {
    purchaseType: t,
    plan: n,
    premiumSubscription: r,
    productLine: i,
    isGift: o,
    planGroup: s,
    isPrepaidPaymentSource: l,
    inReverseTrial: c,
    paymentSourceId: u,
    hasPaymentSources: d
  } = e;
  if (null === u && d) return g.intl.string(g.t.CpOiEO);
  if (t === m.GZ.ONE_TIME) return o ? g.intl.string(g.t.ouo4FK) : g.intl.string(g.t.ExD0Ng);
  if (a()(null != n, "Subscription plan must be selected to render SubscriptionReviewButton"), i === h.POd.BOOST) return g.intl.string(g.t.eUEeCt);
  if (o) return g.intl.string(g.t.ouo4FK);
  if (c) return g.intl.string(g.t.LQVQIq);
  if ((0, f.PV)(n.id)) return l ? g.intl.string(g.t.cRCCJ3) : null != r ? r.isPausedAllowsResumeButNotUpdates ? g.intl.string(g.t.zpi5pg) : (0, p.R4)(r, n.id, s) ? g.intl.string(g.t.IJI7yk) : g.intl.string(g.t.VPuTc5) : (0, f.W_)(null, n);
  return g.intl.string(g.t.YScQSF)
}

function b(e, t) {
  null != e.current && (e.current.scrollIntoView({
    behavior: "smooth"
  }), t())
}

function y(e) {
  var t;
  let {
    legalTermsNodeRef: n,
    invoiceError: i,
    planError: a,
    disablePurchase: f,
    flashLegalTerms: p,
    isSubmitting: m,
    premiumSubscription: y,
    isGift: O,
    planGroup: v,
    isPrepaid: S,
    isTrial: I,
    makePurchase: T,
    needsPaymentSource: C,
    inReverseTrial: A,
    onNext: N,
    onPaymentSourceAdd: P
  } = e, {
    application: w,
    selectedPlan: R,
    hasAcceptedTerms: D,
    purchaseType: x,
    paymentSourceId: L,
    activeSubscription: j,
    devShelfFetchState: M,
    hasPaymentSources: k
  } = (0, d.JL)(), U = E({
    purchaseType: x,
    plan: R,
    premiumSubscription: y,
    isGift: O,
    planGroup: v,
    isPrepaidPaymentSource: S,
    inReverseTrial: A,
    paymentSourceId: L,
    hasPaymentSources: k
  }), {
    analyticsLocations: G
  } = (0, u.ZP)();
  if (null != i || null != a || f) return (0, r.jsx)(l.Button, {
    variant: "active",
    text: U,
    disabled: true
  });
  if (C && k) return (0, r.jsx)(s.u, {
    text: g.intl.string(g.t.L7jbQV),
    children: (0, r.jsx)(l.Button, {
      variant: "primary",
      text: U,
      type: "submit",
      "data-testid": "submitButton",
      onClick: P
    })
  });
  if (C && !k) return (0, r.jsx)(s.u, {
    text: g.intl.string(g.t.L7jbQV),
    children: (0, r.jsx)(l.Button, {
      variant: "active",
      text: U,
      type: "submit",
      "data-testid": "submitButton",
      disabled: true
    })
  });
  if ((0, o.yE)(null != (t = null == w ? true : w.flags) ? t : 0, h.udG.EMBEDDED) && M === c.O.LOADING) return (0, r.jsx)(s.u, {
    text: g.intl.string(g.t.cjA5tj),
    children: (0, r.jsx)(l.Button, {
      variant: "active",
      text: U,
      type: "submit",
      "data-testid": "submitButton",
      disabled: true
    })
  });
  if (I) return (0, r.jsx)(l.Button, {
    variant: "expressive",
    "data-testid": D ? "purchase" : "submitButton",
    text: U,
    onClick: D ? T : () => b(n, p),
    loading: m,
    iconPosition: "start",
    icon: () => (0, r.jsx)(l.SrA, {
      color: "currentColor"
    })
  });
  else if (!D) return (0, r.jsx)(s.u, {
    text: g.intl.string(g.t.XdvBLS),
    children: (0, r.jsx)(l.Button, {
      variant: "active",
      text: U,
      type: "submit",
      onClick: () => b(n, p),
      "data-testid": "submitButton"
    })
  });
  else if (A && null != j && null != L) return (0, r.jsx)(_.Z, {
    activeSubscription: j,
    onNext: N,
    isSubmitting: m,
    paymentSourceId: L,
    buttonLabel: U,
    analyticsLocations: G
  });
  else return (0, r.jsx)(l.Button, {
    variant: "active",
    text: U,
    "data-testid": "purchase",
    onClick: T,
    loading: m
  })
}