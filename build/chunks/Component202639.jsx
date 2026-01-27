/** Chunk was on web.js **/
/** chunk id: 202639, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk397927 = require("./397927.js"),
  Chunk766708 = require("./766708.js"),
  Chunk857586 = require("./857586.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk732591 = require("./732591.js");

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

function _(e) {
  let {
    showUpsell: t,
    text: n,
    textVariant: i,
    button: f,
    buttonAnalyticsObject: _,
    className: m,
    onSubscribeModalClose: g,
    position: E = "floating"
  } = e, y = l.r.useConfig({
    location: "PremiumFloatingPickerUpsell"
  }).enabled, b = (0, s.zhh)({
    transform: t ? "translateY(0%)" : "translateY(120%)",
    opacity: +!!t,
    config: {
      tension: 120,
      friction: 14
    }
  });
  return (0, r.jsx)(o.animated.div, {
    style: p({}, b),
    className: a()(d.Zj, y && d.g9, {
      [d.tO]: "floating" === E,
      [d.Kx]: "inline" === E
    }, m),
    children: (0, r.jsxs)(h, {
      children: [(0, r.jsx)(s.Text, {
        variant: null != i ? i : "text-sm/medium",
        color: "text-strong",
        className: d.tD,
        children: n
      }), "string" == typeof f ? (0, r.jsx)(c.A, {
        size: "sm",
        subscriptionTier: u.pe.TIER_2,
        buttonTextOverride: f,
        premiumModalAnalyticsLocation: _,
        tabIndex: t ? 0 : false,
        onSubscribeModalClose: g
      }) : f]
    })
  })
}

function h(e) {
  let {
    children: t
  } = e;
  return l.r.useConfig({
    location: "PremiumFloatingPickerUpsell"
  }).enabled ? (0, r.jsx)(s.hLv, {
    color: "nitro-pink",
    offsetBottom: false,
    className: d.mk,
    children: t
  }) : t
}