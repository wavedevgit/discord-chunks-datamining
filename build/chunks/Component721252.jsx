/** Chunk was on web.js **/
/** chunk id: 721252, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  hh: () => A,
  kJ: () => g,
  r2: () => O,
  zK: () => E,
  zX: () => v
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk295405 = require("./295405.js"),
  Chunk166532 = require("./166532.js"),
  Chunk735305 = require("./735305.js"),
  Chunk343834 = require("./343834.jsx"),
  Chunk467122 = require("./467122.jsx"),
  Chunk33190 = require("./33190.jsx"),
  Chunk623020 = require("./623020.jsx"),
  Chunk881677 = require("./881677.jsx"),
  Chunk985018 = require("./985018.jsx");

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
let g = {
    key: null,
    renderStep: e => (0, r.jsx)(d.B, _({}, e))
  },
  E = {
    key: Chunk166532.pn.ADD_PAYMENT_STEPS,
    renderStep: e => (0, r.jsx)(s.x, m(_({}, e), {
      breadcrumbSteps: [a.pn.ADD_PAYMENT_STEPS, a.pn.REVIEW, a.pn.CONFIRM],
      onReturn: () => {
        0 === Object.keys(i.A.paymentSources).length ? e.handleClose() : e.handleStepChange(a.pn.REVIEW, {
          trackedFromStep: a.pn.ADD_PAYMENT_STEPS
        })
      }
    })),
    options: {
      renderHeader: true
    }
  },
  y = {
    key: Chunk166532.pn.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, r.jsx)(l.A, {})
  },
  b = {
    key: Chunk166532.pn.AWAITING_AUTHENTICATION,
    renderStep: () => (0, r.jsx)(o.A, {}),
    options: {
      renderHeader: true
    }
  },
  O = {
    key: Chunk166532.pn.REVIEW,
    renderStep: e => (0, r.jsx)(u._M, _({}, e)),
    options: {
      useBreadcrumbLabel: () => f.intl.string(f.t.QBnNHq)
    }
  },
  v = {
    key: Chunk166532.pn.CONFIRM,
    renderStep: e => (0, r.jsx)(c.k, _({}, e))
  },
  A = [y, b]