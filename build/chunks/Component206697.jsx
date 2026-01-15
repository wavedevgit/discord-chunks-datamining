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
  Chunk867814 = require("./867814.js"),
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
  return (0, p.Z)() ? (0, r.jsx)("div", {
    className: g.emptyContainer,
    children: (0, r.jsxs)("div", {
      className: g.emptyInner,
      children: [(0, r.jsx)("img", {
        src: E,
        className: g.image,
        alt: ""
      }), (0, r.jsx)(l.Heading, {
        className: g.header,
        variant: "heading-xl/semibold",
        color: "text-default",
        children: m.intl.string(m.t.erEf2g)
      }), (0, r.jsx)(o.xvT, {
        variant: "text-md/medium",
        color: "text-muted",
        children: m.intl.string(m.t.NaRCXT)
      })]
    })
  }) : (0, r.jsxs)("div", {
    className: g.emptyContainer,
    children: [(0, r.jsxs)("div", {
      className: g.emptyInner,
      children: [(0, r.jsx)("img", {
        src: b,
        className: g.image,
        alt: ""
      }), (0, r.jsx)(l.Heading, {
        className: g.header,
        variant: "heading-xl/semibold",
        color: "text-default",
        children: m.intl.string(m.t.w4DRbZ)
      }), (0, r.jsx)(o.xvT, {
        variant: "text-md/medium",
        color: "text-muted",
        children: m.intl.string(m.t.F6u3E3)
      })]
    }), (0, r.jsx)(S, {})]
  })
}

function S() {
  let e = (0, f.Px)(h.PremiumTypes.TIER_2),
    t = i.useCallback(() => (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("34906").then(n.bind(n, 639565));
      return t => (0, r.jsx)(e, O({
        source: c.Z.FOR_LATER_POPOUT
      }, t))
    }), []),
    p = m.intl.format(m.t.qXh3fo, {
      nitroTierName: e,
      onClick: t
    });
  return (0, r.jsxs)("div", {
    className: g.upsellContainer,
    children: [(0, r.jsx)(a.NitroWheelIcon, {
      size: "md",
      color: u.JX.PREMIUM_TIER_2
    }), (0, r.jsx)(o.xvT, {
      variant: "text-xs/medium",
      color: "text-strong",
      className: g.upsellText,
      children: p
    }), (0, r.jsx)(d.Z, {
      className: g.upsellButton,
      size: s.Ph.TINY,
      shinyButtonClassName: g.upsellButton,
      subscriptionTier: h.Si.TIER_2,
      premiumModalAnalyticsLocation: {
        section: _.jXE.FOR_LATER_POPOUT_UPSELL
      }
    })]
  })
}