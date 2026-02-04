/** Chunk was on 7685 **/
/** chunk id: 912156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N,
  Q: () => p
}), require("./747238.js"), require("./812715.js");
var l, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk863610 = require("./863610.jsx"),
  Chunk935154 = require("./935154.jsx"),
  Chunk573435 = require("./573435.jsx"),
  Chunk260509 = require("./260509.js"),
  Chunk652215 = require("./652215.js"),
  Chunk778712 = require("./778712.js"),
  Chunk624510 = require("./624510.js"),
  p = ((l = {}).TINY_24 = "TINY_24", l.SMALL_32 = "SMALL_32", l.MEDIUM_40 = "MEDIUM_40", l);
let I = {
    TINY_24: 24,
    SMALL_32: 32,
    MEDIUM_40: 40
  },
  m = {
    TINY_24: 24,
    SMALL_32: 26,
    MEDIUM_40: 34
  },
  E = {
    TINY_24: [13, 11, 10],
    SMALL_32: [13, 11, 10],
    MEDIUM_40: [24, 20, 16]
  },
  A = {
    TINY_24: [9, 8, 7],
    SMALL_32: [10, 9, 8],
    MEDIUM_40: [14, 12, 8]
  },
  y = {
    TINY_24: Chunk624510.d7,
    SMALL_32: Chunk624510.OI,
    MEDIUM_40: Chunk624510.H5
  },
  S = {
    TINY_24: 12,
    SMALL_32: 16,
    MEDIUM_40: 20
  };

function v(e, t) {
  var n;
  return 0 === e.length ? 0 : t.length <= 0 ? e[0] : t.length > e.length ? e[e.length - 1] : null != (n = e[t.length - 1]) ? n : e[e.length - 1]
}

function O(e) {
  let {
    size: t
  } = e, n = (0, g.Kj)(t), l = n.status * g.x, r = (l - n.status) / 2, i = n.status, s = n.size - l + r - n.stroke - n.offset, a = n.size - i - n.stroke - n.offset, o = l + 2 * n.stroke, u = i + 2 * n.stroke, c = (n.status + 2 * n.stroke) / 2, d = n.size - l + r - n.offset, h = n.size - i;
  return {
    iconSize: n.size,
    statusWidth: l,
    statusHeight: i,
    dotRadius: n.status / 4,
    avatarCutoutX: s,
    avatarCutoutY: a,
    avatarCutoutWidth: o,
    avatarCutoutHeight: u,
    avatarCutoutRadius: c,
    indicatorX: d,
    indicatorY: h
  }
}
let b = Chunk64700.memo(function(e) {
    let {
      avatarSize: t
    } = e, n = (0, u.S3)(h.clD.ONLINE, null), {
      statusWidth: l,
      statusHeight: i,
      dotRadius: s
    } = O({
      size: t
    });
    return (0, r.jsx)(c.Ay, {
      mask: c.hW.STATUS_TYPING,
      width: l,
      height: i,
      "aria-hidden": true,
      children: (0, r.jsx)("div", {
        className: f.WQ,
        style: {
          backgroundColor: n
        },
        children: (0, r.jsx)(o.n, {
          dotRadius: s
        })
      })
    })
  }),
  N = function(e) {
    var t, n;
    let l, {
        className: s,
        iconClassName: o,
        size: u,
        channel: h,
        guild: p,
        locked: N,
        hasActiveThreads: T,
        isTyping: _ = false
      } = e,
      C = i.useId();
    if (null == p) return null;
    let x = E[u],
      D = m[u],
      M = I[u],
      j = (0, d.Iv)(p, 48),
      w = S[u],
      P = (() => {
        switch (u) {
          case "TINY_24":
            return g._3.SIZE_24;
          case "SMALL_32":
            return g._3.SIZE_32;
          case "MEDIUM_40":
            return g._3.SIZE_40;
          default:
            return u
        }
      })(),
      R = (l = null != (n = null != (t = null == h ? true : h.name) ? t : "") ? n.replace(/[-_]+/g, " ").replace(/'s /g, " ").replace(/\w+/g, e => e[0]).replace(/\s/g, "") : "").length > 0 ? l : "?",
      U = (0, d.Rb)(p),
      G = (0, r.jsxs)("div", {
        className: a()(f.zr, s),
        role: "img",
        style: {
          width: M,
          height: M
        },
        children: [(0, r.jsx)(c.Ay, {
          mask: c.hW.CHANNEL_ICON_WITH_GUILD_ICON,
          width: D,
          height: D,
          children: null != j ? (0, r.jsx)("img", {
            alt: p.name,
            src: j,
            className: f.es,
            style: {
              width: D,
              height: D
            }
          }) : (0, r.jsx)("div", {
            className: a()(f.TT, f.q9),
            style: {
              fontSize: v(x, U),
              width: D,
              height: D
            },
            children: U
          })
        }), (0, r.jsx)("div", {
          className: a()(f._C, y[u], o),
          "aria-hidden": true,
          children: (0, r.jsx)(c.Ay, {
            mask: c.hW.SQUIRCLE,
            width: w,
            height: w,
            children: (0, r.jsx)("div", {
              className: a()(y[u], f.q9),
              style: {
                fontSize: v(A[u], R)
              },
              children: R
            })
          })
        })]
      }),
      {
        iconSize: L,
        avatarCutoutX: k,
        avatarCutoutY: F,
        avatarCutoutWidth: V,
        avatarCutoutHeight: H,
        avatarCutoutRadius: Y,
        indicatorX: W,
        indicatorY: z
      } = O({
        size: P
      });
    return _ ? (0, r.jsxs)("div", {
      className: f.J4,
      "aria-hidden": true,
      style: {
        width: M,
        height: M
      },
      children: [(0, r.jsxs)("svg", {
        width: L,
        height: L,
        viewBox: "0 0 ".concat(L, " ").concat(L),
        className: f._S,
        "aria-hidden": true,
        children: [(0, r.jsx)("defs", {
          children: (0, r.jsxs)("mask", {
            id: C,
            width: L,
            height: L,
            children: [(0, r.jsx)("rect", {
              x: 0,
              y: 0,
              width: L,
              height: L,
              rx: Math.round(.3 * L),
              ry: Math.round(.3 * L),
              fill: "white"
            }), (0, r.jsx)("rect", {
              x: k,
              y: F,
              width: V,
              height: H,
              rx: Y,
              ry: Y,
              fill: "black"
            })]
          })
        }), (0, r.jsx)("foreignObject", {
          x: 0,
          y: 0,
          width: L,
          height: L,
          overflow: "visible",
          mask: "url(#".concat(C, ")"),
          children: G
        })]
      }), (0, r.jsx)("div", {
        className: f.RL,
        style: {
          left: W,
          top: z
        },
        children: (0, r.jsx)(b, {
          avatarSize: P
        })
      })]
    }) : G
  }