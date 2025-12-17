/** Chunk was on web.js **/
/** chunk id: 100788, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk409813 = require("./409813.js"),
  Chunk51499 = require("./51499.jsx"),
  Chunk614277 = require("./614277.jsx"),
  Chunk658114 = require("./658114.jsx"),
  Chunk514749 = require("./514749.jsx"),
  Chunk81088 = require("./81088.jsx"),
  Chunk175977 = require("./175977.js");

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
let m = e => (0, r.jsx)(h, _({}, e)),
  h = e => {
    let {
      unifiedStepProps: t
    } = e, {
      isStepLoading: n,
      reviewBodyContent: o,
      reviewBodyLegalContent: u,
      errorMessage: p,
      warningMessage: m,
      primaryCTAButtonProps: h
    } = t, g = i.useMemo(() => _({
      variant: "active",
      type: "submit",
      "data-testid": "submitButton"
    }, h), [h]);
    return n ? (0, r.jsx)("div", {
      className: f.stepBody,
      children: (0, r.jsx)(a.$jN, {
        type: a.$jN.Type.WANDERING_CUBES
      })
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.Z, {}), (0, r.jsxs)(l.C3, {
        children: [(0, r.jsxs)(a.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [null != p ? (0, r.jsx)(d.vw, {
            message: p
          }) : null, null != m ? (0, r.jsx)(c.Z, {
            message: m
          }) : null]
        }), (0, r.jsxs)("div", {
          className: f.stepBody,
          children: [o, u]
        })]
      }), (0, r.jsx)(l.O3, {
        children: (0, r.jsx)(d.Ds, {
          primaryCTAButtonProps: g,
          showLockIcon: true
        })
      })]
    })
  },
  g = (0, Chunk514749.q)({
    step: Chunk409813.h8.REVIEW,
    renderStep: m,
    DirectStepComponent: h
  })