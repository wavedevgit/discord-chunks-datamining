/** Chunk was on 47841 **/
/** chunk id: 11725, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk774474 = require("./774474.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk233593 = require("./233593.js");
let o = e => {
  let {
    title: t,
    subtext: n = a.intl.string(a.t.jHpxwo),
    localizedNumber: o,
    isTrendingUp: d,
    isTrendingDown: u,
    tooltipText: f
  } = e, g = null != f ? (0, r.jsx)(l.STz, {
    text: f,
    position: "top",
    "aria-label": "string" == typeof f ? f : t,
    children: e => (0, r.jsx)(l.mir, function(e) {
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
    }({
      size: "xs",
      color: "currentColor",
      className: c.G
    }, e))
  }) : null;
  return (0, r.jsxs)("div", {
    className: c.Tp,
    children: [(0, r.jsxs)(l.Text, {
      variant: "text-md/medium",
      className: c.tG,
      children: [t, g]
    }), (0, r.jsx)("div", {
      className: c.yz,
      children: (0, r.jsx)(l.Text, {
        className: null != o ? c.MB : c.WY,
        variant: "text-lg/semibold",
        children: null != o ? o : a.intl.string(a.t.jHpxwo)
      })
    }), (0, r.jsxs)("div", {
      className: c.BP,
      children: [d ? (0, r.jsx)(s.A, {
        className: c.Tz,
        color: i.A.unsafe_rawColors.GREEN_360.css,
        "aria-label": a.intl.string(a.t["8mcccd"]),
        width: 14,
        height: 12
      }) : null, u ? (0, r.jsx)(s.A, {
        className: c.AL,
        color: i.A.unsafe_rawColors.RED_400.css,
        "aria-label": a.intl.string(a.t.NLl6Q3),
        width: 14,
        height: 12
      }) : null, (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        children: n
      })]
    })]
  })
}