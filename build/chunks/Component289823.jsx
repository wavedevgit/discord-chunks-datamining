/** Chunk was on 87337 **/
/** chunk id: 289823, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk974674 = require("./974674.jsx"),
  Chunk438784 = require("./438784.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk3682 = require("./3682.js"),
  Chunk647718 = require("./647718.js");
let A = {},
  E = 1 / 4;

function f(e) {
  let {
    height: t,
    fillColor: n
  } = e;
  return (0, r.jsx)("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: t / 2,
      backgroundColor: n,
      height: t,
      width: t * d.jR
    },
    children: (0, r.jsx)(o.b, {
      className: _.dots,
      dotRadius: t * E
    })
  })
}

function I(e) {
  let {
    isTyping: t,
    statusCoords: n,
    status: s
  } = e, i = (0, c.vjg)(c.Skl.ONLINE);
  return t ? (0, r.jsx)("div", {
    style: {
      position: "absolute",
      top: n.y,
      left: n.x
    },
    children: (0, r.jsx)(f, {
      height: n.height,
      fillColor: i
    })
  }) : null != s ? (0, r.jsx)(c.qbd, {
    size: n.height,
    status: s,
    style: {
      position: "absolute",
      top: n.y,
      left: n.x
    }
  }) : null
}

function m(e) {
  let {
    src: t,
    size: n
  } = e;
  return (0, r.jsx)("img", {
    className: _.circularImage,
    src: t,
    alt: "",
    width: n,
    height: n
  })
}
let g = {
    [Chunk481060.EFr.SIZE_16]: {
      default: Chunk686546.QS.DIAGONAL_FACEPILE_16,
      typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_16,
      status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_16
    },
    [Chunk481060.EFr.SIZE_20]: {
      default: Chunk686546.QS.DIAGONAL_FACEPILE_20,
      typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_20,
      status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_20
    },
    [Chunk481060.EFr.SIZE_24]: {
      default: Chunk686546.QS.DIAGONAL_FACEPILE_24,
      typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_24,
      status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_24
    },
    [Chunk481060.EFr.SIZE_32]: {
      default: Chunk686546.QS.DIAGONAL_FACEPILE_32,
      typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_32,
      status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [Chunk481060.EFr.SIZE_40]: {
      default: Chunk686546.QS.DIAGONAL_FACEPILE_32,
      typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_32,
      status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [Chunk481060.EFr.SIZE_48]: {
      default: Chunk686546.QS.DIAGONAL_FACEPILE_40,
      typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_40,
      status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_40
    },
    [Chunk481060.EFr.SIZE_56]: {
      default: Chunk686546.QS.DIAGONAL_FACEPILE_56,
      typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_56,
      status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_56
    },
    [Chunk481060.EFr.SIZE_80]: {
      default: Chunk686546.QS.DIAGONAL_FACEPILE_80,
      typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_80,
      status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_80
    },
    [Chunk481060.EFr.SIZE_96]: {
      default: Chunk686546.QS.DIAGONAL_FACEPILE_96,
      typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_96,
      status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_96
    },
    [Chunk481060.EFr.SIZE_120]: {
      default: Chunk686546.QS.DIAGONAL_FACEPILE_120,
      typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_120,
      status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_120
    }
  },
  h = function(e) {
    var t, {
        backSrc: n,
        frontSrc: i,
        size: o,
        isTyping: E,
        status: f,
        style: h,
        className: x
      } = e,
      S = function(e, t) {
        if (null == e) return {};
        var n, r, s = function(e, t) {
          if (null == e) return {};
          var n, r, s = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
          return s
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
        }
        return s
      }(e, ["backSrc", "frontSrc", "size", "isTyping", "status", "style", "className"]);
    let {
      size: N
    } = c.ny6[o], {
      statusCoords: L,
      frontAvatarOffsetPx: p,
      frontAvatarSizePx: O,
      backAvatarSizePx: j
    } = s.useMemo(() => {
      var e;
      let t = "".concat(N, "-").concat(E);
      return null != (e = A[t]) ? e : function(e, t, n) {
        let r = c.ny6[e],
          s = r.size / (d.z3 + d.o),
          i = s * d.z3,
          a = s * d.o,
          o = {
            statusCoords: (0, l.Vq)(r, c.Skl.ONLINE, false, t),
            frontAvatarSizePx: i,
            backAvatarSizePx: s,
            frontAvatarOffsetPx: a,
            frontAvatarCenter: a + i / 2
          };
        return A[n] = o, o
      }(o, E, t)
    }, [N, E, o]), b = (t = null != f, E ? g[o].typing : t ? g[o].status : g[o].default);
    return (0, r.jsxs)("div", {
      style: function(e) {
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
        width: N,
        height: N
      }, h),
      "aria-label": S["aria-label"],
      "aria-hidden": S["aria-hidden"],
      className: a()(_.container, x),
      children: [(0, r.jsxs)(u.ZP, {
        mask: b,
        height: N,
        width: N,
        children: [(0, r.jsx)("img", {
          src: n,
          alt: "",
          width: j,
          height: j
        }), (0, r.jsx)("div", {
          style: {
            position: "absolute",
            top: p,
            left: p
          },
          children: (0, r.jsx)(m, {
            src: i,
            size: O,
            isTyping: E,
            status: f
          })
        })]
      }), (0, r.jsx)(I, {
        statusCoords: L,
        status: f,
        isTyping: E
      })]
    })
  }