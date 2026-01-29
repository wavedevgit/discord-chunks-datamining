/** Chunk was on 1113 **/
/** chunk id: 108460, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk835245 = require("./835245.js"),
  Chunk397927 = require("./397927.js"),
  Chunk315502 = require("./315502.jsx"),
  Chunk545290 = require("./545290.js");

function d(e) {
  let {
    width: t = 24,
    height: n = 24,
    isBadged: i = false,
    isTyping: s = false
  } = e, [c] = l.useState(() => (0, a.A)());
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
        }), s && (0, r.jsx)("g", {
          fill: "black",
          transform: "translate(5.5, ".concat(10.5, ") scale(").concat(11 / 24, ")"),
          children: (0, r.jsx)(o.UBN, {
            dotRadius: 3.5,
            spacing: 3,
            fill: "black"
          })
        }), i && (0, r.jsx)("circle", {
          cx: "20",
          cy: "19",
          r: "10",
          fill: "red"
        })]
      })
    }), (0, r.jsx)("g", {
      mask: "url(#".concat(c, ")"),
      children: (0, r.jsx)(o.oyn, {
        size: "custom",
        width: t,
        height: n,
        color: "currentColor"
      })
    })]
  })
}

function h(e) {
  var t;
  let {
    className: n,
    unreadCount: l,
    mentionCount: i,
    isTyping: a,
    canBadge: o
  } = e, h = null != i && i > 0, p = null != (t = h ? i : l) ? t : 0, g = o && null != l && l > 0;
  return (0, r.jsxs)("div", {
    className: s()(u.Or, n),
    children: [(0, r.jsx)(d, {
      isBadged: g,
      isTyping: a
    }), g && (0, r.jsx)(c.A, {
      hasMentions: h,
      truncatedCount: p > 99 ? "99+" : p,
      className: u.qS
    })]
  })
}