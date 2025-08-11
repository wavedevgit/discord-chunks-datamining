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
  Chunk646476 = require("./646476.js"),
  Chunk981632 = require("./981632.jsx"),
  Chunk96848 = require("./96848.jsx"),
  Chunk703926 = require("./703926.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk651427 = require("./651427.js");

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
  } = D, x = I(D, ["ref"]), M = (0, u.MY)(b, t), k = M === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD, j = M !== u.xr.DEFAULT, U = (0, f.rK)(), {
    enabled: G
  } = f.ZP.useExperiment({
    location: "premiumGiftSelect_GiftAnimationOptions"
  }, {
    autoTrackExposure: U
  }), B = null;
  j && (B = U && G ? m.kJ : m.QI);
  let Z = e => {
    null != C && C(null == e ? true : e)
  };
  return <div>{j && <div className={a()(E.giftMainAnimation, n)}>{null != O ? <_.Z giftStyle={O} defaultAnimationState={d.SR.ACTION} idleAnimationState={d.SR.LOOP} shouldAnimate={true} className={E.animation} /> : <s.$jN className={E.spinner} />}{k && <div className={E.soundEmojiContainer}>{<div className={E.sound}><c.Z sound={A} onSelect={Z} /></div>}{<div className={E.emoji}><p.Z setEmojiConfetti={N} emojiConfetti={null == S ? true : S} /></div>}</div>}</div>}{<div{...v(y({
      tabIndex: null != O || R ? true : 0,
      onFocus: e => {
        var t;
        e.target === e.currentTarget && (null == (t = w.current) || t.focus())
      },
      className: a()(E.giftBoxOptionContainer, o),
      "aria-label": g.intl.string(g.t.v54NrK),
      ref: L
    }, x), {
      children: null != B && B.map((e, t) => (0, r.jsx)(h.m, {
        isSelected: O === e,
        giftStyle: e,
        setSelectedGiftStyle: T,
        ref: 0 === t ? w : null,
        onFocus: () => P(true),
        onBlur: () => P(false)
      }, e))
    })} />}{<div className={E.__invalid_selectPlanDivider} />}</div>
}