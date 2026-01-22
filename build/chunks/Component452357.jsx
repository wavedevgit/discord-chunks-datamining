/** Chunk was on web.js **/
/** chunk id: 452357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g,
  S: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk139033 = require("./139033.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx");

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
  return d.A.verifyResend().then(() => {
    (0, c.A)({
      title: p.intl.string(p.t.LykQYk),
      subtitle: p.intl.format(p.t.azKEPy, {
        email: e.email
      })
    })
  }).catch(e => {
    let {
      body: t
    } = e, n = p.intl.string(p.t.XcrQN5);
    null != t && t.email && (n = t.email), (0, u.qfG)(e => (0, r.jsx)(o.Modal, h({
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
  } = e, a = (0, l.bG)([f.default], () => f.default.getCurrentUser());
  s()(null != a, "ResendEmailVerificationButton: currentUser cannot be undefined");
  let [o, c] = i.useState(false), d = i.useCallback(() => {
    c(true), m(a).then(() => c(false))
  }, [a]);
  return (0, r.jsx)(u.Button, {
    size: t,
    variant: n,
    onClick: d,
    text: p.intl.string(p.t.lm1UKt),
    disabled: o
  })
}