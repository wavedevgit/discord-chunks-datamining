/** Chunk was on web.js **/
/** chunk id: 961830, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F7: () => v,
  WA: () => g,
  s2: () => E,
  wo: () => O,
  yp: () => S
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk853872 = require("./853872.js"),
  Chunk409813 = require("./409813.js"),
  Chunk276442 = require("./276442.js"),
  Chunk793541 = require("./793541.jsx"),
  Chunk380898 = require("./380898.jsx"),
  Chunk713316 = require("./713316.jsx"),
  Chunk710094 = require("./710094.jsx"),
  Chunk865921 = require("./865921.jsx"),
  Chunk388032 = require("./388032.jsx");

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
let g = {
    key: null,
    renderStep: e => (0, r.jsx)(d.v, _({}, e))
  },
  E = {
    key: Chunk409813.h8.ADD_PAYMENT_STEPS,
    renderStep: e => (0, r.jsx)(o.J, h(_({}, e), {
      breadcrumbSteps: [a.h8.ADD_PAYMENT_STEPS, a.h8.REVIEW, a.h8.CONFIRM],
      onReturn: () => {
        0 === Object.keys(i.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(a.h8.REVIEW, {
          trackedFromStep: a.h8.ADD_PAYMENT_STEPS
        })
      }
    })),
    options: {
      renderHeader: true
    }
  },
  b = {
    key: Chunk409813.h8.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, r.jsx)(l.Z, {})
  },
  y = {
    key: Chunk409813.h8.AWAITING_AUTHENTICATION,
    renderStep: () => (0, r.jsx)(s.Z, {}),
    options: {
      renderHeader: true
    }
  },
  O = {
    key: Chunk409813.h8.REVIEW,
    renderStep: e => (0, r.jsx)(u.lZ, _({}, e)),
    options: {
      useBreadcrumbLabel: () => f.intl.string(f.t.QBnNHq)
    }
  },
  v = {
    key: Chunk409813.h8.CONFIRM,
    renderStep: e => (0, r.jsx)(c.w, _({}, e))
  },
  S = [b, y]