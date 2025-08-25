/** Chunk was on web.js **/
/** chunk id: 858987, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => v,
  Z: () => T
}), require("./997841.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
    isGift: a,
    planGroup: s,
    isPrepaidPaymentSource: l,
    inReverseTrial: c,
    paymentSourceId: u,
    hasPaymentSources: _
  } = e;
  if (null === u && _) return g.intl.string(g.t.CpOiEB);
  if (t === m.GZ.ONE_TIME) return a ? g.intl.string(g.t.ouo4FB) : g.intl.string(g.t.ExD0Nj);
  if (o()(null != n, "Subscription plan must be selected to render SubscriptionReviewButton"), i === h.POd.BOOST) return g.intl.string(g.t.eUEeCg);
  if (a) return g.intl.string(g.t.ouo4FB);
  if (c) return g.intl.string(g.t.LQVQIi);
  if ((0, d.PV)(n.id)) return l ? g.intl.string(g.t.cRCCJy) : null != r ? r.isPausedAllowsResumeButNotUpdates ? g.intl.string(g.t.zpi5pq) : (0, f.R4)(r, n.id, s) ? g.intl.string(g.t.IJI7ys) : g.intl.string(g.t.VPuTc3) : (0, d.W_)(null, n);
  return g.intl.string(g.t.YScQSE)
}

function I(e, t) {
  null != e.current && (e.current.scrollIntoView({
    behavior: "smooth"
  }), t())
}

function T(e) {
  var t;
  let {
    legalTermsNodeRef: n,
    invoiceError: i,
    planError: o,
    disablePurchase: d,
    flashLegalTerms: f,
    isSubmitting: m,
    premiumSubscription: E,
    isGift: y,
    planGroup: T,
    isPrepaid: S,
    isTrial: A,
    makePurchase: C,
    needsPaymentSource: N,
    inReverseTrial: R,
    onNext: P,
    onPaymentSourceAdd: w
  } = e, {
    application: D,
    selectedPlan: x,
    hasAcceptedTerms: L,
    purchaseType: j,
    paymentSourceId: M,
    activeSubscription: k,
    devShelfFetchState: U,
    hasPaymentSources: G
  } = (0, c.JL)(), {
    enabled: B
  } = _.Z.useConfig({
    location: "SubscriptionReviewButton"
  }), Z = v({
    purchaseType: j,
    plan: x,
    premiumSubscription: E,
    isGift: y,
    planGroup: T,
    isPrepaidPaymentSource: S,
    inReverseTrial: R,
    paymentSourceId: M,
    hasPaymentSources: G
  }), {
    analyticsLocations: F
  } = (0, l.ZP)();
  if (null != i || null != o || d) {
    let e = y && B ? "expressive" : "active";
    return (0, r.jsx)(a.zxk, {
      variant: e,
      text: Z,
      disabled: true
    })
  }
  if (N && G) return (0, r.jsx)(a.ua7, {
    text: g.intl.string(g.t.L7jbQU),
    children: e => (0, r.jsx)(a.zxk, O(b({
      variant: "primary",
      text: Z
    }, e), {
      type: "submit",
      "data-testid": "submitButton",
      onClick: w
    }))
  });
  if (N && !G) return (0, r.jsx)(a.ua7, {
    text: g.intl.string(g.t.L7jbQU),
    children: e => (0, r.jsx)(a.zxk, O(b({
      variant: "active",
      text: Z
    }, e), {
      type: "submit",
      "data-testid": "submitButton",
      disabled: true
    }))
  });
  if ((0, u.yE)(null != (t = null == D ? true : D.flags) ? t : 0, h.udG.EMBEDDED) && U === s.O.LOADING) return (0, r.jsx)(a.ua7, {
    text: g.intl.string(g.t.cjA5tr),
    children: e => (0, r.jsx)(a.zxk, O(b({
      variant: "active",
      text: Z
    }, e), {
      type: "submit",
      "data-testid": "submitButton",
      disabled: true
    }))
  });
  if (A) return (0, r.jsx)(a.zxk, {
    variant: "expressive",
    "data-testid": L ? "purchase" : "submitButton",
    text: Z,
    onClick: L ? C : () => I(n, f),
    loading: m,
    iconPosition: "start",
    icon: () => (0, r.jsx)(a.SrA, {
      color: "currentColor"
    })
  });
  else if (!L) return (0, r.jsx)(a.ua7, {
    text: g.intl.string(g.t.XdvBLS),
    children: e => (0, r.jsx)(a.zxk, O(b({
      variant: "active",
      text: Z
    }, e), {
      type: "submit",
      onClick: () => I(n, f),
      "data-testid": "submitButton"
    }))
  });
  else if (R && null != k && null != M) return (0, r.jsx)(p.Z, {
    activeSubscription: k,
    onNext: P,
    isSubmitting: m,
    paymentSourceId: M,
    buttonLabel: Z,
    analyticsLocations: F
  });
  else if (y && B) return (0, r.jsx)(a.zxk, {
    variant: "expressive",
    text: Z,
    "data-testid": "purchase",
    onClick: C,
    loading: m
  });
  else return (0, r.jsx)(a.zxk, {
    variant: "active",
    text: Z,
    "data-testid": "purchase",
    onClick: C,
    loading: m
  })
}