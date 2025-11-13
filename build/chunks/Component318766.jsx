/** Chunk was on web.js **/
/** chunk id: 318766, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x,
  u: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk508312 = require("./508312.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk679080 = require("./679080.js"),
  Chunk607070 = require("./607070.js"),
  Chunk713913 = require("./713913.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk255963 = require("./255963.js"),
  Chunk140465 = require("./140465.js"),
  Chunk153066 = require("./153066.js"),
  Chunk921944 = require("./921944.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk345857 = require("./345857.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = 20,
  N = 18,
  R = 77,
  P = {
    tension: 800,
    friction: 24
  },
  D = () => {
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

function w(e) {
  return {
    "--custom-emoji-sprite-size": "".concat(N, "px"),
    "--custom-emoji-sprite-row": Math.floor(e / C),
    "--custom-emoji-sprite-col": e % C
  }
}
let x = function(e) {
  let {
    tabIndex: t,
    className: n,
    renderButtonContents: a,
    active: I,
    onClick: S,
    "aria-controls": C,
    focusProps: N,
    ref: x,
    allowKeybindHint: L
  } = e, [M, j] = i.useState(false), [k, U] = i.useState(50), G = M || I, B = (0, E.l)(v, "emojiButton", G ? "Hovered" : "Normal"), Z = w(k), F = i.useCallback(() => {
    if (G) return;
    let e = Math.floor(Math.random() * R);
    j(true), U(e), (0, m.x)(y.qR.EmojiButtonMouseEntered)
  }, [G, j, U]), V = i.useCallback(() => {
    j(false)
  }, [j]), H = i.useCallback(() => (0, m.x)(y.qR.EmojiButtonFocused), []), Y = (0, g.B4)(), [W, K] = (0, h.US)(Y ? [c.z.TRIAL_NUX_EMOJI_BUTTON] : [], true, true), z = W === c.z.TRIAL_NUX_EMOJI_BUTTON, q = !I && z, X = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), Q = i.useRef(null), J = null != x ? x : Q, $ = (0, p.v)(f.S), {
    tooltipsWithKeybinds: ee,
    expressionsCombinedIntoEmojiButton: et
  } = p.n.useConfig({
    location: "EmojiButton"
  }), en = ee ? O.intl.string(et ? O.t.DSBQ6F : O.t.lPHwuQ) : null, er = e => (0, r.jsx)(d.P3F, {
    innerRef: J,
    tabIndex: t,
    className: o()(B, n),
    onMouseEnter: () => {
      var t;
      F(), null == (t = e.onMouseEnter) || t.call(e)
    },
    onMouseOver: F,
    onMouseLeave: () => {
      var t;
      V(), null == (t = e.onMouseLeave) || t.call(e), z && K(b.L.USER_DISMISS)
    },
    onFocus: H,
    onClick: t => {
      var n;
      null == S || S(t), null == (n = e.onClick) || n.call(e)
    },
    "aria-label": O.intl.string(O.t["59QgaD"]),
    "aria-controls": C,
    "aria-expanded": I,
    "aria-haspopup": "dialog",
    focusProps: N,
    onContextMenu: e.onContextMenu,
    children: null != a ? a() : (0, r.jsx)(d.AMe, {
      config: P,
      to: {
        value: +!!G
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, r.jsxs)(s.animated.div, {
          className: v.spriteContainer,
          style: A(T({}, Z), {
            transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
          }),
          children: [(0, r.jsx)("div", {
            className: o()(v.sprite, v.spriteColored, G ? v.active : v.inactive)
          }), (0, r.jsx)("div", {
            className: o()(v.sprite, z ? v.spritePremiumColored : v.spriteGreyscale, G ? v.inactive : v.active, {
              [v.reducedMotion]: X
            })
          })]
        })
      }
    })
  });
  return q ? (0, r.jsx)(d.aML, {
    "data-migration-pending": true,
    targetElementRef: J,
    text: () => (0, r.jsx)(D, {}),
    "aria-label": O.intl.formatToMarkdownString(O.t["/7R4q4"], {}),
    position: "top",
    shouldShow: true,
    tooltipClassName: v.premiumTooltip,
    tooltipContentClassName: v.premiumTooltipContainer,
    children: e => er(e)
  }) : null != en ? (0, r.jsx)(u.u, {
    targetElementRef: J,
    shouldShow: true,
    text: en,
    keyboardShortcut: et ? true : L ? $ : true,
    children: er({})
  }) : er({})
}