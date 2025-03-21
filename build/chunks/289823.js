/** Chunk was on 98977 **/
n.d(e, {
  Z: () => S
});
var r = n(200651),
  s = n(192379),
  i = n(120356),
  l = n.n(i),
  a = n(974674),
  u = n(438784),
  o = n(481060),
  c = n(686546),
  d = n(3682),
  A = n(120304);
let _ = {},
  E = 1 / 4;

function I(t) {
  let {
    height: e,
    fillColor: n
  } = t;
  return (0, r.jsx)("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: e / 2,
      backgroundColor: n,
      height: e,
      width: e * d.jR
    },
    children: (0, r.jsx)(u.b, {
      className: A.dots,
      dotRadius: e * E
    })
  })
}

function p(t) {
  let {
    isTyping: e,
    statusCoords: n,
    status: s
  } = t, i = (0, o.vjg)(o.Skl.ONLINE);
  return e ? (0, r.jsx)("div", {
    style: {
      position: "absolute",
      top: n.y,
      left: n.x
    },
    children: (0, r.jsx)(I, {
      height: n.height,
      fillColor: i
    })
  }) : null != s ? (0, r.jsx)(o.qbd, {
    size: n.height,
    status: s,
    style: {
      position: "absolute",
      top: n.y,
      left: n.x
    }
  }) : null
}

function f(t) {
  let {
    src: e,
    size: n
  } = t;
  return (0, r.jsx)("img", {
    className: A.circularImage,
    src: e,
    alt: "",
    width: n,
    height: n
  })
}
let h = {
    [o.EFr.SIZE_16]: {
      default: c.QS.DIAGONAL_FACEPILE_16,
      typing: c.QS.DIAGONAL_FACEPILE_TYPING_16,
      status: c.QS.DIAGONAL_FACEPILE_STATUS_16
    },
    [o.EFr.SIZE_20]: {
      default: c.QS.DIAGONAL_FACEPILE_20,
      typing: c.QS.DIAGONAL_FACEPILE_TYPING_20,
      status: c.QS.DIAGONAL_FACEPILE_STATUS_20
    },
    [o.EFr.SIZE_24]: {
      default: c.QS.DIAGONAL_FACEPILE_24,
      typing: c.QS.DIAGONAL_FACEPILE_TYPING_24,
      status: c.QS.DIAGONAL_FACEPILE_STATUS_24
    },
    [o.EFr.SIZE_32]: {
      default: c.QS.DIAGONAL_FACEPILE_32,
      typing: c.QS.DIAGONAL_FACEPILE_TYPING_32,
      status: c.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [o.EFr.SIZE_40]: {
      default: c.QS.DIAGONAL_FACEPILE_32,
      typing: c.QS.DIAGONAL_FACEPILE_TYPING_32,
      status: c.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [o.EFr.SIZE_48]: {
      default: c.QS.DIAGONAL_FACEPILE_40,
      typing: c.QS.DIAGONAL_FACEPILE_TYPING_40,
      status: c.QS.DIAGONAL_FACEPILE_STATUS_40
    },
    [o.EFr.SIZE_56]: {
      default: c.QS.DIAGONAL_FACEPILE_56,
      typing: c.QS.DIAGONAL_FACEPILE_TYPING_56,
      status: c.QS.DIAGONAL_FACEPILE_STATUS_56
    },
    [o.EFr.SIZE_80]: {
      default: c.QS.DIAGONAL_FACEPILE_80,
      typing: c.QS.DIAGONAL_FACEPILE_TYPING_80,
      status: c.QS.DIAGONAL_FACEPILE_STATUS_80
    },
    [o.EFr.SIZE_120]: {
      default: c.QS.DIAGONAL_FACEPILE_120,
      typing: c.QS.DIAGONAL_FACEPILE_TYPING_120,
      status: c.QS.DIAGONAL_FACEPILE_STATUS_120
    }
  },
  S = function(t) {
    var e, {
        backSrc: n,
        frontSrc: i,
        size: u,
        isTyping: E,
        status: I,
        style: S,
        className: L
      } = t,
      N = function(t, e) {
        if (null == t) return {};
        var n, r, s = function(t, e) {
          if (null == t) return {};
          var n, r, s = {},
            i = Object.keys(t);
          for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (s[n] = t[n]);
          return s
        }(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++) n = i[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
        }
        return s
      }(t, ["backSrc", "frontSrc", "size", "isTyping", "status", "style", "className"]);
    let {
      size: O
    } = o.ny6[u], {
      statusCoords: P,
      frontAvatarOffsetPx: y,
      frontAvatarSizePx: g,
      backAvatarSizePx: C
    } = s.useMemo(() => {
      var t;
      let e = "".concat(O, "-").concat(E);
      return null !== (t = _[e]) && void 0 !== t ? t : function(t, e, n) {
        let r = o.ny6[t],
          s = r.size / (d.z3 + d.o),
          i = s * d.z3,
          l = s * d.o,
          u = {
            statusCoords: (0, a.Vq)(r, o.Skl.ONLINE, !1, e),
            frontAvatarSizePx: i,
            backAvatarSizePx: s,
            frontAvatarOffsetPx: l,
            frontAvatarCenter: l + i / 2
          };
        return _[n] = u, u
      }(u, E, e)
    }, [O, E, u]), b = (e = null != I, E ? h[u].typing : e ? h[u].status : h[u].default);
    return (0, r.jsxs)("div", {
      style: function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), r.forEach(function(e) {
            var r;
            r = n[e], e in t ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : t[e] = r
          })
        }
        return t
      }({
        width: O,
        height: O
      }, S),
      "aria-label": N["aria-label"],
      "aria-hidden": N["aria-hidden"],
      className: l()(A.container, L),
      children: [(0, r.jsxs)(c.ZP, {
        mask: b,
        height: O,
        width: O,
        children: [(0, r.jsx)("img", {
          src: n,
          alt: "",
          width: C,
          height: C
        }), (0, r.jsx)("div", {
          style: {
            position: "absolute",
            top: y,
            left: y
          },
          children: (0, r.jsx)(f, {
            src: i,
            size: g,
            isTyping: E,
            status: I
          })
        })]
      }), (0, r.jsx)(p, {
        statusCoords: P,
        status: I,
        isTyping: E
      })]
    })
  }