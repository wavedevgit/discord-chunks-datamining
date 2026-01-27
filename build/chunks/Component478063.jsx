/** Chunk was on 96758 **/
/** chunk id: 478063, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk97808 = require("./97808.jsx"),
  Chunk863610 = require("./863610.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx");
require("./883392.js");
var Chunk657323 = require("./657323.js");
let f = {},
  h = 1 / 4;

function d(e) {
  let {
    height: t,
    fillColor: r
  } = e;
  return (0, n.jsx)("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: t / 2,
      backgroundColor: r,
      height: t,
      width: 2.5 * t
    },
    children: (0, n.jsx)(u.n, {
      className: A.r$,
      dotRadius: t * h
    })
  })
}

function b(e) {
  let {
    isTyping: t,
    statusCoords: r,
    status: l
  } = e, s = (0, o.S31)(o.clD.ONLINE);
  return t ? (0, n.jsx)("div", {
    style: {
      position: "absolute",
      top: r.y,
      left: r.x
    },
    children: (0, n.jsx)(d, {
      height: r.height,
      fillColor: s
    })
  }) : null != l ? (0, n.jsx)(o.nW6, {
    size: r.height,
    status: l,
    style: {
      position: "absolute",
      top: r.y,
      left: r.x
    }
  }) : null
}

function _(e) {
  let {
    src: t,
    size: r
  } = e;
  return (0, n.jsx)("img", {
    className: A.tM,
    src: t,
    alt: "",
    width: r,
    height: r
  })
}
let p = {
    [Chunk397927._3J.SIZE_16]: {
      default: Chunk573435.hW.DIAGONAL_FACEPILE_16,
      typing: Chunk573435.hW.DIAGONAL_FACEPILE_TYPING_16,
      status: Chunk573435.hW.DIAGONAL_FACEPILE_STATUS_16,
      back: Chunk573435.hW.DIAGONAL_FACEPILE_BACK_16
    },
    [Chunk397927._3J.SIZE_20]: {
      default: Chunk573435.hW.DIAGONAL_FACEPILE_20,
      typing: Chunk573435.hW.DIAGONAL_FACEPILE_TYPING_20,
      status: Chunk573435.hW.DIAGONAL_FACEPILE_STATUS_20,
      back: Chunk573435.hW.DIAGONAL_FACEPILE_BACK_20
    },
    [Chunk397927._3J.SIZE_24]: {
      default: Chunk573435.hW.DIAGONAL_FACEPILE_24,
      typing: Chunk573435.hW.DIAGONAL_FACEPILE_TYPING_24,
      status: Chunk573435.hW.DIAGONAL_FACEPILE_STATUS_24,
      back: Chunk573435.hW.DIAGONAL_FACEPILE_BACK_24
    },
    [Chunk397927._3J.SIZE_32]: {
      default: Chunk573435.hW.DIAGONAL_FACEPILE_32,
      typing: Chunk573435.hW.DIAGONAL_FACEPILE_TYPING_32,
      status: Chunk573435.hW.DIAGONAL_FACEPILE_STATUS_32,
      back: Chunk573435.hW.DIAGONAL_FACEPILE_BACK_32
    },
    [Chunk397927._3J.SIZE_40]: {
      default: Chunk573435.hW.DIAGONAL_FACEPILE_32,
      typing: Chunk573435.hW.DIAGONAL_FACEPILE_TYPING_32,
      status: Chunk573435.hW.DIAGONAL_FACEPILE_STATUS_32,
      back: Chunk573435.hW.DIAGONAL_FACEPILE_BACK_32
    },
    [Chunk397927._3J.SIZE_48]: {
      default: Chunk573435.hW.DIAGONAL_FACEPILE_40,
      typing: Chunk573435.hW.DIAGONAL_FACEPILE_TYPING_40,
      status: Chunk573435.hW.DIAGONAL_FACEPILE_STATUS_40,
      back: Chunk573435.hW.DIAGONAL_FACEPILE_BACK_40
    },
    [Chunk397927._3J.SIZE_56]: {
      default: Chunk573435.hW.DIAGONAL_FACEPILE_56,
      typing: Chunk573435.hW.DIAGONAL_FACEPILE_TYPING_56,
      status: Chunk573435.hW.DIAGONAL_FACEPILE_STATUS_56,
      back: Chunk573435.hW.DIAGONAL_FACEPILE_BACK_56
    },
    [Chunk397927._3J.SIZE_72]: {
      default: Chunk573435.hW.DIAGONAL_FACEPILE_72,
      typing: Chunk573435.hW.DIAGONAL_FACEPILE_TYPING_72,
      status: Chunk573435.hW.DIAGONAL_FACEPILE_STATUS_72,
      back: Chunk573435.hW.DIAGONAL_FACEPILE_BACK_72
    },
    [Chunk397927._3J.SIZE_80]: {
      default: Chunk573435.hW.DIAGONAL_FACEPILE_80,
      typing: Chunk573435.hW.DIAGONAL_FACEPILE_TYPING_80,
      status: Chunk573435.hW.DIAGONAL_FACEPILE_STATUS_80,
      back: Chunk573435.hW.DIAGONAL_FACEPILE_BACK_80
    },
    [Chunk397927._3J.SIZE_96]: {
      default: Chunk573435.hW.DIAGONAL_FACEPILE_96,
      typing: Chunk573435.hW.DIAGONAL_FACEPILE_TYPING_96,
      status: Chunk573435.hW.DIAGONAL_FACEPILE_STATUS_96,
      back: Chunk573435.hW.DIAGONAL_FACEPILE_BACK_96
    },
    [Chunk397927._3J.SIZE_120]: {
      default: Chunk573435.hW.DIAGONAL_FACEPILE_120,
      typing: Chunk573435.hW.DIAGONAL_FACEPILE_TYPING_120,
      status: Chunk573435.hW.DIAGONAL_FACEPILE_STATUS_120,
      back: Chunk573435.hW.DIAGONAL_FACEPILE_BACK_120
    }
  },
  y = function(e) {
    var t;
    let {
      backSrc: r,
      frontSrc: s,
      size: u,
      isTyping: h,
      status: d,
      style: y,
      className: O
    } = e, E = function(e, t) {
      if (null == e) return {};
      var r, n, l, s = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
        return s
      }
      if (s = function(e, t) {
          if (null == e) return {};
          var r, n, l = {},
            s = Object.getOwnPropertyNames(e);
          for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
          return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
      return s
    }(e, ["backSrc", "frontSrc", "size", "isTyping", "status", "style", "className"]), {
      size: I
    } = o.vCh[u], {
      statusCoords: L,
      frontAvatarOffsetPx: g,
      frontAvatarSizePx: m,
      backAvatarSizePx: P
    } = l.useMemo(() => {
      var e;
      let t, r, n, l, s, i = "".concat(I, "-").concat(h);
      return null != (e = f[i]) ? e : (n = +(r = (t = o.vCh[u]).size / 1.5), l = .5 * r, s = {
        statusCoords: (0, a.Rb)(t, o.clD.ONLINE, false, h),
        frontAvatarSizePx: n,
        backAvatarSizePx: r,
        frontAvatarOffsetPx: l,
        frontAvatarCenter: l + n / 2
      }, f[i] = s, s)
    }, [I, h, u]), N = (t = null != d, h ? p[u].typing : t ? p[u].status : p[u].default), j = p[u].back;
    return (0, n.jsxs)("div", {
      style: function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({
        width: I,
        height: I
      }, y),
      "aria-label": E["aria-label"],
      "aria-hidden": E["aria-hidden"],
      className: i()(A.kL, O),
      children: [(0, n.jsxs)(c.Ay, {
        mask: N,
        height: I,
        width: I,
        children: [(0, n.jsx)(c.Ay, {
          mask: j,
          height: I,
          width: I,
          children: (0, n.jsx)("img", {
            src: r,
            alt: "",
            width: P,
            height: P
          })
        }), (0, n.jsx)("div", {
          style: {
            position: "absolute",
            top: g,
            left: g
          },
          children: (0, n.jsx)(_, {
            src: s,
            size: m,
            isTyping: h,
            status: d
          })
        })]
      }), (0, n.jsx)(b, {
        statusCoords: L,
        status: d,
        isTyping: h
      })]
    })
  }