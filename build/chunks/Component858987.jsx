/** Chunk was on web.js **/
/** chunk id: 858987, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => v,
  Z: () => S
}), require("./997841.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk115130 = require("./115130.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk630388 = require("./630388.js"),
  Chunk74538 = require("./74538.js"),
  Chunk296848 = require("./296848.js"),
  Chunk212029 = require("./212029.js"),
  Chunk244923 = require("./244923.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
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
  if (null === u && _) return g.intl.string(g.t.CpOiEO);
  if (t === m.GZ.ONE_TIME) return o ? g.intl.string(g.t.ouo4FK) : g.intl.string(g.t.ExD0Ng);
  if (a()(null != n, "Subscription plan must be selected to render SubscriptionReviewButton"), i === h.POd.BOOST) return g.intl.string(g.t.eUEeCt);
  if (o) return g.intl.string(g.t.ouo4FK);
  if (c) return g.intl.string(g.t.LQVQIq);
  if ((0, d.PV)(n.id)) return l ? g.intl.string(g.t.cRCCJ3) : null != r ? r.isPausedAllowsResumeButNotUpdates ? g.intl.string(g.t.zpi5pg) : (0, f.R4)(r, n.id, s) ? g.intl.string(g.t.IJI7yk) : g.intl.string(g.t.VPuTc5) : (0, d.W_)(null, n);
  return g.intl.string(g.t.YScQSF)
}

function I(e, t) {
  null != e.current && (e.current.scrollIntoView({
    behavior: "smooth"
  }), t())
}

function S(e) {
  var t;
  let {
    legalTermsNodeRef: n,
    invoiceError: i,
    planError: a,
    disablePurchase: d,
    flashLegalTerms: f,
    isSubmitting: m,
    premiumSubscription: E,
    isGift: y,
    planGroup: S,
    isPrepaid: T,
    isTrial: A,
    makePurchase: C,
    needsPaymentSource: N,
    inReverseTrial: R,
    onNext: P,
    onPaymentSourceAdd: w
  } = e, {
    application: D,
    selectedPlan: L,
    hasAcceptedTerms: x,
    purchaseType: M,
    paymentSourceId: k,
    activeSubscription: j,
    devShelfFetchState: U,
    hasPaymentSources: G
  } = (0, c.JL)(), {
    enabled: B
  } = _.Z.useConfig({
    location: "SubscriptionReviewButton"
  }), Z = v({
    purchaseType: M,
    plan: L,
    premiumSubscription: E,
    isGift: y,
    planGroup: S,
    isPrepaidPaymentSource: T,
    inReverseTrial: R,
    paymentSourceId: k,
    hasPaymentSources: G
  }), {
    analyticsLocations: F
  } = (0, l.ZP)();
  if (null != i || null != a || d) {
    let e = y && B ? "expressive" : "active";
    return (0, r.jsx)(o.Button, {
      variant: e,
      text: Z,
      disabled: true
    })
  }
  if (N && G) return (0, r.jsx)(o.aML, {
    "data-migration-pending": true,
    text: g.intl.string(g.t.L7jbQV),
    children: e => (0, r.jsx)(o.Button, O(b({
      variant: "primary",
      text: Z
    }, e), {
      type: "submit",
      "data-testid": "submitButton",
      onClick: w
    }))
  });
  if (N && !G) return (0, r.jsx)(o.aML, {
    "data-migration-pending": true,
    text: g.intl.string(g.t.L7jbQV),
    children: e => (0, r.jsx)(o.Button, O(b({
      variant: "active",
      text: Z
    }, e), {
      type: "submit",
      "data-testid": "submitButton",
      disabled: true
    }))
  });
  if ((0, u.yE)(null != (t = null == D ? true : D.flags) ? t : 0, h.udG.EMBEDDED) && U === s.O.LOADING) return (0, r.jsx)(o.aML, {
    "data-migration-pending": true,
    text: g.intl.string(g.t.cjA5tj),
    children: e => (0, r.jsx)(o.Button, O(b({
      variant: "active",
      text: Z
    }, e), {
      type: "submit",
      "data-testid": "submitButton",
      disabled: true
    }))
  });
  if (A) return (0, r.jsx)(o.Button, {
    variant: "expressive",
    "data-testid": x ? "purchase" : "submitButton",
    text: Z,
    onClick: x ? C : () => I(n, f),
    loading: m,
    iconPosition: "start",
    icon: () => (0, r.jsx)(o.SrA, {
      color: "currentColor"
    })
  });
  else if (!x) return (0, r.jsx)(o.aML, {
    "data-migration-pending": true,
    text: g.intl.string(g.t.XdvBLS),
    children: e => (0, r.jsx)(o.Button, O(b({
      variant: "active",
      text: Z
    }, e), {
      type: "submit",
      onClick: () => I(n, f),
      "data-testid": "submitButton"
    }))
  });
  else if (R && null != j && null != k) return (0, r.jsx)(p.Z, {
    activeSubscription: j,
    onNext: P,
    isSubmitting: m,
    paymentSourceId: k,
    buttonLabel: Z,
    analyticsLocations: F
  });
  else if (y && B) return (0, r.jsx)(o.Button, {
    variant: "expressive",
    text: Z,
    "data-testid": "purchase",
    onClick: C,
    loading: m
  });
  else return (0, r.jsx)(o.Button, {
    variant: "active",
    text: Z,
    "data-testid": "purchase",
    onClick: C,
    loading: m
  })
}