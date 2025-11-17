/** Chunk was on web.js **/
/** chunk id: 987716, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let A = e => {
  let {
    isShopGift: t,
    className: n,
    optionsContainerClassName: a
  } = e, {
    giftRecipient: y,
    selectedGiftStyle: v,
    setSelectedGiftStyle: S,
    emojiConfetti: A,
    soundEffect: C,
    setEmojiConfetti: N,
    setSoundEffect: R
  } = (0, c.wD)(), [P, D] = i.useState(false), w = i.useRef(null), x = (0, s.Jb)({
    orientation: "horizontal"
  }), {
    ref: L
  } = x, M = T(x, ["ref"]), k = (0, d.MY)(y, t), j = k === d.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD, U = k !== d.xr.DEFAULT, G = (0, p.m)(), B = (0, _.Z)({
    location: "GiftAnimationOptions"
  }), Z = e => {
    null != R && R(null == e ? true : e)
  };
  return (0, r.jsxs)("div", {
    children: [U && (0, r.jsxs)("div", {
      className: o()(b.giftMainAnimation, n),
      children: [null != v ? (0, r.jsx)(h.Z, {
        giftStyle: v,
        defaultAnimationState: f.SR.ACTION,
        idleAnimationState: f.SR.LOOP,
        shouldAnimate: true,
        className: b.animation
      }) : (0, r.jsx)(l.$jN, {
        className: b.spinner
      }), j && (0, r.jsxs)("div", {
        className: o()(b.soundEmojiContainer, B && b.refresh),
        children: [(0, r.jsx)(u.Z, {
          sound: C,
          onSelect: Z
        }), (0, r.jsx)(m.Z, {
          setEmojiConfetti: N,
          emojiConfetti: null == A ? true : A
        })]
      })]
    }), (0, r.jsx)("div", I(O({
      tabIndex: null != v || P ? true : 0,
      onFocus: e => {
        var t;
        e.target === e.currentTarget && (null == (t = w.current) || t.focus())
      },
      className: o()(b.giftBoxOptionContainer, a),
      "aria-label": E.intl.string(E.t.v54NrN),
      ref: L
    }, M), {
      children: null != G && !B && G.map((e, t) => (0, r.jsx)(g.m, {
        isSelected: v === e,
        giftStyle: e,
        setSelectedGiftStyle: S,
        ref: 0 === t ? w : null,
        onFocus: () => D(true),
        onBlur: () => D(false)
      }, e))
    })), (0, r.jsx)("div", {
      className: b.__invalid_selectPlanDivider
    })]
  })
}