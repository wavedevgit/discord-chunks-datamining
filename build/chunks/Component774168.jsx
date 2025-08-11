/** Chunk was on web.js **/
/** chunk id: 774168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk481051 = require("./481051.jsx"),
  Chunk978644 = require("./978644.js");

function d(e) {
  let {
    width: t = 24,
    height: n = 24,
    isBadged: o = false,
    isTyping: a = false
  } = e, [c] = i.useState(() => (0, s.Z)());
  return (0, r.jsxs)("svg", {
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: [(0, r.jsx)("defs", {
      children: (0, r.jsxs)("mask", {
        id: c,
        children: [(0, r.jsx)("rect", {
          fill: "white",
          width: "100%",
          height: "100%"
        }), a && (0, r.jsx)("g", {
          fill: "black",
          transform: "translate(5.5, ".concat(10.5, ") scale(").concat(11 / 24, ")"),
          children: (0, r.jsx)(l.IJ0, {
            dotRadius: 3.5,
            spacing: 3,
            fill: "black"
          })
        }), o && (0, r.jsx)("circle", {
          cx: "20",
          cy: "19",
          r: "10",
          fill: "red"
        })]
      })
    }), (0, r.jsx)("g", {
      mask: "url(#".concat(c, ")"),
      children: (0, r.jsx)(l.kBi, {
        size: "custom",
        width: t,
        height: n,
        color: "currentColor"
      })
    })]
  })
}

function f(e) {
  var t;
  let {
    className: n,
    unreadCount: i,
    mentionCount: o,
    isTyping: s,
    canBadge: l
  } = e, f = null != o && o > 0, _ = null != (t = f ? o : i) ? t : 0, p = _ > 99 ? "99+" : _, h = l && null != i && i > 0;
  return (0, r.jsxs)("div", {
    className: a()(u.chatIcon, n),
    children: [(0, r.jsx)(d, {
      isBadged: h,
      isTyping: s
    }), h && (0, r.jsx)(c.Z, {
      hasMentions: f,
      truncatedCount: p,
      className: u.badge
    })]
  })
}