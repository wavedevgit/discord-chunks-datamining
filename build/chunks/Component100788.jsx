/** Chunk was on web.js **/
/** chunk id: 100788, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk409813 = require("./409813.js"),
  Chunk51499 = require("./51499.jsx"),
  Chunk614277 = require("./614277.jsx"),
  Chunk658114 = require("./658114.jsx"),
  Chunk81088 = require("./81088.jsx"),
  Chunk467368 = require("./467368.js"),
  Chunk671930 = require("./671930.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let h = e => {
  let {
    paymentModalStepProps: t
  } = e, {
    unifiedCheckoutStepProps: n
  } = (0, f.Li)(), i = n[s.h8.REVIEW];
  a()(null != i, "Unified review step props are not set");
  let {
    reviewBodyContent: _,
    reviewBodyLegalContent: h,
    errorMessage: g,
    warningMessage: E,
    primaryCTAButtonProps: b,
    SideEffectComponent: y
  } = i;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != y ? (0, r.jsx)(y, m({}, t)) : null, (0, r.jsx)(l.Z, {}), (0, r.jsxs)(c.C3, {
      children: [(0, r.jsxs)(o.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [null != g ? (0, r.jsx)(d.vw, {
          message: g
        }) : null, null != E ? (0, r.jsx)(u.Z, {
          message: E
        }) : null]
      }), (0, r.jsxs)("div", {
        className: p.stepBody,
        children: [_, h]
      })]
    }), (0, r.jsx)(c.O3, {
      children: (0, r.jsx)(d.Ds, {
        primaryCTAButtonProps: b
      })
    })]
  })
}