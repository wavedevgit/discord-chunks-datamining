/** Chunk was on web.js **/
/** chunk id: 147332, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk614277 = require("./614277.jsx"),
  Chunk514749 = require("./514749.jsx"),
  Chunk81088 = require("./81088.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk689926 = require("./689926.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = e => (0, r.jsx)(E, _({}, e)),
  E = e => {
    let {
      paymentModalStepProps: {
        handleStepChange: t
      },
      unifiedStepProps: n
    } = e, {
      layout: c,
      renderStepBody: p,
      renderLeftColumn: m,
      renderRightColumn: g,
      primaryCTAButtonProps: E,
      onBackClick: b
    } = n, {
      hasPaymentSources: y
    } = (0, o.JL)(), O = y ? s.h8.REVIEW : s.h8.ADD_PAYMENT_STEPS, v = i.useCallback(() => t(O), [t, O]), S = i.useMemo(() => "custom-step-body" === c ? p() : "two-column" === c ? (0, r.jsxs)("div", {
      className: f.stepBody,
      children: [m(), g()]
    }) : null, [c, p, m, g]), I = i.useMemo(() => h(_({}, E), {
      onClick: v,
      text: d.intl.string(d.t.XiOHRX)
    }), [E, v]);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.C3, {
        children: S
      }), (0, r.jsx)(l.O3, {
        children: (0, r.jsx)(u.Ds, {
          onBackClick: b,
          primaryCTAButtonProps: I,
          align: a.Z.Align.CENTER
        })
      })]
    })
  },
  b = (0, Chunk514749.q)({
    step: Chunk409813.h8.GIFT_CUSTOMIZATION,
    renderStep: g,
    DirectStepComponent: E
  })