/** Chunk was on web.js **/
/** chunk id: 375499, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => L,
  B: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk864605 = require("./864605.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk189551 = require("./189551.js"),
  Chunk526292 = require("./526292.js"),
  Chunk821589 = require("./821589.js"),
  Chunk49999 = require("./49999.js"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk767091 = require("./767091.js");

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

function A(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = T(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let C = 20,
  N = 18,
  w = 77,
  R = {
    tension: 800,
    friction: 24
  };

function P(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : N;
  return {
    "--custom-emoji-sprite-size": "".concat(t, "px"),
    "--custom-emoji-sprite-row": Math.floor(e / C),
    "--custom-emoji-sprite-col": e % C
  }
}

function D(e) {
  let {
    className: t,
    renderButtonContents: n,
    active: a,
    onMouseEnter: c,
    onMouseLeave: u,
    onContextMenu: p,
    onFocus: h,
    spriteClassName: g,
    spriteSize: y,
    ref: O
  } = e, A = S(e, ["className", "renderButtonContents", "active", "onMouseEnter", "onMouseLeave", "onContextMenu", "onFocus", "spriteClassName", "spriteSize", "ref"]), [T, C] = i.useState(false), [N, D] = i.useState(50), L = T || a, x = (0, m.t)(b, "emojiButton", L ? "Hovered" : "Normal"), M = P(N, y), j = i.useCallback(() => {
    if (L) return;
    let e = Math.floor(Math.random() * w);
    C(true), D(e), (0, _.K)(E.Vl.EmojiButtonMouseEntered)
  }, [L, C, D]), k = i.useCallback(() => {
    C(false)
  }, [C]), U = i.useCallback(() => (0, _.K)(E.Vl.EmojiButtonFocused), []), G = (0, l.bG)([f.A], () => f.A.useReducedMotion);
  return (0, r.jsx)(d.DUT, I(v({
    innerRef: O,
    className: o()(x, t),
    "aria-expanded": a,
    onMouseEnter: () => {
      j(), null == c || c()
    },
    onMouseOver: j,
    onMouseLeave: () => {
      k(), null == u || u()
    },
    onFocus: () => {
      U(), null == h || h()
    },
    onContextMenu: p
  }, A), {
    children: null != n ? n() : (0, r.jsx)(d.c7X, {
      config: R,
      to: {
        value: +!!L
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, r.jsxs)(s.animated.div, {
          className: b.spriteContainer,
          style: I(v({}, M), {
            transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
          }),
          children: [(0, r.jsx)("div", {
            className: o()(b.sprite, b.spriteColored, L ? b.active : b.inactive)
          }), (0, r.jsx)("div", {
            className: o()(b.sprite, b.spriteGreyscale, L ? b.inactive : b.active, {
              [b.reducedMotion]: G
            }, g)
          })]
        })
      }
    })
  }))
}

function L(e) {
  let {
    "aria-label": t = y.intl.string(y.t.lPHwuQ),
    tooltipText: a,
    active: s,
    onClick: _,
    "aria-controls": m,
    ref: E,
    keyboardShortcut: O,
    canShowNUXPremiumTooltip: A = false
  } = e, I = S(e, ["aria-label", "tooltipText", "active", "onClick", "aria-controls", "ref", "keyboardShortcut", "canShowNUXPremiumTooltip"]), T = (0, l.bG)([f.A], () => f.A.useReducedMotion), C = (0, h.k0)(), [N, w] = (0, p.kn)(C ? [c.M.TRIAL_NUX_EMOJI_BUTTON] : [], true, true), R = A && N === c.M.TRIAL_NUX_EMOJI_BUTTON, P = !s && R, L = i.useRef(null), x = null != E ? E : L, M = () => (0, r.jsx)(D, v({
    ref: x,
    onMouseLeave: () => {
      R && w(g.i.USER_DISMISS)
    },
    onClick: e => {
      null == _ || _(e)
    },
    "aria-label": t,
    "aria-controls": m,
    active: s,
    spriteClassName: R ? b.spritePremiumColored : true
  }, I));
  return null == a ? M() : P ? (0, r.jsx)(u.un, {
    targetElementRef: x,
    body: y.intl.format(y.t["/7R4q4"], {}),
    asset: (0, r.jsx)(d.akl, {
      className: o()(b.premiumUnlockAnimation, {
        [b.reducedMotion]: T
      }),
      loop: false,
      shouldAnimate: !T,
      pauseAtFrame: T ? 149 : true,
      importData: () => n.e("31838").then(n.t.bind(n, 650125, 19))
    }),
    position: "top",
    shouldShow: true,
    children: M()
  }) : (0, r.jsx)(u.m_, {
    targetElementRef: x,
    shouldShow: true,
    text: a,
    keyboardShortcut: O,
    children: M()
  })
}