/** Chunk was on web.js **/
/** chunk id: 69882, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk166532 = require("./166532.js"),
  Chunk69494 = require("./69494.jsx"),
  Chunk482132 = require("./482132.jsx"),
  Chunk516248 = require("./516248.jsx"),
  Chunk866485 = require("./866485.jsx"),
  Chunk981036 = require("./981036.jsx"),
  Chunk954848 = require("./954848.js");

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
let h = e => (0, r.jsx)(m, _({}, e)),
  m = e => {
    let {
      unifiedStepProps: t
    } = e, {
      isStepLoading: n,
      reviewBodyContent: o,
      reviewBodyLegalContent: u,
      errorMessage: p,
      warningMessage: h,
      primaryCTAButtonProps: m
    } = t, g = i.useMemo(() => _({
      variant: "active",
      type: "submit",
      "data-testid": "submitButton"
    }, m), [m]);
    return n ? (0, r.jsx)("div", {
      className: f.D,
      children: (0, r.jsx)(a.y$y, {
        type: a.y$y.Type.WANDERING_CUBES
      })
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.A, {}), (0, r.jsxs)(l.dZ, {
        children: [(0, r.jsxs)(a.BJc, {
          direction: "vertical",
          gap: 8,
          children: [null != p ? (0, r.jsx)(d.Wg, {
            message: p
          }) : null, null != h ? (0, r.jsx)(c.A, {
            message: h
          }) : null]
        }), (0, r.jsxs)("div", {
          className: f.D,
          children: [o, u]
        })]
      }), (0, r.jsx)(l.UX, {
        children: (0, r.jsx)(d.cy, {
          primaryCTAButtonProps: g,
          showLockIcon: true
        })
      })]
    })
  },
  g = (0, Chunk866485.R)({
    step: Chunk166532.pn.REVIEW,
    renderStep: h,
    DirectStepComponent: m
  })