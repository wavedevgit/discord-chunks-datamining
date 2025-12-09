/** Chunk was on web.js **/
/** chunk id: 318766, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L,
  u: () => R
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk681715 = require("./681715.js"),
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

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
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

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let C = 20,
  N = 18,
  P = 77,
  R = {
    tension: 800,
    friction: 24
  },
  D = () => {
    let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk345857.premiumTooltipContainer,
      children: [(0, Chunk54381.jsx)(Chunk481060.Fmz, {
        className: o()(Chunk345857.premiumUnlockAnimation, {
          [Chunk345857.reducedMotion]: module
        }),
        loop: false,
        shouldAnimate: !module,
        pauseAtFrame: module ? 149 : true,
        importData: () => require.e("21812").then(require.t.bind(require, 741855, 19))
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/medium",
        className: Chunk345857.premiumTooltipText,
        children: Chunk388032.intl.format(Chunk388032.t["/7R4q4"], {})
      })]
    })
  };

function w(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : N;
  return {
    "--custom-emoji-sprite-size": "".concat(t, "px"),
    "--custom-emoji-sprite-row": Math.floor(e / C),
    "--custom-emoji-sprite-col": e % C
  }
}

function x(e) {
  var {
    className: t,
    renderButtonContents: n,
    active: a,
    onMouseEnter: c,
    onMouseLeave: u,
    onContextMenu: p,
    onFocus: m,
    spriteClassName: g,
    spriteSize: b,
    ref: O
  } = e, S = T(e, ["className", "renderButtonContents", "active", "onMouseEnter", "onMouseLeave", "onContextMenu", "onFocus", "spriteClassName", "spriteSize", "ref"]);
  let [A, C] = i.useState(false), [N, D] = i.useState(50), x = A || a, L = (0, h.l)(y, "emojiButton", x ? "Hovered" : "Normal"), j = w(N, b), M = i.useCallback(() => {
    if (x) return;
    let e = Math.floor(Math.random() * P);
    C(true), D(e), (0, _.x)(E.qR.EmojiButtonMouseEntered)
  }, [x, C, D]), k = i.useCallback(() => {
    C(false)
  }, [C]), U = i.useCallback(() => (0, _.x)(E.qR.EmojiButtonFocused), []), G = (0, l.e7)([f.Z], () => f.Z.useReducedMotion);
  return (0, r.jsx)(d.P3F, I(v({
    innerRef: O,
    className: o()(L, t),
    "aria-expanded": a,
    onMouseEnter: () => {
      M(), null == c || c()
    },
    onMouseOver: M,
    onMouseLeave: () => {
      k(), null == u || u()
    },
    onFocus: () => {
      U(), null == m || m()
    },
    onContextMenu: p
  }, S), {
    children: null != n ? n() : (0, r.jsx)(d.AMe, {
      config: R,
      to: {
        value: +!!x
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, r.jsxs)(s.animated.div, {
          className: y.spriteContainer,
          style: I(v({}, j), {
            transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
          }),
          children: [(0, r.jsx)("div", {
            className: o()(y.sprite, y.spriteColored, x ? y.active : y.inactive)
          }), (0, r.jsx)("div", {
            className: o()(y.sprite, y.spriteGreyscale, x ? y.inactive : y.active, {
              [y.reducedMotion]: G
            }, g)
          })]
        })
      }
    })
  }))
}

function L(e) {
  var {
    "aria-label": t = b.intl.string(b.t.lPHwuQ),
    tooltipText: n,
    active: a,
    onClick: o,
    "aria-controls": s,
    ref: l,
    keyboardShortcut: f,
    canShowNUXPremiumTooltip: _ = false
  } = e, h = T(e, ["aria-label", "tooltipText", "active", "onClick", "aria-controls", "ref", "keyboardShortcut", "canShowNUXPremiumTooltip"]);
  let E = (0, m.B4)(),
    [O, S] = (0, p.US)(E ? [c.z.TRIAL_NUX_EMOJI_BUTTON] : [], true, true),
    I = _ && O === c.z.TRIAL_NUX_EMOJI_BUTTON,
    A = !a && I,
    C = i.useRef(null),
    N = null != l ? l : C,
    P = e => (0, r.jsx)(x, v({
      ref: N,
      onMouseEnter: e.onMouseEnter,
      onMouseLeave: () => {
        var t;
        I && S(g.L.USER_DISMISS), null == (t = e.onMouseLeave) || t.call(e)
      },
      onFocus: e.onFocus,
      onBlur: e.onBlur,
      onClick: t => {
        var n;
        null == o || o(t), null == (n = e.onClick) || n.call(e)
      },
      "aria-label": t,
      "aria-controls": s,
      active: a,
      onContextMenu: e.onContextMenu,
      spriteClassName: I ? y.spritePremiumColored : true
    }, h));
  return null == n ? P({}) : A ? (0, r.jsx)(d.aML, {
    "data-migration-pending": true,
    targetElementRef: N,
    text: () => (0, r.jsx)(D, {}),
    "aria-label": b.intl.formatToMarkdownString(b.t["/7R4q4"], {}),
    position: "top",
    shouldShow: true,
    tooltipClassName: y.premiumTooltip,
    tooltipContentClassName: y.premiumTooltipContainer,
    children: e => P(e)
  }) : (0, r.jsx)(u.u, {
    targetElementRef: N,
    shouldShow: true,
    text: n,
    keyboardShortcut: f,
    children: P({})
  })
}