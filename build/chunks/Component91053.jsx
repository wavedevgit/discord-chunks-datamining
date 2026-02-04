/** Chunk was on 2824 **/
/** chunk id: 91053, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk166403 = require("./166403.js"),
  Chunk45938 = require("./45938.js"),
  Chunk810498 = require("./810498.js"),
  Chunk683433 = require("./683433.jsx"),
  Chunk344159 = require("./344159.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk357269 = require("./357269.js");

function f(e) {
  let {
    onStepChange: n,
    selectedPlanId: t,
    paymentSources: l,
    onBackClick: o,
    showBackButton: u,
    planOptions: d,
    shouldRenderUpdatedPaymentModal: m = false,
    isTrial: f,
    isNextDisabled: j = false
  } = e, {
    paymentSources: h,
    selectedPlan: _
  } = (0, a.P5)(), {
    isGift: x,
    giftRecipient: T,
    claimableRewards: S
  } = (0, s.Pv)(), b = (0, c.Ik)(T);
  return l = null != l ? l : h, t = null != t ? t : null == _ ? true : _.id, (0, r.jsxs)(r.Fragment, {
    children: [null != t && d.includes(t) ? (0, r.jsx)(P, {
      paymentSources: l,
      onStepChange: n,
      selectedPlanId: t,
      isGift: x,
      claimableRewards: S,
      shouldRenderUpdatedPaymentModal: m,
      isTrial: f,
      isNextDisabled: j
    }) : (0, r.jsx)(i.Button, {
      variant: "primary",
      text: E.intl.string(E.t.XqMe3N),
      disabled: true
    }), u ? (0, r.jsx)(p.A, {
      className: x && b ? g.R : true,
      onClick: o
    }) : null]
  })
}

function P(e) {
  let n = (e => {
    let {
      onStepChange: n,
      selectedPlanId: t,
      isGift: r,
      claimableRewards: i,
      paymentSources: s,
      shouldRenderUpdatedPaymentModal: c,
      isTrial: p,
      isNextDisabled: g = false
    } = e, f = (0, l.bG)([u.A], () => u.A.getPremiumTypeSubscription()), {
      step: P,
      selectedPlan: j
    } = (0, a.P5)(), {
      hasEntitlements: h
    } = (0, m.X)(t, r), _ = null != f && null != f.paymentSourceId || Object.keys(s).length > 0 || h && !p;
    var x = c ? E.intl.string(E.t.PDTjLN) : E.intl.string(E.t.XqMe3N),
      T = o.pn.ADD_PAYMENT_STEPS;
    return _ && (T = o.pn.REVIEW), (0, d.px)(j, r, i) && P !== o.pn.SELECT_FREE_SKU && (T = o.pn.SELECT_FREE_SKU), {
      variant: "primary",
      text: x,
      onClick: () => n(T),
      disabled: g
    }
  })(e);
  return (0, r.jsx)(i.Button, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        r = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.forEach(function(n) {
        var r;
        r = t[n], n in e ? Object.defineProperty(e, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = r
      })
    }
    return e
  }({}, n))
}