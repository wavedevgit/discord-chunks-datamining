/** Chunk was on web.js **/
/** chunk id: 53691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk358458 = require("./358458.js"),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk414239 = require("./414239.js");

function f(e, t, n) {
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
      f(e, t, n[t])
    })
  }
  return e
}

function p(e) {
  let {
    showUpsell: t,
    text: n,
    textVariant: i,
    button: f,
    buttonAnalyticsObject: p,
    className: h,
    buttonStyles: m,
    onSubscribeModalClose: g,
    showShadow: E = true,
    position: b = "floating",
    buttonSize: y = "md",
    useLockIcon: O = false
  } = e, v = (0, s.q_F)({
    transform: t ? "translateY(0%)" : "translateY(120%)",
    opacity: +!!t,
    config: {
      tension: 120,
      friction: 14
    }
  });
  return (0, r.jsxs)(o.animated.div, {
    style: _({}, v),
    className: a()(d.upsellContainer, {
      [d.upsellContainerShadow]: E,
      [d.upsellContainerFloating]: "floating" === b,
      [d.upsellContainerInline]: "inline" === b
    }, h),
    children: [O ? (0, r.jsx)(s.d$P, {
      size: "custom",
      height: 20,
      width: 20,
      color: "currentColor",
      className: d.lockIcon
    }) : (0, r.jsx)(s.SrA, {
      size: "md",
      color: l.JX.PREMIUM_TIER_2
    }), (0, r.jsx)(s.Text, {
      variant: null != i ? i : "text-sm/medium",
      color: "header-primary",
      className: d.upsellText,
      children: n
    }), "string" == typeof f ? (0, r.jsx)(c.Z, {
      size: y,
      className: d.upsellButton,
      shinyButtonClassName: null != m ? m : d.upsellButton,
      subscriptionTier: u.Si.TIER_2,
      textOptions: {
        textOverride: f
      },
      premiumModalAnalyticsLocation: p,
      tabIndex: t ? 0 : false,
      onSubscribeModalClose: g
    }) : f]
  })
}