/** Chunk was on web.js **/
/** chunk id: 586585, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O,
  g: () => E
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk793030 = require("./793030.js"),
  Chunk179538 = require("./179538.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk612853 = require("./612853.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk629954 = require("./629954.js");

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
var E = function(e) {
  return e[e.CONTINUE = 0] = "CONTINUE", e[e.UPGRADE = 1] = "UPGRADE", e[e.PURCHASE = 2] = "PURCHASE", e
}({});
let b = e => {
    let {
      primaryIcon: t,
      primaryCTA: n,
      primaryType: i,
      primaryText: o,
      primaryDisabled: c,
      primarySubmitting: u,
      onPrimary: d,
      tooltipProps: f
    } = e, p = {
      type: i,
      disabled: c,
      onClick: d
    };
    return 2 === n ? (0, r.jsx)(l.gtL, g(h(g(h({}, p), {
      submitting: u,
      color: s.zx.Colors.GREEN
    }), f), {
      children: null == t ? null : (0, r.jsx)(t, {
        color: "currentColor",
        className: _.primaryIcon
      })
    })) : (0, r.jsx)(a.zx, h(g(h({}, p), {
      text: o,
      loading: u,
      variant: 0 === n ? "primary" : "active",
      icon: null == t ? true : () => (0, r.jsx)(t, {
        color: "currentColor",
        className: _.primaryIcon
      })
    }), f))
  },
  y = e => {
    let {
      onBack: t,
      backText: n,
      primaryIcon: a,
      primaryCTA: s,
      primaryType: _,
      primaryText: p,
      primaryTooltip: m,
      primaryDisabled: E,
      primarySubmitting: y,
      onPrimary: O
    } = e, {
      premiumBrandRefreshBackgroundClassName: v
    } = (0, u.JL)(), I = () => {
      if (null == s || null == p) return null;
      let e = {
        primaryIcon: a,
        primaryCTA: s,
        primaryType: _,
        primaryText: p,
        primaryDisabled: E,
        primarySubmitting: y,
        onPrimary: O
      };
      return null != m ? (0, r.jsx)(l.ua7, {
        text: m,
        children: t => (0, r.jsx)(b, g(h({}, e), {
          tooltipProps: t
        }))
      }) : (0, r.jsx)(b, g(h({}, e), {
        onPrimary: O
      }))
    }, T = () => null == t ? null : (0, r.jsx)(o.A, {
      text: null != n ? n : f.intl.string(f.t["13/7kZ"]),
      onClick: t,
      variant: "secondary"
    });
    return (0, r.jsxs)(l.mzw, {
      "data-migration-pending": true,
      justify: c.Z.Justify.BETWEEN,
      align: c.Z.Align.CENTER,
      className: v,
      children: [(0, r.jsxs)(i.Kq, {
        direction: "horizontal-reverse",
        align: "center",
        gap: 0,
        padding: 0,
        children: [I(), (0, r.jsx)(d.Z, {})]
      }), T()]
    })
  };
y.CTAType = E;
let O = y