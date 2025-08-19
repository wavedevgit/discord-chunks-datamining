/** Chunk was on 91173 **/
/** chunk id: 289823, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
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
let m = {},
  f = 1 / 4;

function g(e) {
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
    children: (0, r.jsx)(s.b, {
      className: p.dots,
      dotRadius: t * f
    })
  })
}

function _(e) {
  let {
    isTyping: t,
    statusCoords: n,
    status: i
  } = e, l = (0, c.vjg)(c.Skl.ONLINE);
  return t ? (0, r.jsx)("div", {
    style: {
      position: "absolute",
      top: n.y,
      left: n.x
    },
    children: (0, r.jsx)(g, {
      height: n.height,
      fillColor: l
    })
  }) : null != i ? (0, r.jsx)(c.qbd, {
    size: n.height,
    status: i,
    style: {
      position: "absolute",
      top: n.y,
      left: n.x
    }
  }) : null
}

function h(e) {
  let {
    src: t,
    size: n
  } = e;
  return (0, r.jsx)("img", {
    className: p.circularImage,
    src: t,
    alt: "",
    width: n,
    height: n
  })
}
let b = {
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
  E = function(e) {
    var t, {
        backSrc: n,
        frontSrc: l,
        size: s,
        isTyping: f,
        status: g,
        style: E,
        className: C
      } = e,
      v = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(e, ["backSrc", "frontSrc", "size", "isTyping", "status", "style", "className"]);
    let {
      size: O
    } = c.ny6[s], {
      statusCoords: y,
      frontAvatarOffsetPx: x,
      frontAvatarSizePx: j,
      backAvatarSizePx: I
    } = i.useMemo(() => {
      var e;
      let t = "".concat(O, "-").concat(f);
      return null != (e = m[t]) ? e : function(e, t, n) {
        let r = c.ny6[e],
          i = r.size / (d.z3 + d.o),
          l = i * d.z3,
          a = i * d.o,
          s = {
            statusCoords: (0, o.Vq)(r, c.Skl.ONLINE, false, t),
            frontAvatarSizePx: l,
            backAvatarSizePx: i,
            frontAvatarOffsetPx: a,
            frontAvatarCenter: a + l / 2
          };
        return m[n] = s, s
      }(s, f, t)
    }, [O, f, s]), S = (t = null != g, f ? b[s].typing : t ? b[s].status : b[s].default);
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
        width: O,
        height: O
      }, E),
      "aria-label": v["aria-label"],
      "aria-hidden": v["aria-hidden"],
      className: a()(p.container, C),
      children: [(0, r.jsxs)(u.ZP, {
        mask: S,
        height: O,
        width: O,
        children: [(0, r.jsx)("img", {
          src: n,
          alt: "",
          width: I,
          height: I
        }), (0, r.jsx)("div", {
          style: {
            position: "absolute",
            top: x,
            left: x
          },
          children: (0, r.jsx)(h, {
            src: l,
            size: j,
            isTyping: f,
            status: g
          })
        })]
      }), (0, r.jsx)(_, {
        statusCoords: y,
        status: g,
        isTyping: f
      })]
    })
  }