/** Chunk was on web.js **/
/** chunk id: 586585, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y,
  g: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk793030 = require("./793030.js"),
  Chunk179538 = require("./179538.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk612853 = require("./612853.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk629954 = require("./629954.js");

function _(e, t, n) {
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
      _(e, t, n[t])
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
      primaryText: o,
      primaryDisabled: s,
      primarySubmitting: l,
      onPrimary: c,
      tooltipProps: u
    } = e, d = {
      type: i,
      disabled: s,
      onClick: c,
      icon: null == t ? true : () => (0, r.jsx)(t, {
        color: "currentColor",
        className: f.primaryIcon
      }),
      loading: l,
      text: o
    };
    return 2 === n ? (0, r.jsx)(a.zx, p({
      variant: "expressive"
    }, d, u)) : (0, r.jsx)(a.zx, p(m(p({}, d), {
      variant: 0 === n ? "primary" : "active"
    }), u))
  },
  b = e => {
    let {
      onBack: t,
      backText: n,
      primaryIcon: a,
      primaryCTA: f,
      primaryType: _,
      primaryText: h,
      primaryTooltip: g,
      primaryDisabled: b,
      primarySubmitting: y,
      onPrimary: O
    } = e, {
      premiumBrandRefreshBackgroundClassName: v
    } = (0, c.JL)(), I = () => {
      if (null == f || null == h) return null;
      let e = {
        primaryIcon: a,
        primaryCTA: f,
        primaryType: _,
        primaryText: h,
        primaryDisabled: b,
        primarySubmitting: y,
        onPrimary: O
      };
      return null != g ? (0, r.jsx)(s.ua7, {
        text: g,
        children: t => (0, r.jsx)(E, m(p({}, e), {
          tooltipProps: t
        }))
      }) : (0, r.jsx)(E, m(p({}, e), {
        onPrimary: O
      }))
    }, T = () => null == t ? null : (0, r.jsx)(o.A, {
      text: null != n ? n : d.intl.string(d.t["13/7kZ"]),
      onClick: t,
      variant: "secondary"
    });
    return (0, r.jsxs)(s.mzw, {
      "data-migration-pending": true,
      justify: l.Z.Justify.BETWEEN,
      align: l.Z.Align.CENTER,
      className: v,
      children: [(0, r.jsxs)(i.Kq, {
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