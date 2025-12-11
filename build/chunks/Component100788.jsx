/** Chunk was on web.js **/
/** chunk id: 100788, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk409813 = require("./409813.js"),
  Chunk51499 = require("./51499.jsx"),
  Chunk614277 = require("./614277.jsx"),
  Chunk658114 = require("./658114.jsx"),
  Chunk514749 = require("./514749.jsx"),
  Chunk81088 = require("./81088.jsx"),
  Chunk175977 = require("./175977.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}
let _ = e => (0, r.jsx)(m, p({}, e)),
  m = e => {
    let {
      unifiedStepProps: t
    } = e, {
      isStepLoading: n,
      reviewBodyContent: a,
      reviewBodyLegalContent: c,
      errorMessage: f,
      warningMessage: p,
      primaryCTAButtonProps: _
    } = t;
    return n ? (0, r.jsx)("div", {
      className: d.stepBody,
      children: (0, r.jsx)(i.$jN, {
        type: i.$jN.Type.WANDERING_CUBES
      })
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.Z, {}), (0, r.jsxs)(s.C3, {
        children: [(0, r.jsxs)(i.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [null != f ? (0, r.jsx)(u.vw, {
            message: f
          }) : null, null != p ? (0, r.jsx)(l.Z, {
            message: p
          }) : null]
        }), (0, r.jsxs)("div", {
          className: d.stepBody,
          children: [a, c]
        })]
      }), (0, r.jsx)(s.O3, {
        children: (0, r.jsx)(u.Ds, {
          primaryCTAButtonProps: _,
          showLockIcon: true
        })
      })]
    })
  },
  h = (0, Chunk514749.q)({
    step: Chunk409813.h8.REVIEW,
    renderStep: _,
    DirectStepComponent: m
  })