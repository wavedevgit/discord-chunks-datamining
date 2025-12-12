/** Chunk was on web.js **/
/** chunk id: 858987, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => O,
  Z: () => S
}), require("./997841.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
    isGift: a,
    planGroup: s,
    isPrepaidPaymentSource: l,
    inReverseTrial: c,
    paymentSourceId: u,
    hasPaymentSources: p
  } = e;
  if (null === u && p) return h.intl.string(h.t.CpOiEO);
  if (t === m.GZ.ONE_TIME) return a ? h.intl.string(h.t.ouo4FK) : h.intl.string(h.t.ExD0Ng);
  if (o()(null != n, "Subscription plan must be selected to render SubscriptionReviewButton"), i === _.POd.BOOST) return h.intl.string(h.t.eUEeCt);
  if (a) return h.intl.string(h.t.ouo4FK);
  if (c) return h.intl.string(h.t.LQVQIq);
  if ((0, d.PV)(n.id)) return l ? h.intl.string(h.t.cRCCJ3) : null != r ? r.isPausedAllowsResumeButNotUpdates ? h.intl.string(h.t.zpi5pg) : (0, f.R4)(r, n.id, s) ? h.intl.string(h.t.IJI7yk) : h.intl.string(h.t.VPuTc5) : (0, d.W_)(null, n);
  return h.intl.string(h.t.YScQSF)
}

function v(e, t) {
  null != e.current && (e.current.scrollIntoView({
    behavior: "smooth"
  }), t())
}

function S(e) {
  var t;
  let {
    legalTermsNodeRef: n,
    invoiceError: i,
    planError: o,
    disablePurchase: d,
    flashLegalTerms: f,
    isSubmitting: m,
    premiumSubscription: g,
    isGift: b,
    planGroup: S,
    isPrepaid: I,
    isTrial: T,
    makePurchase: C,
    needsPaymentSource: A,
    inReverseTrial: N,
    onNext: P,
    onPaymentSourceAdd: R
  } = e, {
    application: w,
    selectedPlan: D,
    hasAcceptedTerms: x,
    purchaseType: L,
    paymentSourceId: j,
    activeSubscription: M,
    devShelfFetchState: k,
    hasPaymentSources: U
  } = (0, u.JL)(), G = O({
    purchaseType: L,
    plan: D,
    premiumSubscription: g,
    isGift: b,
    planGroup: S,
    isPrepaidPaymentSource: I,
    inReverseTrial: N,
    paymentSourceId: j,
    hasPaymentSources: U
  }), {
    analyticsLocations: Z
  } = (0, c.ZP)();
  if (null != i || null != o || d) return (0, r.jsx)(s.Button, {
    variant: "active",
    text: G,
    disabled: true
  });
  if (A && U) return (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    text: h.intl.string(h.t.L7jbQV),
    children: e => (0, r.jsx)(s.Button, y(E({
      variant: "primary",
      text: G
    }, e), {
      type: "submit",
      "data-testid": "submitButton",
      onClick: R
    }))
  });
  if (A && !U) return (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    text: h.intl.string(h.t.L7jbQV),
    children: e => (0, r.jsx)(s.Button, y(E({
      variant: "active",
      text: G
    }, e), {
      type: "submit",
      "data-testid": "submitButton",
      disabled: true
    }))
  });
  if ((0, a.yE)(null != (t = null == w ? true : w.flags) ? t : 0, _.udG.EMBEDDED) && k === l.O.LOADING) return (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    text: h.intl.string(h.t.cjA5tj),
    children: e => (0, r.jsx)(s.Button, y(E({
      variant: "active",
      text: G
    }, e), {
      type: "submit",
      "data-testid": "submitButton",
      disabled: true
    }))
  });
  if (T) return (0, r.jsx)(s.Button, {
    variant: "expressive",
    "data-testid": x ? "purchase" : "submitButton",
    text: G,
    onClick: x ? C : () => v(n, f),
    loading: m,
    iconPosition: "start",
    icon: () => (0, r.jsx)(s.SrA, {
      color: "currentColor"
    })
  });
  else if (!x) return (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    text: h.intl.string(h.t.XdvBLS),
    children: e => (0, r.jsx)(s.Button, y(E({
      variant: "active",
      text: G
    }, e), {
      type: "submit",
      onClick: () => v(n, f),
      "data-testid": "submitButton"
    }))
  });
  else if (N && null != M && null != j) return (0, r.jsx)(p.Z, {
    activeSubscription: M,
    onNext: P,
    isSubmitting: m,
    paymentSourceId: j,
    buttonLabel: G,
    analyticsLocations: Z
  });
  else return (0, r.jsx)(s.Button, {
    variant: "active",
    text: G,
    "data-testid": "purchase",
    onClick: C,
    loading: m
  })
}