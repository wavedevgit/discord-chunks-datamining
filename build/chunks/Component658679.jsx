/** Chunk was on web.js **/
/** chunk id: 658679, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b,
  R: () => E
}), require("./938796.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk665260 = require("./665260.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk10716 = require("./10716.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk615396 = require("./615396.js"),
  Chunk766998 = require("./766998.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx");

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
  if (t === m.VV.ONE_TIME) return o ? g.intl.string(g.t.ouo4FK) : g.intl.string(g.t.ExD0Ng);
  if (a()(null != n, "Subscription plan must be selected to render SubscriptionReviewButton"), i === h.EZt.BOOST) return g.intl.string(g.t.eUEeCt);
  if (o) return g.intl.string(g.t.ouo4FK);
  if (c) return g.intl.string(g.t.LQVQIq);
  if ((0, f.ys)(n.id)) return l ? g.intl.string(g.t.cRCCJ3) : null != r ? r.isPausedAllowsResumeButNotUpdates ? g.intl.string(g.t.zpi5pg) : (0, p.Ge)(r, n.id, s) ? g.intl.string(g.t.IJI7yk) : g.intl.string(g.t.VPuTc5) : (0, f.ff)(null, n);
  return g.intl.string(g.t.YScQSF)
}

function y(e, t) {
  null != e.current && (e.current.scrollIntoView({
    behavior: "smooth"
  }), t())
}

function b(e) {
  var t;
  let {
    legalTermsNodeRef: n,
    invoiceError: i,
    planError: a,
    disablePurchase: f,
    flashLegalTerms: p,
    isSubmitting: m,
    premiumSubscription: b,
    isGift: O,
    planGroup: v,
    isPrepaid: A,
    isTrial: I,
    makePurchase: S,
    needsPaymentSource: T,
    inReverseTrial: C,
    onNext: N,
    onPaymentSourceAdd: w
  } = e, {
    application: R,
    selectedPlan: P,
    hasAcceptedTerms: D,
    purchaseType: L,
    paymentSourceId: x,
    activeSubscription: M,
    devShelfFetchState: j,
    hasPaymentSources: k
  } = (0, d.P5)(), U = E({
    purchaseType: L,
    plan: P,
    premiumSubscription: b,
    isGift: O,
    planGroup: v,
    isPrepaidPaymentSource: A,
    inReverseTrial: C,
    paymentSourceId: x,
    hasPaymentSources: k
  }), {
    analyticsLocations: G
  } = (0, u.Ay)();
  if (null != i || null != a || f) return (0, r.jsx)(l.Button, {
    variant: "active",
    text: U,
    disabled: true
  });
  if (T && k) return (0, r.jsx)(s.m_, {
    text: g.intl.string(g.t.L7jbQV),
    children: (0, r.jsx)(l.Button, {
      variant: "primary",
      text: U,
      type: "submit",
      "data-testid": "submitButton",
      onClick: w
    })
  });
  if (T && !k) return (0, r.jsx)(s.m_, {
    text: g.intl.string(g.t.L7jbQV),
    children: (0, r.jsx)(l.Button, {
      variant: "active",
      text: U,
      type: "submit",
      "data-testid": "submitButton",
      disabled: true
    })
  });
  if ((0, o.Lt)(null != (t = null == R ? true : R.flags) ? t : 0, h.gfo.EMBEDDED) && j === c.$.LOADING) return (0, r.jsx)(s.m_, {
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
    onClick: D ? S : () => y(n, p),
    loading: m,
    iconPosition: "start",
    icon: () => (0, r.jsx)(l.tvc, {
      color: "currentColor"
    })
  });
  else if (!D) return (0, r.jsx)(s.m_, {
    text: g.intl.string(g.t.XdvBLS),
    children: (0, r.jsx)(l.Button, {
      variant: "active",
      text: U,
      type: "submit",
      onClick: () => y(n, p),
      "data-testid": "submitButton"
    })
  });
  else if (C && null != M && null != x) return (0, r.jsx)(_.A, {
    activeSubscription: M,
    onNext: N,
    isSubmitting: m,
    paymentSourceId: x,
    buttonLabel: U,
    analyticsLocations: G
  });
  else return (0, r.jsx)(l.Button, {
    variant: "active",
    text: U,
    "data-testid": "purchase",
    onClick: S,
    loading: m
  })
}