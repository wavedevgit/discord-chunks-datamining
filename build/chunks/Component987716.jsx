/** Chunk was on web.js **/
/** chunk id: 987716, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk321051 = require("./321051.jsx"),
  Chunk669079 = require("./669079.js"),
  Chunk479446 = require("./479446.js"),
  Chunk47280 = require("./47280.js"),
  Chunk543995 = require("./543995.js"),
  Chunk981632 = require("./981632.jsx"),
  Chunk96848 = require("./96848.jsx"),
  Chunk703926 = require("./703926.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk611344 = require("./611344.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
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

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
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
let S = e => {
  let {
    isShopGift: t,
    className: n,
    optionsContainerClassName: o
  } = e, {
    giftRecipient: b,
    selectedGiftStyle: O,
    setSelectedGiftStyle: T,
    emojiConfetti: S,
    soundEffect: A,
    setEmojiConfetti: N,
    setSoundEffect: C
  } = (0, l.wD)(), [R, P] = i.useState(false), w = i.useRef(null), D = (0, s.arW)({
    orientation: "horizontal"
  }), {
    ref: L
  } = D, x = I(D, ["ref"]), M = (0, u.MY)(b, t), k = M === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD, j = M !== u.xr.DEFAULT, U = (0, _.m)(), G = (0, f.ZP)({
    location: "GiftAnimationOptions"
  }), B = e => {
    null != C && C(null == e ? true : e)
  };
  return (0, r.jsxs)("div", {
    children: [j && (0, r.jsxs)("div", {
      className: a()(E.giftMainAnimation, n),
      children: [null != O ? (0, r.jsx)(p.Z, {
        giftStyle: O,
        defaultAnimationState: d.SR.ACTION,
        idleAnimationState: d.SR.LOOP,
        shouldAnimate: true,
        className: E.animation
      }) : (0, r.jsx)(s.$jN, {
        className: E.spinner
      }), k && (0, r.jsxs)("div", {
        className: a()(E.soundEmojiContainer, G && E.refresh),
        children: [(0, r.jsx)(c.Z, {
          sound: A,
          onSelect: B
        }), (0, r.jsx)(h.Z, {
          setEmojiConfetti: N,
          emojiConfetti: null == S ? true : S
        })]
      })]
    }), (0, r.jsx)("div", v(y({
      tabIndex: null != O || R ? true : 0,
      onFocus: e => {
        var t;
        e.target === e.currentTarget && (null == (t = w.current) || t.focus())
      },
      className: a()(E.giftBoxOptionContainer, o),
      "aria-label": g.intl.string(g.t.v54NrK),
      ref: L
    }, x), {
      children: null != U && !G && U.map((e, t) => (0, r.jsx)(m.m, {
        isSelected: O === e,
        giftStyle: e,
        setSelectedGiftStyle: T,
        ref: 0 === t ? w : null,
        onFocus: () => P(true),
        onBlur: () => P(false)
      }, e))
    })), (0, r.jsx)("div", {
      className: E.__invalid_selectPlanDivider
    })]
  })
}