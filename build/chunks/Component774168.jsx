/** Chunk was on 13873 **/
/** chunk id: 774168, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk481051 = require("./481051.jsx"),
  Chunk612641 = require("./612641.js");

function d(e) {
  let {
    width: t = 24,
    height: n = 24,
    isBadged: l = false,
    isTyping: a = false
  } = e, [c] = i.useState(() => (0, o.Z)());
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
          children: (0, r.jsx)(s.IJ0, {
            dotRadius: 3.5,
            spacing: 3,
            fill: "black"
          })
        }), l && (0, r.jsx)("circle", {
          cx: "20",
          cy: "19",
          r: "10",
          fill: "red"
        })]
      })
    }), (0, r.jsx)("g", {
      mask: "url(#".concat(c, ")"),
      children: (0, r.jsx)(s.kBi, {
        size: "custom",
        width: t,
        height: n,
        color: "currentColor"
      })
    })]
  })
}

function p(e) {
  var t;
  let {
    className: n,
    unreadCount: i,
    mentionCount: l,
    isTyping: o,
    canBadge: s
  } = e, p = null != l && l > 0, f = null != (t = p ? l : i) ? t : 0, h = s && null != i && i > 0;
  return (0, r.jsxs)("div", {
    className: a()(u.chatIcon, n),
    children: [(0, r.jsx)(d, {
      isBadged: h,
      isTyping: o
    }), h && (0, r.jsx)(c.Z, {
      hasMentions: p,
      truncatedCount: f > 99 ? "99+" : f,
      className: u.badge
    })]
  })
}