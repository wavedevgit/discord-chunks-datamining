/** Chunk was on web.js **/
/** chunk id: 586585, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y,
  g: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk612853 = require("./612853.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk849195 = require("./849195.js");

function p(e, t, n) {
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
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var g = function(e) {
  return e[e.CONTINUE = 0] = "CONTINUE", e[e.UPGRADE = 1] = "UPGRADE", e[e.PURCHASE = 2] = "PURCHASE", e
}({});
let E = e => {
    let {
      primaryIcon: t,
      primaryCTA: n,
      primaryType: i,
      primaryText: a,
      primaryDisabled: s,
      primarySubmitting: l,
      onPrimary: c
    } = e, u = {
      type: i,
      disabled: s,
      onClick: c,
      icon: null == t ? true : () => (0, r.jsx)(t, {
        color: "currentColor",
        className: f.primaryIcon
      }),
      loading: l,
      text: a
    };
    return 2 === n ? (0, r.jsx)(o.zxk, _({
      variant: "expressive"
    }, u)) : (0, r.jsx)(o.zxk, m(_({}, u), {
      variant: 0 === n ? "primary" : "active"
    }))
  },
  b = e => {
    let {
      onBack: t,
      backText: n,
      primaryIcon: f,
      primaryCTA: p,
      primaryType: h,
      primaryText: g,
      primaryTooltip: b,
      primaryDisabled: y,
      primarySubmitting: O,
      onPrimary: v
    } = e, {
      premiumBrandRefreshBackgroundClassName: S
    } = (0, c.JL)(), I = () => {
      if (null == p || null == g) return null;
      let e = {
        primaryIcon: f,
        primaryCTA: p,
        primaryType: h,
        primaryText: g,
        primaryDisabled: y,
        primarySubmitting: O,
        onPrimary: v
      };
      return null != b ? (0, r.jsx)(a.u, {
        text: b,
        asContainer: true,
        children: (0, r.jsx)(E, _({}, e))
      }) : (0, r.jsx)(E, m(_({}, e), {
        onPrimary: v
      }))
    }, T = () => null == t ? null : (0, r.jsx)(o.Avr, {
      text: null != n ? n : d.intl.string(d.t["13/7kX"]),
      onClick: t,
      variant: "secondary"
    });
    return (0, r.jsxs)(s.mzw, {
      "data-migration-pending": true,
      justify: l.Z.Justify.BETWEEN,
      align: l.Z.Align.CENTER,
      className: S,
      children: [(0, r.jsxs)(i.Kqy, {
        direction: "horizontal-reverse",
        align: "center",
        gap: 0,
        padding: 0,
        children: [I(), (0, r.jsx)(u.Z, {})]
      }), T()]
    })
  };
b.CTAType = g;
let y = b