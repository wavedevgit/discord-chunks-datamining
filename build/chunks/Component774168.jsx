/** Chunk was on 40184 **/
/** chunk id: 774168, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk481051 = require("./481051.jsx"),
  Chunk464863 = require("./464863.js");

function d(e) {
  let {
    width: t = 24,
    height: n = 24,
    isBadged: l = false,
    isTyping: a = false
  } = e, [c] = r.useState(() => (0, o.Z)());
  return (0, i.jsxs)("svg", {
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: [(0, i.jsx)("defs", {
      children: (0, i.jsxs)("mask", {
        id: c,
        children: [(0, i.jsx)("rect", {
          fill: "white",
          width: "100%",
          height: "100%"
        }), a && (0, i.jsx)("g", {
          fill: "black",
          transform: "translate(5.5, ".concat(10.5, ") scale(").concat(11 / 24, ")"),
          children: (0, i.jsx)(s.IJ0, {
            dotRadius: 3.5,
            spacing: 3,
            fill: "black"
          })
        }), l && (0, i.jsx)("circle", {
          cx: "20",
          cy: "19",
          r: "10",
          fill: "red"
        })]
      })
    }), (0, i.jsx)("g", {
      mask: "url(#".concat(c, ")"),
      children: (0, i.jsx)(s.kBi, {
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
    unreadCount: r,
    mentionCount: l,
    isTyping: o,
    canBadge: s
  } = e, p = null != l && l > 0, f = null != (t = p ? l : r) ? t : 0, h = s && null != r && r > 0;
  return (0, i.jsxs)("div", {
    className: a()(u.chatIcon, n),
    children: [(0, i.jsx)(d, {
      isBadged: h,
      isTyping: o
    }), h && (0, i.jsx)(c.Z, {
      hasMentions: p,
      truncatedCount: f > 99 ? "99+" : f,
      className: u.badge
    })]
  })
}