/** Chunk was on web.js **/
/** chunk id: 987716, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk321051 = require("./321051.jsx"),
  Chunk669079 = require("./669079.js"),
  Chunk479446 = require("./479446.js"),
  Chunk283066 = require("./283066.js"),
  Chunk543995 = require("./543995.js"),
  Chunk981632 = require("./981632.jsx"),
  Chunk96848 = require("./96848.jsx"),
  Chunk703926 = require("./703926.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk611344 = require("./611344.js");

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

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let C = e => {
  let {
    isShopGift: t,
    className: n,
    optionsContainerClassName: o
  } = e, {
    giftRecipient: y,
    selectedGiftStyle: v,
    setSelectedGiftStyle: T,
    emojiConfetti: C,
    soundEffect: A,
    setEmojiConfetti: N,
    setSoundEffect: P
  } = (0, c.wD)(), [R, w] = i.useState(false), D = i.useRef(null), x = (0, s.Jb)({
    orientation: "horizontal"
  }), {
    ref: L
  } = x, j = I(x, ["ref"]), M = (0, d.MY)(y, t), k = M === d.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD, U = M !== d.xr.DEFAULT, G = (0, _.m)(), Z = (0, p.Z)({
    location: "GiftAnimationOptions"
  }), F = e => {
    null != P && P(null == e ? true : e)
  };
  return (0, r.jsxs)("div", {
    children: [U && (0, r.jsxs)("div", {
      className: a()(b.giftMainAnimation, n),
      children: [null != v ? (0, r.jsx)(m.Z, {
        giftStyle: v,
        defaultAnimationState: f.SR.ACTION,
        idleAnimationState: f.SR.LOOP,
        shouldAnimate: true,
        className: b.animation
      }) : (0, r.jsx)(l.$jN, {
        className: b.spinner
      }), k && (0, r.jsxs)("div", {
        className: a()(b.soundEmojiContainer, Z && b.refresh),
        children: [(0, r.jsx)(u.Z, {
          sound: A,
          onSelect: F
        }), (0, r.jsx)(h.Z, {
          setEmojiConfetti: N,
          emojiConfetti: null == C ? true : C
        })]
      })]
    }), (0, r.jsx)("div", S(O({
      tabIndex: null != v || R ? true : 0,
      onFocus: e => {
        var t;
        e.target === e.currentTarget && (null == (t = D.current) || t.focus())
      },
      className: a()(b.giftBoxOptionContainer, o),
      "aria-label": E.intl.string(E.t.v54NrN),
      ref: L
    }, j), {
      children: null != G && !Z && G.map((e, t) => (0, r.jsx)(g.m, {
        isSelected: v === e,
        giftStyle: e,
        setSelectedGiftStyle: T,
        ref: 0 === t ? D : null,
        onFocus: () => w(true),
        onBlur: () => w(false)
      }, e))
    })), (0, r.jsx)("div", {
      className: b.__invalid_selectPlanDivider
    })]
  })
}