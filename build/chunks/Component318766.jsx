/** Chunk was on web.js **/
/** chunk id: 318766, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P,
  u: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk358458 = require("./358458.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk255963 = require("./255963.js"),
  Chunk140465 = require("./140465.js"),
  Chunk153066 = require("./153066.js"),
  Chunk921944 = require("./921944.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk345857 = require("./345857.js");

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
let T = 20,
  S = 18,
  A = 77,
  C = {
    tension: 800,
    friction: 24
  },
  N = () => {
    let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk345857.premiumTooltipContainer,
      children: [(0, Chunk951288.jsx)(Chunk481060.Fmz, {
        className: o()(Chunk345857.premiumUnlockAnimation, {
          [Chunk345857.reducedMotion]: module
        }),
        loop: false,
        shouldAnimate: !module,
        pauseAtFrame: module ? 149 : true,
        importData: () => require.e("21812").then(require.t.bind(require, 741855, 19))
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/medium",
        className: Chunk345857.premiumTooltipText,
        children: Chunk388032.intl.format(Chunk388032.t["/7R4q4"], {})
      })]
    })
  };

function R(e) {
  return {
    "--custom-emoji-sprite-size": "".concat(S, "px"),
    "--custom-emoji-sprite-row": Math.floor(e / T),
    "--custom-emoji-sprite-col": e % T
  }
}
let P = function(e) {
  let {
    tabIndex: t,
    className: n,
    renderButtonContents: a,
    active: y,
    onClick: v,
    "aria-controls": T,
    focusProps: S,
    ref: P
  } = e, [w, D] = i.useState(false), [x, L] = i.useState(50), M = w || y, j = (0, h.l)(b, "emojiButton", M ? "Hovered" : "Normal"), k = R(x), U = i.useCallback(() => {
    if (M) return;
    let e = Math.floor(Math.random() * A);
    D(true), L(e), (0, _.x)(g.qR.EmojiButtonMouseEntered)
  }, [M, D, L]), G = i.useCallback(() => {
    D(false)
  }, [D]), B = i.useCallback(() => (0, _.x)(g.qR.EmojiButtonFocused), []), Z = (0, p.B4)(), [F, V] = (0, f.US)(Z ? [c.z.TRIAL_NUX_EMOJI_BUTTON] : [], true, true), H = F === c.z.TRIAL_NUX_EMOJI_BUTTON, Y = !y && H, W = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), K = i.useRef(null), z = null != P ? P : K;
  return (0, r.jsx)(u.aML, {
    "data-migration-pending": true,
    targetElementRef: z,
    text: () => (0, r.jsx)(N, {}),
    "aria-label": E.intl.formatToMarkdownString(E.t["/7R4q4"], {}),
    position: "top",
    shouldShow: Y,
    tooltipClassName: b.premiumTooltip,
    tooltipContentClassName: b.premiumTooltipContainer,
    children: e => (0, r.jsx)(u.P3F, {
      innerRef: z,
      tabIndex: t,
      className: o()(j, n),
      onMouseEnter: () => {
        var t;
        U(), null == (t = e.onMouseEnter) || t.call(e)
      },
      onMouseOver: U,
      onMouseLeave: () => {
        var t;
        G(), null == (t = e.onMouseLeave) || t.call(e), H && V(m.L.USER_DISMISS)
      },
      onFocus: B,
      onClick: t => {
        var n;
        null == v || v(t), null == (n = e.onClick) || n.call(e)
      },
      "aria-label": E.intl.string(E.t["59QgaD"]),
      "aria-controls": T,
      "aria-expanded": y,
      "aria-haspopup": "dialog",
      focusProps: S,
      onContextMenu: e.onContextMenu,
      children: null != a ? a() : (0, r.jsx)(u.AMe, {
        config: C,
        to: {
          value: +!!M
        },
        children: e => {
          let {
            value: t
          } = e;
          return (0, r.jsxs)(s.animated.div, {
            className: b.spriteContainer,
            style: I(O({}, k), {
              transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
            }),
            children: [(0, r.jsx)("div", {
              className: o()(b.sprite, b.spriteColored, M ? b.active : b.inactive)
            }), (0, r.jsx)("div", {
              className: o()(b.sprite, H ? b.spritePremiumColored : b.spriteGreyscale, M ? b.inactive : b.active, {
                [b.reducedMotion]: W
              })
            })]
          })
        }
      })
    })
  })
}