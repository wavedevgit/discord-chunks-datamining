/** Chunk was on web.js **/
/** chunk id: 318007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk650588 = require("./650588.jsx"),
  Chunk45938 = require("./45938.js"),
  Chunk242874 = require("./242874.js"),
  Chunk170887 = require("./170887.js"),
  Chunk367371 = require("./367371.js"),
  Chunk75825 = require("./75825.jsx"),
  Chunk238017 = require("./238017.jsx"),
  Chunk903618 = require("./903618.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk120459 = require("./120459.js");

function b(e, t, n) {
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
      b(e, t, n[t])
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

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = S(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let T = e => {
  let {
    isShopGift: t,
    className: n,
    optionsContainerClassName: a
  } = e, {
    giftRecipient: b,
    selectedGiftStyle: v,
    setSelectedGiftStyle: S,
    emojiConfetti: T,
    soundEffect: C,
    setEmojiConfetti: N,
    setSoundEffect: w
  } = (0, c.Pv)(), [R, P] = i.useState(false), D = i.useRef(null), L = (0, s._u)({
    orientation: "horizontal"
  }), {
    ref: x
  } = L, M = I(L, ["ref"]), j = (0, d.lo)(b, t), k = j === d.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD, U = j !== d.tB.DEFAULT, G = (0, _._)(), V = (0, p.A)({
    location: "GiftAnimationOptions"
  }), F = e => {
    null != w && w(null == e ? true : e)
  };
  return (0, r.jsxs)("div", {
    children: [U && (0, r.jsxs)("div", {
      className: o()(y.Os, n),
      children: [null != v ? (0, r.jsx)(h.A, {
        giftStyle: v,
        defaultAnimationState: f.oA.ACTION,
        idleAnimationState: f.oA.LOOP,
        shouldAnimate: true,
        className: y.lY
      }) : (0, r.jsx)(l.y$y, {
        className: y.u1
      }), k && (0, r.jsxs)("div", {
        className: o()(y.b7, V && y.Ow),
        children: [(0, r.jsx)(u.A, {
          sound: C,
          onSelect: F
        }), (0, r.jsx)(m.A, {
          setEmojiConfetti: N,
          emojiConfetti: null == T ? true : T
        })]
      })]
    }), (0, r.jsx)("div", A(O({
      tabIndex: null != v || R ? true : 0,
      onFocus: e => {
        var t;
        e.target === e.currentTarget && (null == (t = D.current) || t.focus())
      },
      className: o()(y.Qh, a),
      "aria-label": E.intl.string(E.t.v54NrN),
      ref: x
    }, M), {
      children: null != G && !V && G.map((e, t) => (0, r.jsx)(g.A, {
        isSelected: v === e,
        giftStyle: e,
        setSelectedGiftStyle: S,
        ref: 0 === t ? D : null,
        onFocus: () => P(true),
        onBlur: () => P(false)
      }, e))
    })), (0, r.jsx)("div", {
      className: y.__invalid_selectPlanDivider
    })]
  })
}