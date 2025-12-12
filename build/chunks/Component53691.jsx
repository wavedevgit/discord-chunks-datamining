/** Chunk was on web.js **/
/** chunk id: 53691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk597276 = require("./597276.js"),
  Chunk740594 = require("./740594.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk414239 = require("./414239.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
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

function h(e) {
  let {
    showUpsell: t,
    text: n,
    textVariant: i,
    button: _,
    buttonAnalyticsObject: h,
    className: g,
    buttonStyles: E,
    onSubscribeModalClose: b,
    showShadow: y = true,
    position: O = "floating",
    buttonSize: v = "md",
    useLockIcon: S = false
  } = e, I = (0, c.Z)({
    location: "PremiumFloatingPickerUpsell"
  }), T = (0, s.q_F)({
    transform: t ? "translateY(0%)" : "translateY(120%)",
    opacity: +!!t,
    config: {
      tension: 120,
      friction: 14
    }
  }), C = S ? (0, r.jsx)(s.d$P, {
    size: "custom",
    height: 20,
    width: 20,
    color: "currentColor",
    className: p.lockIcon
  }) : (0, r.jsx)(s.SrA, {
    size: "md",
    color: l.JX.PREMIUM_TIER_2
  });
  return (0, r.jsxs)(a.animated.div, {
    style: m({}, T),
    className: o()(p.upsellContainer, {
      [p.upsellContainerShadow]: !I && y,
      [p.upsellContainerFloating]: "floating" === O,
      [p.upsellContainerInline]: "inline" === O
    }, g),
    children: [!I && C, (0, r.jsx)(s.Text, {
      variant: null != i ? i : "text-sm/medium",
      color: "text-strong",
      className: p.upsellText,
      children: n
    }), "string" == typeof _ ? I ? (0, r.jsx)(u.Z, {
      size: "sm",
      subscriptionTier: f.Si.TIER_2,
      buttonTextOverride: _,
      premiumModalAnalyticsLocation: h,
      tabIndex: t ? 0 : false,
      onSubscribeModalClose: b
    }) : (0, r.jsx)(d.Z, {
      size: v,
      className: p.upsellButton,
      shinyButtonClassName: null != E ? E : p.upsellButton,
      subscriptionTier: f.Si.TIER_2,
      textOptions: {
        textOverride: _
      },
      premiumModalAnalyticsLocation: h,
      tabIndex: t ? 0 : false,
      onSubscribeModalClose: b
    }) : _]
  })
}