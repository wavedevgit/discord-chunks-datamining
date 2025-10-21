/** Chunk was on web.js **/
/** chunk id: 586585, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b,
  g: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk612853 = require("./612853.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk461019 = require("./461019.js");

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

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var m = function(e) {
  return e[e.CONTINUE = 0] = "CONTINUE", e[e.UPGRADE = 1] = "UPGRADE", e[e.PURCHASE = 2] = "PURCHASE", e
}({});
let g = e => {
    let {
      primaryIcon: t,
      primaryCTA: n,
      primaryType: i,
      primaryText: o,
      primaryDisabled: s,
      primarySubmitting: l,
      onPrimary: c,
      tooltipProps: u
    } = e, f = {
      type: i,
      disabled: s,
      onClick: c,
      icon: null == t ? true : () => (0, r.jsx)(t, {
        color: "currentColor",
        className: d.primaryIcon
      }),
      loading: l,
      text: o
    };
    return 2 === n ? (0, r.jsx)(a.zxk, _({
      variant: "expressive"
    }, f, u)) : (0, r.jsx)(a.zxk, _(h(_({}, f), {
      variant: 0 === n ? "primary" : "active"
    }), u))
  },
  E = e => {
    let {
      onBack: t,
      backText: n,
      primaryIcon: d,
      primaryCTA: f,
      primaryType: p,
      primaryText: m,
      primaryTooltip: E,
      primaryDisabled: b,
      primarySubmitting: y,
      onPrimary: O
    } = e, {
      premiumBrandRefreshBackgroundClassName: v
    } = (0, l.JL)(), I = () => {
      if (null == f || null == m) return null;
      let e = {
        primaryIcon: d,
        primaryCTA: f,
        primaryType: p,
        primaryText: m,
        primaryDisabled: b,
        primarySubmitting: y,
        onPrimary: O
      };
      return null != E ? (0, r.jsx)(o.aML, {
        text: E,
        children: t => (0, r.jsx)(g, h(_({}, e), {
          tooltipProps: t
        }))
      }) : (0, r.jsx)(g, h(_({}, e), {
        onPrimary: O
      }))
    }, T = () => null == t ? null : (0, r.jsx)(a.Avr, {
      text: null != n ? n : u.intl.string(u.t["13/7kZ"]),
      onClick: t,
      variant: "secondary"
    });
    return (0, r.jsxs)(o.mzw, {
      "data-migration-pending": true,
      justify: s.Z.Justify.BETWEEN,
      align: s.Z.Align.CENTER,
      className: v,
      children: [(0, r.jsxs)(i.Kqy, {
        direction: "horizontal-reverse",
        align: "center",
        gap: 0,
        padding: 0,
        children: [I(), (0, r.jsx)(c.Z, {})]
      }), T()]
    })
  };
E.CTAType = m;
let b = E