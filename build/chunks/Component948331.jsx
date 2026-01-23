/** Chunk was on web.js **/
/** chunk id: 948331, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk934551 = require("./934551.js"),
  Chunk158954 = require("./158954.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk404374 = require("./404374.jsx"),
  Chunk465794 = require("./465794.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk226017 = require("./226017.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk316163 = require("./316163.js"),
  Chunk7410 = require("./7410.js"),
  Chunk936037 = require("./936037.js");

function b(e, t, n) {
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
      b(e, t, n[t])
    })
  }
  return e
}

function v() {
  return (0, p.A)() ? (0, r.jsx)("div", {
    className: g.do,
    children: (0, r.jsxs)("div", {
      className: g.U6,
      children: [(0, r.jsx)("img", {
        src: E,
        className: g.Sl,
        alt: ""
      }), (0, r.jsx)(l.Heading, {
        className: g.wx,
        variant: "heading-xl/semibold",
        color: "text-default",
        children: m.intl.string(m.t.erEf2g)
      }), (0, r.jsx)(s.EYj, {
        variant: "text-md/medium",
        color: "text-muted",
        children: m.intl.string(m.t.NaRCXT)
      })]
    })
  }) : (0, r.jsxs)("div", {
    className: g.do,
    children: [(0, r.jsxs)("div", {
      className: g.U6,
      children: [(0, r.jsx)("img", {
        src: y,
        className: g.Sl,
        alt: ""
      }), (0, r.jsx)(l.Heading, {
        className: g.wx,
        variant: "heading-xl/semibold",
        color: "text-default",
        children: m.intl.string(m.t.w4DRbZ)
      }), (0, r.jsx)(s.EYj, {
        variant: "text-md/medium",
        color: "text-muted",
        children: m.intl.string(m.t.F6u3E3)
      })]
    }), (0, r.jsx)(A, {})]
  })
}

function A() {
  let e = (0, f.Dd)(h.PremiumTypes.TIER_2),
    t = i.useCallback(() => (0, l.mMO)(async () => {
      let {
        default: e
      } = await n.e("22540").then(n.bind(n, 530951));
      return t => (0, r.jsx)(e, O({
        source: c.A.FOR_LATER_POPOUT
      }, t))
    }), []),
    p = m.intl.format(m.t.qXh3fo, {
      nitroTierName: e,
      onClick: t
    });
  return (0, r.jsxs)("div", {
    className: g.Zj,
    children: [(0, r.jsx)(a.NitroWheelIcon, {
      size: "md",
      color: u.k0.PREMIUM_TIER_2
    }), (0, r.jsx)(s.EYj, {
      variant: "text-xs/medium",
      color: "text-strong",
      className: g.tD,
      children: p
    }), (0, r.jsx)(d.A, {
      className: g.Oy,
      size: o.lO.TINY,
      shinyButtonClassName: g.Oy,
      subscriptionTier: h.pe.TIER_2,
      premiumModalAnalyticsLocation: {
        section: _.JJy.FOR_LATER_POPOUT_UPSELL
      }
    })]
  })
}