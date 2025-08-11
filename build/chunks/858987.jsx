/** Chunk was on web.js **/
/** chunk id: 858987, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => O,
  Z: () => I
}), require("./997841.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk115130 = require("./115130.js"),
  Chunk906732 = require("./906732.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk630388 = require("./630388.js"),
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
    hasPaymentSources: _
  } = e;
  if (null === u && _) return m.intl.string(m.t.CpOiEB);
  if (t === h.GZ.ONE_TIME) return a ? m.intl.string(m.t.ouo4FB) : m.intl.string(m.t.ExD0Nj);
  if (o()(null != n, "Subscription plan must be selected to render SubscriptionReviewButton"), i === p.POd.BOOST) return m.intl.string(m.t.eUEeCg);
  if (a) return m.intl.string(m.t.ouo4FB);
  if (c) return m.intl.string(m.t.LQVQIi);
  if ((0, d.PV)(n.id)) return l ? m.intl.string(m.t.cRCCJy) : null != r ? r.isPausedAllowsResumeButNotUpdates ? m.intl.string(m.t.zpi5pq) : (0, f.R4)(r, n.id, s) ? m.intl.string(m.t.IJI7ys) : m.intl.string(m.t.VPuTc3) : (0, d.W_)(null, n);
  return m.intl.string(m.t.YScQSE)
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
    planError: o,
    disablePurchase: d,
    flashLegalTerms: f,
    isSubmitting: h,
    premiumSubscription: g,
    isGift: b,
    planGroup: I,
    isPrepaid: T,
    isTrial: S,
    makePurchase: A,
    needsPaymentSource: N,
    inReverseTrial: C,
    onNext: R,
    onPaymentSourceAdd: P
  } = e, {
    application: w,
    selectedPlan: D,
    hasAcceptedTerms: L,
    purchaseType: x,
    paymentSourceId: M,
    activeSubscription: k,
    devShelfFetchState: j,
    hasPaymentSources: U
  } = (0, c.JL)(), G = O({
    purchaseType: x,
    plan: D,
    premiumSubscription: g,
    isGift: b,
    planGroup: I,
    isPrepaidPaymentSource: T,
    inReverseTrial: C,
    paymentSourceId: M,
    hasPaymentSources: U
  }), {
    analyticsLocations: B
  } = (0, l.ZP)();
  if (null != i || null != o || d) return <a.zxk variant={"active"} text={G} disabled={true} />;
  if (N && U) return <a.ua7 text={m.intl.string(m.t.L7jbQU)}>{e => (0, r.jsx)(a.zxk, y(E({
      variant: "primary",
      text: G
    }, e), {
      type: "submit",
      "data-testid": "submitButton",
      onClick: P
    }))}</a.ua7>;
  if (N && !U) return <a.ua7 text={m.intl.string(m.t.L7jbQU)}>{e => (0, r.jsx)(a.zxk, y(E({
      variant: "active",
      text: G
    }, e), {
      type: "submit",
      "data-testid": "submitButton",
      disabled: true
    }))}</a.ua7>;
  if ((0, u.yE)(null != (t = null == w ? true : w.flags) ? t : 0, p.udG.EMBEDDED) && j === s.O.LOADING) return <a.ua7 text={m.intl.string(m.t.cjA5tr)}>{e => (0, r.jsx)(a.zxk, y(E({
      variant: "active",
      text: G
    }, e), {
      type: "submit",
      "data-testid": "submitButton",
      disabled: true
    }))}</a.ua7>;
  if (S) return <a.zxk variant={"expressive"} data-testid={L ? "purchase" : "submitButton"} text={G} onClick={L ? A : () => v(n, f)} loading={h} iconPosition={"start"} icon={() => (0, r.jsx)(a.SrA, {
      color: "currentColor"
    })} />;
  else if (!L) return <a.ua7 text={m.intl.string(m.t.XdvBLS)}>{e => (0, r.jsx)(a.zxk, y(E({
      variant: "active",
      text: G
    }, e), {
      type: "submit",
      onClick: () => v(n, f),
      "data-testid": "submitButton"
    }))}</a.ua7>;
  else if (C && null != k && null != M) return <_.Z activeSubscription={k} onNext={R} isSubmitting={h} paymentSourceId={M} buttonLabel={G} analyticsLocations={B} />;
  else return <a.zxk variant={"active"} text={G} data-testid={"purchase"} onClick={A} loading={h} />
}