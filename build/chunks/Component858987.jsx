/** Chunk was on web.js **/
/** chunk id: 858987, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => O,
  Z: () => I
}), require("./997841.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk95015 = require("./95015.js"),
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

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
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
    hasPaymentSources: _
  } = e;
  if (null === u && _) return m.intl.string(m.t.CpOiEO);
  if (t === h.GZ.ONE_TIME) return o ? m.intl.string(m.t.ouo4FK) : m.intl.string(m.t.ExD0Ng);
  if (a()(null != n, "Subscription plan must be selected to render SubscriptionReviewButton"), i === p.POd.BOOST) return m.intl.string(m.t.eUEeCt);
  if (o) return m.intl.string(m.t.ouo4FK);
  if (c) return m.intl.string(m.t.LQVQIq);
  if ((0, d.PV)(n.id)) return l ? m.intl.string(m.t.cRCCJ3) : null != r ? r.isPausedAllowsResumeButNotUpdates ? m.intl.string(m.t.zpi5pg) : (0, f.R4)(r, n.id, s) ? m.intl.string(m.t.IJI7yk) : m.intl.string(m.t.VPuTc5) : (0, d.W_)(null, n);
  return m.intl.string(m.t.YScQSF)
}

function v(e, t) {
  null != e.current && (e.current.scrollIntoView({
    behavior: "smooth"
  }), t())
}

function I(e) {
  var t;
  let {
    legalTermsNodeRef: n,
    invoiceError: i,
    planError: a,
    disablePurchase: d,
    flashLegalTerms: f,
    isSubmitting: h,
    premiumSubscription: g,
    isGift: b,
    planGroup: I,
    isPrepaid: T,
    isTrial: S,
    makePurchase: A,
    needsPaymentSource: C,
    inReverseTrial: N,
    onNext: R,
    onPaymentSourceAdd: P
  } = e, {
    application: D,
    selectedPlan: w,
    hasAcceptedTerms: L,
    purchaseType: x,
    paymentSourceId: M,
    activeSubscription: j,
    devShelfFetchState: k,
    hasPaymentSources: U
  } = (0, u.JL)(), G = O({
    purchaseType: x,
    plan: w,
    premiumSubscription: g,
    isGift: b,
    planGroup: I,
    isPrepaidPaymentSource: T,
    inReverseTrial: N,
    paymentSourceId: M,
    hasPaymentSources: U
  }), {
    analyticsLocations: B
  } = (0, c.ZP)();
  if (null != i || null != a || d) return (0, r.jsx)(s.Button, {
    variant: "active",
    text: G,
    disabled: true
  });
  if (C && U) return (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    text: m.intl.string(m.t.L7jbQV),
    children: e => (0, r.jsx)(s.Button, y(E({
      variant: "primary",
      text: G
    }, e), {
      type: "submit",
      "data-testid": "submitButton",
      onClick: P
    }))
  });
  if (C && !U) return (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    text: m.intl.string(m.t.L7jbQV),
    children: e => (0, r.jsx)(s.Button, y(E({
      variant: "active",
      text: G
    }, e), {
      type: "submit",
      "data-testid": "submitButton",
      disabled: true
    }))
  });
  if ((0, o.yE)(null != (t = null == D ? true : D.flags) ? t : 0, p.udG.EMBEDDED) && k === l.O.LOADING) return (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    text: m.intl.string(m.t.cjA5tj),
    children: e => (0, r.jsx)(s.Button, y(E({
      variant: "active",
      text: G
    }, e), {
      type: "submit",
      "data-testid": "submitButton",
      disabled: true
    }))
  });
  if (S) return (0, r.jsx)(s.Button, {
    variant: "expressive",
    "data-testid": L ? "purchase" : "submitButton",
    text: G,
    onClick: L ? A : () => v(n, f),
    loading: h,
    iconPosition: "start",
    icon: () => (0, r.jsx)(s.SrA, {
      color: "currentColor"
    })
  });
  else if (!L) return (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    text: m.intl.string(m.t.XdvBLS),
    children: e => (0, r.jsx)(s.Button, y(E({
      variant: "active",
      text: G
    }, e), {
      type: "submit",
      onClick: () => v(n, f),
      "data-testid": "submitButton"
    }))
  });
  else if (N && null != j && null != M) return (0, r.jsx)(_.Z, {
    activeSubscription: j,
    onNext: R,
    isSubmitting: h,
    paymentSourceId: M,
    buttonLabel: G,
    analyticsLocations: B
  });
  else return (0, r.jsx)(s.Button, {
    variant: "active",
    text: G,
    "data-testid": "purchase",
    onClick: A,
    loading: h
  })
}