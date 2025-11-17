/** Chunk was on web.js **/
/** chunk id: 53691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442748 = require("./442748.js"),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk597276 = require("./597276.js"),
  Chunk740594 = require("./740594.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk414239 = require("./414239.js");

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

function m(e) {
  let {
    showUpsell: t,
    text: n,
    textVariant: i,
    button: p,
    buttonAnalyticsObject: m,
    className: g,
    buttonStyles: E,
    onSubscribeModalClose: b,
    showShadow: y = true,
    position: O = "floating",
    buttonSize: v = "md",
    useLockIcon: I = false
  } = e, T = (0, c.Z)({
    location: "PremiumFloatingPickerUpsell"
  }), S = (0, s.q_F)({
    transform: t ? "translateY(0%)" : "translateY(120%)",
    opacity: +!!t,
    config: {
      tension: 120,
      friction: 14
    }
  }), A = I ? (0, r.jsx)(s.d$P, {
    size: "custom",
    height: 20,
    width: 20,
    color: "currentColor",
    className: _.lockIcon
  }) : (0, r.jsx)(s.SrA, {
    size: "md",
    color: l.JX.PREMIUM_TIER_2
  });
  return (0, r.jsxs)(o.animated.div, {
    style: h({}, S),
    className: a()(_.upsellContainer, {
      [_.upsellContainerShadow]: !T && y,
      [_.upsellContainerFloating]: "floating" === O,
      [_.upsellContainerInline]: "inline" === O
    }, g),
    children: [!T && A, (0, r.jsx)(s.Text, {
      variant: null != i ? i : "text-sm/medium",
      color: "header-primary",
      className: _.upsellText,
      children: n
    }), "string" == typeof p ? T ? (0, r.jsx)(u.Z, {
      size: "sm",
      subscriptionTier: f.Si.TIER_2,
      buttonTextOverride: p,
      premiumModalAnalyticsLocation: m,
      tabIndex: t ? 0 : false,
      onSubscribeModalClose: b
    }) : (0, r.jsx)(d.Z, {
      size: v,
      className: _.upsellButton,
      shinyButtonClassName: null != E ? E : _.upsellButton,
      subscriptionTier: f.Si.TIER_2,
      textOptions: {
        textOverride: p
      },
      premiumModalAnalyticsLocation: m,
      tabIndex: t ? 0 : false,
      onSubscribeModalClose: b
    }) : p]
  })
}