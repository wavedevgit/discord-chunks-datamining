/** Chunk was on web.js **/
/** chunk id: 478063, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk97808 = require("./97808.jsx"),
  Chunk863610 = require("./863610.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx");
require("./883392.js");
var Chunk657323 = require("./657323.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = h(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let m = {};

function g(e, t, n) {
  let r = c.vCh[e],
    i = r.size / 1.5,
    a = +i,
    s = .5 * i,
    l = s + a / 2,
    u = {
      statusCoords: (0, o.Rb)(r, c.clD.ONLINE, false, t),
      frontAvatarSizePx: a,
      backAvatarSizePx: i,
      frontAvatarOffsetPx: s,
      frontAvatarCenter: l
    };
  return m[n] = u, u
}
let E = 1 / 4;

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
      width: 2.5 * t
    },
    children: (0, r.jsx)(l.n, {
      className: d.r$,
      dotRadius: t * E
    })
  })
}

function b(e) {
  let {
    isTyping: t,
    statusCoords: n,
    status: i
  } = e, a = (0, c.S31)(c.clD.ONLINE);
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
  }) : null != i ? (0, r.jsx)(c.nW6, {
    size: n.height,
    status: i,
    style: {
      position: "absolute",
      top: n.y,
      left: n.x
    }
  }) : null
}

function O(e) {
  let {
    src: t,
    size: n
  } = e;
  return (0, r.jsx)("img", {
    className: d.tM,
    src: t,
    alt: "",
    width: n,
    height: n
  })
}
let v = {
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
};

function A(e) {
  return v[e].back
}

function I(e, t, n) {
  return t ? v[n].typing : e ? v[n].status : v[n].default
}
let S = function(e) {
  let {
    backSrc: t,
    frontSrc: n,
    size: a,
    isTyping: o,
    status: l,
    style: f,
    className: h
  } = e, E = _(e, ["backSrc", "frontSrc", "size", "isTyping", "status", "style", "className"]), {
    size: y
  } = c.vCh[a], {
    statusCoords: v,
    frontAvatarOffsetPx: S,
    frontAvatarSizePx: T,
    backAvatarSizePx: C
  } = i.useMemo(() => {
    var e;
    let t = "".concat(y, "-").concat(o);
    return null != (e = m[t]) ? e : g(a, o, t)
  }, [y, o, a]), N = I(null != l, o, a), w = A(a);
  return (0, r.jsxs)("div", {
    style: p({
      width: y,
      height: y
    }, f),
    "aria-label": E["aria-label"],
    "aria-hidden": E["aria-hidden"],
    className: s()(d.kL, h),
    children: [(0, r.jsxs)(u.Ay, {
      mask: N,
      height: y,
      width: y,
      children: [(0, r.jsx)(u.Ay, {
        mask: w,
        height: y,
        width: y,
        children: (0, r.jsx)("img", {
          src: t,
          alt: "",
          width: C,
          height: C
        })
      }), (0, r.jsx)("div", {
        style: {
          position: "absolute",
          top: S,
          left: S
        },
        children: (0, r.jsx)(O, {
          src: n,
          size: T,
          isTyping: o,
          status: l
        })
      })]
    }), (0, r.jsx)(b, {
      statusCoords: v,
      status: l,
      isTyping: o
    })]
  })
}