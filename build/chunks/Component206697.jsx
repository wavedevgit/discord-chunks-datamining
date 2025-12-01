/** Chunk was on web.js **/
/** chunk id: 206697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk175006 = require("./175006.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk807284 = require("./807284.js"),
  Chunk492764 = require("./492764.js"),
  Chunk235810 = require("./235810.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v() {
  return (0, Chunk175006.Z)() ? (0, Chunk54381.jsx)("div", {
    className: Chunk807284.emptyContainer,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk807284.emptyInner,
      children: [(0, Chunk54381.jsx)("img", {
        src: Chunk492764,
        className: Chunk807284.image,
        alt: ""
      }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
        className: Chunk807284.header,
        variant: "heading-xl/semibold",
        color: "text-default",
        children: Chunk388032.intl.string(Chunk388032.t.erEf2g)
      }), (0, Chunk54381.jsx)(Chunk793030.xvT, {
        variant: "text-md/medium",
        color: "text-muted",
        children: Chunk388032.intl.string(Chunk388032.t.NaRCXT)
      })]
    })
  }) : (0, Chunk54381.jsxs)("div", {
    className: Chunk807284.emptyContainer,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk807284.emptyInner,
      children: [(0, Chunk54381.jsx)("img", {
        src: Chunk235810,
        className: Chunk807284.image,
        alt: ""
      }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
        className: Chunk807284.header,
        variant: "heading-xl/semibold",
        color: "text-default",
        children: Chunk388032.intl.string(Chunk388032.t.w4DRbZ)
      }), (0, Chunk54381.jsx)(Chunk793030.xvT, {
        variant: "text-md/medium",
        color: "text-muted",
        children: Chunk388032.intl.string(Chunk388032.t.F6u3E3)
      })]
    }), (0, Chunk54381.jsx)(S, {})]
  })
}

function S() {
  let e = (0, Chunk74538.Px)(Chunk474936.PremiumTypes.TIER_2),
    t = Chunk473749.useCallback(() => (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("34906").then(require.bind(require, 639565));
      return t => (0, r.jsx)(e, O({
        source: c.Z.FOR_LATER_POPOUT
      }, t))
    }), []),
    p = Chunk388032.intl.format(Chunk388032.t.qXh3fo, {
      nitroTierName: module,
      onClick: exports
    });
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk807284.upsellContainer,
    children: [(0, Chunk54381.jsx)(Chunk657707.SrA, {
      size: "md",
      color: Chunk436774.JX.PREMIUM_TIER_2
    }), (0, Chunk54381.jsx)(Chunk793030.xvT, {
      variant: "text-xs/medium",
      color: "header-primary",
      className: Chunk807284.upsellText,
      children: Chunk175006
    }), (0, Chunk54381.jsx)(Chunk767714.Z, {
      className: Chunk807284.upsellButton,
      size: Chunk755721.Ph.TINY,
      shinyButtonClassName: Chunk807284.upsellButton,
      subscriptionTier: Chunk474936.Si.TIER_2,
      premiumModalAnalyticsLocation: {
        section: Chunk981631.jXE.FOR_LATER_POPOUT_UPSELL
      }
    })]
  })
}