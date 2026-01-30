/** Chunk was on web.js **/
/** chunk id: 69882, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ed: () => y,
  Pw: () => E,
  rg: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk166532 = require("./166532.js"),
  Chunk69494 = require("./69494.jsx"),
  Chunk482132 = require("./482132.jsx"),
  Chunk516248 = require("./516248.jsx"),
  Chunk866485 = require("./866485.jsx"),
  Chunk981036 = require("./981036.jsx"),
  Chunk954848 = require("./954848.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
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
let m = e => (0, r.jsx)(g, h({}, e)),
  g = e => {
    let {
      unifiedStepProps: t
    } = e, {
      isStepLoading: n,
      reviewBodyContent: a,
      reviewBodyLegalContent: s,
      errorMessage: d,
      warningMessage: _,
      primaryCTAButtonProps: m
    } = t, g = i.useMemo(() => h({
      variant: "active",
      type: "submit",
      "data-testid": "submitButton"
    }, m), [m]);
    return n ? (0, r.jsx)("div", {
      className: p.y3,
      children: (0, r.jsx)(o.y$y, {
        type: o.y$y.Type.WANDERING_CUBES
      })
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.A, {}), (0, r.jsxs)(c.dZ, {
        children: [(0, r.jsxs)(o.BJc, {
          direction: "vertical",
          gap: 8,
          children: [null != d ? (0, r.jsx)(f.Wg, {
            message: d
          }) : null, null != _ ? (0, r.jsx)(u.A, {
            message: _
          }) : null]
        }), (0, r.jsxs)("div", {
          className: p.y3,
          children: [a, s]
        })]
      }), (0, r.jsx)(c.UX, {
        children: (0, r.jsx)(f.cy, {
          primaryCTAButtonProps: g,
          showLockIcon: true
        })
      })]
    })
  },
  E = (0, Chunk866485.R)({
    step: Chunk166532.pn.REVIEW,
    renderStep: m,
    DirectStepComponent: g
  }),
  y = () => (0, r.jsx)("div", {
    className: p.g4,
    children: (0, r.jsx)(o.y$y, {
      type: o.y$y.Type.PULSING_ELLIPSIS
    })
  }),
  b = e => {
    let {
      upperInlineNoticeProps: t,
      upperInlineNoticeContent: n,
      planSelectContent: i,
      purchaseItemContent: o,
      subscriptionDetailsContent: s,
      isStepLoading: l,
      paymentSelectContent: c,
      invoiceSummaryContent: u
    } = e;
    return l ? (0, r.jsx)(y, {}) : (0, r.jsxs)("div", {
      className: p.db,
      children: [(null != t || null != n) && (0, r.jsx)("div", {
        className: p.dD,
        children: null != t ? (0, r.jsx)(a.wx6, {
          type: t.type,
          hidden: t.hidden,
          children: t.message
        }) : n
      }), i, null != i && null != o && (0, r.jsx)("div", {
        className: p.GG
      }), o, null != s && (0, r.jsx)("div", {
        className: p.P3,
        children: s
      }), (0, r.jsx)("div", {
        className: p.Jv,
        children: c
      }), (0, r.jsx)("div", {
        className: p.ZF,
        children: u
      })]
    })
  }