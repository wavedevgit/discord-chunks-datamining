/** Chunk was on 31978 **/
/** chunk id: 318713, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk55935 = require("./55935.js"),
  Chunk543388 = require("./543388.jsx"),
  Chunk223021 = require("./223021.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk724913 = require("./724913.js");
let m = Chunk647438.memo(function(e) {
    let {
      children: t,
      className: n,
      compact: o = false,
      timestamp: m,
      timestampFormat: f,
      isVisibleOnlyOnHover: b = false,
      cozyAlt: h = false,
      isInline: O = true,
      id: y,
      isEdited: v = false,
      application: j,
      tooltipPosition: P
    } = e, x = l.useMemo(() => new Date(m), [m]), w = l.useMemo(() => (0, s.Hg)(x), [x]), C = l.useMemo(() => null != f ? (0, s.vc)(x, f) : o ? (0, s.vc)(x, "LT") : (0, s.Y4)(x, true), [x, f, o]), N = l.useMemo(() => o ? (0, u.Z)(C) : null, [o, C]), S = l.useMemo(() => v ? d.intl.formatToPlainString(d.t.CDzOFR, {
      timeFormatted: w
    }) : w, [v, w]);
    return (0, r.jsx)("span", {
      className: i()(n, N, {
        [p.timestamp]: true,
        [p.timestampVisibleOnHover]: b,
        [p.timestampInline]: O,
        [p.alt]: h
      }),
      children: null == j ? (0, r.jsx)(a.ua7, {
        text: () => (0, s.vc)(x, "LLLL"),
        "aria-label": S,
        tooltipClassName: p.timestampTooltip,
        position: P,
        delay: 750,
        children: e => (0, r.jsx)(g, {
          tooltipProps: e,
          timeFormatted: C,
          timestamp: x,
          id: y,
          compact: o,
          children: t
        })
      }) : (0, r.jsx)(c.Z, {
        application: j,
        timestamp: x,
        compact: o,
        children: (0, r.jsx)(g, {
          timeFormatted: C,
          timestamp: x,
          id: y,
          compact: o,
          children: t
        })
      })
    })
  }),
  g = Chunk647438.memo(function(e) {
    var t, n;
    let {
      tooltipProps: l,
      timeFormatted: o,
      children: i,
      compact: a,
      timestamp: s,
      id: c
    } = e;
    return (0, r.jsx)("time", (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, l), n = n = {
      id: c,
      dateTime: s.toISOString(),
      children: null != i ? i : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("i", {
          className: p.separator,
          "aria-hidden": true,
          children: a ? "[" : " — "
        }), o, a && (0, r.jsxs)("i", {
          className: p.separator,
          "aria-hidden": true,
          children: ["]", " "]
        })]
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }),
  f = m