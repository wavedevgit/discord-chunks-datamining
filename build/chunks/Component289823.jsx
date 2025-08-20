/** Chunk was on 87337 **/
/** chunk id: 289823, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function I(t) {
  let {
    height: e,
    fillColor: n
  } = t;
  return (0, i.jsx)("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: e / 2,
      backgroundColor: n,
      height: e,
      width: e * _.jR
    },
    children: (0, i.jsx)(o.b, {
      className: d.dots,
      dotRadius: e * E
    })
  })
}

function f(t) {
  let {
    isTyping: e,
    statusCoords: n,
    status: r
  } = t, s = (0, u.vjg)(u.Skl.ONLINE);
  return e ? (0, i.jsx)("div", {
    style: {
      position: "absolute",
      top: n.y,
      left: n.x
    },
    children: (0, i.jsx)(I, {
      height: n.height,
      fillColor: s
    })
  }) : null != r ? (0, i.jsx)(u.qbd, {
    size: n.height,
    status: r,
    style: {
      position: "absolute",
      top: n.y,
      left: n.x
    }
  }) : null
}

function S(t) {
  let {
    src: e,
    size: n
  } = t;
  return (0, i.jsx)("img", {
    className: d.circularImage,
    src: e,
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
  L = function(t) {
    var e, {
        backSrc: n,
        frontSrc: s,
        size: o,
        isTyping: E,
        status: I,
        style: L,
        className: N
      } = t,
      m = function(t, e) {
        if (null == t) return {};
        var n, i, r = function(t, e) {
          if (null == t) return {};
          var n, i, r = {},
            s = Object.keys(t);
          for (i = 0; i < s.length; i++) n = s[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
          return r
        }(t, e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          for (i = 0; i < s.length; i++) n = s[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
        }
        return r
      }(t, ["backSrc", "frontSrc", "size", "isTyping", "status", "style", "className"]);
    let {
      size: h
    } = u.ny6[o], {
      statusCoords: O,
      frontAvatarOffsetPx: p,
      frontAvatarSizePx: x,
      backAvatarSizePx: P
    } = r.useMemo(() => {
      var t;
      let e = "".concat(h, "-").concat(E);
      return null != (t = A[e]) ? t : function(t, e, n) {
        let i = u.ny6[t],
          r = i.size / (_.z3 + _.o),
          s = r * _.z3,
          a = r * _.o,
          o = {
            statusCoords: (0, l.Vq)(i, u.Skl.ONLINE, false, e),
            frontAvatarSizePx: s,
            backAvatarSizePx: r,
            frontAvatarOffsetPx: a,
            frontAvatarCenter: a + s / 2
          };
        return A[n] = o, o
      }(o, E, e)
    }, [h, E, o]), G = (e = null != I, E ? g[o].typing : e ? g[o].status : g[o].default);
    return (0, i.jsxs)("div", {
      style: function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), i.forEach(function(e) {
            var i;
            i = n[e], e in t ? Object.defineProperty(t, e, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = i
          })
        }
        return t
      }({
        width: h,
        height: h
      }, L),
      "aria-label": m["aria-label"],
      "aria-hidden": m["aria-hidden"],
      className: a()(d.container, N),
      children: [(0, i.jsxs)(c.ZP, {
        mask: G,
        height: h,
        width: h,
        children: [(0, i.jsx)("img", {
          src: n,
          alt: "",
          width: P,
          height: P
        }), (0, i.jsx)("div", {
          style: {
            position: "absolute",
            top: p,
            left: p
          },
          children: (0, i.jsx)(S, {
            src: s,
            size: x,
            isTyping: E,
            status: I
          })
        })]
      }), (0, i.jsx)(f, {
        statusCoords: O,
        status: I,
        isTyping: E
      })]
    })
  }