/** Chunk was on web.js **/
/** chunk id: 684477, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk482132 = require("./482132.jsx"),
  Chunk866485 = require("./866485.jsx"),
  Chunk981036 = require("./981036.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk34873 = require("./34873.js");

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

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
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
      renderLeftColumn: h,
      renderRightColumn: g,
      primaryCTAButtonProps: E,
      onBackClick: b
    } = n, {
      hasPaymentSources: y
    } = (0, s.P5)(), O = y ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS, A = i.useCallback(() => t(O), [t, O]), v = i.useMemo(() => "custom-step-body" === c ? p() : "two-column" === c ? (0, r.jsxs)("div", {
      className: f.D,
      children: [h(), g()]
    }) : null, [c, p, h, g]), S = i.useMemo(() => m(_({}, E), {
      onClick: A,
      text: d.intl.string(d.t.XiOHRX)
    }), [E, A]);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.dZ, {
        children: v
      }), (0, r.jsx)(l.UX, {
        children: (0, r.jsx)(u.cy, {
          onBackClick: b,
          primaryCTAButtonProps: S,
          align: a.A.Align.CENTER
        })
      })]
    })
  },
  b = (0, Chunk866485.R)({
    step: Chunk166532.pn.GIFT_CUSTOMIZATION,
    renderStep: g,
    DirectStepComponent: E
  })