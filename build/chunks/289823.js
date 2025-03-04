/** Chunk was on 88936 **/
n.d(t, {
  Z: () => h
});
var r = n(200651),
  l = n(192379),
  i = n(120356),
  o = n.n(i),
  a = n(974674),
  s = n(438784),
  c = n(481060),
  u = n(686546),
  d = n(3682),
  f = n(120304);
let p = {},
  m = 1 / 4;

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
      className: f.dots,
      dotRadius: t * m
    })
  })
}

function y(e) {
  let {
    isTyping: t,
    statusCoords: n,
    status: l
  } = e, i = (0, c.vjg)(c.Skl.ONLINE);
  return t ? (0, r.jsx)("div", {
    style: {
      position: "absolute",
      top: n.y,
      left: n.x
    },
    children: (0, r.jsx)(g, {
      height: n.height,
      fillColor: i
    })
  }) : null != l ? (0, r.jsx)(c.qbd, {
    size: n.height,
    status: l,
    style: {
      position: "absolute",
      top: n.y,
      left: n.x
    }
  }) : null
}

function b(e) {
  let {
    src: t,
    size: n
  } = e;
  return (0, r.jsx)("img", {
    className: f.circularImage,
    src: t,
    alt: "",
    width: n,
    height: n
  })
}
let O = {
    [c.EFr.SIZE_16]: {
      default: u.QS.DIAGONAL_FACEPILE_16,
      typing: u.QS.DIAGONAL_FACEPILE_TYPING_16,
      status: u.QS.DIAGONAL_FACEPILE_STATUS_16
    },
    [c.EFr.SIZE_20]: {
      default: u.QS.DIAGONAL_FACEPILE_20,
      typing: u.QS.DIAGONAL_FACEPILE_TYPING_20,
      status: u.QS.DIAGONAL_FACEPILE_STATUS_20
    },
    [c.EFr.SIZE_24]: {
      default: u.QS.DIAGONAL_FACEPILE_24,
      typing: u.QS.DIAGONAL_FACEPILE_TYPING_24,
      status: u.QS.DIAGONAL_FACEPILE_STATUS_24
    },
    [c.EFr.SIZE_32]: {
      default: u.QS.DIAGONAL_FACEPILE_32,
      typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
      status: u.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [c.EFr.SIZE_40]: {
      default: u.QS.DIAGONAL_FACEPILE_32,
      typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
      status: u.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [c.EFr.SIZE_48]: {
      default: u.QS.DIAGONAL_FACEPILE_40,
      typing: u.QS.DIAGONAL_FACEPILE_TYPING_40,
      status: u.QS.DIAGONAL_FACEPILE_STATUS_40
    },
    [c.EFr.SIZE_56]: {
      default: u.QS.DIAGONAL_FACEPILE_56,
      typing: u.QS.DIAGONAL_FACEPILE_TYPING_56,
      status: u.QS.DIAGONAL_FACEPILE_STATUS_56
    },
    [c.EFr.SIZE_80]: {
      default: u.QS.DIAGONAL_FACEPILE_80,
      typing: u.QS.DIAGONAL_FACEPILE_TYPING_80,
      status: u.QS.DIAGONAL_FACEPILE_STATUS_80
    },
    [c.EFr.SIZE_120]: {
      default: u.QS.DIAGONAL_FACEPILE_120,
      typing: u.QS.DIAGONAL_FACEPILE_TYPING_120,
      status: u.QS.DIAGONAL_FACEPILE_STATUS_120
    }
  },
  h = function(e) {
    var t, {
        backSrc: n,
        frontSrc: i,
        size: s,
        isTyping: m,
        status: g,
        style: h,
        className: v
      } = e,
      j = function(e, t) {
        if (null == e) return {};
        var n, r, l = function(e, t) {
          if (null == e) return {};
          var n, r, l = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
          return l
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
        }
        return l
      }(e, ["backSrc", "frontSrc", "size", "isTyping", "status", "style", "className"]);
    let {
      size: S
    } = c.ny6[s], {
      statusCoords: P,
      frontAvatarOffsetPx: N,
      frontAvatarSizePx: E,
      backAvatarSizePx: I
    } = l.useMemo(() => {
      var e;
      let t = "".concat(S, "-").concat(m);
      return null !== (e = p[t]) && void 0 !== e ? e : function(e, t, n) {
        let r = c.ny6[e],
          l = r.size / (d.z3 + d.o),
          i = l * d.z3,
          o = l * d.o,
          s = {
            statusCoords: (0, a.Vq)(r, c.Skl.ONLINE, !1, t),
            frontAvatarSizePx: i,
            backAvatarSizePx: l,
            frontAvatarOffsetPx: o,
            frontAvatarCenter: o + i / 2
          };
        return p[n] = s, s
      }(s, m, t)
    }, [S, m, s]), x = (t = null != g, m ? O[s].typing : t ? O[s].status : O[s].default);
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
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          })
        }
        return e
      }({
        width: S,
        height: S
      }, h),
      "aria-label": j["aria-label"],
      "aria-hidden": j["aria-hidden"],
      className: o()(f.container, v),
      children: [(0, r.jsxs)(u.ZP, {
        mask: x,
        height: S,
        width: S,
        children: [(0, r.jsx)("img", {
          src: n,
          alt: "",
          width: I,
          height: I
        }), (0, r.jsx)("div", {
          style: {
            position: "absolute",
            top: N,
            left: N
          },
          children: (0, r.jsx)(b, {
            src: i,
            size: E,
            isTyping: m,
            status: g
          })
        })]
      }), (0, r.jsx)(y, {
        statusCoords: P,
        status: g,
        isTyping: m
      })]
    })
  }