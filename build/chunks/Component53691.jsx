/** Chunk was on web.js **/
/** chunk id: 53691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk620389 = require("./620389.js"),
  Chunk481060 = require("./481060.js"),
  Chunk9551 = require("./9551.js"),
  Chunk740594 = require("./740594.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk879149 = require("./879149.js");

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
    className: h,
    onSubscribeModalClose: g,
    position: E = "floating"
  } = e, b = l.V.useConfig({
    location: "PremiumFloatingPickerUpsell"
  }).enabled, y = (0, s.q_F)({
    transform: t ? "translateY(0%)" : "translateY(120%)",
    opacity: +!!t,
    config: {
      tension: 120,
      friction: 14
    }
  });
  return (0, r.jsx)(o.animated.div, {
    style: p({}, y),
    className: a()(d.upsellContainer, b && d.upsellRedesignEnabled, {
      [d.upsellContainerFloating]: "floating" === E,
      [d.upsellContainerInline]: "inline" === E
    }, h),
    children: (0, r.jsxs)(m, {
      children: [(0, r.jsx)(s.Text, {
        variant: null != i ? i : "text-sm/medium",
        color: "text-strong",
        className: d.upsellText,
        children: n
      }), "string" == typeof f ? (0, r.jsx)(c.Z, {
        size: "sm",
        subscriptionTier: u.Si.TIER_2,
        buttonTextOverride: f,
        premiumModalAnalyticsLocation: _,
        tabIndex: t ? 0 : false,
        onSubscribeModalClose: g
      }) : f]
    })
  })
}

function m(e) {
  let {
    children: t
  } = e;
  return l.V.useConfig({
    location: "PremiumFloatingPickerUpsell"
  }).enabled ? (0, r.jsx)(s.$1m, {
    color: "nitro-pink",
    offsetBottom: false,
    className: d.expressiveGradientBg,
    children: t
  }) : t
}