/** Chunk was on 71447 **/
/** chunk id: 912156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S,
  Q: () => g
}), require("./747238.js"), require("./812715.js");
var i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk863610 = require("./863610.jsx"),
  Chunk935154 = require("./935154.jsx"),
  Chunk573435 = require("./573435.jsx"),
  Chunk260509 = require("./260509.js"),
  Chunk652215 = require("./652215.js"),
  Chunk778712 = require("./778712.js"),
  Chunk624510 = require("./624510.js"),
  g = ((i = {}).TINY_24 = "TINY_24", i.SMALL_32 = "SMALL_32", i.MEDIUM_40 = "MEDIUM_40", i);
let m = {
    TINY_24: 24,
    SMALL_32: 32,
    MEDIUM_40: 40
  },
  y = {
    TINY_24: 24,
    SMALL_32: 26,
    MEDIUM_40: 34
  },
  A = {
    TINY_24: [13, 11, 10],
    SMALL_32: [13, 11, 10],
    MEDIUM_40: [24, 20, 16]
  },
  v = {
    TINY_24: [9, 8, 7],
    SMALL_32: [10, 9, 8],
    MEDIUM_40: [14, 12, 8]
  },
  b = {
    TINY_24: Chunk624510.d7,
    SMALL_32: Chunk624510.OI,
    MEDIUM_40: Chunk624510.H5
  },
  E = {
    TINY_24: 12,
    SMALL_32: 16,
    MEDIUM_40: 20
  };

function O(e, t) {
  var n;
  return 0 === e.length ? 0 : t.length <= 0 ? e[0] : t.length > e.length ? e[e.length - 1] : null != (n = e[t.length - 1]) ? n : e[e.length - 1]
}

function x(e) {
  let {
    size: t
  } = e, n = (0, p.Kj)(t), i = n.status * p.x, r = (i - n.status) / 2, l = n.status, a = n.size - i + r - n.stroke - n.offset, s = n.size - l - n.stroke - n.offset, o = i + 2 * n.stroke, u = l + 2 * n.stroke, c = (n.status + 2 * n.stroke) / 2, d = n.size - i + r - n.offset, h = n.size - l;
  return {
    iconSize: n.size,
    statusWidth: i,
    statusHeight: l,
    dotRadius: n.status / 4,
    avatarCutoutX: a,
    avatarCutoutY: s,
    avatarCutoutWidth: o,
    avatarCutoutHeight: u,
    avatarCutoutRadius: c,
    indicatorX: d,
    indicatorY: h
  }
}
let _ = Chunk64700.memo(function(e) {
    let {
      avatarSize: t
    } = e, n = (0, u.S3)(h.clD.ONLINE, null), {
      statusWidth: i,
      statusHeight: l,
      dotRadius: a
    } = x({
      size: t
    });
    return (0, r.jsx)(c.Ay, {
      mask: c.hW.STATUS_TYPING,
      width: i,
      height: l,
      "aria-hidden": true,
      children: (0, r.jsx)("div", {
        className: f.WQ,
        style: {
          backgroundColor: n
        },
        children: (0, r.jsx)(o.n, {
          dotRadius: a
        })
      })
    })
  }),
  S = function(e) {
    var t, n;
    let i, {
        className: a,
        iconClassName: o,
        size: u,
        channel: h,
        guild: g,
        locked: S,
        hasActiveThreads: I,
        isTyping: j = false
      } = e,
      T = l.useId();
    if (null == g) return null;
    let C = A[u],
      N = y[u],
      w = m[u],
      P = (0, d.Iv)(g, 48),
      D = E[u],
      R = (() => {
        switch (u) {
          case "TINY_24":
            return p._3.SIZE_24;
          case "SMALL_32":
            return p._3.SIZE_32;
          case "MEDIUM_40":
            return p._3.SIZE_40;
          default:
            return u
        }
      })(),
      k = (i = null != (n = null != (t = null == h ? true : h.name) ? t : "") ? n.replace(/[-_]+/g, " ").replace(/'s /g, " ").replace(/\w+/g, e => e[0]).replace(/\s/g, "") : "").length > 0 ? i : "?",
      M = (0, d.Rb)(g),
      L = (0, r.jsxs)("div", {
        className: s()(f.zr, a),
        role: "img",
        style: {
          width: w,
          height: w
        },
        children: [(0, r.jsx)(c.Ay, {
          mask: c.hW.CHANNEL_ICON_WITH_GUILD_ICON,
          width: N,
          height: N,
          children: null != P ? (0, r.jsx)("img", {
            alt: g.name,
            src: P,
            className: f.es,
            style: {
              width: N,
              height: N
            }
          }) : (0, r.jsx)("div", {
            className: s()(f.TT, f.q9),
            style: {
              fontSize: O(C, M),
              width: N,
              height: N
            },
            children: M
          })
        }), (0, r.jsx)("div", {
          className: s()(f._C, b[u], o),
          "aria-hidden": true,
          children: (0, r.jsx)(c.Ay, {
            mask: c.hW.SQUIRCLE,
            width: D,
            height: D,
            children: (0, r.jsx)("div", {
              className: s()(b[u], f.q9),
              style: {
                fontSize: O(v[u], k)
              },
              children: k
            })
          })
        })]
      }),
      {
        iconSize: U,
        avatarCutoutX: G,
        avatarCutoutY: V,
        avatarCutoutWidth: z,
        avatarCutoutHeight: F,
        avatarCutoutRadius: H,
        indicatorX: Y,
        indicatorY: K
      } = x({
        size: R
      });
    return j ? (0, r.jsxs)("div", {
      className: f.J4,
      "aria-hidden": true,
      style: {
        width: w,
        height: w
      },
      children: [(0, r.jsxs)("svg", {
        width: U,
        height: U,
        viewBox: "0 0 ".concat(U, " ").concat(U),
        className: f._S,
        "aria-hidden": true,
        children: [(0, r.jsx)("defs", {
          children: (0, r.jsxs)("mask", {
            id: T,
            width: U,
            height: U,
            children: [(0, r.jsx)("rect", {
              x: 0,
              y: 0,
              width: U,
              height: U,
              rx: Math.round(.3 * U),
              ry: Math.round(.3 * U),
              fill: "white"
            }), (0, r.jsx)("rect", {
              x: G,
              y: V,
              width: z,
              height: F,
              rx: H,
              ry: H,
              fill: "black"
            })]
          })
        }), (0, r.jsx)("foreignObject", {
          x: 0,
          y: 0,
          width: U,
          height: U,
          overflow: "visible",
          mask: "url(#".concat(T, ")"),
          children: L
        })]
      }), (0, r.jsx)("div", {
        className: f.RL,
        style: {
          left: Y,
          top: K
        },
        children: (0, r.jsx)(_, {
          avatarSize: R
        })
      })]
    }) : L
  }