/** Chunk was on web.js **/
/** chunk id: 418632, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b,
  s: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
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

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  return d.Z.verifyResend().then(() => {
    (0, u.h7j)(t => (0, r.jsx)(u.ConfirmModal, g(h({
      header: _.intl.string(_.t.LykQYk),
      confirmText: _.intl.string(_.t.BddRzS),
      confirmButtonColor: c.zx.Colors.BRAND
    }, t), {
      children: (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        children: _.intl.format(_.t.azKEPy, {
          email: e.email
        })
      })
    })))
  }).catch(e => {
    let {
      body: t
    } = e, n = _.intl.string(_.t.XcrQN5);
    null != t && t.email && (n = t.email), (0, u.h7j)(e => (0, r.jsx)(s.Modal, h({
      actions: [{
        variant: "primary",
        text: _.intl.string(_.t.BddRzS),
        onClick: e.onClose
      }],
      title: _.intl.string(_.t.VbTh0E),
      subtitle: n
    }, e)))
  })
}

function b(e) {
  let {
    size: t,
    variant: n
  } = e, a = (0, l.e7)([f.default], () => f.default.getCurrentUser());
  o()(null != a, "ResendEmailVerificationButton: currentUser cannot be undefined");
  let [s, c] = i.useState(false), d = i.useCallback(() => {
    c(true), E(a).then(() => c(false))
  }, [a]);
  return (0, r.jsx)(u.Button, {
    size: t,
    variant: n,
    onClick: d,
    text: _.intl.string(_.t.lm1UKt),
    disabled: s
  })
}