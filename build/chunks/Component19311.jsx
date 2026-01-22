/** Chunk was on web.js **/
/** chunk id: 19311, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y,
  t: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk999784 = require("./999784.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk208555 = require("./208555.js");

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
      primaryDisabled: o,
      primarySubmitting: l,
      onPrimary: c
    } = e, u = {
      type: i,
      disabled: o,
      onClick: c,
      icon: null == t ? true : () => (0, r.jsx)(t, {
        color: "currentColor",
        className: f.C
      }),
      loading: l,
      text: a
    };
    return 2 === n ? (0, r.jsx)(s.$nd, _({
      variant: "expressive"
    }, u)) : (0, r.jsx)(s.$nd, m(_({}, u), {
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
      onPrimary: A
    } = e, {
      premiumBrandRefreshBackgroundClassName: v
    } = (0, c.P5)(), S = () => {
      if (null == p || null == g) return null;
      let e = {
        primaryIcon: f,
        primaryCTA: p,
        primaryType: h,
        primaryText: g,
        primaryDisabled: y,
        primarySubmitting: O,
        onPrimary: A
      };
      return null != b ? (0, r.jsx)(a.m, {
        text: b,
        asContainer: true,
        children: (0, r.jsx)(E, _({}, e))
      }) : (0, r.jsx)(E, m(_({}, e), {
        onPrimary: A
      }))
    }, I = () => null == t ? null : (0, r.jsx)(s.QWc, {
      text: null != n ? n : d.intl.string(d.t["13/7kX"]),
      onClick: t,
      variant: "secondary"
    });
    return (0, r.jsxs)(o.jlY, {
      "data-migration-pending": true,
      justify: l.A.Justify.BETWEEN,
      align: l.A.Align.CENTER,
      className: v,
      children: [(0, r.jsxs)(i.BJc, {
        direction: "horizontal-reverse",
        align: "center",
        gap: 0,
        padding: 0,
        children: [S(), (0, r.jsx)(u.A, {})]
      }), I()]
    })
  };
b.CTAType = g;
let y = b