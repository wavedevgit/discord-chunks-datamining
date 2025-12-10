/** Chunk was on web.js **/
/** chunk id: 289823, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk974674 = require("./974674.jsx"),
  Chunk438784 = require("./438784.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk3682 = require("./3682.js"),
  Chunk647718 = require("./647718.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let g = {};

function E(e, t, n) {
  let r = c.ny6[e],
    i = r.size / (d.z3 + d.o),
    a = i * d.z3,
    o = i * d.o,
    l = o + a / 2,
    u = {
      statusCoords: (0, s.Vq)(r, c.Skl.ONLINE, false, t),
      frontAvatarSizePx: a,
      backAvatarSizePx: i,
      frontAvatarOffsetPx: o,
      frontAvatarCenter: l
    };
  return g[n] = u, u
}
let b = 1 / 4;

function y(e) {
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
    children: (0, r.jsx)(l.b, {
      className: f.dots,
      dotRadius: t * b
    })
  })
}

function O(e) {
  let {
    isTyping: t,
    statusCoords: n,
    status: i
  } = e, a = (0, c.vjg)(c.Skl.ONLINE);
  return t ? (0, r.jsx)("div", {
    style: {
      position: "absolute",
      top: n.y,
      left: n.x
    },
    children: (0, r.jsx)(y, {
      height: n.height,
      fillColor: a
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

function v(e) {
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
let S = {
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
  [Chunk481060.EFr.SIZE_72]: {
    default: Chunk686546.QS.DIAGONAL_FACEPILE_72,
    typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_72,
    status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_72
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
};

function I(e, t, n) {
  return t ? S[n].typing : e ? S[n].status : S[n].default
}
let T = function(e) {
  var {
    backSrc: t,
    frontSrc: n,
    size: a,
    isTyping: s,
    status: l,
    style: d,
    className: p
  } = e, h = m(e, ["backSrc", "frontSrc", "size", "isTyping", "status", "style", "className"]);
  let {
    size: b
  } = c.ny6[a], {
    statusCoords: y,
    frontAvatarOffsetPx: S,
    frontAvatarSizePx: T,
    backAvatarSizePx: C
  } = i.useMemo(() => {
    var e;
    let t = "".concat(b, "-").concat(s);
    return null != (e = g[t]) ? e : E(a, s, t)
  }, [b, s, a]), A = I(null != l, s, a);
  return (0, r.jsxs)("div", {
    style: _({
      width: b,
      height: b
    }, d),
    "aria-label": h["aria-label"],
    "aria-hidden": h["aria-hidden"],
    className: o()(f.container, p),
    children: [(0, r.jsxs)(u.ZP, {
      mask: A,
      height: b,
      width: b,
      children: [(0, r.jsx)("img", {
        src: t,
        alt: "",
        width: C,
        height: C
      }), (0, r.jsx)("div", {
        style: {
          position: "absolute",
          top: S,
          left: S
        },
        children: (0, r.jsx)(v, {
          src: n,
          size: T,
          isTyping: s,
          status: l
        })
      })]
    }), (0, r.jsx)(O, {
      statusCoords: y,
      status: l,
      isTyping: s
    })]
  })
}