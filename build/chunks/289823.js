/** Chunk was on 87337 **/
n.d(t, {
  Z: () => N
});
var r = n(200651),
  s = n(192379),
  i = n(120356),
  a = n.n(i),
  l = n(974674),
  o = n(438784),
  c = n(481060),
  u = n(686546),
  d = n(3682),
  _ = n(369025);
let A = {},
  f = 1 / 4;

function E(e) {
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
      dotRadius: t * f
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
    children: (0, r.jsx)(E, {
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

function h(e) {
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
let m = {
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
  N = function(e) {
    var t, {
        backSrc: n,
        frontSrc: i,
        size: o,
        isTyping: f,
        status: E,
        style: N,
        className: g
      } = e,
      x = function(e, t) {
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
      size: S
    } = c.ny6[o], {
      statusCoords: p,
      frontAvatarOffsetPx: L,
      frontAvatarSizePx: O,
      backAvatarSizePx: j
    } = s.useMemo(() => {
      var e;
      let t = "".concat(S, "-").concat(f);
      return null != (e = A[t]) ? e : function(e, t, n) {
        let r = c.ny6[e],
          s = r.size / (d.z3 + d.o),
          i = s * d.z3,
          a = s * d.o,
          o = {
            statusCoords: (0, l.Vq)(r, c.Skl.ONLINE, !1, t),
            frontAvatarSizePx: i,
            backAvatarSizePx: s,
            frontAvatarOffsetPx: a,
            frontAvatarCenter: a + i / 2
          };
        return A[n] = o, o
      }(o, f, t)
    }, [S, f, o]), b = (t = null != E, f ? m[o].typing : t ? m[o].status : m[o].default);
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
      }, N),
      "aria-label": x["aria-label"],
      "aria-hidden": x["aria-hidden"],
      className: a()(_.container, g),
      children: [(0, r.jsxs)(u.ZP, {
        mask: b,
        height: S,
        width: S,
        children: [(0, r.jsx)("img", {
          src: n,
          alt: "",
          width: j,
          height: j
        }), (0, r.jsx)("div", {
          style: {
            position: "absolute",
            top: L,
            left: L
          },
          children: (0, r.jsx)(h, {
            src: i,
            size: O,
            isTyping: f,
            status: E
          })
        })]
      }), (0, r.jsx)(I, {
        statusCoords: p,
        status: E,
        isTyping: f
      })]
    })
  }