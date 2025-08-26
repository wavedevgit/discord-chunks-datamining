/** Chunk was on web.js **/
/** chunk id: 974674, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Vq: () => D,
  Xo: () => V,
  qE: () => U,
  qe: () => k
}), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk202841 = require("./202841.js"),
  Chunk143450 = require("./143450.js"),
  Chunk1561 = require("./1561.jsx"),
  Chunk438784 = require("./438784.jsx"),
  Chunk696826 = require("./696826.jsx"),
  Chunk981729 = require("./981729.jsx"),
  Chunk686546 = require("./686546.jsx"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk419061 = require("./419061.js"),
  Chunk268685 = require("./268685.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk536537 = require("./536537.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let A = {
  tension: 1200,
  friction: 70
};

function C() {
  return document.hasFocus()
}

function N(e) {
  var {
    size: t,
    isMobile: n,
    isTyping: i
  } = e, o = T(e, ["size", "isMobile", "isTyping"]);
  let a = (0, g.UC)(t),
    s = a.status * (n && !i ? g.EW : 1),
    l = a.status * (i ? g.D6 : 1),
    c = i ? (a.status * g.D6 - a.status) / 2 : 0,
    u = a.size - a.status - c - a.offset,
    d = a.size - s - a.offset;
  return (0, r.jsx)("rect", O({
    x: u,
    y: d,
    width: l,
    height: s,
    fill: "transparent",
    "aria-hidden": true
  }, o))
}

function R(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return null != t ? E.intl.formatToPlainString(E.t["/6mw19"], {
    label: e,
    status: (0, p.u5)(t, n)
  }) : e
}

function P(e, t, n, r) {
  if (null == e) return null;
  if (r) switch (t) {
    case g.EF.SIZE_16:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_16;
    case g.EF.SIZE_20:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_20;
    case g.EF.SIZE_24:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_24;
    case g.EF.SIZE_32:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_32;
    case g.EF.SIZE_40:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_40;
    case g.EF.SIZE_44:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_44;
    case g.EF.SIZE_48:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_48;
    case g.EF.SIZE_56:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_56;
    case g.EF.SIZE_80:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_80;
    case g.EF.SIZE_96:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_96;
    case g.EF.SIZE_120:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_120
  }
  if (n) switch (t) {
    case g.EF.SIZE_16:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_16;
    case g.EF.SIZE_20:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_20;
    case g.EF.SIZE_24:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_24;
    case g.EF.SIZE_32:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_32;
    case g.EF.SIZE_40:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_40;
    case g.EF.SIZE_44:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_44;
    case g.EF.SIZE_48:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_48;
    case g.EF.SIZE_56:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_56;
    case g.EF.SIZE_80:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_80;
    case g.EF.SIZE_96:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_96;
    case g.EF.SIZE_120:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_120
  }
  switch (t) {
    case g.EF.SIZE_16:
      return _.QS.AVATAR_DECORATION_STATUS_ROUND_16;
    case g.EF.SIZE_20:
      return _.QS.AVATAR_DECORATION_STATUS_ROUND_20;
    case g.EF.SIZE_24:
      return _.QS.AVATAR_DECORATION_STATUS_ROUND_24;
    case g.EF.SIZE_32:
      return _.QS.AVATAR_DECORATION_STATUS_ROUND_32;
    case g.EF.SIZE_40:
      return _.QS.AVATAR_DECORATION_STATUS_ROUND_40;
    case g.EF.SIZE_44:
      return _.QS.AVATAR_DECORATION_STATUS_ROUND_44;
    case g.EF.SIZE_48:
      return _.QS.AVATAR_DECORATION_STATUS_ROUND_48;
    case g.EF.SIZE_56:
      return _.QS.AVATAR_DECORATION_STATUS_ROUND_56;
    case g.EF.SIZE_80:
      return _.QS.AVATAR_DECORATION_STATUS_ROUND_80;
    case g.EF.SIZE_96:
      return _.QS.AVATAR_DECORATION_STATUS_ROUND_96;
    case g.EF.SIZE_120:
      return _.QS.AVATAR_DECORATION_STATUS_ROUND_120
  }
  return null
}

function w(e, t, n, r) {
  if (null == e) return _.QS.AVATAR_DEFAULT;
  if (r) switch (t) {
    case g.EF.SIZE_16:
      return _.QS.AVATAR_STATUS_TYPING_16;
    case g.EF.SIZE_20:
      return _.QS.AVATAR_STATUS_TYPING_20;
    case g.EF.SIZE_24:
      return _.QS.AVATAR_STATUS_TYPING_24;
    case g.EF.SIZE_32:
      return _.QS.AVATAR_STATUS_TYPING_32;
    case g.EF.SIZE_40:
      return _.QS.AVATAR_STATUS_TYPING_40;
    case g.EF.SIZE_44:
      return _.QS.AVATAR_STATUS_TYPING_44;
    case g.EF.SIZE_48:
      return _.QS.AVATAR_STATUS_TYPING_48;
    case g.EF.SIZE_56:
      return _.QS.AVATAR_STATUS_TYPING_56;
    case g.EF.SIZE_80:
      return _.QS.AVATAR_STATUS_TYPING_80;
    case g.EF.SIZE_96:
      return _.QS.AVATAR_STATUS_TYPING_96;
    case g.EF.SIZE_120:
      return _.QS.AVATAR_STATUS_TYPING_120
  }
  if (e === h.Skl.ONLINE && n) switch (t) {
    case g.EF.SIZE_16:
      return _.QS.AVATAR_STATUS_MOBILE_16;
    case g.EF.SIZE_20:
      return _.QS.AVATAR_STATUS_MOBILE_20;
    case g.EF.SIZE_24:
      return _.QS.AVATAR_STATUS_MOBILE_24;
    case g.EF.SIZE_32:
      return _.QS.AVATAR_STATUS_MOBILE_32;
    case g.EF.SIZE_40:
      return _.QS.AVATAR_STATUS_MOBILE_40;
    case g.EF.SIZE_44:
      return _.QS.AVATAR_STATUS_MOBILE_44;
    case g.EF.SIZE_48:
      return _.QS.AVATAR_STATUS_MOBILE_48;
    case g.EF.SIZE_56:
      return _.QS.AVATAR_STATUS_MOBILE_56;
    case g.EF.SIZE_80:
      return _.QS.AVATAR_STATUS_MOBILE_80;
    case g.EF.SIZE_96:
      return _.QS.AVATAR_STATUS_MOBILE_96;
    case g.EF.SIZE_120:
      return _.QS.AVATAR_STATUS_MOBILE_120
  }
  switch (t) {
    case g.EF.SIZE_16:
      return _.QS.AVATAR_STATUS_ROUND_16;
    case g.EF.SIZE_20:
      return _.QS.AVATAR_STATUS_ROUND_20;
    case g.EF.SIZE_24:
      return _.QS.AVATAR_STATUS_ROUND_24;
    case g.EF.SIZE_32:
      return _.QS.AVATAR_STATUS_ROUND_32;
    case g.EF.SIZE_40:
      return _.QS.AVATAR_STATUS_ROUND_40;
    case g.EF.SIZE_44:
      return _.QS.AVATAR_STATUS_ROUND_44;
    case g.EF.SIZE_48:
      return _.QS.AVATAR_STATUS_ROUND_48;
    case g.EF.SIZE_56:
      return _.QS.AVATAR_STATUS_ROUND_56;
    case g.EF.SIZE_80:
      return _.QS.AVATAR_STATUS_ROUND_80;
    case g.EF.SIZE_96:
      return _.QS.AVATAR_STATUS_ROUND_96;
    case g.EF.SIZE_120:
      return _.QS.AVATAR_STATUS_ROUND_120
  }
  throw Error("getMaskId(): Unsupported type, size: ".concat(t, ", status: ").concat(e, ", isMobile: ").concat(n ? "true" : "false"))
}

function D(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = (0, d.W5)(e.status, t, n, r),
    o = (r ? e.size - (i.width / 2 + e.status / 2) : e.size - i.width) - e.offset;
  return I(O({}, i), {
    x: o,
    y: e.size - i.height - e.offset
  })
}

function x(e, t, n) {
  let {
    size: r,
    status: i,
    stroke: o,
    offset: a
  } = e, s = n ? i * g.D6 : i, l = (s - i) / 2, c = t ? i * g.EW : i;
  return {
    avatarCutoutX: r - s + l - o - a,
    avatarCutoutY: r - c - o - a,
    avatarCutoutWidth: s + 2 * o,
    avatarCutoutHeight: c + 2 * o,
    avatarCutoutRadius: t ? (c + 2 * o) * g.ZC : (i + 2 * o) / 2
  }
}

function L(e, t, n, i) {
  let o = D(n, i, t, false),
    a = (0, d.lm)(i, e);
  if (!t) {
    let t = o.height / 2 + n.stroke,
      i = o.x + n.status / 2;
    return (0, r.jsx)("circle", {
      style: {
        opacity: a
      },
      fill: e,
      r: t,
      cx: i,
      cy: i
    })
  }
  let s = o.height + 2 * n.stroke,
    l = o.width + 2 * n.stroke,
    c = o.x - n.stroke,
    u = o.y - n.stroke;
  return (0, r.jsx)("rect", {
    fill: e,
    height: s,
    width: l,
    style: {
      opacity: a
    },
    x: c,
    y: u,
    rx: n.stroke
  })
}

function j(e) {
  let {
    status: t,
    isMobile: n,
    isTyping: r,
    size: i
  } = e, o = n && !r && t === h.Skl.ONLINE, a = (0, g.UC)(i);
  return O({}, x(a, o, r), (0, d.Dk)({
    status: t,
    size: a.status,
    isMobile: o,
    isTyping: r,
    topOffset: 2,
    leftOffset: 6
  }))
}

function M(e) {
  let {
    children: t,
    size: n,
    onClick: i,
    onMouseDown: o,
    onKeyDown: s,
    onContextMenu: l,
    onMouseEnter: u,
    onMouseLeave: d,
    className: f,
    tabIndex: _,
    ariaLabel: p,
    ariaHidden: h,
    status: E,
    isMobile: y = false,
    isTyping: O = false,
    avatarDecoration: v,
    typingOffset: I,
    specs: T
  } = e, S = {
    width: (0, g.px)(n),
    height: (0, g.px)(n)
  }, A = null == p || h ? true : R(p, E, y), C = T.size * m.hs, N = P(E, n, y, O), w = null != v && (0, r.jsx)("svg", {
    width: C + I,
    height: C,
    viewBox: "0 0 ".concat(C + I, " ").concat(C),
    className: b.avatarDecoration,
    "aria-hidden": true,
    children: (0, r.jsx)("foreignObject", {
      x: 0,
      y: 0,
      width: C,
      height: C,
      mask: null != N ? "url(#".concat(N, ")") : true,
      children: (0, r.jsx)("div", {
        className: b.avatarStack,
        children: (0, r.jsx)("img", {
          className: b.avatar,
          src: v,
          alt: " ",
          "aria-hidden": true
        })
      })
    })
  });
  return null != i || null != o ? (0, r.jsxs)(c.P, {
    className: a()(b.wrapper, b.pointer, f),
    style: S,
    onClick: i,
    tabIndex: _,
    onContextMenu: l,
    onMouseDown: o,
    onKeyDown: s,
    onMouseEnter: null != u ? u : true,
    onMouseLeave: null != d ? d : true,
    "aria-label": A,
    "aria-hidden": h,
    children: [t, w]
  }) : (0, r.jsxs)("div", {
    className: a()(b.wrapper, f),
    style: S,
    onContextMenu: null != l ? l : true,
    onMouseEnter: null != u ? u : true,
    onMouseLeave: null != d ? d : true,
    role: "img",
    "aria-label": A,
    "aria-hidden": h,
    children: [t, w]
  })
}
let k = Chunk647438.forwardRef((e, t) => {
  let {
    src: n,
    isSpeaking: i,
    className: o
  } = e;
  return (0, r.jsxs)("div", {
    ref: t,
    className: a()(b.avatarStack, o),
    children: [(0, r.jsx)("img", {
      src: null != n ? n : true,
      alt: " ",
      className: b.avatar,
      "aria-hidden": true
    }), i && (0, r.jsx)("div", {
      className: b.avatarSpeaking
    })]
  }, n)
});

function U(e) {
  let {
    src: t,
    status: n,
    size: i,
    statusColor: o,
    isMobile: s = false,
    isTyping: l = false,
    typingIndicatorRef: c,
    avatarContentRef: _,
    isSpeaking: m = false,
    statusTooltip: E = false,
    statusTooltipDelay: y,
    statusBackdropColor: v,
    "aria-hidden": T = false,
    "aria-label": S,
    imageClassName: A,
    ref: C
  } = e, N = n !== h.Skl.UNKNOWN ? n : null, R = (0, g.UC)(i), P = null != N ? Math.ceil((R.status * g.D6 - R.status) / 2) : 0, x = R.size + P, j = (0, d.vj)(N, o);
  return (0, r.jsx)(M, I(O({}, e), {
    ariaLabel: S,
    ariaHidden: T,
    status: N,
    specs: R,
    typingOffset: P,
    children: (0, r.jsxs)("svg", {
      ref: C,
      width: x,
      height: x,
      viewBox: "0 0 ".concat(x, " ").concat(x),
      className: a()(b.mask, b.svg),
      "aria-hidden": true,
      children: [(0, r.jsx)("foreignObject", {
        x: 0,
        y: 0,
        width: R.size,
        height: R.size,
        mask: "url(#".concat(w(N, i, s, l), ")"),
        children: (0, r.jsx)(k, {
          ref: _,
          src: t,
          isSpeaking: m,
          className: A
        })
      }), null != N && null != v ? L(v, s, R, N) : null, null != N ? (0, r.jsx)(f.u, {
        text: E ? (0, p.u5)(N) : null,
        "aria-label": false,
        position: "top",
        spacing: 5 + 1.5 * R.stroke,
        delay: y,
        children: e => (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("rect", I(O({}, e, D(R, N, s, l)), {
            fill: j,
            mask: "url(#".concat((0, d.rs)(N, s, l), ")"),
            className: b.pointerEvents
          })), l ? (0, r.jsx)(u.b, {
            ref: c,
            dotRadius: R.status / 4,
            x: R.size - 1.375 * R.status - R.offset,
            y: R.size - R.status / 1.333 - R.offset
          }) : null]
        })
      }) : null]
    })
  }))
}

function G(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] && arguments[3];
  return 5 - (n && !r ? 0 : .5 * e) + 1.5 * t
}

function B(e, t, n) {
  let r = e.status * t,
    i = null != n ? (r * g.D6 - r) / 2 : 0,
    o = (e.status - r) / 2,
    a = e.size - r - i - e.offset - o,
    s = e.size - r * g.EW - e.offset - o,
    l = Math.round(a / t * 100) / 100,
    c = Math.round(s / t * 100) / 100;
  return "translate(".concat(l, ", ").concat(c, ")")
}

function Z(e) {
  let {
    fromIsMobile: t = true,
    fromStatus: n,
    fromColor: o,
    isMobile: c = false,
    isTyping: _ = false,
    typingIndicatorRef: h,
    isSpeaking: m = false,
    size: E,
    src: y,
    status: v,
    statusColor: S,
    statusTooltip: R = false,
    statusTooltipDelay: P,
    statusBackdropColor: w,
    "aria-hidden": D = false,
    "aria-label": x,
    imageClassName: U,
    pulseStatusIcon: Z
  } = e, F = (0, d.vj)(v, S), V = i.useId(), H = i.useId(), [Y] = i.useState(() => O({
    fill: o
  }, j({
    size: E,
    status: n,
    isMobile: t,
    isTyping: false
  }))), W = i.useMemo(() => O({
    fill: F
  }, j({
    size: E,
    status: v,
    isMobile: c,
    isTyping: _
  })), [F, E, v, c, _]), K = (0, l.q)({
    config: A,
    from: Y,
    to: W
  }, C() ? "animate-always" : "animate-never"), {
    avatarCutoutX: z,
    avatarCutoutY: q,
    avatarCutoutWidth: X,
    avatarCutoutHeight: Q,
    avatarCutoutRadius: J,
    fill: $
  } = K, ee = T(K, ["avatarCutoutX", "avatarCutoutY", "avatarCutoutWidth", "avatarCutoutHeight", "avatarCutoutRadius", "fill"]), et = (0, g.px)(E), en = (0, g.UC)(E), er = en.status * g.D6, ei = en.status * g.EW, eo = null != v ? (en.status * g.D6 - en.status) / 2 : 0, ea = en.size + Math.ceil(eo), [es, el, ec] = (0, l.q)({
    config: {
      tension: 450,
      friction: 20,
      clamp: true
    },
    from: {
      scale: 1
    },
    to: Z ? [{
      scale: .8
    }, {
      scale: 1.1
    }, {
      scale: 1
    }] : []
  }, C() ? "animate-always" : "animate-never", [Z, v]);
  return (0, r.jsx)(M, I(O({}, e), {
    ariaLabel: x,
    ariaHidden: D,
    typingOffset: eo,
    specs: en,
    children: (0, r.jsxs)("svg", {
      width: ea,
      height: ea,
      viewBox: "0 0 ".concat(ea, " ").concat(ea),
      className: a()(b.mask, b.svg),
      "aria-hidden": true,
      children: [(0, r.jsxs)("mask", {
        id: V,
        width: et,
        height: et,
        children: [(0, r.jsx)("circle", {
          cx: et / 2,
          cy: et / 2,
          r: et / 2,
          fill: "white"
        }), (0, r.jsx)(s.animated.rect, {
          color: "black",
          x: z,
          y: q,
          width: X,
          height: Q,
          rx: J,
          ry: J
        })]
      }), (0, r.jsx)("foreignObject", {
        className: b.__invalid_foreignObject,
        x: 0,
        y: 0,
        width: et,
        height: et,
        mask: "url(#".concat(V, ")"),
        children: (0, r.jsx)(k, {
          src: y,
          isSpeaking: m,
          className: U
        })
      }), null != w && L(w, c, en, v), (0, r.jsx)(f.u, {
        text: R ? (0, p.u5)(v) : null,
        "aria-label": false,
        position: "top",
        spacing: G(en.status, en.stroke, c, _),
        delay: P,
        children: e => (0, r.jsxs)(s.animated.g, {
          transform: es.scale.to(e => "scale(".concat(e, ") ").concat(B(en, e, v))),
          children: [(0, r.jsxs)("svg", {
            width: er,
            height: ei,
            viewBox: "0 0 ".concat(er, " ").concat(ei),
            className: R ? b.cursorDefault : true,
            children: [(0, d.vP)(ee, en.status, H), (0, r.jsx)(s.animated.rect, {
              fill: $,
              width: er,
              height: ei,
              mask: "url(#".concat(H, ")")
            }), (0, r.jsx)(u.b, {
              ref: h,
              dotRadius: en.status / 4,
              x: .15 * er,
              y: .5 * ei,
              hide: !_
            })]
          }), (0, r.jsx)(N, O({
            size: E,
            isMobile: c,
            isTyping: _,
            className: b.pointerEvents
          }, e))]
        })
      })]
    })
  }))
}

function F(e, t, n, r, i) {
  return null != n && null != t && (!!e || t !== n || t === h.Skl.ONLINE && r !== i)
}
k.displayName = "AvatarImg";
let V = Chunk647438.memo(function(e) {
  var {
    statusColor: t,
    status: n
  } = e, o = T(e, ["statusColor", "status"]);
  let {
    isMobile: a = false,
    isTyping: s = false
  } = o, l = i.useRef(n), c = i.useRef(a), u = (0, d.vj)(n, t), f = i.useRef(u), _ = i.useRef(false), p = _.current || F(s, n, l.current, a, c.current);
  return i.useLayoutEffect(() => {
    _.current = p, l.current = n, c.current = a, f.current = u
  }, [n, a, u, p]), null != n && null != l.current && p ? (0, r.jsx)(Z, I(O({}, o), {
    status: n,
    statusColor: u,
    fromStatus: l.current,
    fromIsMobile: c.current,
    fromColor: f.current
  })) : (0, r.jsx)(U, I(O({}, o), {
    status: n,
    statusColor: u
  }))
})