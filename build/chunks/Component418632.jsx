/** Chunk was on web.js **/
/** chunk id: 418632, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g,
  s: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk885387 = require("./885387.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

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

function m(e) {
  return d.Z.verifyResend().then(() => {
    (0, c.Z)({
      title: p.intl.string(p.t.LykQYk),
      subtitle: p.intl.format(p.t.azKEPy, {
        email: e.email
      })
    })
  }).catch(e => {
    let {
      body: t
    } = e, n = p.intl.string(p.t.XcrQN5);
    null != t && t.email && (n = t.email), (0, u.h7j)(e => (0, r.jsx)(s.Modal, h({
      actions: [{
        variant: "primary",
        text: p.intl.string(p.t.BddRzS),
        onClick: e.onClose
      }],
      title: p.intl.string(p.t.VbTh0E),
      subtitle: n
    }, e)))
  })
}

function g(e) {
  let {
    size: t,
    variant: n
  } = e, a = (0, l.e7)([f.default], () => f.default.getCurrentUser());
  o()(null != a, "ResendEmailVerificationButton: currentUser cannot be undefined");
  let [s, c] = i.useState(false), d = i.useCallback(() => {
    c(true), m(a).then(() => c(false))
  }, [a]);
  return (0, r.jsx)(u.Button, {
    size: t,
    variant: n,
    onClick: d,
    text: p.intl.string(p.t.lm1UKt),
    disabled: s
  })
}