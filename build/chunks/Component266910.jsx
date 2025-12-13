/** Chunk was on web.js **/
/** chunk id: 266910, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk220082 = require("./220082.js"),
  Chunk880563 = require("./880563.jsx"),
  Chunk168631 = require("./168631.js"),
  Chunk687158 = require("./687158.js"),
  Chunk213053 = require("./213053.js"),
  Chunk484459 = require("./484459.js"),
  Chunk775610 = require("./775610.js"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk607437 = require("./607437.js");

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

function S(e, t) {
  if (null == e) return {};
  var n, r, i = I(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let T = function(e) {
  var t, n, a, b, O, I, {
      style: T,
      src: C,
      backgroundSrc: A,
      userId: N,
      guildId: P,
      pulseSpeakingIndicator: R = false,
      speaking: w = false
    } = e,
    D = S(e, ["style", "src", "backgroundSrc", "userId", "guildId", "pulseSpeakingIndicator", "speaking"]);
  let x = null != A ? A : C,
    L = (0, c.ZP)(x, s.Z.unsafe_rawColors.PRIMARY_800.css),
    j = (0, f.ZP)(null != N ? N : h.lds, P),
    M = null != (b = (0, d.V3)(null == j || null == (t = j.themeColors) ? true : t[0])) ? b : h.BRd.DARK,
    {
      profileThemeStyle: k,
      profileThemeClassName: U
    } = (0, p.Z)({
      theme: M,
      themeType: g.l.VIDEO_TILE_BACKGROUND,
      primaryColor: null != (O = null == j || null == (n = j.themeColors) ? true : n[0]) ? O : null,
      secondaryColor: null != (I = null == j || null == (a = j.themeColors) ? true : a[1]) ? I : null
    }),
    {
      useProfileColors: G
    } = (0, m.$i)("VideoBackground-web");
  if (i.useEffect(() => {
      null != N && G && (0, _.Z)(N, true, {
        guildId: P,
        dispatchWait: true
      })
    }, [G, N, P]), null == C) return null;
  let Z = (0, r.jsx)(l.qEK, y({
      className: E.avatarWrapper,
      src: C
    }, D)),
    F = v(y({}, T), {
      backgroundColor: L
    });
  return (0, r.jsx)("div", {
    style: G ? y({}, T, k) : y({}, F),
    className: o()(E.background, {
      [U]: G
    }),
    children: R ? (0, r.jsx)(u.Z, {
      shouldAnimate: w,
      children: Z
    }) : Z
  })
}